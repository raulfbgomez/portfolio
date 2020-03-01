import { Title, Hr } from '../styles/Components'
import { Container } from '../styles/Projects'
import CardComponent from './CardComponent'

import podcast from '../public/podcast.png'
import vueMusic from '../public/vueMusic.png'

const Projects = () => (
  <Container>
    <Title>Proyectos</Title>
    <Hr />
    <CardComponent
      imagen={ podcast }
      title='Podcast'
      description='Aplicación para escuchar PODCAST empleando la API de AudioBoom'
      tech={['ReactJS', 'NextJS', 'Styled JSX', 'Deploy on Zeit Now']}
      url='https://podcast-nextjs-ifbaxkljbc.now.sh/'
      github='https://github.com/raulfbgomez/podcast-nextjs'
    />

    <CardComponent
      imagen={ vueMusic }
      title='Vue Music'
      description='Aplicación para buscar y escuchar fragmentos de canciones utilizando una API privada'
      tech={['VueJS', 'Webpack', 'SASS - Bulma CSS', 'PUG', 'Deploy on Zeit Now']}
      url='https://platzi-music-zdfqstdntw.now.sh/'
      github='https://github.com/raulfbgomez/vue-music'
    />
  </Container>
)

export default Projects
