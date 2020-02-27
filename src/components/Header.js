import {HeaderStyle, ContainerStyle, TextosStyle, ImageStyle, WaveStyle} from '../styles/Components'
import Nav from './Nav'
import Svg from '../svgs/Wave.svg'
import Svg2 from '../svgs/Wave2.svg'

const Cabecera = () => (
  <HeaderStyle>
    <Nav />
    <ContainerStyle>
      <TextosStyle>
        <h1>Raul Bautista Gomez</h1>
        <h2>Web Developer</h2>
        <a href='#'>Contacto</a>
      </TextosStyle>
      <ImageStyle src={require('../public/image.png')} alt="image" />
    </ContainerStyle>
    <WaveStyle>
      <Svg2 />
    </WaveStyle>
  </HeaderStyle>
)

export default Cabecera
