import Link from 'next/link'

import { MenuStyle } from '../styles/Menu'

const Nav = () => (
  <MenuStyle>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><a href='#about'>Sobre mi</a></li>
      <li><a href='#contact'>Contacto</a></li>
    </ul>
  </MenuStyle>
)

export default Nav
