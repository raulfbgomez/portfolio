import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import { Message, ServicesWrapper } from '../styles/ServicesWrapper'
import { API_URI } from '../utils/variables'

const SignUp = () => {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = React.useState('')

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault()
    setMessage('Validando...')
    axios.post(`${API_URI}auth/signup`, JSON.stringify(inputs))
    .then((response) => {
      if (response.data.message == 'success') {
        Router.push(`/dashboard/${response.data.user_id}`)
      }
      setMessage(response.data.message)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Layout title="Raul Bautista Gomez | Sign up">
        <Nav />
        <ServicesWrapper>
          <h1>Crea una cuenta totalmente gratis</h1>
          <form onSubmit={handleSubmit}>
            {message ?
              <Message>{ message }</Message>
            :''
            }
            <input type='text' name='name' onChange={handleChange} placeholder='Ingresa tu nombre completo' />
            <input type='email' name='email' onChange={handleChange} placeholder='Ingresa tu email' />
            <input type='password' name='password' onChange={handleChange} placeholder='Ingresa tu contraseña' />
            <button type='submit'>Iniciar sesión</button>
            <p>¿Ya tienes una cuenta? <Link href='/signin'><a>Iniciar sesión</a></Link> </p>
          </form>
        </ServicesWrapper>
      </Layout>
    </>
  )
}

export default SignUp
