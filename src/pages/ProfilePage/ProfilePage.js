import React, { useContext, useEffect, useState } from "react"
import {
    HeaderContainer,
    InfoProfileContainer,
    AddressContainer,
    IconCreateOutlined,
    HistoryContainer,
    OrderHistorys,
    OrderHistoryCard
} from "./styled"
import { goToEditAddress, goToEditUser } from "../../routes/coordinator"
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext"
import useProtectedPage from "../../hooks/useProtectedPage"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import useGetProfile from "../../services/useGetProfile"
import { ordersHistory } from "../../services/user"

const ProfilePage = () => {
    useProtectedPage()
    const { states, setters, requests } = useContext(GlobalContext)
    const history = useHistory()
    const { profile } = states
    const { getProfile } = useGetProfile()
    const token = localStorage.getItem("token")
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getProfile(token)
    }, [])

    useEffect(() => {
        ordersHistory(setOrders, token)
    }, [])

    const convertDate = (timestamp) => {
        let time = new Date(timestamp)
        let day = time.getDate().toString().padStart(2, '0')
        let month = (time.getMonth() + 1).toString().padStart(2, '0')
        let year = time.getFullYear()

        return `${day}/${month}/${year}`;
    };

    const showOrders =
        orders.length > 0 ? (
            orders.map((order, index) => (
                <OrderHistoryCard key={index}>
                    <p>{order.restaurantName}</p>
                    <p>{convertDate(order.createdAt)}</p>
                    <p>SUBTOTAL R${order.totalPrice.toFixed(2).replace(/\./g, ',')}</p>
                </OrderHistoryCard>
            ))
        ) : (
            <p style={{ textAlign: 'center' }}>Você não realizou nenhum pedido</p>
        );

    return (
        <div>
            <Header />
            <InfoProfileContainer>
                <div>
                    <p>{profile.name}</p>
                    <p>{profile.email}</p>
                    <p>{profile.cpf}</p>
                </div>
                <IconCreateOutlined onClick={() => goToEditUser(history)} />
            </InfoProfileContainer>
            <AddressContainer>
                <div>
                    <p>Endereço cadastrado</p>
                    <p>{profile.address}</p>
                </div>
                <IconCreateOutlined onClick={() => goToEditAddress(history)} />
            </AddressContainer>
            <HistoryContainer>
                <p>Histórico de pedidos</p>
            </HistoryContainer>
            <OrderHistorys>
                {showOrders}
            </OrderHistorys>
            <Footer />
        </div>
    )
}

export default ProfilePage