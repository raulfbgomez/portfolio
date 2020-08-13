import Styled from 'styled-components'

export const Main = Styled.main`
  background-color: ${ props => props.theme.colors.background };
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
`