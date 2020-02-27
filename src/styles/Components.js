import Styled, { keyframes } from 'styled-components'
import Person from '../public/person.jpg'

const moveLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
`

const moveRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
`

const moveUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
`

export const HeaderStyle = Styled.header`
  background: #373B44;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: block;
  height: 100vh;
  position: relative;
  overflow: hidden;
  width: 100%;
`

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

export const ContainerStyle = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  padding: 150px 0;
  width: 95%;
`

export const TextosStyle = Styled.div`
  h1 {
    color: #fff;
    font-size: 3rem;
    animation: ${moveRight} 1s ease-in;
  }
  h2 {
    color: #fff;
    font-size: 2.5rem;
    animation: ${moveLeft} 1s ease-in;
  }
  a {
    border: 1px solid #fff;
    border-radius: 7px;
    color: #fff;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 25px;
    outline: none;
    padding: 10px 30px;
    text-decoration: none;
    animation: ${moveUp} 1s ease-in;
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
`

export const ImageStyle = Styled.img`
  object-fit: cover;
  animation: ${moveUp} 1s ease-in;
`

export const WaveStyle = Styled.div`
  height: 570px;
  width: 100%;
  position: absolute;
  bottom: -200px;
  left: 0;
`
// About Section
export const TwoColumns = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  div:first-child {
    background: url(${Person}) no-repeat;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 100%;
    overflow: hidden;
  }
  div {
    flex: 1;
  }
`