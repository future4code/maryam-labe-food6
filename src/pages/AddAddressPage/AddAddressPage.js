import React from "react";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddressForm from "./AddressForm";
import { ScreenAddress } from "./styled";
import { ToastContainer } from "react-toastify";

const AddAddressPage = () => {
  useProtectedPage();

  return (
    <div>
      <Header />
      <ScreenAddress>
        <p>Meu endereço</p>
        <AddressForm />
      </ScreenAddress>
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

export default AddAddressPage;