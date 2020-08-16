import Link from 'next/link'
import Styled from 'styled-components'
import Layout from 'components/user/Layout'
import { API_URI } from 'utils/variables'

const Anchor = Styled.a`
  background-color: ${ props => props.theme.colors.blue };
  border-radius: 7px;
  color: #fff;
  display: inline-block;
  font-size: 1em;
  text-decoration: none;
  text-align: center;
  margin: 5px 10px;
  padding: 10px 5px;
  width: 250px;
  &:hover {
    background-color: ${ props => props.theme.colors.primary };
    cursor: pointer;
  }
  i {
    margin-right: 5px;
  }
`

const Center = Styled.div`
  text-align: center;
`

const Text = Styled.p`
  color: ${ props => props.theme.colors.text };
  font-size: 1em;
  line-height: 1.3em;
  padding: 5px 15px;
  text-align: center;
`

const Title = Styled.h1`
  color: ${ props => props.theme.colors.primary };
  text-align: center;
`

const Wrapper = Styled.div`
  padding: 10px;
`

const Description = () => {
  return (
    <Layout title='Describe tu idea'>
      <Wrapper>
        <Title>Cuentame más sobre tu idea</Title>
        <Text>Para ello es necesario que descargues el siguiente documento de word (segun el plan seleccionado) y que lo completes con la información de tu empresa, negocio o idea que quieres crear.</Text>
        <Center>
          <Anchor href={`${ API_URI }document/plan/download`} download><i className='fa fa-file-text-o' aria-hidden='true'></i> Plan Web o Avanzado</Anchor>
          <Anchor href={`${ API_URI }document/email/download`} download><i className='fa fa-envelope-o' aria-hidden='true'></i> Cuentas de email</Anchor>
        </Center>
        <Text>Una vez terminado, favor de subirlo en el apartado del plan adquirido, dando clic en el boton: </Text>
        <Text><i className='fa fa-file-word-o' aria-hidden='true'></i> Subir archivo</Text>
        <Text>Recuerda que puedes agregar varios planes a tu cuenta</Text>
        <Center>
          <Link href={`/home`}>
            <Anchor><i className='fa fa-home'></i> Ver mis planes</Anchor>
          </Link>
        </Center>
      </Wrapper>
    </Layout>
  )
}

export default Description
