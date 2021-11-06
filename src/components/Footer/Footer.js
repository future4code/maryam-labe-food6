import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeed, goToProfile, goToCart } from '../../routes/coordinator'
import { Container, FooterIcones } from './styled'

import carrinhobranco from '../../assets/imgs/cart-branco.svg'
import carrinhovermelho from '../../assets/imgs/cart-vermelho.svg'
import homebranco from '../../assets/imgs/home-branco.svg'
import homevermelho from '../../assets/imgs/home-vermelho.svg'
import profilebranco from '../../assets/imgs/profile-branco.svg'
import profilevermelho from '../../assets/imgs/profile-vermelho.svg'


const Footer = () => {
    const history = useHistory()

    return (
        <Container>
            <FooterIcones>
                <img src={history.location.pathname === "/" ? homevermelho : homebranco} alt="icone home" onClick={() => goToFeed(history)} />
                <img src={history.location.pathname === "/carrinho" ? carrinhovermelho : carrinhobranco} alt="icone carrinho" onClick={() => goToCart(history)} />
                <img src={history.location.pathname === "/perfil" ? profilevermelho : profilebranco} alt="icone Perfil" onClick={() => goToProfile(history)} />
            </FooterIcones>
        </Container>
    )
}

export default Footer;