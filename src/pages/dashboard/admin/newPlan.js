import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import Layout from '../../../components/dashboard/Layout'
import { API_URI } from '../../../utils/variables'
import {
  FormBlock,
  Message,
  Title,
  Wrapper
} from '../../../styles/dashboard/admin'

const newClient = () => {

  const [inputs, setInputs] = React.useState({
    name: '',
    price: '',
    description: ''
  })
  const [frecuencies, setFrecuencies] = React.useState([])
  const [message, setMessage] = React.useState();

  React.useEffect(() => {
    new FroalaEditor('textarea');
    axios.get(`${API_URI}admin/frecuencies`)
      .then(res => setFrecuencies(res.data.frecuencies))
      .catch(err => console.log(err))
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    let desc = document.querySelector('.fr-view').innerHTML
    setInputs(inputs =>({ ...inputs, [name]: value, description: desc}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post(`${API_URI}admin/plan`, JSON.stringify(inputs)).then(response => {
      if (response.data.message == 'success') {
        Router.push('/dashboard/admin/1')
      } else if (response.data.message == 'Empty fields') {
        setMessage('Campos incompletos')
      }
    })
    .catch(err => console.log(err))
  }
  
  return (
    <Layout title='Administración'>
      <Wrapper>
        <Title>Nuevo Plan</Title>
        {message ?
          <Message type='error'>{ message }</Message>
        : ''
        }
        <FormBlock onSubmit={ handleSubmit }>
          <p className='error'>IMPORTANTE: Agregar primero la descripción del plan</p>
          <input type='text' name='name' id='name' placeholder='Nombre' onChange={ handleChange } />
          <input type='text' name='price' id='price' placeholder='Precio' onChange={ handleChange } />
          <select name='frequency_id' onChange={ handleChange }>
            <option value=''>Selecciona la frecuencia de pago</option>
            {frecuencies.map(frecuency => (
              <option value={ frecuency.id }>{ frecuency.name }</option>
            ))}
          </select>
          <textarea placeholder='Descripción' rows='7' onChange={handleChange}></textarea>
          <div className='buttons'>
            <Link href='/dashboard/admin/1'><a>Cancelar</a></Link>
            <button type='submit'>Guardar</button>
          </div>
        </FormBlock>
      </Wrapper>
    </Layout>
  )
}

export default newClient
