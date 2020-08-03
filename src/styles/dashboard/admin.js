import Styled from 'styled-components'

export const Anchor = Styled.a`
  background-color: #fff;
  border-radius: 7px;
  color: ${props => props.theme.colors.primary};
  display: inline-block;
  margin: 3px 7px;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  transition: 0.3s ease-out;
  i {
    padding-right: 5px;
  }
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    cursor: pointer;
  }
`

export const Button = Styled.button`
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  border-radius: 7px;
  color: #fff;
  display: inline-block;
  margin: 15px auto;
  opacity: 0.8;
  padding: 10px;
  transition: .3s;
  width: 250px;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

export const Center = Styled.div`
  text-align: center;
`

export const Clients = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ClientItem = Styled.div`
  background-color: #fff;
  border-radius: 7px;
  margin: 10px;
  padding: 5px 10px;
  width: 30%;
  a.name {
    color: ${ props => props.theme.colors.secondary };
    text-decoration: none;
    &:hover {
      text-decoration: underline;|
    }
  }
`

export const FormBlock = Styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 45%;
  input, textarea {
    background-color: #fff;
    border: 1px solid lightgray;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 10px;
    margin: 7px 0;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    a {
      background-color: crimson;
      border-radius: 7px;
      color: #fff;
      padding: 10px;
      text-decoration: none;
      text-align: center;
      width: 40%;
    }
    button {
      background-color: ${props => props.theme.colors.primary};
      border-radius: 7px;
      border: none;
      color: #fff;
      cursor: pointer;
      padding: 10px;
      width: 40%;
    }
  }
`

export const FormInline = Styled.form`
  display: flex;
  margin: 20px auto;
  width: 50%;
  justify-content: space-around;
  align-items: center;
  input {
    background-color: #fff;
    border: 1px solid #f2f2f2;
    border-radius: 7px;
    padding: 10px;
    transition: 0.3s ease-out;
    width: 50%;
    &:focus {
      border: 1px solid ${props =>props.theme.colors.primary};
    }
  }
  select {
    background-color: #fff;
    border: none;
    padding: 10px;
  }
`

export const Nav = Styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 5px 10px 8px #888888;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      a {
        border: none;
        border-radius: 5px;
        color: ${props => props.theme.colors.primary};
        display: inline-block;
        margin: 0 10px;
        padding: 10px;
        text-decoration: none;
        text-align: center;
        transition: .4s;
        width: 100px;
        &:hover {
          background-color: ${props => props.theme.colors.primary};
          color: #fff;
        }
      }
    }
  }
`

export const Title = Styled.h1`
  padding: 10px 0;
  text-align: center;
`

export const Wrapper = Styled.section`
  background-color: #f7f6f3;
  height: 100vh;
  margin-top: 75px;
  padding-top: 20px;
`