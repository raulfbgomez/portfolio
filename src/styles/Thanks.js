import Styled from 'styled-components'

export const ThanksContainer = Styled.div`
  background-color: #3d3d3d;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  p {
    color: #fff;
    font-size: .8rem;
    margin: 0;
  }
  p.title {
    color: ${props => props.theme.colors.primary};
    padding-bottom: 5px;
  }
  a {
    color: #fff;
    font-size: .8rem;
    text-decoration: none;
  }
  @media only screen and (max-width: 720px) {
    p, a {
      font-size: .6rem;
    }
  }
`