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
    axios.get(`${API_URI}user/clients/${offset}`)
    .then(response => {
      response.data.map(item => {
        setUsers(prev => ([...prev, item ]))
      })
    }).then(() => setOffset(prev => prev + 10))
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
                <Link href='/'>
                  <a className='name'><h2>{ item.name }</h2></a>
                </Link>
                <div>
                  <h3>Planes</h3>
                  <ul>
                    <li>Pagina web basica</li>
                    <li>Correo Basic</li>
                  </ul>
                  <Link href='/'>
                    <Anchor><i className='fa fa-plus'></i> Agregar</Anchor>
                  </Link>
                  <Link href='/'>
                    <Anchor><i className='fa fa-pencil'></i> Editar</Anchor>
                  </Link>
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

  const res = await axios.get(`${API_URI}user/dashboard/${ctx.query.user_id}`)
  return {user: res.data}
  
}


export default Dashboard
