import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import Layout from '../../../../../components/dashboard/Layout'
import { API_URI } from '../../../../../utils/variables'
import {
  FormBlock,
  Wrapper,
  Title
} from '../../../../../styles/dashboard/admin'

const Add = (data) => {
  
  const [plans, setPlans] = React.useState([])

  function handleClick(e) {
    let val = e.target.value
    if (e.target.checked) {
      setPlans(prev => [...prev, val])
    } else {
      setPlans(prev => plans.filter(item => item !== val))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post(`${API_URI}admin/plan/user`, JSON.stringify({
      plans: plans,
      user_id: data.res.user.id
    }))
    .then(res => {
      if (res.data.message == 'success') {
        Router.push(`/dashboard/user/plan/edit/${ data.res.user.id }`)
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <Layout title='Administración'>
      <Wrapper>
        <Title>Agregar un nuevo plan para { data.res && data.res.user.name }</Title>
        <FormBlock onSubmit={ handleSubmit }>
          { data.res && data.res.plans.map(plan => (
            <label key={plan.id}>
              <span>{ plan.name } <br /> { plan.price }</span>
              <span dangerouslySetInnerHTML={{ __html: plan.description }}></span>
              <input type='checkbox' name={`name${plan.id}`} value={plan.id} onChange={handleClick} />
            </label>
          )) }
          <div className='buttons'>
            <Link href='/dashboard/admin/1'>
              <a>Cancelar</a>
            </Link>
            <button type='submit'>Agregar</button>
          </div>
        </FormBlock>
      </Wrapper>
    </Layout>
  )
}

Add.getInitialProps = async (ctx) => {
  const res = await axios.get(`${ API_URI }admin/plan/user/${ ctx.query.user_id }`)
    .catch(err => console.log(err))
  if (res) {
    return { res: res.data }
  }
  return {res: {}}
  
}

export default Add
