import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'
import Layout from '../../../components/dashboard/Layout'
import { API_URI } from '../../../utils/variables'
import {
  FormBlock,
  Title,
  Wrapper
} from '../../../styles/dashboard/admin'

const newClient = () => {

  const [inputs, setInputs] = React.useState({
    name: '',
    price: '',
    description: ''
  })

  React.useEffect(() => {
    new FroalaEditor('textarea');
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    let desc = document.querySelector('.fr-view').innerHTML
    setInputs(inputs =>({ ...inputs, [name]: value, description: desc}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTimeout(function() {
      console.log(inputs)
    }, 100)
    axios.post(`${API_URI}admin/plan`, JSON.stringify(inputs)).then(response => {
      if (response.data.message == 'success') {
        Router.push('/dashboard/admin/1')
      }
    })
    .catch(err => console.log(err))
  }
  
  return (
    <Layout title='Administración'>
      <Wrapper>
        <Title>Nuevo Plan</Title>
        <FormBlock onSubmit={handleSubmit}>
          <p>IMPORTANTE: Agregar primero la descripción del plan</p>
          <input type='text' name='name' id='name' placeholder='Nombre' onChange={handleChange} />
          <input type='text' name='price' id='price' placeholder='Precio' onChange={handleChange} />
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
