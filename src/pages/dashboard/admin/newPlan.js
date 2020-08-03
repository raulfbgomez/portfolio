import Link from 'next/link'
import axios from 'axios'
import Layout from '../../../components/dashboard/Layout'
import { API_URI } from '../../../utils/variables'
import {
  Button,
  FormBlock,
  Title,
  Wrapper
} from '../../../styles/dashboard/admin'

const newClient = () => {
  return (
    <Layout title='Administración'>
      <Wrapper>
        <Title>Nuevo Plan</Title>
        <FormBlock>
          <input type='text' name='name' id='name' placeholder='Nombre' />
          <input type='text' name='price' id='price' placeholder='Precio' />
          <textarea placeholder='Descripción' rows='7'></textarea>
          <div>
            <Link href='/dashboard/admin/1'><a>Cancelar</a></Link>
            <button type='submit'>Guardar</button>
          </div>
        </FormBlock>
      </Wrapper>
    </Layout>
  )
}

export default newClient
