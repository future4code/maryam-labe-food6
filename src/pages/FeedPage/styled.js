import { CardMedia } from "@material-ui/core";
import styled from "styled-components";

export const CardRestaurant = styled.div`
    width: 90%;
    border: 1px groove grey;
    border-radius: 10px;
    color: #E8222E;
    margin: 0 auto;
    margin-bottom: 1vh;
`;

export const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    color: grey;
`

export const CardMedias = styled(CardMedia)`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`