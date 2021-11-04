import styled from "styled-components";

export const ContainerCarrinho = styled.div`
    width: 22.5rem;
    height: 40rem;
`
// Barra de Navegação 

export const NavBar = styled.div`
    width: 22.5rem;
    height: 4rem;
    margin: 0 0 0.063rem;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;

    h4{
        width: 22.5rem;
        height: 4rem;
        margin: 0 0 0.063rem;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        color: black;
    }
`

// Container Usuário

export const EnderecoUsuario = styled.div`
    width: 22.5rem;
    height: 4.75rem;
    margin: 0.063rem 0 0.5rem;
    padding: 1rem;
    background-color: #eee;

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
    width: 22.5rem;
    height: 4.75rem;
    margin: 0.063rem 0 1rem;
    padding: 1rem;
    background-color: #eee;

    p:nth-child(1){
        width: 20.5rem;
        height: 1.125rem;
        margin: 1rem 1rem 0.5rem;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #e8222e;
    }

    p:nth-child(2){
        width: 20.5rem;
        height: 1.125rem;
        margin: 0.5rem 1rem;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #b8b8b8;
    }

    p:nth-child(3){
        width: 20.5rem;
        height: 1.125rem;
        margin: 0.5rem 1rem;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #b8b8b8;
    }

`

// Card dos lanchos 

export const CardComidas = styled.div`
    width: 20.5rem;
    height: 7rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`

export const CardInfos = styled.div`
    img {
        width: 6rem;
        height: 7rem;
        margin: 0 1rem 0 0;
        object-fit: contain;
    }

    p:nth-child(1){
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
        font-size: 0.75rem;
        letter-spacing: -0.29px;
        color: #b8b8b8;
    }

    p:nth-child(3){
        width: 7.375rem;
        height: 1.188rem;
        margin: 0.25rem 0.5rem 0.938rem 1rem;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: black;
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
    width: 6.5rem;
    height: 1.125rem;
    margin: 1rem 1rem 0.813rem 3.75rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    text-align: right;
    color: black;
`

// Info Subtotal 
export const Subtotal = styled.div`
    width: 20.5rem;
    height: 1.125rem;
    margin: 1rem 1rem 0.5rem;

    p:nth-child(1){
        width: 7.375rem;
        height: 1.188rem;
        margin: 0.25rem 0.5rem 0.938rem 1rem;
        font-family: Roboto;
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
    width: 20.5rem;
    height: 6rem;

    p{
        width: 20.5rem;
        height: 1.125rem;
        margin: 1.5rem 1rem 0.5rem;
        font-family: Roboto;
        letter-spacing: -0.39px;
        color: black;
    }

    span{
        width: 20.5rem;
        height: 0.063rem;
        margin: 0.5rem 1rem;
        border: solid 1px black;
    }

`

export const BotaoConfirmar = styled.button`
    width: 20.5rem;
    height: 2.625rem;
    padding: 0.75rem 1rem;
    border-radius: 2px;
    background-color: #e8222e;

    p{
        width: 18.5rem;
        height: 1.125rem;
        font-family: Roboto;
        letter-spacing: -0.39px;
        text-align: center;
        color: black;
    }
`