import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import FormSignUp from "./FormSignUp";
import { HeaderSignUp } from "./styled";

const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <HeaderSignUp>
      <img src="" alt="Logo IFuture" />
      <h4>Cadastrar</h4>
      <FormSignUp />
    </HeaderSignUp>
  );
};

export default SignUpPage;
