import axios from "axios";
import { URL_Base, headers } from "../constants/urls";
import { goToAddAddress, goToProfile } from "../routes/coordinator";
import { goToFeed } from "../routes/coordinator"



export const signUp = (body, clear, history) => {
    axios
      .post(`${URL_Base}/signup`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        clear()
        goToAddAddress(history)
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

export const login = (body, clear, history) => {
    axios
    .post(`${URL_Base}/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => {
        alert(err.response.data.message)
    });
};

export const address = (body, clear, history) => {
  axios.put(`${URL_Base}/address`, body, headers)
  .then((res) => {
    localStorage.removeItem('token')
    localStorage.setItem('token', res.data.token)
    clear()
    goToFeed(history)
  }).catch((err) => {
    console.log(err.message)
  })
}

export const getAddress = (setUserAddress) => {
  axios
  .get(`${URL_Base}/profile/address`, headers )
    .then(response => {
      setUserAddress(response.data.address)
    }).catch(error => {
      console.log(error.message)
    })
}

export const updateProfile = (body, history) => {
  axios
  .put(`${URL_Base}/profile`, body, headers)
  .then((res) => {
    console.log(res)
    goToProfile(history)
  })
  .catch((err) => {
    console.log(err.response)
  })
}