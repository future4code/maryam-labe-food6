import React, { useState, useEffect, useContext } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardMedias, CardRestaurant, ContainerInfo, Main } from "./styled";
import { goToRestaurantDetails } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import {
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import { GlobalContext } from "../../contexts/GlobalContext";
import useGetRestaurants from "../../services/useGetRestaurants";


const FeedPage = () => {
  useProtectedPage();

  const history = useHistory();
  const token = localStorage.getItem("token")
  const {states} = useContext(GlobalContext)
  const {restaurants} = states
  const { getRestaurants } = useGetRestaurants()

  useEffect(() => {
    getRestaurants(token)
  })

  // const restaurants = useRequestData([], `${URL_Base}/restaurants`, 'restaurants', token)

  // useEffect(() => {
  //   getRestaurants();
  // }, []);

  // const getRestaurants = () => {
  //   axios
  //     .get(url, headers)
  //     .then((res) => {
  //       setRestaurants(res.data.restaurants);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  const listRestaurants = restaurants.map((item) => {
    return (
      <CardRestaurant key={item.id}>
        <CardActionArea
          onClick={() => goToRestaurantDetails(history, item.id)}
          key={item.id}
        >
          <CardMedias
            component="img"
            height="140"
            image={item.logoUrl}
            alt="Logo restaurant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2">
              <ContainerInfo>
                <span>{(item.deliveryTime) - 10} - {item.deliveryTime} min</span>
                <span>
                  {item.shipping ? (
                    <span>Frete R$ {item.shipping},00</span>
                  ) : (
                    <span>Frete grátis</span>
                  )}
                </span>
              </ContainerInfo>
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardRestaurant>
    );
  });

  return (
    <div>
      <Header />
      <Main>
        {listRestaurants}
      </Main>
      <Footer />
    </div>
  );
};

export default FeedPage;
