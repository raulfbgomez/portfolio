import Link from 'next/link'
import { Menu } from 'styles/user/Nav'

const Nav = () => {

  const handleClick = () => {
    console.log('close session')
    localStorage.removeItem('rbgUserId');
  }

  return (
    <Menu>
      <ul>
        <li><Link href='/home'><a>HOME</a></Link> </li>
      </ul>
      <button onClick={ handleClick }><i className='fa fa-sign-out'></i> SALIR</button>
    </Menu>
  )
}

export default Nav
