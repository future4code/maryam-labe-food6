import React from "react";
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {ScreenContainer, SignUpContainer} from "./styled"


const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    
    return (
        <ScreenContainer>
            <img src="" alt="Logo IFuture" />
            <LoginForm />
            <SignUpContainer>
                <button onClick={() => goToSignUp(history)} type={"submit"}>
                    Não possui cadastro? Clique aqui.
                </button>
            </SignUpContainer>
        </ScreenContainer>
    )
}

export default LoginPage;
