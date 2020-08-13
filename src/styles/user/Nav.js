import Styled from 'styled-components'

export const Menu = Styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  position: sticky;
  width: 100%;
  button {
   border: 1px solid lightgray;
   background-color: #fff;
   border-radius: 10px;
   padding: 10px;
   transition: .3s;
   &:hover {
    box-shadow: 0px 5px 8px #888888;
    cursor: pointer;
    transform: translateY(-4px);
   }
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      a {
        border-bottom: 1px solid ${ props => props.theme.colors.blue };
        color: ${ props => props.theme.colors.blue };
        display: inline-block;
        height: 14px;
        padding: 10px 2px;
        text-decoration: none;
        text-align: center;
        transition: .3s;
        min-width: 70px;
        &:hover {
          background-color: ${ props => props.theme.colors.blue };
          color: #fff;
        }
      }
    }
  }
`