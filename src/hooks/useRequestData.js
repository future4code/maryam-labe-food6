import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialData, url, parametro, token) => {
    const [data, setData] = useState(initialData)
    const headers = {
        headers: {
            auth: token
        }
    }

    useEffect(() => {
        axios
        .get(url, headers)
        .then((res) => {
            if (parametro) {
                setData(res.data[parametro])
                // console.log(res)
            } else {
                setData(res.data)
                console.log(res)
            }
        })
        .catch((err) => {
            console.log(err.response)
        })
    }, [url])

    return data
}

export default useRequestData