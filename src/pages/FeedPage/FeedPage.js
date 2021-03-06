import React, { useState, useEffect, useContext } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Main, SearchBar, InputSearch, Carousel, Categories } from "./styled";
import { goToRestaurantDetails } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { GlobalContext } from "../../contexts/GlobalContext";
import useGetRestaurants from "../../services/useGetRestaurants";
import search from "../../assets/imgs/search.png";
import useForm from "../../hooks/useForm";
import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";
import { useOrderInProgress } from "../../services/useOrderInProgress";
import OrderInProgressCard from "../../components/OrderInProgressCard/OrderInProgressCard";

const FeedPage = () => {
  useProtectedPage();

  const history = useHistory();
  const token = localStorage.getItem("token");
  const [form, handleInputChange, clear] = useForm({ search: "" });
  const { states } = useContext(GlobalContext);
  const { restaurants } = states;
  const { getRestaurants } = useGetRestaurants();
  const [restaurantCategoryFilter, setRestaurantCategoryFilter] =
    useState("Todos");
  const { orderInProgress, getOrderInProgress } = useOrderInProgress();

  const RestaurantsSearch = restaurants?.filter((restaurant) =>
    restaurant.name.startsWith(form.search)
  );

  const filteredRestaurants = (category) => {
    return restaurants?.filter(
      (restaurant) => restaurant.category === category
    );
  };

  const categories = restaurants?.map((restaurant) => {
    return restaurant.category;
  });
  const filteredCategories = categories?.filter((item, index) => {
    return categories.indexOf(item) === index;
  });
  filteredCategories.unshift("Todos");

  useEffect(() => {
    getRestaurants(token);
    getOrderInProgress();
  });

  return (
    <div>
      <Header />
      <Main>
        {orderInProgress && Object.keys(orderInProgress).length > 0 && (
          <OrderInProgressCard data={orderInProgress} />
        )}
        <SearchBar>
          <img src={search} alt="Pesquisar" />
          <form autoComplete="off">
            <InputSearch
              type="text"
              placeholder="Restaurante"
              autoFocus
              value={form.search}
              onChange={handleInputChange}
              name={"search"}
            />
          </form>
        </SearchBar>

        {restaurants && (
          <>
            <Carousel>
              {filteredCategories?.map((category) => (
                <Categories
                  key={category}
                  onClick={() => setRestaurantCategoryFilter(category)}
                  currentCategory={restaurantCategoryFilter}
                  categoryName={category}
                >
                  {category}
                </Categories>
              ))}
            </Carousel>

            {restaurantCategoryFilter === "Todos" &&
              RestaurantsSearch?.map((restaurant) => (
                <RestaurantCard
                  onClick={() => goToRestaurantDetails(history, restaurant.id)}
                  key={restaurant.id}
                  name={restaurant.name}
                  deliveryTime={restaurant.deliveryTime}
                  shipping={restaurant.shipping}
                  logoUrl={restaurant.logoUrl}
                />
              ))}

            {form?.search?.length == 0 &&
              filteredRestaurants(restaurantCategoryFilter).map(
                (restaurant) => (
                  <RestaurantCard
                    onClick={() =>
                      goToRestaurantDetails(history, restaurant.id)
                    }
                    key={restaurant.id}
                    name={restaurant.name}
                    deliveryTime={restaurant.deliveryTime}
                    shipping={restaurant.shipping}
                    logoUrl={restaurant.logoUrl}
                  />
                )
              )}

            {RestaurantsSearch?.length == 0 &&
              form?.search?.length > 0 &&
              filteredRestaurants(restaurantCategoryFilter).length === 0 && (
                <p>N??o encontramos </p>
              )}

            {restaurantCategoryFilter !== "Todos" && form.search.length > 0 && (
              <p>Fa??a uma busca na categoria "Todos".</p>
            )}
          </>
        )}
      </Main>
      <Footer />
    </div>
  );
};

export default FeedPage;
