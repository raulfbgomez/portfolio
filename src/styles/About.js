import Styled from 'styled-components'

// About Section
export const AboutStyle  = Styled.div`
  padding: 100px 0;
  text-align: center;
`

export const Card = Styled.div`
  margin: 0 auto;
  width: 60%;
  p {
    color: #555;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    line-height: 1.9rem;
    a {
      color: ${props => props.theme.colors.secondary};
      text-decoration: none;
      :hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`

export const TwoColumns = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  div:first-child {
    
    height: 100%;
    overflow: hidden;
  }
  div {
    flex: 1;
  }
`
// background: url(${Person}) no-repeat;
// background-size: cover;
// background-repeat: no-repeat;
// background-position: 50% 50%;