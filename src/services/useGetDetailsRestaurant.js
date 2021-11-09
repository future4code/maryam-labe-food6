import axios from "axios";
import React, { useContext } from "react";
import { URL_Base } from "../constants/urls";
import { GlobalContext } from "../contexts/GlobalContext";

const useGetDetailsRestaurant = () => {
    const {setters} = useContext(GlobalContext)
    const {setRestaurant} = setters

    const getDetailsRestaurant = (params, token) => {
        const headers = {
            headers: {
                auth: token
            }
        }

        axios
        .get(`${URL_Base}/restaurants/${params.id}`, headers)
        .then((res) => {
            setRestaurant(res.data.restaurant)
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }

    return { getDetailsRestaurant }
}

export default useGetDetailsRestaurant