import { useContext } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha';
import { UserContext } from 'context/UserContext'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import { 
  ButtonBlue,
  Container,
  Form,
  Message, 
  Title,
  Wrapper 
} from 'styles/Forms'
import { API_URI } from 'utils/variables'

const SignUp = () => {

  const { login }             = useContext(UserContext)
  const [message, setMessage] = React.useState('')
  const [inputs, setInputs]   = React.useState({
    'name': '',
    'email': '',
    'password': '',
    'g-recaptcha-response': ''
  })

  function onChange(value) {
    setInputs(prev => ({...prev, 'g-recaptcha-response': value}))
    console.log("Captcha value:", value);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault()
    setMessage('Validando...')
    axios.post(`${API_URI}auth/signup`, JSON.stringify(inputs))
    .then(async (response) => {
      if (response.data.message == 'success') {
        localStorage.setItem('rbg_userId', response.data.user_id)
        await login(response.data.user_id)
        Router.push(`/home`)
      } else {
        setMessage(response.data.message)
      }
    })
    .catch(err => {
      setMessage('Ocurrió un error, por favor intentalo nuevamente')
      console.log(err)
    })
  }

  return (
    <>
      <Layout title="Raul Bautista Gomez | Sign up">
        <Nav />
        <Wrapper>
          <Container>
            <Title>Crea una cuenta totalmente gratis</Title>
            <Form onSubmit={handleSubmit}>
              {message ?
                <Message>{ message }</Message>
              :''
              }
              <input type='text' name='name' onChange={handleChange} placeholder='Ingresa tu nombre completo' />
              <input type='email' name='email' onChange={handleChange} placeholder='Ingresa tu email' />
              <input type='password' name='password' onChange={handleChange} placeholder='Ingresa tu contraseña' />
              <ReCAPTCHA
                sitekey="6LdTvr8ZAAAAAN5-_W2GG9WSgjCi9Nr0TZBZwdQy"
                onChange={onChange}
              />
              <ButtonBlue type='submit'>Crear cuenta</ButtonBlue>
              <p>¿Ya tienes una cuenta? <Link href='/signin'><a>Iniciar sesión</a></Link> </p>
            </Form>
          </Container>
        </Wrapper>
      </Layout>
    </>
  )
}

export default SignUp
