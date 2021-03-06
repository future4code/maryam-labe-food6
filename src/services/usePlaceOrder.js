import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { URL_Base } from "../constants/urls";

const usePlaceOrder = () => {
    const [data, setData] = useState("")

    const placeOrder = (actualRestaurantId, token, body) => {
        const headers = {
            headers: {
                auth: token
            }
        }

        axios
        .post(`${URL_Base}/restaurants/${actualRestaurantId}/order`, body, headers)
        .then((res) => {
            setData(res.data)
            toast.success("Pedido realizado com sucesso!")
        })
        .catch((err) => {
            toast.error(err.response.data.message)
        })
    }

    return { data, placeOrder }
}

export default usePlaceOrder