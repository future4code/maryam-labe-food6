import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    // Adicionar estados importantes para o app todo.
    const [cart, setCart] = useState([])
    const [profile, setProfile] = useState({})

    const states = {cart, profile}
    const setters = {setCart, setProfile}

    // Pode-se adicionar request também se necessário.

    return (
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState