import Link from 'next/link'
import {HeaderStyle, ContainerStyle, TextosStyle, ImageStyle, WaveStyle} from '../styles/Header'
import Nav from './Nav'
import Svg from '../svgs/Wave.svg'
import Svg2 from '../svgs/Wave2.svg'

const Cabecera = () => {
  return (
    <>
    <HeaderStyle>
      <Nav />
      <ContainerStyle>
        <ImageStyle src={require('../public/image.png')} alt="image" />
        <TextosStyle>
          <h1>Raul Bautista Gomez</h1>
          <h2>Web Developer</h2>
          <a href='#contact'>Cantáctame</a>
          <Link href='/signin'>
            <a>Consulta tu proyecto</a>
          </Link>
        </TextosStyle>
      </ContainerStyle>
      <WaveStyle>
        <Svg2 />
      </WaveStyle>
    </HeaderStyle>
    </>
  )
}

export default Cabecera
