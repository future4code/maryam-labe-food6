import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import AddressForm from "./AddressForm";

const AddAddressPage = () => {
  useProtectedPage();

  return (
    <div>
      <h1>AddAddressPage</h1>
      <AddressForm />
    </div>
  );
};

export default AddAddressPage;
