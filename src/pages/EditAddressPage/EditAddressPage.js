import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import FormEditUser from "./FormEditAddress";
import { ToastContainer } from "react-toastify";

const EditAddressPage = () => {
  useProtectedPage();
  const history = useHistory();

  return (
    <div>
      <Header />
      <FormEditUser />
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

export default EditAddressPage;
