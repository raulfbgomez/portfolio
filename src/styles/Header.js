import Styled, { keyframes } from 'styled-components'


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

export const moveRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translate(0);
  }
`

export const moveUp = keyframes`
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
  height: 100vh;
  vertical-align: bottom;
  position: relative;
`

export const ContainerStyle = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 200px;
  width: 95%;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    padding-top: 100px;
    width: 99%;
  }
`

export const TextosStyle = Styled.div`
  h1 {
    color: #fff;
    font-size: 3rem;
    animation: ${moveRight} 1s ease-in;
    margin: 0;
  }
  h2 {
    color: #fff;
    font-size: 2.5rem;
    animation: ${moveLeft} 1s ease-in;
  }
  a {
    background-color: #7eb844;
    border: 1px solid #7eb844;
    border-radius: 5px;
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
    background-color: #67a32b;
  }
  @media only screen and (max-width: 720px) {
    text-align: center;
    h1, h2 {
      font-size: 1.9rem;
    }
  }
`

export const ImageStyle = Styled.img`
  object-fit: cover;
  animation: ${moveUp} 1s ease-in;
  width: 650px;
  @media only screen and (max-width: 720px) {
    margin: 50px 0;
    width: 300px;
  }
`

export const WaveStyle = Styled.div`
  width: 100%;
  position: absolute;
  bottom: -10px;
  left: 0;
`