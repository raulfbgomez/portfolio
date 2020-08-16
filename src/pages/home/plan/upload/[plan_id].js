import Router from 'next/router'
import { useEffect, useState, useContext } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import { UserContext } from 'context/UserContext'
import Layout from 'components/user/Layout'
import { API_URI } from 'utils/variables'

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 300px;
  button {
    background-color: ${ props => props.theme.colors.blue };
    border: 1px solid ${ props => props.theme.colors.blue };
    border-radius: 7px;
    color: #fff;
    font-size: 1em;
    outline: none;
    padding: 10px;
    margin: 25px 0;
    &:hover {
      background-color: ${ props => props.theme.colors.primary };
      border: 1px solid ${ props => props.theme.colors.primary };
      cursor: pointer;
    }
  }
`

const Message = Styled.div`
  background-color: #ff6347;
  border-radius: 10px;
  color: #fff;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  width: 80%;
`

const Title = Styled.h2`
  font-size: 1.5em;
  text-align: center;
`

const Wrapper = Styled.div`
  padding: 10px;
`

const Upload = ({ query }) => {

  const { user, getUser } = useContext(UserContext)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!user) {
      getUser()
    }
    console.log(user)
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    let formData = new FormData()
    let imagefile = document.querySelector('#file')
    if (imagefile.value) {
      setMessage('Validando...')
      formData.append("document", imagefile.files[0])
      axios.post(`${ API_URI }document/upload/${ user.id }/${ query.plan_id }`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      })
      .then(res => {
        if (res.data.message == 'invalid extension') {
          setMessage('Extensión no valida, verifica que el archivo sea un .docx')
        } else if (res.data.message == 'success') {
          Router.push(`/home/plan/${ query.plan_id }`)
        } else {
          setMessage('Ocurrió un error, favor de intentarlo más tarde')
        }
      })
      .catch(err => console.log(err))
    } else {
      setMessage('Selecciona un archivo de Word')
    }
  }


  return (
    <Layout title='Upload file'>
      <Wrapper>
        <Title>Subir archivo de requerimientos</Title>
        { message &&
          <Message>{ message }</Message>
        }
        <Form enctype='multipart/form-data' onSubmit={handleSubmit}>
          <input id='file' type='file' name='document' />
          <button type='submit'><i className='fa fa-cloud-upload' aria-hidden='true'></i> Subir documento</button>
        </Form>
      </Wrapper>
    </Layout>
  )
}

Upload.getInitialProps = async (ctx) => {
  return { query: ctx.query }
}

export default Upload
