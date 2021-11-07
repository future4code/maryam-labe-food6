import React, { useState, useEffect } from "react";
import { URL_Base } from "../../constants/urls";
import axios from "axios";
import useProtectedPage from "../../hooks/useProtectedPage";
import {CardRestaurant, Img, Td} from "./styled"
import { goToRestaurantDetails } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";

const FeedPage = () => {
  useProtectedPage();

  const [restaurants, setRestaurants] = useState([]);
  const history = useHistory()
  const url = `${URL_Base}/restaurants`;

  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios
      .get(url, headers)
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  console.log(restaurants);
  const listRestaurants = restaurants.map((item) => {
    return (
      
      <CardRestaurant onClick={() => goToRestaurantDetails(history, item.id)} key={item.id}>
        <h2>{item.name}</h2>
        <Img src={item.logoUrl}/>
        <Td>
        <h4>{item.deliveryTime} minutos</h4>
        </Td>
        <h2>Taxa R${item.shipping},00</h2>
        
      </CardRestaurant>
    );
  });

  return (
    <div>
      <Header />
      {listRestaurants}
    </div>
  );
};

export default FeedPage;
