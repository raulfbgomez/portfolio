import Styled from 'styled-components'

export const ContactContainer = Styled.div`
  background-color: #313131;
  padding: 30px;
  h1 {
    color: #fff;
    font-size: 2.4rem;
    text-align: center;
  }
  p {
    color: #fff;
    text-align: center;
    a {
      color: ${props => props.theme.colors.secondary};
      text-decoration: none;
      outline: 0;
      :hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
  a.icon {
    background-color: #fff;
    border-radius: 50%;
    color:  ${props => props.theme.colors.secondary};
    font-size: 30px;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    transition: .2s ease-in;
    outline: 0;
    width: 30px;
    :hover {
      background-color:  ${props => props.theme.colors.secondary};
      color: #fff;
      transform: translateY(-7px);
    }
  }
`

export const ContactIcons = Styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  width: 50%;
`