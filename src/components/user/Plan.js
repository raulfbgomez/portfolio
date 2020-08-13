import Link from 'next/link'
import Styled from 'styled-components'

const PlanContainer = Styled.div`
  background-color: #fff;
  border-radius: 7px;
  margin: 8px auto;
  position: relative;
  width: 90%;
  a {
    text-decoration: none;
    color: ${ props => props.theme.colors.text };
    i {
      color: #f1f3f7;
      position: absolute;
      right: 10px;
      top: 37%;
    }
    &:hover > i {
      color: ${ props => props.theme.colors.secondary };
    }
  }
  p {
    margin: 0;
  }
`

const PlanTitle = Styled.p`
  color: ${ props=> props.theme.colors.secondary };
  font-size: 1.4em;
  margin: 0;
  padding: 10px;
`

const PlanPrice = Styled.p`
  padding: 2px 10px;
  font-size: 0.9em;
`

const Plan = (props) => {
  const { plan } = props
  return (
    <PlanContainer>
      <Link href={`/home/plan/${ plan.plan_user_id }`}>
        <a>
          <i className='fa fa-chevron-right'></i>
          <PlanTitle>{ plan.name }</PlanTitle>
          <PlanPrice>{ plan.price } / { plan.frequency }</PlanPrice>
        </a>
      </Link>
    </PlanContainer>
  )
}

export default Plan
