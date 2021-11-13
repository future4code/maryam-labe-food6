import axios from "axios";
import { URL_Base } from "../constants/urls";
import { useState } from "react";

export function useOrderInProgress() {
  const [orderInProgress, setOrderInProgress] = useState({});

  const getOrderInProgress = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${URL_Base}/active-order`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setOrderInProgress(res.data?.order);
      })
      .catch((err) => {
        console.log(err.response.data, token);
      });
  };

  return { getOrderInProgress, orderInProgress };
}
