import { useContext } from 'react'
import Link from 'next/link'
import Styled from 'styled-components'
import { UserContext } from 'context/UserContext'

export const Menu = Styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  position: sticky;
  width: 100%;
  button {
    border: 1px solid crimson;
    background-color: crimson;
    border-radius: 10px;
    color: #fff;
    outline: none;
    padding: 7px 9px;
    transition: .3s;
    &:hover {
      box-shadow: 0px 5px 8px #888888;
      cursor: pointer;
      transform: translateY(-4px);
  }
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      a {
        background-color: ${ props => props.theme.colors.primary }11;
        border-radius: 10px;
        color: ${ props => props.theme.colors.text };
        display: inline-block;
        font-size: 0.8em;
        height: 14px;
        margin: 0 2px;
        outline: none;
        padding: 10px 6px;
        text-decoration: none;
        text-align: center;
        transition: .3s;
        min-width: 70px;
        &:hover {
          background-color: ${ props => props.theme.colors.primary };
          color: #fff;
        }
      }
    }
  }
`
const Nav = () => {
  const { logout } = useContext(UserContext)

  const handleClick = () => {
    console.log('close session')
    localStorage.removeItem('rbgUserId');
    logout()
  }

  return (
    <Menu>
      <ul>
        <li>
          <Link href='/home'><a><i className='fa fa-home'></i> Home</a></Link>
          <Link href='/plans'><a><i className='fa fa-star'></i> Planes</a></Link>
          <Link href='/home'><a><i className='fa fa-file-fa fa-user-circle'></i> Perfil</a></Link>
        </li>
      </ul>
      <button onClick={ handleClick }><i className='fa fa-sign-out'></i></button>
    </Menu>
  )
}

export default Nav
