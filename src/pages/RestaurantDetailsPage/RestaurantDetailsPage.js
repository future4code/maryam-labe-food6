import React, { useEffect, useState } from "react"
import useRequestData from "../../hooks/useRequestData"
import { URL_Base } from "../../constants/urls"
import { useParams } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage"
import { RestaurantDetailsPageContainer, ProductCard, DivisorLine, CategoryTitle, AddToCartButton, ProductName, ProductPrice, ProductDescription, HeaderContainer, RestaurantInformation, RestaurantName, BodyContainer, RestaurantDetails } from './styled'
import back from '../../assets/imgs/back.png'


const RestaurantDetailsPage = () => {
    useProtectedPage()
    const params = useParams()
    //trocar o id da URL por ${params.id}
    const restaurant = useRequestData({}, `${URL_Base}/restaurants/4`, 'restaurant')

    const categories = restaurant && restaurant.products && restaurant.products.map((product) => {
        return (product.category)
    })

    const filteredCategories = categories && categories.filter((item, index) => {
        return categories.indexOf(item) === index
    })

    const renderCategories = filteredCategories && filteredCategories.map(item => {
        return (
            <div>
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
                            <AddToCartButton>adicionar</AddToCartButton>
                        </ProductCard>
                    )
                })}</div>
            </div>
        )
    })

    return (
        <RestaurantDetailsPageContainer>
            <HeaderContainer>
                <img src={back} />
                <p>Restaurante</p>
            </HeaderContainer>
            <BodyContainer>
                <RestaurantDetails>
                    <img src={restaurant.logoUrl}></img>
                    <RestaurantName>{restaurant.name}</RestaurantName>
                    <RestaurantInformation>{restaurant.category}</RestaurantInformation>
                    <div>
                        <RestaurantInformation>{(restaurant.deliveryTime) - 10} - {restaurant.deliveryTime} min</RestaurantInformation>
                        <RestaurantInformation>Frete R${restaurant && restaurant.shipping && restaurant.shipping.toFixed(2)}</RestaurantInformation>
                    </div>
                    <RestaurantInformation>{restaurant.address}</RestaurantInformation>
                </RestaurantDetails>
                {renderCategories}
            </BodyContainer>
        </RestaurantDetailsPageContainer>
    )
}

export default RestaurantDetailsPage