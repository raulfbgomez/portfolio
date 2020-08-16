import Link from 'next/link'
import Styled from 'styled-components'

const Anchor = Styled.a`
  background-color: ${ props => props.theme.colors.blue };
  border: 1px solid ${ props => props.theme.colors.blue };
  border-radius: 15px;
  color: #fff;
  display: block;
  font-size: 1em;
  margin: 7px auto;
  padding: 8px 3px;
  text-decoration: none;
  text-align: center;
  width: 200px;
  &:hover {
    background-color: ${ props => props.theme.colors.primary };
    border: 1px solid ${ props => props.theme.colors.primary };
    cursor: pointer;
  }
  i {
    font-size: 1.7em;
    margin-right: 5px;
  }
`

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
  margin: 15px auto;
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
  background-image: linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%);
  border-radius: 10px;
  box-shadow: 0px 10px 15px -10px rgba(0, 0, 0, 0.75);
  display: inline-block;
  font-size: 1em;
  margin: 10px auto;
  padding: 10px 0;
  width: 94%;
  p {
    color: #f0f7ff;
    padding: 0px 10px;
    margin: 10px 0 0;
  }
  ul li {
    padding: 4px 0;
  }
`

const PlanTitle = Styled.h1`
  color: #fff;
  margin: 8px 0;
  padding: 0px 10px;
  text-align: left;
`

export default function Detail( { plan } ) {
  let newPrice = 0
  if (plan.price) {
    let price = plan.price
    newPrice = price.replace('$','').replace(' MX', '')
  }
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
          {plan.file == '' || plan.file == null &&
            <Link href={`/home/plan/upload/${ plan.id }`}>
              <Anchor><i className='fa fa-file-word-o' aria-hidden='true'></i> Subir archivo</Anchor>
            </Link>
          }
        </Plan>
      </Center>

      {plan.payments &&
        <Payments>
          <p><i className='fa fa-money' aria-hidden='true'></i> Pagos</p>
          { plan.payments.length == 0 && 
            <>
              <p>No hay pagos registrados</p> 
            </>
          }
          <ul>
            { plan.payments.map(pay => (
              <li>
                <span>{ pay.date }</span>
                <span>{ pay.amount }</span>
              </li>
            )) }
          </ul>
          <Anchor href={`https://paypal.me/raulfbgomez/${ newPrice }?locale.x=es_XC`} target='_blank'><i className='fa fa-cc-paypal' aria-hidden='true'></i> Realizar pago</Anchor>
        </Payments>
      }
    </>
  )
}