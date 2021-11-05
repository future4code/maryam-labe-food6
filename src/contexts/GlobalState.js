import React, { useState } from "react";
import { URL_Base } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    // Adicionar estados importantes para o app todo.
    const [cart, setCart] = useState([])
    const [editProfile, setEditProfile] = useState({})

    
    // Pode-se adicionar request também se necessário.
    const profile = useRequestData({}, `${URL_Base}/profile`, 'user')
    
    
    const states = {cart, editProfile}
    const setters = {setCart, setEditProfile}
    const requests = {profile}

    return (
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;