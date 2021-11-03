import axios from "axios"
import { useEffect, useState } from "react"
import { headers } from "../constants/urls"

const useRequestData = (initialData, url, parametro) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios
        .get(url, headers)
        .then((res) => {
            if (parametro) {
                setData(res.data[parametro])
            } else {
                setData(res.data)
            }
        })
        .catch((err) => {
            console.log(err.response)
        })
    }, [url])

    return data
}

export default useRequestData