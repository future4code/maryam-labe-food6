import React, {useContext} from "react"
import { HeaderContainer, InfoProfileContainer, AddressContainer, IconCreateOutlined, HistoryContainer, OrderHistorys } from "./styled"
import { goToEditUser } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"

const ProfilePage = () => {
    const {states, setters, requests} = useContext(GlobalContext)
    const history = useHistory()
    const {profile} = requests

    const {setCart, setEditProfile} = setters
    setEditProfile(profile)


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
                <IconCreateOutlined onClick={() => goToEditUser(history)}/>
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