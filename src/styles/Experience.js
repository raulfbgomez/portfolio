import Styled from 'styled-components'
import bg from '../public/bg.jpg'

export const CardExperience = Styled.div`
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px auto;
  width: 85%;
  p.card-date {
    border-left: 3px solid ${props => props.theme.colors.secondary};
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;
    padding-left: 10px;
    text-shadow: 2px 2px 4px #000000;
    text-align: left;
    width: 350px;
  }
  div.card-content {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 5px 10px 8px #888888;
    flex: 1;
    padding: 15px 20px;
    h1 {
      color: ${props => props.theme.colors.primary};
      font-size: 1.8rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    width: 95%;
    p.card-date {
      text-align: center;
      font-size: 1rem;
      width: 90%;
    }
    div.card-content {
      h1 {
        font-size: 1.4rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`

export const ExperienceStyle = Styled.div`
  background: url(${bg}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100vh;
  padding: 20px 0;
  width: 100%;
`
