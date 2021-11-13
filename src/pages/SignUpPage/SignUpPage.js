import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import FormSignUp from "./FormSignUp";
import { HeaderSignUp } from "./styled";
import logo from '../../assets/imgs/logo-ifuture.svg'
import Header from "../../components/Header/Header";
import { ToastContainer } from "react-toastify";

const SignUpPage = () => {
  useUnprotectedPage();

  return (
    <div>
      <Header />
      <HeaderSignUp>
        <img src={logo} alt="Logo IFuture" />
        <h4>Cadastrar</h4>
        <FormSignUp />
      </HeaderSignUp>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default SignUpPage;
