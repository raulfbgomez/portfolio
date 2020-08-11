import Link from 'next/link'
import axios from 'axios'
import Layout from '../../../components/dashboard/Layout'
import { API_URI } from '../../../utils/variables'
import {
  Anchor,
  Center,
  Message,
  Table,
  Title,
  Wrapper
} from '../../../styles/dashboard/admin'
import { Router } from 'next/router'

const Index = () => {

  const [plans, setPlans] = React.useState([])
  const [message, setMessage] = React.useState()

  function getInitialData() {
    axios.get(`${API_URI}admin/plan`)
      .then(res => setPlans(res.data))
      .catch(err => console.log(err))
  }

  React.useEffect(() => {
    getInitialData()
  }, [])

  function handleDelete(e, plan) {
    e.preventDefault()
    let conf = confirm(`Seguro que deseas eliminar el plan ${ plan.name }`)
    if (conf) {
      axios.post(`${API_URI}admin/plan/${plan.id}/delete`)
      .then(res => {
        if (res.data.message == 'success') {
          getInitialData()
          setMessage('Plan eliminado correctamente')
        }
      })
      .catch(err => console.log(err))
    }
  }
  return (
    <Layout title='Administración Planes'>
      <Wrapper>
        <Title>Planes</Title>
        <Center>
          <Link href='/dashboard/admin/newPlan'>
            <Anchor>
              <i className='fa fa-plus'></i>
              Nuevo plan
            </Anchor>
          </Link>
          {message ?
            <Message type='success'>{ message }</Message>
          : ''
          }
        </Center>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Frecuencia</th>
              <th>Descripcion</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{ plan.id }</td>
                <td>{ plan.name }</td>
                <td>{ plan.price }</td>
                <td>{ plan.frequency_id }</td>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: plan.description }}></div>
                </td>
                <td>
                  <Link href={`/dashboard/plan/edit/${ plan.id }`}>
                    <Anchor><i className='fa fa-pencil'></i> Editar</Anchor>
                  </Link>
                </td>
                <td>
                  <Anchor onClick={ (evt) => handleDelete(evt, plan) }><i className='fa fa-trash'></i> Eliminar</Anchor>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Wrapper>
    </Layout>
  )
}

export default Index
