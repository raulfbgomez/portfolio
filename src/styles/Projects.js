import Styled from 'styled-components'
import defaultImage from '../public/image.png'

// background: url(${Person}) no-repeat;
// background: url(${props => props.image || defaultImage}) no-repeat;

export const Card = Styled.div`
  border: 1px solid #d0d8e2;
  border-radius: 10px;
  display: block;
  margin: 20px auto;
  min-height: 220px;
  width: 70%;
`

export const CardContent = Styled.div`
  flex: 1;
  padding: 10px 0 0 40px;
  position: relative;
  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.7rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
  }
  p.tech {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }
  ul li {
    padding: 2px 0;
  }
`

export const CardImage = Styled.div`
  background: url(${props => props.image || defaultImage}) no-repeat;
  background-size:100% 100%;
  border-radius: 10px 0 0 10px;
  width: 400px;
`

export const CardLinks = Styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 10px 10px 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  height: 100%;
  opacity: 0;
  transition: .3s ease-in;
  width: 100%;
  :hover {
    opacity: 1;
  }
  a {
    border: 1px solid #fff;
    color: #fff;
    margin: 0 10px;
    padding: 10px 0;
    text-decoration: none;
    text-align: center;
    transition: .2s ease-in;
    width: 150px;
    :hover {
      background-color: #67a32b;
      color: #fff;
    }
  }
`

export const CardWrapper = Styled.div`
  border-radius: 10px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Container = Styled.section`
  background-color: #e7eef7;
  height: 90vh;
  padding: 40px 0;
`