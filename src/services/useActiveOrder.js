import axios from "axios";
import React, { useState } from "react";
import { URL_Base } from "../constants/urls";

const useActiveOrder = () => {
    const [activeOrder, setActiveOrder] = useState({})

    const getActiveOrder = (token) => {
        const headers = {
            headers: {
                auth: token
            }
        }
        axios
        .get(`${URL_Base}/active-order`, headers)
        .then((res) => {
            setActiveOrder(res.data.order)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return { getActiveOrder, activeOrder }
}

export default useActiveOrder