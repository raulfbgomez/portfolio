import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import { 
  ButtonBlue,
  Center,
  Container, 
  Form,
  Message, 
  Title,
  Wrapper 
} from 'styles/Forms'
import Axios from 'axios'
import { API_URI } from 'utils/variables'

const NewPassword = () => {

  const router = useRouter()
  const { token } = router.query

  const [message, setMessage]  = React.useState()
  const [isSend, setIsSend]     = React.useState(false)
  const [password, setPassword] = React.useState({
    uno: '',
    dos: ''
  })
  const [user, setUser] = React.useState({
    id: 0,
    name: ''
  })

  React.useEffect(() => {
    if (token) {
      Axios.post(`${ API_URI }auth/verify-token`, JSON.stringify({ token: token }))
        .then(res => {
          if (res.data.message != 'user not found') {
            setUser(res.data)
          } else {
            setIsSend(true)
            setMessage('El enlace no es valido.')
          }
        })
        .catch(err => console.log(err))
    }
  }, [token])

  const handleChange = (e) => {
    const {name, value } = e.target
    setPassword(prev => ({
      ...prev,
      [name]: value
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Validando...')
    if (password.uno != password.dos) {
      setMessage('Las contraseñas no coinciden')
    } else {
      setMessage('Actualizando contraseña')
      Axios.post(`${ API_URI }auth/new-password`, JSON.stringify({...password, user_id: user.id}))
      .then(res => {
        if (res.data.message == 'success') {
          setMessage('La contraseña se cambió correctamente. Ahora puedes ingresar con tu nueva contraseña')
        } else {
          setMessage('Ocurrió un error. Intenta mas tarde')
        }
        setIsSend(true)
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <Layout title='Recuperar contraseña'>
      <Nav />
      <Wrapper>
        <Container>
          <Title>Hola { user.name }, genera tu nueva contraseña</Title>
          <Form onSubmit={ handleSubmit }>
            { message ?
                <Message>{ message }</Message>
              : ''
            }
            <input type='password' name='uno' onChange={ handleChange } placeholder='Ingresa tu nueva contraseña' />
            <input type='password' name='dos' onChange={ handleChange } placeholder='Repite tu nueva contraseña' />
            {!isSend &&
              <ButtonBlue type='submit'><i className='fa fa-check'></i> Guardar</ButtonBlue>
            }
            <Center>
              <p>¿Ya tienes una cuenta? <Link href='/signin'><a>Iniciar sesión</a></Link></p>
            </Center>
          </Form>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default NewPassword
