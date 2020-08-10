import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import axios from 'axios'
import Layout from '../../../../components/dashboard/Layout'
import { API_URI } from '../../../../utils/variables'
import {
  Anchor,
  Button,
  Center,
  Clients,
  ClientItem,
  FormBlockSlim,
  List,
  Message,
  Wrapper,
  Title
} from '../../../../styles/dashboard/admin'

const Edit = ({ query }) => {

  const [selected, setSelected] = React.useState()
  const [plans, setPlans]       = React.useState([])
  const [user, setUser]         = React.useState([])
  const [message, setMessage]   = React.useState({
    data: '',
    type: ''
  })
  const [showForm, setShowForm] = React.useState(false)

  function getInitialData() {
    axios.get(`${API_URI}admin/plan/${query.user_id}/edit`)
    .then(res => {
      setUser(res.data.user)
      setPlans(res.data.plans)
    })
  } 

  React.useEffect(() => {
   getInitialData()
  }, [])
  // EVITAR REALOAD y si vuelvo a pedir info al server y no recargo ?
  React.useEffect(() => { 
    if (selected) {
      let con = confirm(`Deseas eliminar el plan ${selected.name}`)
      if (con) {
        axios.post(`${API_URI}admin/plan/${user.id}/remove`, JSON.stringify(selected))
          .then(response => {
            if (response.data.message == 'success') {
              // Router.push(`/dashboard/plan/edit/${user.id}`)
              getInitialData()
            }
          })
          .catch(err => console.log(err))
      }
    }
  }, [selected])

  async function handlePrice(e, index) {
    const { value } = e.target
    updateState(index, 'agreedPrice', value)
  }

  function handleDelivery(e, index) {
    const { value } = e.target
   updateState(index, 'delivery', value)
  }

  function handlePaymentDate(e, index) {
    const { value } = e.target
    updateState(index, 'paymentDate', value)
  }

  function handleUrlTest(e, index) {
    const { value } = e.target
    updateState(index, 'url_test', value)
  }

  function handleUrlProd(e, index) {
    const { value } = e.target
    updateState(index, 'url_prod', value)
  }

  function updateState(index, element, value) {
    let newPlans = [...plans]
    if (element == 'agreedPrice') {
      newPlans[index].pivot.agreedPrice = value
    } else if (element == 'delivery') {
      newPlans[index].pivot.delivery = value
    } else if(element == 'paymentDate') {
      newPlans[index].pivot.paymentDate = value
    } else if (element == 'url_test') {
      newPlans[index].pivot.url_test = value
    } else if (element == 'url_prod') {
      newPlans[index].pivot.url_prod = value
    }
    setPlans(newPlans)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    setShowForm(false)
    axios.post(`${API_URI}admin/plan/${user.id}/update`, JSON.stringify(plans))
      .then(res => {
        if (res.data.message == 'success') {
          setMessage({data: 'Cambios guardados correctamente', type: 'success'})
        } else {
          setMessage({data: 'Ops! Ocurrio un error', type: 'error'})
        }
      })
      .catch(err => console.log(err))
  }

  function handleDeletePayment(evt, pago) {
    let conf = confirm(`Seguro que deseas eliminar el pago por ${pago.amount}`)
    if (conf) {
      setShowForm(false)
      axios.post(`${API_URI}admin/payment/delete/${pago.id}`)
        .then(res => {
          if (res.data.message == 'success') {
            setMessage({data: 'Pago eliminado correctamente', type: 'success'})
            getInitialData()
          } else  {
            setMessage({data: 'Ops! Ocurrio un error', type: 'error'})
          }
        })
        .catch(err => console.log(err))
    }
  }
  
  return (
    <Layout title='Administración'>
      <Wrapper>
        <Center>
          <Title>Editar plan de { user.name } ({ user.email })</Title>
          <Link href={`/dashboard/plan/add/${user.id}`}>
            <Anchor><i className='fa fa-plus'></i> Agregar plan</Anchor>
          </Link>
          <Button 
            onClick={() => setShowForm(prev => !prev)}>
              <i className='fa fa-eye'></i> 
              Editar información
          </Button>
          <br />
          {message.data ?
            <>
              <Message type={message.type}>{ message.data }</Message>
              <Link href='/dashboard/admin/1'>
                <Anchor>Aceptar y regresar</Anchor>
              </Link>
            </>
          : ''}
        </Center>


        {plans.length > 0 ?
          <Clients>
            {plans.map((plan, index) => (
              <ClientItem key={plan.id}>
                <h2>{ plan.name }</h2>
                <p>{ plan.price } / { plan.frecuencia }</p>
                <div dangerouslySetInnerHTML={{ __html: plan.description }}></div>

                <FormBlockSlim onSubmit={(e) => handleSubmit(e)}>
                  {showForm ?
                  <>
                    <label>Fecha de entrega del proyecto</label>
                    <input 
                      type='date' 
                      name='delivery' 
                      value={ plan.pivot.delivery } 
                      onChange={ (evt) => handleDelivery(evt, index) } />
                    <label>Fecha de pago</label>
                    <input 
                      type='text' 
                      name='paymentDate' 
                      value={ plan.pivot.paymentDate } 
                      onChange={ (evt) => handlePaymentDate(evt, index) }
                      placeholder='20 de cada mes, diciembre de cada año' />
                    <label>URL para test</label>
                    <input 
                      type='text'
                      name='url_test'
                      value={ plan.pivot.url_test }
                      onChange={ (evt) => handleUrlTest(evt, index) } />
                    <label>URL del proyecto terminado</label>
                    <input 
                      type='text'
                      name='url_prod'
                      value={ plan.pivot.url_prod } 
                      onChange={ (evt) => handleUrlProd(evt, index) } />
                    <label>Precio acordado</label>
                    <input 
                      type='text' 
                      name='agreedPrice' 
                      value={ plan.pivot.agreedPrice } 
                      onChange={ (evt) => handlePrice(evt, index) } />
                  </>
                  : 
                    <p> ... </p>
                  }
                    
                  <List>
                    <p>Pagos</p>
                    {plan.payments.length == 0 ?
                      <p>No hay pagos realizados</p>
                    :
                    <>
                      <ul>
                        {plan.payments.map(pago => (
                          <li>
                            <span>{ pago.date } </span>
                            <span>{ pago.amount } </span>
                            <button 
                              type='button' 
                              onClick={(evt) => handleDeletePayment(evt, pago)}>
                                <i className='fa fa-remove'></i>
                            </button>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        <li>
                          <span>TOTAL DE PAGOS: </span>
                          <span>{ plan.totalPayments }</span>
                        </li>
                        {plan.frequency_id == 1 ?
                          <>
                            <li>
                              <span>TOTAL A PAGAR: </span>
                              <span>{ plan.totalPay }</span>
                            </li>
                            <li>
                              <span>DEBE: </span>
                              <span>{ plan.remaining }</span>
                            </li>
                          </>
                          : ''
                        }
                      </ul>
                    </>
                    }
                    <Link href={`/dashboard/plan/payment/${ plan.pivot.id }`}>
                        <a><i className='fa fa-plus'></i> Agregar pago</a>
                    </Link>
                  </List>
                    
                  <div className='buttons'>
                    <button type='button' 
                      onClick={() => setSelected({
                        id: plan.pivot.id,
                        plan_id: plan.id,
                        name: plan.name })}>
                      <i className='fa fa-remove'></i> 
                      Eliminar
                    </button>
                    <button type='submit'>
                      <i className='fa fa-save'></i> 
                      Guardar
                    </button>
                  </div>
                </FormBlockSlim>
                
              </ClientItem>
            ))}
          </Clients>
        :
          <Center>
            <h1>No hay planes asignados</h1>
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
