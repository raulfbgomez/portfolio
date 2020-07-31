import Link from 'next/link'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import { ServicesWrapper } from '../styles/ServicesWrapper'

const SignUp = () => {
  return (
    <>
      <Layout title="Raul Bautista Gomez | Sign up">
        <Nav />
        <ServicesWrapper>
          <h1>Crea una cuenta totalmente gratis</h1>
          <form>
            <input type='text' name='name' placeholder='Ingresa tu nombre' />
            <input type='email' name='email' placeholder='Ingresa tu email' />
            <input type='password' name='password' placeholder='Ingresa tu contraseña' />
            <button type='submit'>Iniciar sesión</button>
            <p>¿Ya tienes una cuenta? <Link href='/signin'><a>Iniciar sesión</a></Link> </p>
          </form>
        </ServicesWrapper>
      </Layout>
    </>
  )
}

export default SignUp
