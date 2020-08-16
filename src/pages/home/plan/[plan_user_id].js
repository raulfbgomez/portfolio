import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from 'components/user/Layout'
import { API_URI } from 'utils/variables'
import PlanDetail from 'components/user/PlanDetail'

const Plan = ({ query }) => {

  const [plan, setPlan] = useState({})

  useEffect(() => {
    let userId = localStorage.getItem('rbg_userId')
    if (userId) {
      axios.get(`${ API_URI }user/${ userId }/plan/${ query.plan_user_id }`)
        .then(res => setPlan(res.data))
        .catch(err => console.log(err))
    }
  }, [])
  return (
    <Layout title='Bienvenido'>
      <PlanDetail plan={plan} />
    </Layout>
  )
}

Plan.getInitialProps = async (ctx) => {
  return { query: ctx.query }
}

export default Plan
