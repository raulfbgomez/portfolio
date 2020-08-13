import Link from 'next/link'
import axios from 'axios'
import Layout from 'components/user/Layout'
import { API_URI } from 'utils/variables'
import {
  Anchor,
  NoPlans,
  WelcomeText
} from 'styles/user/User'

const Home = () => {
  let user = []
  let plans = []

  return (
    <Layout title='Bienvenido'>
      <WelcomeText>Hola { user && user.name } </WelcomeText>
      {plans.map(plan => (
        <Plan key={ plan.id } plan={ plan } />
      ))}
      {plans.length == 0 &&
        <NoPlans>
          <p>No tienes planes contratados</p>
          <Link href='/home/plans'>
            <Anchor><i className="fa fa-file-text" aria-hidden="true"></i> Contratar</Anchor>
          </Link>
        </NoPlans>
      }
    </Layout>
  )
}

export default Home
