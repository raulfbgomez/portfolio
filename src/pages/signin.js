import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import { Message, ServicesWrapper } from '../styles/ServicesWrapper'

const Services = () => {

  const [inputs, setInputs] = React.useState({
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
    console.log(inputs)
    axios.post('http://localhost:8000/auth/signin', JSON.stringify(inputs))
    .then((response) => {
      if (response.data == 'success') {
        Router.push('/dashboard')
      }
      setMessage(response.data)
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
        <ServicesWrapper>
          <h1>Ingresa para consultar tus proyectos</h1>
          <form onSubmit={handleSubmit}>
            {message ?
              <Message>{ message }</Message>
            :''
            }
            <input type='email' name='email' onChange={handleChange} placeholder='Ingresa tu email' />
            <input type='password' name='password' onChange={handleChange} placeholder='Ingresa tu contraseña' />
            <button type='submit'>Iniciar sesión</button>
            <p>¿No tienes una cuenta? <Link href='/signup'><a>Crear cuenta</a></Link> </p>
          </form>
        </ServicesWrapper>
      </Layout>
    </>
  )
}

export default Services
