import React from "react"
import { OrderCard, InnerContainer} from './styled'

const OrderInProgressCard = ({ data }) => (
    <OrderCard>
      <InnerContainer>
        <img
          src='https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/0A85F077-06AC-463E-AA27-702101B0326A.svg'
          alt='Relógio'
        />
        <div>
          <p>Pedido em andamento</p>
          <p>{data.restaurantName}</p>
          <p>
            <strong>
              SUBTOTAL R$ {data.totalPrice.toFixed(2).replace('.', ',')}
            </strong>
          </p>
        </div>
      </InnerContainer>
    </OrderCard>
  )
  
  export default OrderInProgressCard