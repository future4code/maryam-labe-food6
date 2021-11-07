import React from "react"
import { useHistory } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage"
import { goToProfile } from "../../routes/coordinator"
import FormEditAddress from "./FormEditUser"
import { HeaderContainer, IconBack } from "./styled"

const EditUserPage = () => {
    useProtectedPage()
    const history = useHistory()
    
    return (
        <div>
            <HeaderContainer>
                <IconBack  onClick={() => goToProfile(history)}/>
                <p>Editar</p>
            </HeaderContainer>
            <FormEditAddress />
        </div>
    )
}

export default EditUserPage