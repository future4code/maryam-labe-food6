import { Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ModalBody, ModalContainer  } from "./styled";
import 'react-toastify/dist/ReactToastify.css';

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
                toast.success('Item adicionado ao carrinho')
            }
        } else {
            toast.error("Antes de prosseguir remova os itens do outro restaurante do carrinho")
        }
    }

    const body = (
        <ModalBody>
            <p>Selecione a quantidade desejada</p>
            <FormControl variant={"filled"}>
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
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={placeOrder}>
                Adicionar ao carrinho
            </Button>
        </ModalBody>
    )

    return (
        <div>
            <ModalContainer open={open} onClose={handleClose}>
                {body}
            </ModalContainer>
            <ToastContainer />
        </div>
    )
}

export default ShowModal