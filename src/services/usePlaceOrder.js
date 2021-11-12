import axios from "axios";
import React, { useState } from "react";
import { URL_Base } from "../constants/urls";

const usePlaceOrder = () => {
    const [data, setData] = useState("")

    const placeOrder = (params, token, body) => {
        const headers = {
            headers: {
                auth: token
            }
        }

        axios
        .post(`${URL_Base}/restaurants/${params.id}/order`, body, headers)
        .then((res) => {
            console.log(res)
            setData(res.data)
            alert("Pedido realizado com sucesso!")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return { data, placeOrder }
}

export default usePlaceOrder