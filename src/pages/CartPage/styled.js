import { Button } from "@material-ui/core";
import styled from "styled-components";


// Container Usuário

export const EnderecoUsuario = styled.div`
    width: 20.5rem;
    height: 3rem;
    margin: 0.063rem 0 0.5rem;
    padding: 1rem;
    background-color: #eee;
    margin: 0 auto;

    p:nth-child(1){
        width: 20.5rem;
        height: 1.125rem;
        margin: 0 0 0.5rem;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #b8b8b8;
    }

    p:nth-child(2){
        width: 20.5rem;
        height: 1.125rem;
        margin: 0.5rem 0 0;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: black;
    }
`

// Container Restaurante

export const EnderecoRestaurante = styled.div`
    height: 4.75rem;
    margin: 0.063rem 0 0.5rem;
    padding: 1rem;
    background-color: white;

    p:nth-child(1){
        width: 20.5rem;
        height: 1.125rem;
        margin: 0 0 0.5rem;
        font-family: Roboto;
        font-weight: bold;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #e8222e;
    }

    p:nth-child(2){
        width: 20.5rem;
        height: 1.125rem;
        margin: 0.5rem 0 0;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #b8b8b8;
    }

    p:nth-child(3){
        width: 20.5rem;
        height: 1.125rem;
        margin: 0.5rem 0 0;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #b8b8b8;
    }

`

// Card dos lanchos 

export const ProductCard = styled.div`
    width: 20.5rem;
    height: 7rem;
    margin: 0.438rem 1.4rem;
    display: grid;
    grid-template-columns: 6rem 14.5rem;
    border-radius: 8px;
    border: 1px solid #b8b8b8;
    img{
        width: 6rem;
        height: 7rem;
        margin: 0 1rem 0 0;
        object-fit: cover;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    div{
        padding-left: 10px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export const ProductName = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #e8222e;
    margin-bottom: 0px;
    margin-top: 6px;
` 

export const ProductDescription = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.75rem;
    color: #b8b8b8;
    margin-bottom: 2px;
    margin-top: 5px;
` 

export const ProductPrice = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 2px;
    margin-top: 15px;
` 

export const RemoveToCartButton = styled.button`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.75rem;
    width: 5.625rem;
    height: 1.938rem;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: solid 1px black;
    position: relative;
    top: -31px;
    left: 239px;
    color: white;
    background-color: #e8222e;
`

export const Quantity = styled.button `
    position: absolute;
    background-color: #e8222e;
    border: 1px solid #e8222e;
    color: white;
    height: 2rem;
    width: 2rem;
    border-radius: 0 0.5rem 0 0.5rem;
    right: 23px;
    margin-top: -1px;
`

// Info Frete

export const Frete = styled.p`
    display: flex;
    height: 1.125rem;
    margin: 1rem;
    font-family: Roboto;
    font-size: 0.9rem;
    letter-spacing: -0.39px;
    text-align: right;
    color: black;
    margin-bottom: 17px;
    font-weight: bold;
    justify-content: flex-end;
    margin-right: 48px;
`

// Info Subtotal 
export const Subtotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    width: 20.5rem;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;

    p:nth-child(1){
        width: 7.375rem;
        height: 1.188rem;
        margin: 0.25rem 0.5rem 0.938rem 1rem;
        font-family: Roboto;
        font-weight: bold;
        font-size: 0.9rem;
        letter-spacing: -0.39px;
        color: black;
    }

    p:nth-child(2){
        width: 10.25rem;
        height: 1.313rem;
        margin: 0.813rem 1rem 1.5rem 0;
        font-family: Roboto;
        font-size: 0.9rem;
        font-weight: bold;
        letter-spacing: -0.43px;
        text-align: right;
        color: #e8222e;
    }
`

export const Total = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    width: 20.5rem;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;

    p:nth-child(1){
        width: 7.375rem;
        height: 1.188rem;
        margin: 0.25rem 0.5rem 0.938rem 1rem;
        font-family: Roboto;
        font-weight: bold;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: black;
    }

    p:nth-child(2){
        width: 10.25rem;
        height: 1.313rem;
        margin: 0.813rem 1rem 1.5rem 0;
        font-family: Roboto;
        font-size: 1.125rem;
        font-weight: bold;
        letter-spacing: -0.43px;
        text-align: right;
        color: #e8222e;
    }
`

// Container Forma de Pagamento 

export const ContainerPagamento = styled.div`
    display: flex;
    margin: 1rem 1rem ;
    width: 20.5rem;
    border-bottom: 1px solid black;

    p{
        width: 20.5rem;
        height: 1.125rem;
        margin: 0.5rem 1rem 1rem 1rem;
        font-family: Roboto;
        font-weight: bold;
        letter-spacing: -0.39px;
        color: black;
    }

`

export const ButtonContainer = styled.div `
    display: flex;
    justify-content: center;
`

export const BotaoConfirmar = styled(Button)`
    width: 20.5rem;
    height: 2.625rem;
    cursor: pointer;
    margin-bottom: 90px;
    margin: 0 1rem;
    
    p{
        width: 18.5rem;
        font-size: medium;
        font-weight: 600;
        font-family: Roboto;
        letter-spacing: -0.39px;
        margin: 0 auto;
        color: black;
    }
`

export const MainContainer = styled.div `
    margin-bottom: 100px;
`