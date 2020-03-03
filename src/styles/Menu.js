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
  left: 0;
  width: 100%;
  z-index: 9999;
  ul {
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0;
    li {
      // animation: ${moveUp} 1s ease-in;
      list-style: none;
      a {
        outline: none;
        color: #fff;
        display: inline-block;
        font-weight: bold;
        margin: 0 10px;
        padding: 25px 0;
        text-align: center;
        text-decoration: none;
        width: 160px;
      }
      a:hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`