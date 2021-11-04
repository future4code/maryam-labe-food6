import React, {useState, useEffect, useContext} from "react";
import CardFood from "../../components/CardFood/CardFood";
import GlobalState from "../../contexts/GlobalState";
import {} from "../../services/user";
import useRequestData from "../../hooks/useRequestData"


const CartPage = () => {
    const {states, setters} = useContext(GlobalState)
    
    const [userAddress, setUserAddress] = useState(undefined)
    const orderProd = useRequestData({}, `${URL_Base}/restaurants/1`, 'restaurant')


    useEffect(() => {
        Address(setUserAddress)
    }, [])


    
    // const addToCart = (id) => {
    //     const newCart = [...orderProd]
    //     setCart(newCart)

    //     const orderProd = products.map(product => {
    //         if (product.id === id) {
    //             const newQuantity = product.quantity + 1
    //             const infosProduct = {
    //                 ...product, quantity: newQuantity
    //             }
    //             return infosProduct
            
    //         } else {
    //             return product
    //         }
    //     })
    // }

    const removeToCart = (id) => {
        const newCart = [...orderProd]
        setCart(newCart)

        const orderProd = products.map(product => {
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
            return states.products.shipping + subtotalPrice
        }
        return 0
    }


    // const FoodCard = states.cart.products.map((product) => {
    //     if (product.quantity > 0) {
    //     return(
    //         <CardFood key={product.id}
    //         id={product.id}
    //         quantity={product.quantity}
    //         photoUrl={product.photoUrl}
    //         name={product.name}
    //         description={product.description}
    //         price={product.price}
    //         addToCart={() => addToCart(product.id)}
    //         removeToCart={() => removeToCart(product.id)}
    //         />
    //     )
    //     }
    // })
    
    return (
        <div>
            <CardFood />
        </div>
    )
}

export default CartPage;