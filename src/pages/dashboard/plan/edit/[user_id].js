import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import axios from 'axios'
import Layout from '../../../../components/dashboard/Layout'
import { API_URI } from '../../../../utils/variables'
import {
  Anchor,
  Center,
  Clients,
  ClientItem,
  FormBlock,
  Message,
  Wrapper,
  Title
} from '../../../../styles/dashboard/admin'

const Edit = ({ query }) => {

  const [selected, setSelected]   = React.useState()
  const [plans, setPlans]         = React.useState([])
  const [user, setUser]           = React.useState([])
  const [message, setMessage]     = React.useState({
    data: '',
    type: ''
  })

  React.useEffect(() => {
    axios.get(`${API_URI}admin/plan/${query.user_id}/edit`)
      .then(res => {
        setUser(res.data)
        setPlans(res.data.plans)
      })
  }, [])

  React.useEffect(() => {
    if (selected) {
      let con = confirm(`Deseas eliminar el plan ${selected.name}`)
      if (con) {
        axios.post(`${API_URI}admin/plan/${user.id}/remove`, JSON.stringify(selected))
          .then(response => {
            if (response.data.message == 'success') {
              Router.push(`/dashboard/plan/edit/${user.id}`)
            }
          })
          .catch(err => console.log(err))
      }
    }
  }, [selected])

  async function handlePrice(e, index) {
    const { name, value } = e.target
    let newPlans          = [...plans]
    newPlans[index].pivot.agreedPrice = value
    setPlans(newPlans)
    
  }

  function handleDelivery(e, index) {
    const { name, value } = e.target
    let newPlans          = [...plans]
    newPlans[index].pivot.delivery = value
    setPlans(newPlans)
  }

  function handleSubmit(evt, index) {
    evt.preventDefault()
    let dataSend = {
      plan_id: plans[index].id,
      agreedPrice: plans[index].pivot.agreedPrice,
      delivery: plans[index].pivot.delivery
    }
    axios.post(`${API_URI}admin/plan/${user.id}/update`, JSON.stringify(plans))
      .then(res => {
        if (res.data.message == 'error') {
          setMessage({data: 'Ops! Ocurrio un error', type: 'error'})
        } else {
          setMessage({data: 'Cambios guardados correctamente', type: 'success'})
        }
      })
      .catch(err => console.log(err))
  }
  
  return (
    <Layout title='Administración'>
      <Wrapper>
        <Center>
          {message.data ?
            <>
              <Message type={message.type}>{ message.data }</Message>
              <Link href='/dashboard/admin/1'>
                <Anchor>Aceptar y regresar</Anchor>
              </Link>
            </>
          : ''}
          <Title>Editar plan de { user.name } ({ user.email })</Title>
          <Link href={`/dashboard/plan/add/${user.id}`}>
            <Anchor><i className='fa fa-plus'></i> Agregar plan</Anchor>
          </Link>
        </Center>

        {plans.length > 0 ?
          <Clients>
            {plans.map((plan, index) => (
              <ClientItem key={plan.id}>
                <h2>{ plan.name }</h2>
                <p>{ plan.price }</p>
                <div dangerouslySetInnerHTML={{ __html: plan.description }}></div>
                <FormBlock onSubmit={(e) => handleSubmit(e, index)}>
                  <label>Precio acordado</label>
                  <input 
                    type='text' 
                    name='agreedPrice' 
                    value={plan.pivot.agreedPrice} 
                    onChange={(evt) => handlePrice(evt, index)} />
                  <label>Fecha de entrega</label>
                  <input 
                    type='date' 
                    name='delivery' 
                    value={plan.pivot.delivery} 
                    onChange={(evt) => handleDelivery(evt, index)} />
                  <div className='buttons'>
                    <button type='button' onClick={() => setSelected({
                      id: plan.id,
                      name: plan.name
                    })}><i className='fa fa-remove'></i> Eliminar</button>
                    <button type='submit'><i className='fa fa-save'></i> Guardar</button>
                  </div>
                </FormBlock>
              </ClientItem>
            ))}
          </Clients>
        :
          <Center>
            <h1>No hay planes asignados</h1>
            <Link href={`/dashboard/plan/add/${user.id}`}><Anchor>Agregar</Anchor></Link> 
          </Center>
        }

      </Wrapper>
    </Layout>
  )
}

Edit.getInitialProps = async (ctx) => {
  return {
    query: ctx.query
  };
}

export default Edit
