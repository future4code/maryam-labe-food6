import React from "react"
import { HeaderContainer, InfoProfileContainer, AddressContainer, IconCreateOutlined, HistoryContainer, OrderHistorys } from "./styled"
import { CreateOutlined } from "@material-ui/icons"
import useRequestData from "../../hooks/useRequestData"
import { URL_Base } from "../../constants/urls"

const ProfilePage = () => {

    const profile = useRequestData({}, `${URL_Base}/profile`, 'user')

    console.log(profile)
    return (
        <div>
            <HeaderContainer>
                <p>Meu perfil</p>
            </HeaderContainer>
            <InfoProfileContainer>
                <div>
                    <p>{profile.name}</p>
                    <p>{profile.email}</p>
                    <p>{profile.cpf}</p>
                </div>
                <IconCreateOutlined />
            </InfoProfileContainer>
            <AddressContainer>
                <div>
                    <p>Endereço cadastrado</p>
                    <p>{profile.address}</p>
                </div>
                <IconCreateOutlined />
            </AddressContainer>
            <HistoryContainer>
                <p>Histórico de pedidos</p>
            </HistoryContainer>
            <OrderHistorys>
                <p>Você não realizou nenhum pedido</p>
            </OrderHistorys>
        </div>
    )
}

export default ProfilePage