import React from "react"
import { useHistory } from "react-router-dom"
import useProtectedPage from "../../hooks/useProtectedPage"
import { goToProfile } from "../../routes/coordinator"
import FormEditUser from "./FormEditAddress"
import { HeaderContainer, IconBack } from "./styled"

const EditAddressPage = () => {
    useProtectedPage()
    const history = useHistory()

    return (
        <div>
            <HeaderContainer>
                <IconBack  onClick={() => goToProfile(history)}/>
                <p>Endereço</p>
            </HeaderContainer>
            <FormEditUser />
        </div>
    )
}

export default EditAddressPage