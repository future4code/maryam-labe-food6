import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import FormSignUp from "./FormSignUp";
import { HeaderSignUp } from "./styled";
import logo from '../../assets/imgs/logo-ifuture.svg'

const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <HeaderSignUp>
      <img src={logo} alt="Logo IFuture" />
      <h4>Cadastrar</h4>
      <FormSignUp />
    </HeaderSignUp>
  );
};

export default SignUpPage;
