import Styled from 'styled-components'
import Layout from 'components/user/Layout'
import bg from 'public/plans.jpg'

const Anchor =Styled.a`
  border: 1px solid ${ props => props.theme.colors.secondary };
  border-radius: 7px;
  color: ${ props => props.theme.colors.secondary };
  display: block;
  font-size: 1.1em;
  margin: 8px auto;
  outline: none;
  padding: 15px 10px;
  text-align: center;
  text-decoration: none;
  transition: 0.3s;
  width: 60%;
  &:hover {
    background-color: ${ props => props.theme.colors.secondary };
    color: #fff;
    cursor: pointer;
  }
`

const BgBlack = Styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const PlansContent = Styled.div`
  background-color: ${ props => props.theme.colors.background };
  padding: 10px 0;
`


const PlansHeader = Styled.div`
  background: url(${ bg }) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color : #fff;
  height: 90vh;
  width: 100vw;
`

const PlansItem = Styled.div`
  background-color: #fff;
  box-shadow: 0px 8px 28px -15px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  margin: 24px auto;
  padding: 10px 15px;
  width: 80%;
`

const PlanPrice = Styled.p`
  color: ${ props => props.theme.colors.primary };
  font-weight: 600;
  font-size: 1.3em;
  margin: 9px 0;
  text-align: center;
`

const Subtitle = Styled.h2`
  margin: 0;
  text-align: center;
`

const Title = Styled.h1`
  text-align: center;
`

const Plans = () => {
  return (
    <Layout title='Planes'>
      <PlansHeader>
        <BgBlack>
          <Title>Todos los planes incluyen</Title>
          <ul>
            <li>Dominio</li>
            <li>Hosting</li>
            <li>Certificado SSL Wildcard</li>
            <li>Soporte</li>
          </ul>
          <p>Planes desde Desde $5,900 MX</p>
        </BgBlack>
      </PlansHeader>
      <PlansContent>
        <PlansItem>
          <Subtitle>Plan Web</Subtitle>
          <p>Tu página web o proyecto desde cero.</p>
          <PlanPrice>$6,500 MX</PlanPrice>
          <ul>
            <li>Diseño de hasta cinco apartados</li>
            <li>Página web que se adapta a dispositivos mobiles</li>
            <li>Una cuenta de correo gratis (solo reenvio de emails)</li>
          </ul>
          <Anchor><i className='fa fa-handshake-o' aria-hidden='true'></i> Lo quiero</Anchor>
        </PlansItem>
        <PlansItem>
          <Subtitle>Plan Avanzado</Subtitle>
          <p>Tu página web o proyecto con administración.</p>
          <PlanPrice>$9,900 MX</PlanPrice>
          <ul>
            <li>Diseño de hasta diez apartados</li>
            <li>Página web que se adapta a dispositivos mobiles</li>
            <li>Diseño de base de datos (hasta 1 GB)</li>
            <li>Login y registro seguro</li>
            <li>Ideal para las empresas que buscan más que solo una página, ya que se crea un sistema para resolver sus necesidades</li>
            <li>Cinco cuentas de correo gratis (con 2 GB de almacenamiento)</li>
          </ul>
          <Anchor><i className='fa fa-handshake-o' aria-hidden='true'></i> Lo quiero</Anchor>
        </PlansItem>
        <PlansItem>
          <Subtitle>Email Basic</Subtitle>
          <p>Tu cuenta de correo personalizada</p>
          <PlanPrice>$1,060 MX despues,</PlanPrice>
          <PlanPrice>despues $70 al mes</PlanPrice>
          <ul>
            <li>Hasta 15 cuentas de correo electrónico</li>
            <li>Buzón de 2 GB para almacenar tus correos</li>
            <li>Almacena hasta 10, 000 emails aproximadamente</li>
            <li>Protección antispam</li>
          </ul>
          <Anchor><i className='fa fa-handshake-o' aria-hidden='true'></i> Lo quiero</Anchor>
        </PlansItem>
        <PlansItem>
          <Subtitle>Email Bussiness</Subtitle>
          <p>Tu cuenta de correo personalizada para empresas</p>
          <PlanPrice>$1,060 MX despues,</PlanPrice>
          <PlanPrice>1 usuario / $100 al mes</PlanPrice>
          <PlanPrice>5 usuarios / $400 al mes</PlanPrice>
          <PlanPrice>10 usuarios / $650 al mes</PlanPrice>
          <ul>
            <li>Cada cuenta de correo electrónico cuenta con:</li>
            <li>Buzón de 50 GB para almecenar tus correos</li>
            <li>Almacena hasta 500,000 emails aproximadamente</li>
            <li>Protección antivirus y antispam</li>
          </ul>
          <Anchor><i className='fa fa-handshake-o' aria-hidden='true'></i> Lo quiero</Anchor>
        </PlansItem>
        <PlansItem>
          <Subtitle>Tu traje a la medida</Subtitle>
          <p>Necesitas algo mas complejo</p>
          <Anchor href='mailto:saluda@raulfbgomez.dev'><i className='fa fa-envelope-o' aria-hidden='true'></i> Contáctame</Anchor>
        </PlansItem>
      </PlansContent>
    </Layout>
  )
}

export default Plans
