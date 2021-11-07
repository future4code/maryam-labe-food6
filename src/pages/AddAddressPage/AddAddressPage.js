import React from "react";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddressForm from "./AddressForm";
import { ScreenAddress } from "./styled";

const AddAddressPage = () => {
  useProtectedPage();

  return (
    <div>
      <Header />
      <ScreenAddress>
        <p>Meu endereço</p>
        <AddressForm />
      </ScreenAddress>
    </div>
  );
};

export default AddAddressPage;