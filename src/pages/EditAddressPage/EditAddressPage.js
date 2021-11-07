import React from "react"
import { useHistory } from "react-router-dom"
import Header from "../../components/Header/Header"
import useProtectedPage from "../../hooks/useProtectedPage"
import FormEditUser from "./FormEditAddress"
import { HeaderContainer, IconBack } from "./styled"

const EditAddressPage = () => {
    useProtectedPage()
    const history = useHistory()

    return (
        <div>
            <Header />
            <FormEditUser />
        </div>
    )
}

export default EditAddressPage