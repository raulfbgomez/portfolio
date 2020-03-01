import { Card, CardContent, CardImage, CardLinks, CardWrapper } from '../styles/Projects'

const CardComponent = (props) => (
  <Card>
    <CardWrapper>
      <CardImage image={ props.imagen }></CardImage>
      <CardContent>
        <h1>{ props.title }</h1>
        <p>{ props.description }</p>
        <p className='tech'>Tecnologias:</p>
        <ul>
          {props.tech.map(item => (
            <li key={`i${item}`}>{ item }</li>
          ))}
        </ul>
        <CardLinks>
          <a href={ props.url } target="_blank">View</a>
          <a href={ props.github } target="_blank">Github</a>
        </CardLinks>
      </CardContent>
    </CardWrapper>
  </Card>
)

export default CardComponent
