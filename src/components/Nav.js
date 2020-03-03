import Link from 'next/link'

import { Buuble, MenuStyle } from '../styles/Menu'

const Nav = () => (
  <MenuStyle>
    <ul>
      <li><Link href="/" data-page="home"><a>Inicio</a></Link></li>
      <li><a href='#about' data-page="projects">Proyectos</a></li>
      <li><a href='#contact' data-page="experience">Experiencia</a></li>
      <li><a href='#contact' data-page="contact">Contacto</a></li>
      <Buuble />
    </ul>
  </MenuStyle>
)

export default Nav
