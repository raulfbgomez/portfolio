import Styled from 'styled-components'

export const ServicesWrapper = Styled.div`
  background-color: #2d333b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  h1 {
    color: ${ props => props.theme.colors.secondary };
    margin-bottom: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    input {
      box-sizing: border-box;
      margin: 5px 0;
      padding: 10px;
      width: 100%
    }
    button {
      background-color: ${ props => props.theme.colors.primary };
      border: none;
      border-radius: 7px;
      color: #fff;
      margin-top: 25px;
      opacity: 0.8;
      padding: 10px;
      width: 100%;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
    p {
      color: #fff;
      a {
        color: #fff;
      }
    }
  }
`

export const Message = Styled.div`
  background-color: crimson;
  border-radius: 5px;
  color: #fff;
  margin-bottom: 10px;
  padding: 10px;
`