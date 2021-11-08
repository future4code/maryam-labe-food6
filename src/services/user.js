import axios from "axios";
import { URL_Base, headers } from "../constants/urls";
import { goToAddAddress, goToProfile } from "../routes/coordinator";
import { goToFeed } from "../routes/coordinator"



export const signUp = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios
      .post(`${URL_Base}/signup`, body)
      .then((res) => {
        setIsLoading(false)
        localStorage.setItem('token', res.data.token)
        goToAddAddress(history)
        clear()
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message);
      });
  };

export const login = (body, clear, history, setIsLoading) => {
    setIsLoading(true)
    axios
    .post(`${URL_Base}/login`, body)
    .then((res) => {
        setIsLoading(false)
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => {
      setIsLoading(false)
        alert(err.response.data.message)
    });
};

export const address = (body, clear, history, setIsLoading) => {
  setIsLoading(true)
  axios.put(`${URL_Base}/address`, body, headers)
  .then((res) => {
    setIsLoading(false)
    localStorage.removeItem('token')
    localStorage.setItem('token', res.data.token)
    goToFeed(history)
    clear()
  }).catch((err) => {
    setIsLoading(false)
    console.log(err.message)
  })
}

export const addressEdit = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios.put(`${URL_Base}/address`, body, headers)
  .then((res) => {
    setIsLoading(false)
    goToProfile(history)
  }).catch((err) => {
    setIsLoading(false)
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

export const updateProfile = (body, history, setIsLoading) => {
  setIsLoading(true)
  axios
  .put(`${URL_Base}/profile`, body, headers)
  .then((res) => {
    setIsLoading(false)
    console.log(res)
    goToProfile(history)
  })
  .catch((err) => {
    setIsLoading(false)
    console.log(err.response)
  })
}