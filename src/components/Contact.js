import { ContactContainer, ContactIcons } from '../styles/Contact'

const Contact = () => (
  <ContactContainer>
    <h1>¿Quieres contactarme?</h1>
    <p>Por favor, enviame un correo a <a href="mailto:raulfbgomez@gmail.com">raulfbgomez@gmail.com</a></p>
    <p>O también lo puedes hacer a travéz de mis redes sociales</p>
    <ContactIcons>
      <a href="https://www.facebook.com/Raul-Bautista-Gomez-104803481049522" target='_blank' className="fa fa-facebook icon"></a>
      <a href="https://www.instagram.com/raulfbgomez/" target='_blank' className="fa fa-instagram icon"></a>
      <a href="https://github.com/raulfbgomez" target='_blank' className="fa fa-github icon"></a>
      <a href="http://www.youtube.com/channel/UCXmOAcyBFFZ_xkDFbR0tB5Q" target='_blank' className="fa fa-youtube icon"></a>
      <a href="https://twitter.com/raulfbgomez" target='_blank' className="fa fa-twitter icon"></a>
      <a href="https://www.linkedin.com/in/ra%C3%BAl-bautista-g%C3%B3mez/" target='_blank' className="fa fa-linkedin icon"></a>
    </ContactIcons>
    <p>Gracias por visitar mi nueva página</p>
  </ContactContainer>
)

export default Contact
