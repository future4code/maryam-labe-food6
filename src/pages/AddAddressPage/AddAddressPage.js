import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddressForm from "./AddressForm";
import { ScreenAddress } from "./styled";

const AddAddressPage = () => {
  useProtectedPage();

  return (
    <ScreenAddress>
      <h4>Meu endereço</h4>
      <AddressForm />
    </ScreenAddress>
  );
};

export default AddAddressPage;