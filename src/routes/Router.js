import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import AddAddressPage from "../pages/AddAddressPage/AddAddressPage"
import FeedPage from "../pages/FeedPage/FeedPage"
import RestaurantDetailsPage from "../pages/RestaurantDetailsPage/RestaurantDetailsPage"
import CartPage from "../pages/CartPage/CartPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import EditUserPage from "../pages/EditUserPage/EditUserPage"
import EditAddressPage from "../pages/EditAddressPage/EditAddressPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/pagina-inicial"}>
                    <HomePage />
                </Route>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>
                <Route exact path={"/cadastro"}>
                    <SignUpPage />
                </Route>
                <Route exact path={"/cadastro-endereco"}>
                    <AddAddressPage />
                </Route>
                <Route exact path={"/"}>
                    <FeedPage />
                </Route>
                <Route exact path={"/restaurantes/:restauranteId"}>
                    <RestaurantDetailsPage />
                </Route>
                <Route exact path={"/carrinho"}>
                    <CartPage />
                </Route>
                <Route exact path={"/perfil"}>
                    <ProfilePage />
                </Route>
                <Route exact path={"/perfil/dados"}>
                    <EditUserPage />
                </Route>
                <Route exact path={"/perfil/endereco"}>
                    <EditAddressPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router