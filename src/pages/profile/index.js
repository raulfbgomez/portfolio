import { useContext, useEffect, useState } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import { UserContext } from 'context/UserContext'
import { API_URI } from 'utils/variables'
import Layout from 'components/user/Layout'

const Container = Styled.div`
  background-image: linear-gradient( 135deg, #FF9D6C 10%, #BB4E75 100%);
  padding: 10px;
  text-align: center;
  h1, h2 {
    color: #fff;
  }
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.1em;
  }
`

const Form = Styled.form`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  input {
    background-color: ${ props => props.theme.colors.background };
    border: 1px solid #dadde9;
    border-radius: 7px;
    font-family: 'Spartan', sans-serif;
    font-size: 1em;
    margin: 10px 0;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
    &:focus {
      border: 1px solid ${ props => props.theme.colors.primary };
    }
  }
  button {
    background-color: ${ props => props.theme.colors.blue };
    border: 1px solid ${ props => props.theme.colors.blue };
    border-radius: 7px;
    color: #fff;
    font-family: 'Spartan', sans-serif;
    font-size: 1em;
    margin: 15px 0;
    outline: none;
    padding: 10px 0;
    &:hover {
      background-color: ${ props => props.theme.colors.primary };
      cursor: pointer;
    }
  }
`

const Wrapper = Styled.div`
  padding: 0;
`

const Profile = () => {
  
  const { user, updateUser, getUser } = useContext(UserContext)
  const [icon, setIcon] = useState('fa fa-refresh')
  const [message, setMessage] = useState('Actualizar información')
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    if (!user) {
      getUser()
    } 
  }, [])
  
  useEffect(() => {
    if (user) {
      setInputs(prev => ({
        ...prev, 
        name: user.name, 
        email: user.email 
      }))
    }
  }, [user])

  const handleInput = (e) => {
    const { name, value } = e.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Actualizando...')
    axios.post(`${ API_URI }user/${ user.id }/update`, JSON.stringify(inputs))
      .then(res => {
        if (res.data.message == 'success') {
          setMessage('Información actualizada')
          setIcon('fa fa-check')
          updateUser()
        }
      })
  }

  return (
    <Layout title='Mi perfil'>
      <Wrapper>
        <Container>
          <h1>{ user && user.name }</h1>
          <h2>{ user && user.email }</h2>
        </Container>
        <Form onSubmit={ handleSubmit }>
          <input 
            type='text' 
            name='name' 
            onChange={ handleInput }
            value={ inputs.name } />
          <input 
            type='email' 
            name='email' 
            onChange={ handleInput }
            value={ inputs.email } />
          <input 
            type='password' 
            name='password' 
            onChange={ handleInput }
            placeholder='Ingresa tu nueva contraseña' />
          <button type='submit'><i className={ icon } aria-hidden='true'></i> { message }</button>
        </Form>
      </Wrapper>
    </Layout>
  )
}

export default Profile
