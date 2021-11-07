import React from "react"
import error from "../../assets/imgs/error.png"
import { ErrorPageContainer, ErrorImagem, Titulo, PageContainer } from "./styled"

import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"

const ErrorPage = () => {
    return (
        <PageContainer>
            <Header />
            <ErrorPageContainer>
                <ErrorImagem src={error} alt="imagem de erro"/>
                <Titulo>Erro 404 - Página não encontrada</Titulo>
            </ErrorPageContainer>
            
            <Footer />
        </PageContainer>
    )
}

export default ErrorPage