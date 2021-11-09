import axios from "axios";
import { URL_Base } from "../constants/urls";
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

export const login = (body, history, setIsLoading) => {
    setIsLoading(true)
    axios
    .post(`${URL_Base}/login`, body)
    .then((res) => {
        setIsLoading(false)
        localStorage.setItem("token", res.data.token)
        goToFeed(history)
    })
    .catch((err) => {
      setIsLoading(false)
        alert(err.response.data.message)
    });
};

export const address = (body, clear, history, setIsLoading, token) => {
  const headers = {
    headers: {
        auth: token
    }
  }

  setIsLoading(true)
  axios.put(`${URL_Base}/address`, body, headers)
  .then((res) => {
    setIsLoading(false)
    localStorage.setItem('token', res.data.token)
    goToFeed(history)
  }).catch((err) => {
    setIsLoading(false)
    console.log(err.message)
  })
}

export const getAddress = (setUserAddress, token) => {
  const headers = {
    headers: {
        auth: token
    }
  }

  axios
  .get(`${URL_Base}/profile/address`, headers )
    .then(response => {
      setUserAddress(response.data.address)
    }).catch(error => {
      console.log(error.response)
    })
}

export const updateProfile = (body, history, setIsLoading, token) => {
  const headers = {
    headers: {
        auth: token
    }
  }

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

export const updateAddress = (body, history, setIsLoading, token) => {
  const headers = {
    headers: {
        auth: token
    }
  }

  setIsLoading(true)
  axios
  .put(`${URL_Base}/address`, body, headers)
  .then((res) => {
    setIsLoading(false)
    localStorage.setItem('token', res.data.token)
    goToProfile(history)
  }).catch((err) => {
    setIsLoading(false)
    console.log(err.response)
  })
}