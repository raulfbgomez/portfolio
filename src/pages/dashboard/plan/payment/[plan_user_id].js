import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import Layout from '../../../../components/dashboard/Layout'
import { API_URI } from '../../../../utils/variables'
import {
  Center,
  FormBlock,
  Message,
  Title,
  Wrapper,
} from '../../../../styles/dashboard/admin'

const Payment = ({ query }) => {
  
  const [user, setUser]       = React.useState([])
  const [plan, setPlan]       = React.useState([])
  const [message, setMessage] = React.useState()
  const [inputs, setInputs]   = React.useState({
    amount: '',
    date: '',
  })

  React.useEffect(() => {
    axios.get(`${API_URI}admin/payment/user/${query.plan_user_id}`)
      .then(res => {
        setUser(res.data.user)
        setPlan(res.data.plan)
      })
  }, [])

  function handleChange(e) {
    let { name, value } = e.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post(`${API_URI}admin/payment/plan/${query.plan_user_id}`, JSON.stringify(inputs))
      .then(res => {
        if (res.data.message == 'success') {
          Router.push(`/dashboard/plan/edit/${user.id}`)
        } else if (res.data.message == 'noData') {
          setMessage('Favor de completar todos los campos')
        } else {
          console.log(res)
        }
      })
  }

  return (
    <Layout title='Administración'>
      <Wrapper>
        <Title>Pagos de { user.name }</Title>
        <Center>
          <h3>{ plan.name } | { plan.price } </h3>
          {message ?
            <Message type='error'>{ message }</Message>
          : ''
          }
        </Center>
        <FormBlock onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='amount' 
            placeholder='Ingresa la cantidad pagada'
            onChange={handleChange} />
          <input 
            type='date' 
            name='date' 
            placeholder='Fecha' 
            onChange={handleChange} />
          <div className='buttons'>
            <Link href={`/dashboard/plan/edit/${user.id}`}>
              <a>Cancelar</a>
            </Link>
            <button type='submit'><i className='fa fa-save'></i> Guardar</button>
          </div>
        </FormBlock>
      </Wrapper>
    </Layout>
  )
}

Payment.getInitialProps = async (ctx) => {
  return {
    query: ctx.query
  }
}

export default Payment
