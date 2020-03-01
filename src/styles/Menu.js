import Styled from 'styled-components'
import { moveRight } from './Header'

export const MenuStyle = Styled.nav`
  // background-color: rgba(0, 0, 0, 0.1);
  // box-shadow: 5px 5px 18px #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0;
    li {
      animation: ${moveRight} 1s ease-in;
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