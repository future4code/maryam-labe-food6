import React, {useState, useEffect, useContext} from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getAddress, setUserAdress } from "../../services/user";
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


const CartPage = () => {
    const {requests} = useContext(GlobalContext)
    const {restaurante} = requests
    const newProducts = restaurante.products
    const [userAddress, setUserAddress] = useState(undefined)

    useEffect(() => {
        getAddress()
    }, [])

    const removeToCart = (id) => {
        const newCart = {...newProducts, products: listProducts}
        newProducts.setCart(newCart)

        const listProducts = newProducts.map(product => {
            if (product.id === id) {
                const newQuantity = product.quantity - 1
                const infosProduct = {
                    ...product, quantity: newQuantity
                }
                return infosProduct


    const subtotalCart = () => {
        let subtotalPrice = 0

        if ((newProducts).length !== 0) {
            newProducts.forEach(
            (product) => {
              subtotalPrice += product.price * product.quantity
            }
        )
            return newProducts.shipping + subtotalPrice
        }
        return 0
    }


    const ContainerFoodCard = newProducts && newProducts.map((product) => {
        return(
            <CardComidas key={product.id}>
                <img src={product.photoUrl} alt="fot de lanche"/>
                
                <div>
                    <CardInfos>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>R$ {product.price}</p>
                    </CardInfos>

                    {/* <Quantidade>
                        <button>{product.quantity}</button>
                    </Quantidade>
                    
                    <BotaoRemover>
                        <button onClick={() => removeItem(restaurante.products.id)}>-</button>
                    </BotaoRemover> */}
                </div>
            
            </CardComidas>
        )
    })
    
    return (
        <ContainerCarrinho>
            <NavBar>
                <h3>Meu Carrinho</h3>
            </NavBar>

            <EnderecoUsuario>
                <p>Endereço de entrega</p>
                <p>{userAddress}</p>
            </EnderecoUsuario>

            <EnderecoRestaurante>
                <p>{restaurante.name}</p>
                <p>{restaurante.address}</p>
                <p>{restaurante.deliveryTime} min</p>
            </EnderecoRestaurante>

            {ContainerFoodCard}

            <Frete>Frete R$ 10,00</Frete>

            <Subtotal>
                <p>SUBTOTAL</p>
                <p>{subtotalCart}</p>
            </Subtotal>

            <ContainerPagamento>
                <p>Forma de Pagamento</p>
            </ContainerPagamento>

            <BotaoConfirmar>
                <p>Confirmar</p>
            </BotaoConfirmar>
        
        </ContainerCarrinho>
    )
}

export default CartPage;