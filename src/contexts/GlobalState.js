import React, { useState } from "react";
import { URL_Base } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    // Adicionar estados importantes para o app todo.
    const [cart, setCart] = useState([])
    const [restaurants, setRestaurants] = useState([]);
    const [profile, setProfile] = useState({})

    
    // Pode-se adicionar request também se necessário.
    const restaurante = useRequestData({}, `${URL_Base}/restaurants/1`, 'restaurant')
    const addressUser = useRequestData({}, `${URL_Base}/profile/address`, 'address')

    
    const states = {cart, restaurants, profile}
    const setters = {setCart, setRestaurants, setProfile}
    const requests = {restaurante, addressUser}
    
    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;