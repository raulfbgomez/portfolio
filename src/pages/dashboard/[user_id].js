import axios from 'axios'
import { API_URI } from '../../utils/variables'

const Dashboard = ({ user }) => {

  return (
    <>
      <h1>Bienvenido { user.name } </h1>
    </>
  )
}

Dashboard.getInitialProps = async (ctx) => {
  // const router = useRouter()
  // const { user_id } = router.query

  const res = await axios.get(`${API_URI}user/dashboard/${ctx.query.user_id}`)
  return {user: res.data}
  
}


export default Dashboard
