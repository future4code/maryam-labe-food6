import styled from "styled-components"
import { ArrowBackIosRounded } from "@material-ui/icons"

export const HeaderContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    margin: 0 0 1rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;

    p {
        font-family: Roboto;
        letter-spacing: -0.39px;
        display: flex;
        width: 59vw;
        font-size: 19px;
    }
`

export const IconBack = styled(ArrowBackIosRounded) `
    width: 1.44rem;
    height: 1.5rem;
    margin: 0.625rem 3.373rem 0.625rem 1rem;
    object-fit: contain;
    cursor: pointer;
    vertical-align: bottom;
`