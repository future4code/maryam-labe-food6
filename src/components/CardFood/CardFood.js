import React from "react";
import {ContainerCarrinho,
        NavBar,
        EnderecoUsuario,
        EnderecoRestaurante,
        CardComidas,
        CardInfos,
        Quantidade,
        BotaoRemover,
        Frete,
        Subtotal,
        ContainerPagamento,
        BotaoConfirmar} from "./styled";


        const CardFood = (props) => {
    return(
        <ContainerCarrinho>
            <NavBar>
                <h3>Meu Carrinho</h3>
            </NavBar>

            <EnderecoUsuario>
                <p>Endereço de entrega</p>
                <p>Rua Alessandra Vieira, 42</p>
            </EnderecoUsuario>

            <EnderecoRestaurante>
                <p>Bullguer Vila Madalena</p>
                <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
                <p>30 - 45 min</p>
            </EnderecoRestaurante>

            <CardComidas>
                <img src={props.photoUrl} alt="fot de lanche"/>
                
                <CardInfos>
                    <p>{props.name}</p>
                    <p>{props.decription}</p>
                    <p>{props.price}</p>
                </CardInfos>

                <Quantidade>
                    <button>{props.quantity}</button>
                </Quantidade>
                
                <BotaoRemover>
                    <button onClick={() => props.removeItem(props.id)}>-</button>
                    <button onClick={() => props.addItem(props.id)}>+</button>
                </BotaoRemover>
            </CardComidas>

            <Frete/>

            <Subtotal>
                <p>SUBTOTAL</p>
                <p>R$ 60,00</p>
            </Subtotal>

            <ContainerPagamento>
                <p>Forma de Pagamento</p>
            </ContainerPagamento>

            <BotaoConfirmar>
                <p>Confirmar</p>
            </BotaoConfirmar>

        </ContainerCarrinho>
    )
};

export default CardFood;