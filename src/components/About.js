import { Title, Hr } from '../styles/Components'
import { AboutStyle, Card } from '../styles/About'

const About = () => (
  <AboutStyle>
    <Card>
      <Title>Sobre mi</Title>
      <Hr />
      <p>Soy desarrollador de software que se enfoca en tecnologias web, actualmente en la CDMX.</p>
      <p>Disfruto resolver problemas en el Backend implementado lenguajes de programación como Python, PHP y JavaScript</p>
      <p>Tambien me agrada diseñar la UI del usuario con base a un boceto y programar esa interacción que el usuario tendra con la aplicación, usando JavaScript Vanilla o algo mas complejo como React.</p>
      <p>Cuando tengo un tiempo libre disfruto de aprender nuevas tecnologías web como Docker, Next, Gatsby y GCP en plataformas como YouTube, Scrimba, Udemy y <a href='https://platzi.com/@raulfbgomez/' target='_blank'>Platzi</a>, además cree un canal en YouTube en donde compartó un poco de mis conocimientos.</p>
    </Card>
  </AboutStyle>
)

export default About