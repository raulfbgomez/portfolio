import { useContext } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import { UserContext } from 'context/UserContext'
import { API_URI } from 'utils/variables'
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

const Services = () => {

  const { login }             = useContext(UserContext)
  const [message, setMessage] = React.useState('')
  const [inputs, setInputs]   = React.useState({
    email: '',
    password: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault()
    setMessage('Validando información...')
    axios.post(`${API_URI}auth/signin`, JSON.stringify(inputs))
    .then(async (response) => {
      if (response.data.message == 'success') {
        localStorage.setItem('rbg_userId', response.data.user_id)
        await login(response.data.user_id)
        if (response.data.is_admin == 1) {
          Router.push(`/dashboard/admin/${response.data.user_id}`)
        } else {
          Router.push(`/home`)
        }
      }
      setMessage(response.data.message)
    })
    .catch(err => {
      console.log(err)
      setMessage('Ocurrió un error, por favor intentalo nuevamente')
    })
  }

  return (
    <>
      <Layout title="Raul Bautista Gomez | Sign in">
        <Nav />
        <Wrapper>
          <Container>
            <Title>Bienvenido de nuevo</Title>
            <Form onSubmit={handleSubmit}>
              {message ?
                <Message>{ message }</Message>
              : ''
              }
              <input type='email' name='email' onChange={handleChange} placeholder='Ingresa tu email' />
              <input type='password' name='password' onChange={handleChange} placeholder='Ingresa tu contraseña' />
              <ButtonBlue type='submit'>Iniciar sesión</ButtonBlue>
              <p>¿No tienes una cuenta? <Link href='/signup'><a>Crear cuenta</a></Link> </p>
            </Form>
          </Container>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Services
