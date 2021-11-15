import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  RestaurantDetailsPageContainer,
  ProductCard,
  DivisorLine,
  CategoryTitle,
  AddToCartButton,
  ProductName,
  ProductPrice,
  ProductDescription,
  HeaderContainer,
  RestaurantInformation,
  RestaurantName,
  BodyContainer,
  RestaurantDetails,
  RemoveToCartButton,
  Quantity,
} from "./styled";
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../components/Header/Header";
import useGetDetailsRestaurant from "../../services/useGetDetailsRestaurant";
import ShowModal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";

const RestaurantDetailsPage = () => {
  useProtectedPage();
  const params = useParams();
  const { setters, states } = useContext(GlobalContext);
  const { setCart, setCartProducts, setActualRestaurant } = setters;
  const { cart, cartProducts, actualRestaurant } = states;
  const token = localStorage.getItem("token");
  const { getDetailsRestaurant } = useGetDetailsRestaurant();
  const { restaurant } = states;
  

  useEffect(() => {
    getDetailsRestaurant(params, token);
  }, []);

  const addToCart = (id, quantity) => {
    const spreadCart = cart;
    spreadCart.products.push({
      id: id,
      quantity: quantity,
    });
    setCart(spreadCart);
  };

  const removeFromCart = (id) => {
    const spreadCart = cart;
    const filteredSpreadCart =
      spreadCart.products &&
      spreadCart.products.filter((product) => product.id !== id);
    setCart({ products: filteredSpreadCart });

    const spreadCartProducts = cartProducts;
    const filteredSpreadCartProducts = spreadCartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredSpreadCartProducts);
  };

  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [quantity, setQuantity] = useState("");

  // array de categorias
  const categories =
    restaurant &&
    restaurant.products &&
    restaurant.products.map((product) => {
      return product.category;
    });

  //array filtrada, removendo as categorias repetidas
  const filteredCategories =
    categories &&
    categories.filter((item, index) => {
      return categories.indexOf(item) === index;
    });

  //mostrando categorias na tela com seus produtos logo abaixo
  const renderCategories =
    filteredCategories &&
    filteredCategories.map((item) => {
      return (
        <div key={item}>
          <CategoryTitle>{item}</CategoryTitle>
          <DivisorLine />
          <div>
            {restaurant &&
              restaurant.products &&
              restaurant.products
                .filter((product) => {
                  return product.category === item;
                })
                .map((product) => {
                  const findId = cart?.products.filter(
                    (prod) => prod.id === product.id
                  );
                  return (
                    <ProductCard key={product.id}>
                      <img src={product.photoUrl} />
                      <div>
                        <ProductName>{product.name}</ProductName>
                        <ProductDescription>
                          {product.description}
                        </ProductDescription>
                        <ProductPrice>
                          R$ {product.price.toFixed(2)}
                        </ProductPrice>
                      </div>
                      {findId.length == 0 ? (
                        <AddToCartButton
                          onClick={() => {
                            setProduct({
                              id: product.id,
                              photoUrl: product.photoUrl,
                              name: product.name,
                              description: product.description,
                              price: product.price,
                            });
                            handleOpen();
                          }}
                        >
                          Adicionar
                        </AddToCartButton>
                      ) : (
                        <RemoveToCartButton
                          onClick={() => {
                            removeFromCart(product.id);
                            if (cart.products.length == 1) {
                              setActualRestaurant({
                                id: "",
                                address: "",
                                deliveryTime: "",
                                shipping: "",
                              });
                            }
                          }}
                        >
                          Remover
                        </RemoveToCartButton>
                      )}
                      {findId.length > 0 && (
                        <Quantity>{findId[0].quantity}</Quantity>
                      )}
                    </ProductCard>
                  );
                })}
          </div>
        </div>
      );
    });

  return (
    <RestaurantDetailsPageContainer>
      <Header />
      <BodyContainer>
        {restaurant && (
          <>
            <ShowModal
              open={open}
              setOpen={setOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
              quantity={quantity}
              setQuantity={setQuantity}
              product={product}
              addItemToCart={addToCart}
              restaurantId={params.id}
              data={restaurant}
            />
            <RestaurantDetails>
              <img src={restaurant.logoUrl}></img>
              <RestaurantName>{restaurant.name}</RestaurantName>
              <RestaurantInformation>
                {restaurant.category}
              </RestaurantInformation>
              <div>
                <RestaurantInformation>
                  {restaurant.deliveryTime - 10} - {restaurant.deliveryTime} min
                </RestaurantInformation>
                <RestaurantInformation>
                  Frete R$ {" "}
                  {restaurant &&
                    restaurant.shipping &&
                    restaurant.shipping.toFixed(2)}
                </RestaurantInformation>
              </div>
              <RestaurantInformation>
                {restaurant.address}
              </RestaurantInformation>
            </RestaurantDetails>
            {renderCategories}
          </>
        )}
      </BodyContainer>
      <Footer />
    </RestaurantDetailsPageContainer>
  );
};

export default RestaurantDetailsPage;
