import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { UserContext } from 'context/UserContext'
import Layout from 'components/user/Layout'
import Plan from 'components/user/Plan'
import {
  Anchor,
  NoPlans,
  Text,
  WelcomeText
} from 'styles/user/User'

const Home = () => {

  const { user, getUser, plans, getPlans } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      getUser()
    }
    getPlans(user)
  }, [])
  
  return (
    <Layout title='Bienvenido'>
      <WelcomeText>Hola, { user && user.name } </WelcomeText>
      <Text>Estos son tus planes contratados</Text>
      {plans.map(plan => (
        <Plan key={ plan.id } plan={ plan } />
      ))}
      {plans.length == 0 &&
        <NoPlans>
          <p>No tienes planes contratados</p>
          <Link href='/plans'>
            <Anchor><i className="fa fa-eye" aria-hidden="true"></i> Ver planes</Anchor>
          </Link>
        </NoPlans>
      }
    </Layout>
  )
}

export default Home
