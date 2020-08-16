import Link from 'next/link'
import Router from 'next/router'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import { UserContext } from 'context/UserContext'
import Layout from 'components/user/Layout'
import { API_URI } from 'utils/variables'

const Anchor =Styled.a`
  color: ${ props => props.theme.colors.blue };
  cursor: pointer;
  display: block;
  margin: 30px auto 0;
  text-align: center;
  width: 50%;
`

const Button = Styled.button`
  background-color: ${ props => props.theme.colors.primary };
  border: none;
  border-radius: 7px;
  color: #fff;
  display: block;
  font-size: 1.1em;
  margin: 5px auto;
  outline: none;
  padding: 15px 10px;
  transition: .3s;
  width: 72%;
  i {
    margin-right: 5px;
  }
  &:hover {
    background-color: ${ props => props.theme.colors.blue };
    cursor: pointer;
  }
`

const Container = Styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 10px;
  width: 95%;
  ul li {
    line-height: 1.2em;
    padding-top: 7px;
  }
`

const Price = Styled.h3`
  color: ${ props => props.theme.colors.primary };
  margin: 0;
  text-align: center;
`

const Subtitle = Styled.h2`
  color: ${ props => props.theme.colors.primary };
  margin: 5px 0;
  text-align: center;
`

const Title = Styled.h1`
  color: ${ props => props.theme.colors.text };
  font-size: 1.7em;
  text-align: center;
`

const Wrapper = Styled.div`
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;
`

const Add = ({ query }) => {

  const [plan, setPlan] = useState({})
  const [message, setMessage] = useState('CONFIRMAR')
  const [icon, setIcon] = useState('fa fa-cart-plus')
  const { user, getUser } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      getUser()
    }
    axios.get(`${ API_URI }admin/plan/edit/${ query.plan_id }`)
      .then(res => setPlan(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleClick = (e) => {
    setMessage('Añadiendo...')
    axios.post(`${ API_URI }user/${ user.id }/plan/${ plan.id }`)
      .then(res => {
        if (res.data.message == 'success') {
          setMessage('PLAN AGREGADO')
          setIcon('fa fa-check')
          Router.push(`/plans/description`)
        }
      })
      .catch(err => console.log(err))

  }

  return (
    <Layout title='Agregar plan'>
      <Wrapper>
        <Container>
          <Title>Agrega el siguiente plan a tu cuenta</Title>
          <Subtitle>{ plan.name }</Subtitle>
          <Price>{ plan.price }</Price>
          <div dangerouslySetInnerHTML={{ __html: plan.description }}></div>
          <Button type='button' onClick={ handleClick }><i className={ icon }></i> { message }</Button>
          <Link href='/plans'><Anchor>ver planes</Anchor></Link>
        </Container>
      </Wrapper>
    </Layout>
  )
}

Add.getInitialProps = async (ctx) => {
  return { query: ctx.query }
}

export default Add
