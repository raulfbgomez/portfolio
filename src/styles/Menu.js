import Styled from 'styled-components'
import { moveUp } from './Header'

export const Buuble = Styled.div`
  background: transparent;
  position: absolute;
  z-index: -2;
  transition: all 0.5s ease;
`

export const MenuStyle = Styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    li {
      list-style: none;
      a {
        outline: none;
        color: #fff;
        display: inline-block;
        font-weight: bold;
        margin: 0;
        padding: 25px 0;
        text-align: center;
        text-decoration: none;
        width: 160px;
      }
      a:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
`