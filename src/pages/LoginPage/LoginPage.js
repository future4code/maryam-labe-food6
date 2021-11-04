import React from "react";
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {ScreenContainer, SignUpContainer} from "./styled"
import logo from '../../assets/imgs/logo-ifuture.svg'


const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    
    return (
        <ScreenContainer>
            <img src={logo} alt="Logo IFuture" />
            <p><b>Entrar</b></p>
            <LoginForm />
            <SignUpContainer>
                <a onClick={() => goToSignUp(history)} type={"submit"}>
                    <b>Não possui cadastro? Clique aqui.</b>
                </a>
            </SignUpContainer>
        </ScreenContainer>
    )
}

export default LoginPage;
