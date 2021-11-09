import React, { useEffect, useState, useContext } from "react"
import { useParams, useHistory } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage"
import { RestaurantDetailsPageContainer, ProductCard, DivisorLine, CategoryTitle, AddToCartButton, ProductName, ProductPrice, ProductDescription, HeaderContainer, RestaurantInformation, RestaurantName, BodyContainer, RestaurantDetails } from './styled'
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../components/Header/Header";
import useGetDetailsRestaurant from "../../services/useGetDetailsRestaurant";


const RestaurantDetailsPage = () => {
    useProtectedPage()
    const params = useParams()
    const { setters, states } = useContext(GlobalContext)
    const { setCart, setCartProducts } = setters
    const { cart, cartProducts } = states
    const token = localStorage.getItem("token")
    const { getDetailsRestaurant } = useGetDetailsRestaurant()
    const {restaurant} = states

    useEffect(() => {
        getDetailsRestaurant(params, token)
    }, [])


    //função para add ao carrinho
    const addToCart = (id) => {
        const newProducts = cart && cart.products && cart.products.map(product => {
            if (product.id === id) {
                const newQuantity = product.quantity + 1
                const infosProduct = {
                    ...product, quantity: newQuantity
                }
                console.log('add sendo q ja tinha:', product.id)
                return infosProduct

            } else {
                console.log('add um prod novo:', product.id)
                return product
            }
        })
        const newCart = { ...cart, products: newProducts }
        setters.setCart(newCart)
        console.log(cart)
    }

    // array de categorias
    const categories = restaurant && restaurant.products && restaurant.products.map((product) => {
        return (product.category)
    })

    //array filtrada, removendo as categorias repetidas
    const filteredCategories = categories && categories.filter((item, index) => {
        return categories.indexOf(item) === index
    })

    //mostrando categorias na tela com seus produtos logo abaixo
    const renderCategories = filteredCategories && filteredCategories.map(item => {
        return (
            <div key={item}>
                <CategoryTitle>{item}</CategoryTitle>
                <DivisorLine />
                <div>{restaurant && restaurant.products && restaurant.products
                    .filter(product => {
                        return product.category === item
                    })
                    .map(product => {
                        return (
                            <ProductCard key={product.id}>
                                <img src={product.photoUrl} />
                                <div>
                                    <ProductName>{product.name}</ProductName>
                                    <ProductDescription>{product.description}</ProductDescription>
                                    <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
                                </div>
                                <AddToCartButton onClick={() => addToCart(product.id)}>adicionar</AddToCartButton>
                            </ProductCard>
                        )
                    })}</div>
            </div>
        )
    })


    return (
        <RestaurantDetailsPageContainer>
            <Header />
            <BodyContainer>
                <RestaurantDetails>
                    <img src={restaurant.logoUrl}></img>
                    <RestaurantName>{restaurant.name}</RestaurantName>
                    <RestaurantInformation>{restaurant.category}</RestaurantInformation>
                    <div>
                        <RestaurantInformation>{(restaurant.deliveryTime) - 10} - {restaurant.deliveryTime} min</RestaurantInformation>
                        <RestaurantInformation>Frete R$ {restaurant && restaurant.shipping && restaurant.shipping.toFixed(2)}</RestaurantInformation>
                    </div>
                    <RestaurantInformation>{restaurant.address}</RestaurantInformation>
                </RestaurantDetails>
                {renderCategories}
            </BodyContainer>
        </RestaurantDetailsPageContainer>
    )
}

export default RestaurantDetailsPage;


 // Para adiconar dps os produtos 

    // const addToCart = (id) => {
    //     const newCart = {...states.cart, products: listProducts}
    //     setters.setCart(newCart)

    //     const listProducts = states.cart.products.map(product => {
    //         if (product.id === id) {
    //             const newQuantity = product.quantity + 1
    //             const infosProduct = {
    //                 ...product, quantity: newQuantity
    //             }
    //             return infosProduct

    //         } else {
    //             return product
    //         }
    //     })
    // }