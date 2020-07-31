import Link from 'next/link'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import { ServicesWrapper } from '../styles/ServicesWrapper'

const Services = () => {
  return (
    <>
      <Layout title="Raul Bautista Gomez | Sign in">
        <Nav />
        <ServicesWrapper>
          <h1>Ingresa para consultar tus proyectos</h1>
          <form>
            <input type='email' name='email' placeholder='Ingresa tu email' />
            <input type='password' name='password' placeholder='Ingresa tu contraseña' />
            <button type='submit'>Iniciar sesión</button>
            <p>¿No tienes una cuenta? <Link href='/signup'><a>Crear cuenta</a></Link> </p>
          </form>
        </ServicesWrapper>
      </Layout>
    </>
  )
}

export default Services
