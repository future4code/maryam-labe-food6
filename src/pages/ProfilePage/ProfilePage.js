import React, {useContext, useEffect} from "react"
import { HeaderContainer, InfoProfileContainer, AddressContainer, IconCreateOutlined, HistoryContainer, OrderHistorys } from "./styled"
import { goToEditAddress, goToEditUser } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"
import useProtectedPage from "../../hooks/useProtectedPage"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const ProfilePage = () => {
    useProtectedPage()
    const {states, setters, requests} = useContext(GlobalContext)
    const history = useHistory()
    
    //Talvez melhorar...
    const {profile} = requests
    const {setCart, setEditProfile} = setters
    setEditProfile(profile)


    return (
        <div>
            <Header />
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
                <IconCreateOutlined onClick={() => goToEditAddress(history)}/>
            </AddressContainer>
            <HistoryContainer>
                <p>Histórico de pedidos</p>
            </HistoryContainer>
            <OrderHistorys>
                <p>Você não realizou nenhum pedido</p>
            </OrderHistorys>
            <Footer />
        </div>
    )
}

export default ProfilePage