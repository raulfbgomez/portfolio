import Styled from 'styled-components'

export const ButtonBlue = Styled.button`
  border: 1px solid ${ props => props.theme.colors.blue };
  background-color: ${ props => props.theme.colors.blue };
  border-radius: 999px;
  color: #fff;
  font-size: 1em;
  margin: 20px auto 0;
  outline: none;
  padding: 10px 0;
  transition: .5s;
  width: 92%;
  &:hover {
    box-shadow: 0px 5px 8px #888888;
    cursor: pointer;
    transform: translateY(-6px);
  }
`
export const Container = Styled.div`
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  @media (min-width: ${ props => props.theme.breakpoints.desktop }) {
    border: 1px solid #fff;
    height: 50%;
    width: 40%;
  }
`

export const Form = Styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 90%;
  input {
    background-color: ${ props => props.theme.colors.background };
    border: 1px solid ${ props => props.theme.colors.background };
    border-radius: 999px;
    color: ${ props => props.theme.colors.text };
    font-size: 1em;
    margin: 7px;
    outline: none;
    padding: 12px 20px;
    &:focus {
      box-shadow: 0px 0px 5px 0px rgba(140,178,219,1);
    }
  }
  p {
    margin-top: 20px;
    a {
      color: ${ props => props.theme.colors.blue }
    }
  }
`

export const Message = Styled.div`
  border-bottom: 1px solid crimson;
  color: crimson;
  font-size: 0.9em;
  font-weight: 600;
  padding: 7px 0;
  text-align: center;
  margin: 5px 0;
`

export const Title = Styled.h1`
  border-bottom: 1px solid lightgray;
  font-size: 1.8em;
  padding-bottom: 5px;
  text-align: center;
`

export const Wrapper = Styled.div`
  background-color: ${ props => props.theme.colors.gray };
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`