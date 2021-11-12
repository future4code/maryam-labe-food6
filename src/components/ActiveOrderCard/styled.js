import styled from "styled-components";

export const OrderContainer = styled.div `
    position: absolute;
    background-color: #e8222e;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 7.375rem;
    width: 100%;
    border-radius: 20px;
    bottom: 55px;
    z-index: 10;
`

export const MainContainer = styled.div `
    display: flex;
    margin: 0 1.5rem;

    p{
        width: 256px;
        margin: 0.5rem 0;
        :nth-child(1){
            color: #FFF;
        }
    }
    img{
        width: 2.5rem;
        height: 2.5rem;
        margin: 0 auto;
    }
`