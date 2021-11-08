import React, { useState, useEffect } from "react";
import { URL_Base } from "../../constants/urls";
import axios from "axios";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardMedias, CardRestaurant, ContainerInfo } from "./styled";
import { goToRestaurantDetails } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import {
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

const FeedPage = () => {
  useProtectedPage();

  const [restaurants, setRestaurants] = useState([]);
  const history = useHistory();
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
  const listRestaurants = restaurants.map((item) => {
    return (
      <CardRestaurant>
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
            <Typography variant="body2" color="text.secondary">
              <ContainerInfo>
                <span>{(item.deliveryTime) - 10} - {item.deliveryTime} min</span>
                <span>
                  {item.shipping ? (
                    <span>Frete R${item.shipping},00</span>
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
      {listRestaurants}
    </div>
  );
};

export default FeedPage;
