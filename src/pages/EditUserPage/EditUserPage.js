import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import FormEditAddress from "./FormEditUser"
import { HeaderContainer } from "./styled"

const EditUserPage = () => {
    useProtectedPage()
    
    return (
        <div>
            <HeaderContainer>
                <p>Editar</p>
            </HeaderContainer>
            <FormEditAddress />
        </div>
    )
}

export default EditUserPage