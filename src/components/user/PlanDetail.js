import Styled from 'styled-components'

const Center = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Data = Styled.span`
  color: #f0f7ff;
  margin-left: 30px;
`

const Payments = Styled.div`
  display: block;
  margin: 0 auto;
  width: 94%;
  p:first-child {
    margin-top: 30px;
    color: ${ props => props.theme.colors.secondary };
  }
  p {
    font-size: 1.1em;
    padding-left: 10px;
    margin: 7px 0;
  }
  ul {
    padding: 0 10px;
    li {
      border-bottom: 1px solid #d4daee;
      display: flex;
      justify-content: space-between;
      list-style: none;
      margin: 10px 0;
      padding-bottom: 2px;
    }
  }
`

const Plan = Styled.div`
  background-color: ${ props => props.theme.colors.primary };
  border-radius: 10px;
  box-shadow: 0px 10px 15px -10px rgba(0,0,0,0.75);
  display: inline-block;
  margin: 10px auto;
  padding: 10px 0;
  width: 94%;
  p {
    color: #f0f7ff;
    padding: 0px 10px;
    margin: 10px 0 0;
  }
`

const PlanTitle = Styled.h1`
  color: #fff;
  margin: 8px 0;
  padding: 0px 10px;
  text-align: left;
`

export default function Detail( { plan } ) {
  return (
    <>
      <Center>
        <Plan>
          <PlanTitle>{ plan.name }</PlanTitle>
          <p>{ plan.price } / { plan.frequency && plan.frequency.name } </p>
          <p dangerouslySetInnerHTML={{ __html: plan.description }}></p>
        </Plan>
      </Center>

      <Center>
        <Plan>
        { plan.paymentDate &&
          <>
            <p>Fecha de renovación del plan</p>
            <Data>{ plan.paymentDate }</Data>
          </>
          }

          { plan.agreedPrice &&
          <>
            <p>Precio acordado</p>
            <Data>{ plan.agreedPrice }</Data>
          </>
          }

          { plan.delivery &&
          <>
            <p>Fecha de entrega del proyecto</p>
            <Data>{ plan.delivery }</Data>
          </>
          }

          { plan.url_test &&
          <>
            <p>URL de pruebas</p>
            <Data><a href={ plan.url_test } target='_blank'>Consultar Avance</a></Data>
          </>
          }

          { plan.url_prod &&
          <>
            <p>URL del proyecto</p>
            <Data><a href={ plan.url_prod } target='_blank'>Consultar Proyecto</a></Data>
          </>
          }
        </Plan>
      </Center>

      {plan.payments &&
        <Payments>
          <p><i className='fa fa-money' aria-hidden='true'></i> Pagos</p>
          { plan.payments.length == 0 && <p>No hay pagos registrados</p> }
          <ul>
            { plan.payments.map(pay => (
              <li>
                <span>{ pay.date }</span>
                <span>{ pay.amount }</span>
              </li>
            )) }
          </ul>
        </Payments>
      }
    </>
  )
}