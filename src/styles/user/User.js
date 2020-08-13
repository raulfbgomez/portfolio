import Styled from 'styled-components'

export const Anchor = Styled.a`
  color: ${ props => props.theme.colors.primary };
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  padding: 10px;
  i {
    margin-right: 5px;
  }
  &:hover {
    border: 1px solid ${ props => props.theme.colors.primary };
  }
`

export const NoPlans = Styled.div`
  background-color: #fff;
  border-radius: 7px;
  display: block;
  margin: 0 auto;
  padding: 7px 0;
  text-align: center;
  width: 90%;
  p {
    color: ${ props => props.theme.colors.secondary };
  }

`

export const WelcomeText = Styled.p`
  color: ${ props => props.theme.colors.text };
  font-size: 1em;
  padding-top: 20px;
  text-align: center;
`