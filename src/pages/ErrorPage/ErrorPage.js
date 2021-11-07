import React from "react"
import error from "../../assets/imgs/error.png"
import { ErrorPageContainer, ErrorImagem, Titulo } from "./styled"

import Footer from "../../components/Footer/Footer"

const ErrorPage = () => {
    return (
        <div>
            <ErrorPageContainer>
                <ErrorImagem src={error} alt="imagem de erro"/>
                <Titulo>Erro 404 - Página não encontrada</Titulo>
            </ErrorPageContainer>
            
            <Footer />
        </div>
    )
}

export default ErrorPage