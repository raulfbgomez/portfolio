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

const Recovery = () => {

  const [email, setEmail]     = React.useState('')
  const [message, setMessage] = React.useState()
  const [isSend, setIsSend]   = React.useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Espera un momento se esta enviando el correo...')
    Axios.post(`${ API_URI }auth/password-recovery`, JSON.stringify({
      email: email
    })).then(res => {
      if (res.data.message == 'Success') {
        setMessage('En breve recibiras un correo con la liga para crear una nueva contraseña. Verifica la bandeja de spam si es necesario.')
        setIsSend(true)
      } else {
        setMessage('Ocurrió un error, por favor, intentalo más tarde')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <Layout title='Recuperar contraseña'>
      <Nav />
      <Wrapper>
        <Container>
          <Title>Recuperar contraseña</Title>
          <Center>
            <p>Se enviara un correo con un enlace para recuperar su contraseña</p>
          </Center>
          <Form onSubmit={ handleSubmit }>
            { message ?
                <Message>{ message }</Message>
              : ''
            }
            <input type='email' name='email' onChange={ handleChange } placeholder='Ingresa tu correo registrado' />
            {!isSend &&
              <ButtonBlue type='submit'><i className='fa fa-envelope-o'></i> Enviar correo</ButtonBlue>
            }
          </Form>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default Recovery
