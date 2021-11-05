import React, { useState, useEffect } from "react";
import { URL_Base } from "../../constants/urls";
import axios from "axios";
import useProtectedPage from "../../hooks/useProtectedPage";
import {CardRestaurant, Img, Td} from "./styled"

const FeedPage = () => {
  useProtectedPage();

  const [restaurants, setRestaurants] = useState([]);
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
      
      <CardRestaurant 
        key={item.id}
        id={item.id}
        name={item.name}
        deliveryTime={item.deliveryTime}
        shipping={item.shipping}
        image={<img src={item.logoUrl} alt="logo" />}>
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
      <h1>RESTAURANTES</h1>
      {listRestaurants}
    </div>
  );
};

export default FeedPage;
