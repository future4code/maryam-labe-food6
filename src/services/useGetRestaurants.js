import React, { useContext } from "react";
import axios from "axios"
import { GlobalContext } from "../contexts/GlobalContext";
import { URL_Base } from "../constants/urls";

const useGetRestaurants = () => {
    const {setters} = useContext(GlobalContext)
    const {setRestaurants} = setters

    const getRestaurants = (token) => {
        const headers = {
            headers: {
                auth: token
            }
        }

        axios
        .get(`${URL_Base}/restaurants`, headers)
        .then((res) => {
            setRestaurants(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return { getRestaurants }
}

export default useGetRestaurants
