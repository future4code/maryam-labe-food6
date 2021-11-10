import { Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const ShowModal = ({
    open,
    handleClose,
    quantity,
    setQuantity,
    addItemToCart,
    product,
    restaurantId,
    data,
}) => {
    const handleChange = (event) => {
        setQuantity(event.target.value)
    }

    const {states, setters} = useContext(GlobalContext)
    const {cartProducts, actualRestaurant} = states
    const {setCartProducts, setActualRestaurant} = setters

    const placeOrder = () => {
        if (actualRestaurant.id === "" || actualRestaurant.id === restaurantId) {
            if (quantity > 0) {
                addItemToCart(product.id, quantity)
                handleClose()
                setActualRestaurant({
                    id: restaurantId,
                    deliveryTime: data.deliveryTime,
                    shipping: data.shipping,
                    address: data.address,
                    name: data.name,
                })
                const spreadCartProducts = cartProducts
                spreadCartProducts.push(product)
                setCartProducts(spreadCartProducts)
                setQuantity('')
            }
        } else {
            alert("Antes de prosseguir remova os itens do outro restaurante do carrinho")
        }
    }

    const body = (
        <div>
            <p>Selecione a quantidade desejada</p>
            <FormControl>
                <InputLabel>Quantidade desejada</InputLabel>
                <Select
                    value={quantity}
                    onChange={handleChange}
                    label={"Quantidade desejada"}
                >
                    <MenuItem value='' disabled style={{ display: 'none' }}></MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>5</MenuItem>
                    <MenuItem value={7}>5</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={placeOrder}>
                Adicionar ao carrinho
            </Button>
        </div>
    )

    return (
        <div>
            <div open={open} onClose={handleClose}>
                {body}
            </div>
        </div>
    )
}

export default ShowModal