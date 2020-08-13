import Link from 'next/link'
import axios from 'axios'
import Layout from 'components/user/Layout'
import { API_URI } from 'utils/variables'
import {
  Anchor,
  NoPlans,
  WelcomeText
} from 'styles/user/User'

const Plan = () => {
  return (
    <Layout title='Bienvenido'>
      <WelcomeText> Planes contratados </WelcomeText>
    </Layout>
  )
}

export default Plan
