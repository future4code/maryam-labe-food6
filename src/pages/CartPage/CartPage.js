import React, {useState, useEffect, useContext} from "react";
import GlobalState from "../../contexts/GlobalState"
import CardFood from "../../components/CardFood";
import {} from "../../services/user";


const CartPage = () => {
    const {states, setters} = useContext(GlobalState)
    // const [userAddress, setUserAddress] = useState(undefined)

    // useEffect(() => {
    //     Address(setUserAddress)
    // }, [])
    
    
    const addToCart = (id) => {
        const newCart = {...states.cart, products: listProducts}
        setters.setCart(newCart)

        const listProducts = states.cart.products.map(product => {
            if (product.id === id) {
                const newQuantity = product.quantity + 1
                const infosProduct = {
                    ...product, quantity: newQuantity
                }
                return infosProduct
            
            } else {
                return product
            }
        })
    }

    const removeToCart = (id) => {
        const newCart = {...states.cart, products: listProducts}
        setters.setCart(newCart)

        const listProducts = states.cart.products.map(product => {
            if (product.id === id) {
                const newQuantity = product.quantity - 1
                const infosProduct = {
                    ...product, quantity: newQuantity
                }
                return infosProduct
            
            } else {
                return product
            }
        })
    }

    const subtotalCart = () => {
        let subtotalPrice= 0

        if ((states.cart).length !== 0) {
            states.cart.products.forEach(
            (product) => {
              subtotalPrice += product.price * product.quantity
            }
        )
            return states.cart.products.shipping + subtotalPrice
        }
        return 0
    }

    
    const FoodCard = states.cart.products.map((product) => {
        if (product.quantity > 0) {
        return(
            <CardFood key={product.id}
            id={product.id}
            quantity={product.quantity}
            photoUrl={product.photoUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            addToCart={addToCart}
            removeToCart={removeToCart}
            />
        )
        }
    })
    
    return (
        <div>
            {FoodCard}
            <h2>{subtotalCart}</h2>
        </div>
    )
}

export default CartPage;