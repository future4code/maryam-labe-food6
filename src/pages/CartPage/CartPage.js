import React, {useState, useEffect, useContext} from "react";
import CardFood from "../../components/CardFood/CardFood";
import GlobalContext from "../../contexts/GlobalContext";
import {} from "../../services/user";


const CartPage = () => {
    
    // const [userAddress, setUserAddress] = useState(undefined)

    // useEffect(() => {
    //     Address(setUserAddress)
    // }, [])
    


    // const removeToCart = (id) => {
    //     const newCart = {...states.cart, products: listProducts}
    //     setters.setCart(newCart)

    //     const listProducts = states.cart.products.map(product => {
    //         if (product.id === id) {
    //             const newQuantity = product.quantity - 1
    //             const infosProduct = {
    //                 ...product, quantity: newQuantity
    //             }
    //             return infosProduct
            
    //         } else {
    //             return product
    //         }
    //     })
    // }

    // const subtotalCart = () => {
    //     let subtotalPrice= 0

    //     if ((states.cart).length !== 0) {
    //         states.cart.products.forEach(
    //         (product) => {
    //           subtotalPrice += product.price * product.quantity
    //         }
    //     )
    //         return states.cart.products.shipping + subtotalPrice
    //     }
    //     return 0
    // }


    // const cartList =
    // cart.length === 0
    //   ? "Carrinho vazio"
    //   : cart.map((product) => {
    //       return (
    //         <CardFood
    //           key={item.id}
    //           name={item.name}
    //           price={Number(item.price)}
    //           image={item.photos[0]}
    //           amount={item.amount}
    //           removeItem={() => removeItem(item)}
    //         />
    //       );
    //     });
    
    return (
        <div>
            <CardFood />
        </div>
    )
}

export default CartPage;