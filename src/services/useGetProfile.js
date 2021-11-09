import axios from "axios";
import React, { useContext } from "react";
import { URL_Base } from "../constants/urls";
import { GlobalContext } from "../contexts/GlobalContext";

const useGetProfile = () => {
    const {setters} = useContext(GlobalContext)
    const {setProfile} = setters

    const getProfile = (token) => {
        const headers = {
            headers: {
                auth: token
            }
        }

        axios
        .get(`${URL_Base}/profile`, headers)
        .then((res) => {
            setProfile(res.data.user)
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }

    return { getProfile }
}

export default useGetProfile
