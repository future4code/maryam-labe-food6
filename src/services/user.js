import axios from "axios";
import { URL_Base } from "../constants/urls";
import { goToAddAddress } from "../routes/coordinator";

export const signUp = (body, clear, history) => {
    axios
      .post(`${URL_Base}/signup`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        goToAddAddress(history)
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };