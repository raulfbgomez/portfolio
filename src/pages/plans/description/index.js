import Link from 'next/link'
import Styled from 'styled-components'
import Layout from 'components/user/Layout'
import { API_URI } from 'utils/variables'

const Anchor = Styled.a`
  background-color: ${ props => props.theme.colors.blue };
  border-radius: 7px;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  width: 200px;
  &:hover {
    background-color: ${ props => props.theme.colors.primary };
    cursor: pointer;
  }
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
        <Text>Para ello es necesario que descargues el siguiente documento de word y que lo completes con la información de tu empresa, negocio o idea que quieres crear.</Text>
        <Anchor href={`${ API_URI }document/download`} download><i className='fa fa-cloud-download' aria-hidden='true'></i> Descargar</Anchor>
        <Text>Una vez terminado, favor de subirlo en el apartado del plan adquirido, dando clic en el boton: </Text>
        <Text><i className='fa fa-file-word-o' aria-hidden='true'></i> Subir archivo</Text>
        <Link href={`/home`}>
          <Anchor><i className='fa fa-home'></i> Ver mis planes</Anchor>
        </Link>
      </Wrapper>
    </Layout>
  )
}

export default Description
