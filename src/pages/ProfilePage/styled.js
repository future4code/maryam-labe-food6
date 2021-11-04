import styled from "styled-components";
import { CreateOutlined } from "@material-ui/icons";

export const HeaderContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    margin: 0 0 1rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;

    p {
        font-family: Roboto;
        letter-spacing: -0.39px;
    }
`

export const InfoProfileContainer = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 16px 16px;

    p {
        height: 1.125rem;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: black;
    }
`

export const IconCreateOutlined = styled(CreateOutlined) `
    margin-top: 12px;
    object-fit: contain;
    cursor: pointer;
`

export const AddressContainer = styled.div `
    margin: 1rem 0;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    background-color: #eee;

    p:nth-child(1) {
        height: 1.125rem;
        margin: 0 0 0.5rem;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: #b8b8b8;
    }

    p:nth-child(2) {
        height: 1.125rem;
        margin: 0.5rem 0 0;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: black;
    }
    
`

export const HistoryContainer = styled.div `
    margin: 16px 16px;
    height: 26px;
    border-bottom: 1px solid black;

    p {
        height: 1.125rem;
        font-family: Roboto;
        font-size: 1rem;
        letter-spacing: -0.39px;
        color: black;
    }
`

export const OrderHistorys = styled.div `
    margin-top: 28px;

    p {
        height: 1.125rem;
        opacity: 0.89;
        font-family: Roboto;
        letter-spacing: -0.39px;
        text-align: center;
        color: black;
    }
`