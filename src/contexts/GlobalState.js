import React, { useState } from "react";
import { URL_Base } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    // Adicionar estados importantes para o app todo.
    const [cart, setCart] = useState([])
    const [profile, setProfile] = useState({})

    const states = {cart, profile}
    const setters = {setCart, setProfile}
    
    // Pode-se adicionar request também se necessário.
    
    const restaurante = useRequestData({}, `${URL_Base}/restaurants/1`, 'restaurant')

    const requests = {restaurante}

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;