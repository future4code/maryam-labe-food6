import React, { useState } from "react";
import { URL_Base } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    // Adicionar estados importantes para o app todo.
    const [cart, setCart] = useState({
        products: [],
        paymentMethod: ""
    })
    const [cartProducts, setCartProducts] = useState([])
    const [restaurants, setRestaurants] = useState([]);
    const [restaurant, setRestaurant] = useState({})
    const [actualRestaurant, setActualRestaurant] = useState({
        id: '',
        address: '',
        deliveryTime: '',
        shipping: '',
        name: '',
    });
    const [profile, setProfile] = useState({})
    
    const states = {cart, restaurants, profile, cartProducts, restaurant, actualRestaurant}
    const setters = {setCart, setRestaurants, setProfile, setCartProducts, setRestaurant, setActualRestaurant}
    
    return (
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;