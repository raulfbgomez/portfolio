import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import Layout from '../../../../components/dashboard/Layout'
import { API_URI } from '../../../../utils/variables'
import {
  FormBlock,
  Message,
  Title,
  Wrapper
} from '../../../../styles/dashboard/admin'


const Edit = ({ query }) => {

  const [inputs, setInputs] = React.useState({
    name: '',
    price: '',
    description: ''
  })
  const [plan, setPlan] = React.useState([])
  const [frecuencies, setFrecuencies] = React.useState([])
  const [message, setMessage] = React.useState()
  const [loading, setLodaing] = React.useState(true)

  function getData() {
    setTimeout(() => {
      axios.get(`${API_URI}admin/plan/edit/${query.plan_id}`)
        .then(res => {
          setPlan(res.data)
          document.querySelector('.fr-view').innerHTML = res.data.description
          setLodaing(false)
        })
    }, 500)
  }
  
  React.useEffect(() => {

    new FroalaEditor('textarea');
    
    axios.get(`${API_URI}admin/frecuencies`)
      .then(res => setFrecuencies(res.data.frecuencies))
      .then(getData())
      .catch(err => console.log(err))
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    let desc = document.querySelector('.fr-view').innerHTML
    setPlan(prev =>({
       ...prev, 
       [name]: value, 
       description: desc
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post(`${API_URI}admin/plan/${ plan.id }/update`, JSON.stringify(plan)).then(response => {
      if (response.data.message == 'success') {
        Router.push('/dashboard/plan')
      } else if (response.data.message == 'Empty fields') {
        setMessage('Campos incompletos')
      }
    })
    .catch(err => console.log(err))
  }

  return(
    <Layout title='Administración Editar Plan'>
      <Wrapper>
        <Title>Editar plan</Title>
        <FormBlock onSubmit={ handleSubmit }>
          {message ? 
            <Message type='error'>
              { message }
            </Message>
          : ''}
          <p className='error'>IMPORTANTE: Primero editar la descripción del plan</p>
          {loading ? 
            <p>Cargando informacion...</p>
          : ''
          }
          <input 
            type='text' 
            name='name' 
            id='name' 
            placeholder='Nombre' 
            value={ plan.name } 
            onChange={ handleChange } />
          <input 
            type='text' 
            name='price' 
            id='price' 
            value={ plan.price }
            placeholder='Precio' 
            onChange={ handleChange } />
          <select name='frequency_id' value={ plan.frequency_id } onChange={ handleChange }>
            <option value=''>Selecciona la frecuencia de pago</option>
            {frecuencies.map(frecuency => (
              <option value={ frecuency.id }>{ frecuency.name }</option>
            ))}
          </select>
          <textarea placeholder='Descripción' rows='7' value={ plan.description } onChange={handleChange}></textarea>
          <div className='buttons'>
            <Link href='/dashboard/plan'><a>Cancelar</a></Link>
            <button type='submit'>Guardar</button>
          </div>
        </FormBlock>
      </Wrapper>
    </Layout>
  )
}

Edit.getInitialProps = async (ctx) => {
  return { query: ctx.query }
}

export default Edit
