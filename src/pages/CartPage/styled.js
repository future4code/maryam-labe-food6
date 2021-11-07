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

export const CardComidas = styled.div`
    display: flex;
    width: 20.5rem;
    height: 7rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin: 0 auto;

    img {
        width: 6rem;
        height: 7rem;
        margin: 0 1rem 0 0;
        object-fit: cover;
        border-left: 20px;
    }
`

export const CardInfos = styled.div`
    
    h3{
        width: 10.438rem;
        height: 1.125rem;
        margin: 1.125rem 1rem 0.5rem;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #e8222e;
    }

    p:nth-child(2){
        width: 12.5rem;
        height: 1.875rem;
        margin: 0.5rem 1rem 0.25rem;
        font-family: Roboto;
        font-size: 0.85rem;
        font-weight: 400;
        letter-spacing: -0.29px;
        color: #b8b8b8;
    }

    p:nth-child(3){
        width: 7.375rem;
        height: 1.188rem;
        margin: 0.5rem 0.5rem 0.938rem 1rem;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: black;
        font-weight: 800;
    }

`

export const Quantidade = styled.div`
    width: 2.063rem;
    height: 2.063rem;
    margin: 0 0 0.688rem 1rem;
    padding: 0.438rem 0.75rem;
    border-radius: 8px;
    border: solid 1px #e8222e;

        button{
            width: 0.563rem;
            height: 1.188rem;
            font-family: Roboto;
            font-size: 1rem;
            letter-spacing: -0.39px;
            text-align: center;
            color: #e8222e;
        }
`

export const BotaoRemover = styled.div`
    width: 5.625rem;
    height: 1.938rem;
    margin: 0.438rem 0 0 0.5rem;
    padding: 0.5rem 1.438rem 0.563rem 1.5rem;
    border-radius: 8px;
    border: solid 1px #e02020;

    button{
        width: 2.688rem;
        height: 0.875rem;
        font-family: Roboto;
        font-size: 0.75rem;
        letter-spacing: -0.29px;
        text-align: center;
        color: #e02020;
    }
`

// Info Frete

export const Frete = styled.h4`
    display: flex;
    width: 6.5rem;
    height: 1.125rem;
    margin: 1rem 14.5rem ;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    text-align: right;
    color: black;
    margin-bottom: 17px;
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

export const BotaoConfirmar = styled.button`
    width: 20.5rem;
    height: 2.625rem;
    margin-left: 15px;
    padding: 0.75rem 1rem 1rem;
    border-radius: 2px;
    background-color: #e8222e;
    cursor: pointer;

    p{
        width: 18.5rem;
        height: 1.125rem;
        font-size: medium;
        font-weight: 600;
        font-family: Roboto;
        letter-spacing: -0.39px;
        margin: 0 auto;
        color: black;
    }
`