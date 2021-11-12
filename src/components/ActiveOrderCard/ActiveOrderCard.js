import React from "react";
import iconClock from "../../assets/imgs/clock.png"
import { MainContainer, OrderContainer } from "./styled";

const ActiveOrderCard = ({data}) => {
    return (
    <OrderContainer>
        <MainContainer>
            <img src={iconClock} alt={"Relóginho"}/>
            <div>
                <p>Pedido em andamento</p>
                <p>{data.restaurantName}</p>
                <p>
                    <strong>
                        SUBTOTAL R$ {data.totalPrice.toFixed(2).replace(".", ",")}
                    </strong>
                </p>
            </div>
        </MainContainer>
    </OrderContainer>
    )
}

export default ActiveOrderCard