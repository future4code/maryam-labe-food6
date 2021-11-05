import React from "react"
import FormEditUser from "./FormEditAddress"
import { HeaderContainer } from "./styled"

const EditAddressPage = () => {
    return (
        <div>
            <HeaderContainer>
                <p>Endereço</p>
            </HeaderContainer>
            <FormEditUser />
        </div>
    )
}

export default EditAddressPage