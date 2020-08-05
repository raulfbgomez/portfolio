import Link from 'next/link'
import axios from 'axios'
import Layout from '../../../components/dashboard/Layout'
import { API_URI } from '../../../utils/variables'
import {
  Anchor,
  Button,
  Center,
  Clients,
  ClientItem,
  FormInline,
  Wrapper,
  Title
} from '../../../styles/dashboard/admin'

const Dashboard = ({ user }) => {
  // const router = useRouter()
  // const { user_id } = router.query
  const [users, setUsers] = React.useState([])
  const [offset, setOffset] = React.useState(0)

  function getData() {
    axios.get(`${API_URI}admin/clients/${offset}`)
    .then(response => {
      response.data.map(item => {
        setUsers(prev => ([...prev, item ]))
      })
    }).then(() => setOffset(prev => prev + 10))
    .catch(err => console.log(err))
  }

  React.useEffect(() => {
   getData()
  }, [])

  function handleClick(e) {
    getData()
  }

  return (
    <>
      <Layout title='Administración'>
        <Wrapper>
          <Title>Bienvenido { user.name }</Title>
          <FormInline>
            <select>
              <option value='email'>Email</option>
              <option value='name'>Nombre</option>
            </select>
            <input name='search' placeholder='Buscar cliente' />
            <Link href='/dashboard/admin/newPlan'><Anchor><i className="fa fa-plus"></i>Nuevo plan</Anchor></Link>
          </FormInline>
          <Clients>
            {users.map(item =>(
              <ClientItem key={item.id}>
                <h2>{ item.name }</h2>
                <div>
                  <h3>Planes contratados</h3>
                    {item.plans.length > 0 ?
                      <>
                        <ul>
                          {item.plans.map(plan => (
                            <li>{ plan.name }</li>
                          ))}
                        </ul>
                        <Link href={`/dashboard/plan/edit/${item.id}`}>
                        <Anchor><i className='fa fa-eye'></i> Detalles</Anchor>
                        </Link>
                        <Link href={`/dashboard/plan/add/${item.id}`}>
                          <Anchor><i className='fa fa-plus'></i> Agregar plan</Anchor>
                        </Link>
                      </>
                    : 
                      <Link href={`/dashboard/plan/add/${item.id}`}>
                        <Anchor><i className='fa fa-plus'></i> Nuevo plan</Anchor>
                      </Link>
                    }
                </div>
              </ClientItem>
            ))}
          </Clients>
          <Center>
            <Button type='button' onClick={handleClick}>Cargar más</Button>
          </Center>
        </Wrapper>
      </Layout>
    </>
  )
}

Dashboard.getInitialProps = async (ctx) => {

  const res = await axios.get(`${API_URI}admin/dashboard/${ctx.query.user_id}`)
  .catch(err => console.log(err))
  if (res) {
    return {user: res.data}
  }
  return {user: {}}
}


export default Dashboard
