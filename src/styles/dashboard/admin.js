import Styled, { css } from 'styled-components'

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
  margin: 15px 5px;
  opacity: 0.8;
  padding: 10px;
  transition: .3s;
  min-width: 120px;
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
  input, textarea, select {
    background-color: #fff;
    border: 1px solid lightgray;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 10px;
    margin: 7px 0;
    outline: none;
  }
  textarea {
    height: 500px;
  }
  label {
    background-color: #fff;
    border: 1px solid #f3f3f3;
    border-radius: 7px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 10px;
    width: 100%;
  }
  div.buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    a {
      background-color: crimson;
      border-radius: 7px;
      color: #fff;
      opacity: 0.8;
      padding: 10px;
      text-decoration: none;
      text-align: center;
      width: 40%;
      &:hover {
        opacity: 1;
      }
    }
    button {
      background-color: ${props => props.theme.colors.primary};
      border-radius: 7px;
      border: none;
      color: #fff;
      cursor: pointer;
      opacity: 0.8;
      padding: 10px;
      width: 40%;
      &:hover {
        opacity: 1;
      }
    }
  }
  p.error {
    color: crimson;
    font-weight: 600;
  }
`

export const FormBlockSlim = Styled.form`
  display: flex;
  flex-direction: column;
  label {
    padding: 5px;
    margin-top: 15px;
  }
  input {
    background-color: #fff;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    &:focus {
      border: 1px solid lightblue;
    }
  }
  div.buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    button {
      background-color: #fff;
      border-radius: 7px;
      margin: 10px 0;
      outline: none;
      padding: 7px 10px;
      transition: .4s;
      i {
        padding-right: 5px;
      }
    }
    button:first-child {
      border: 1px solid crimson;
      color: crimson;
      &:hover {
        background-color: crimson;
        color: #fff;
        cursor: pointer;
      }
    }
    button:last-child {
      border: 1px solid ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.primary};
      &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
        cursor: pointer;
      }
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
    outline: none;
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

export const List = Styled.div`
  a {
    background-color: #9cb4e7;
    border: none;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
    text-decoration: none;
    transition: 0.4s;
    float: right;
    &:hover {
      background-color: #5c7abb;
    }
  }
  button {
    border: none;
    background-color: #fff;
    /* border-radius: 50%; */
    color: #bd779d;
    &:hover {
      color: #851f57;
      cursor: pointer;
    }
  }
  p {
    color: ${ props => props.theme.colors.primary };
    padding: 5px 10px;
    font-weight: 600;
  }
  ul {
    border: 1px solid #f2f2f2;
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 15px 5px;
    li {
      border-bottom: 1px solid lightgray;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2px 0;
      margin-bottom: 8px;
    }
  }
`

export const Message = Styled.div`
  background: #f2f2f2;
  border-radius: 7px;
  color: white;
  display: block;
  margin: 15px auto;
  padding: 10px;
  text-align: center;
  width: 80%;
  ${props => props.type == 'error' && css`
    background: crimson;
  `}
  ${props => props.type == 'success' && css`
    background: green;
  `}
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
  min-height: 100vh;
  margin-top: 75px;
  padding: 20px 0;
`