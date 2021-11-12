import { Button } from "@material-ui/core";
import React, {useState, useEffect, useContext} from "react";
import { useHistory, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToFeed } from "../../routes/coordinator";
import useGetProfile from "../../services/useGetProfile";
import usePlaceOrder from "../../services/usePlaceOrder"
import { getAddress, setUserAdress } from "../../services/user";
import {ContainerCarrinho,
        NavBar,
        EnderecoUsuario,
        EnderecoRestaurante,
        Frete,
        Subtotal,
        ContainerPagamento,
        BotaoConfirmar,
        ProductCard,
        ProductName,
        ProductDescription,
        ProductPrice,
        RemoveToCartButton,
        Quantity,
        Total,
        ButtonContainer,
        MainContainer} from "./styled";

const CartPage = () => {
    const {states, setters} = useContext(GlobalContext)
    const {cart, profile, restaurant, cartProducts, actualRestaurant} = states
    const {setCart, setCartProducts, setActualRestaurant} = setters
    const [totalPrice , setTotalPrice] = useState(0)
    const token = localStorage.getItem("token")
    const { getProfile }= useGetProfile()
    // const newProducts = restaurant.products
    const [priceTotal, setPriceTotal] = useState(0)
    const params = useParams()
    const { data, placeOrder } = usePlaceOrder()
    const history = useHistory()


    useEffect(() => {
        getProfile(token)
        totalCart()
    })

    const dataPlaceOrder = () => {
        if (cart.paymentMethod !== "" && cart.products.length > 0 && actualRestaurant.id !== "") {
            placeOrder(params.id, token, cart)
            setCartProducts([])
            setActualRestaurant({
                id: '',
                address: '',
                deliveryTime: '',
                shipping: '',
                name: '',
            })
            setCart({
                products: [],
                paymentMethod: ""
            })
            setTimeout(() => goToFeed(history), 3000)
        } else if (cart.products.length == 0 && cart.paymentMethod !== "") {
            alert("Adicione um produto ao carrinho")
        } else if (cart.paymentMethod === "" && cart.products.length > 0) {
            alert("Por favor, selecione um método de pagamento para prosseguir")
        } else {
            alert("Para prosseguir com a compra, adicione produtos ao carrinho e selecione um método de pagamento")
        }
    }

    const removeFromCart = (id) => {
        const spreadCart = cart
        const filteredSpreadCart = spreadCart.products && spreadCart.products.filter((product) => 
            product.id !== id
        );
        setCart({...cart, products: filteredSpreadCart })

        const spreadCartProducts = cartProducts;
        const filteredSpreadCartProducts = spreadCartProducts.filter((product) => 
            product.id !== id
        )
        setCartProducts(filteredSpreadCartProducts);
    }

    const totalCart = () => {
        let totalPrice = 0
        let item
        for (const product of cartProducts) {
            item = cart.products.find((item) => 
                item.id === product.id
            )
            if (item && Object.keys(item).length > 0) {
                totalPrice += product.price * item.quantity
            }
        }
        setTotalPrice(totalPrice)
    }

    const ContainerFoodCard = cartProducts && cartProducts.map((product) => {
        const findId = cart?.products.filter((prod) => 
        prod.id === product.id
        )
    return (
        <ProductCard key={product.id}>
            <img src={product.photoUrl} />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
            </div>
                <RemoveToCartButton onClick={() => {
                    removeFromCart(product.id) 
                    if (cart.products.length == 1) {
                        setActualRestaurant({
                            id: '',
                            address: '',
                            deliveryTime: '',
                            shipping: '',
                        })
                    }}
                }>Remover</RemoveToCartButton>
            {findId.length > 0 && <Quantity>{findId[0].quantity}</Quantity>}
        </ProductCard>
    )
    })
    
    return (
        <div>
            <Header />
            <MainContainer>
                <EnderecoUsuario>
                    <p>Endereço de entrega</p>
                    <p>{profile.address}</p>
                </EnderecoUsuario>

                <EnderecoRestaurante>
                    <p>{actualRestaurant.name}</p>
                    <p>{actualRestaurant.address}</p>
                    <p>{actualRestaurant.deliveryTime} min</p>
                </EnderecoRestaurante>

                {ContainerFoodCard}

                <Frete>Frete R$ {actualRestaurant.shipping},00</Frete>

                <Subtotal>
                    <p>SUBTOTAL</p>
                    <p>R$ {totalPrice.toFixed(2).replace(".", ",")}</p>
                </Subtotal>
                <Total>
                    <p>TOTAL</p>
                    {totalPrice && actualRestaurant.shipping ? (<p>R$ {(totalPrice + actualRestaurant.shipping).toFixed(2).replace(".", ",")}</p>)
                    :
                    (<p>R$ 0,00</p>)}
                    
                </Total>

                <ContainerPagamento>
                    <p>Forma de Pagamento</p>
                </ContainerPagamento>
                <ButtonContainer>
                    <BotaoConfirmar onClick={() => dataPlaceOrder()} variant={"contained"} color={"primary"}>
                        <p>Confirmar</p>
                    </BotaoConfirmar>
                </ButtonContainer>
            </MainContainer>
                <Footer />
        </div>
    )
}

export default CartPage;