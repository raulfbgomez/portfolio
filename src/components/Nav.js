import Link from 'next/link'

import { Buuble, MenuStyle } from '../styles/Menu'

const Nav = () => (
  <MenuStyle>
    <ul>
      <li><Link href="/"><a data-page='home'>Inicio</a></Link></li>
      <li><a href='#about' data-page='about'>Sobre mi</a></li>
      <li><a href='#projects' data-page='projects'>Proyectos</a></li>
      <li><a href='#cv' data-page='cv'>Experiencia</a></li>
      <li><a href='#contact' data-page='contact'>Contacto</a></li>
      <Buuble className='buuble' />
    </ul>
  </MenuStyle>
)

export default Nav
