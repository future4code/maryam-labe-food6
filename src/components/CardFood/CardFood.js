import React, {useContext} from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
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


const CardFood = () => {
    const {states, setters, requests} = useContext(GlobalContext)
    const {restaurante} = requests
    console.log(restaurante)
    const newProducts = restaurante.products
    console.log(newProducts)

    const FoodCard = newProducts && newProducts.map((product) => {
        return(
            <CardComidas key={product.id}>
                <img src={product.photoUrl} alt="fot de lanche"/>
                
                <div>
                    <CardInfos>
                        <p>{product.name}</p>
                        <p>{product.decription}</p>
                        <p>{product.price}</p>
                    </CardInfos>

                    <Quantidade>
                        <button>{product.quantity}</button>
                    </Quantidade>
                    
                    <BotaoRemover>
                        {/* <button onClick={() => removeItem(restaurante.products.id)}>-</button> */}
                    </BotaoRemover>
                </div>
            
            </CardComidas>
        )
    })
    
    
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
                <p>{restaurante.name}</p>
                <p>{restaurante.address}</p>
                <p>{restaurante.deliveryTime}</p>
            </EnderecoRestaurante>

            {FoodCard}
            
            {/* <CardComidas>
                <img src={restaurante.products.photoUrl} alt="fot de lanche"/>
                
                <CardInfos>
                    <p>{restaurante.products.name}</p>
                    <p>{restaurante.products.decription}</p>
                    <p>{restaurante.products.price}</p>
                </CardInfos>

                <Quantidade>
                    <button>{restaurante.products.quantity}</button>
                </Quantidade>
                
                <BotaoRemover>
                    <button onClick={() => removeItem(restaurante.products.id)}>-</button>
                </BotaoRemover>
            </CardComidas> */}

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