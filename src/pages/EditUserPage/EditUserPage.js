import React from "react"
import { useHistory } from "react-router-dom"
import Header from "../../components/Header/Header"
import useProtectedPage from "../../hooks/useProtectedPage"
import FormEditAddress from "./FormEditUser"

const EditUserPage = () => {
    useProtectedPage()
    const history = useHistory()
    
    return (
        <div>
            <Header />
            <FormEditAddress />
        </div>
    )
}

export default EditUserPage