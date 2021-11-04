import React, { useEffect, useState, useContext } from "react"
import GlobalState from "../../contexts/GlobalState";
import useRequestData from "../../hooks/useRequestData"
import { URL_Base } from "../../constants/urls"
import { useParams } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage"
import { RestaurantDetailsPageContainer, HeaderContainer, BodyContainer, RestauranteDetails } from './styled'
import back from '../../assets/imgs/back.png'
import { headers } from "../../constants/urls"
import axios from "axios"

const RestaurantDetailsPage = () => {
    useProtectedPage()
    const params = useParams()
    //trocar o id da URL por ${params.id}
    const restaurante = useRequestData({}, `${URL_Base}/restaurants/1`, 'restaurant')
    console.log(restaurante)
    console.log(restaurante.products)
    
    const {states, setters} = useContext(GlobalState)

    

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


    return (
        <RestaurantDetailsPageContainer>
            <HeaderContainer>
                <img src={back} />
                <p>Restaurante</p>
            </HeaderContainer>
            <BodyContainer>
                <RestauranteDetails>
                    <img src={restaurante.logoUrl}></img>
                    <h4>{restaurante.name}</h4>
                    <p>{restaurante.category}</p>
                    <div>
                        <p>{(restaurante.deliveryTime) - 10} - {restaurante.deliveryTime} min</p>
                        <p>Frete R${restaurante.shipping}</p>
                    </div>
                    <p>{restaurante.address}</p>
                </RestauranteDetails>
            </BodyContainer>
            
        </RestaurantDetailsPageContainer>
    )
}

export default RestaurantDetailsPage