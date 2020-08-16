import Link from 'next/link'
import axios from 'axios'
import Styled from 'styled-components'
import Layout from 'components/user/Layout'
import bg from 'public/plans.jpg'
import { API_URI } from 'utils/variables'

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
  ul li, p {
    font-size: 1.2em;
  }
`

const PlansContent = Styled.div`
  /* background-color: ${ props => props.theme.colors.background }; */
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
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
  width: 100%;
`

const PlansItem = Styled.div`
  background-color: #fff;
  box-shadow: 0px 8px 28px -15px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  margin: 24px auto;
  padding: 15px 15px;
  width: 80%;
  ul li {
    line-height: 1.2em;
    padding-top: 7px;
  }
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
  const [plans, setPlans] = React.useState([])
  React.useEffect(() => {
    axios.get(`${ API_URI }plan`)
      .then(res => setPlans(res.data))
      .catch(err => console.log(err))
  }, [])

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
          <p>Planes desde Desde $6,500 MX</p>
        </BgBlack>
      </PlansHeader>
      <PlansContent>
        {plans.map(plan => (
          <PlansItem>
            <Subtitle>{ plan.name }</Subtitle>
            <PlanPrice>{ plan.price }</PlanPrice>
            <div dangerouslySetInnerHTML={{ __html: plan.description }}></div>
            <Link href={`plans/add/${ plan.id }`}>
              <Anchor><i className='fa fa-handshake-o' aria-hidden='true'></i> Lo quiero</Anchor>
            </Link>
          </PlansItem>
        ))}
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
