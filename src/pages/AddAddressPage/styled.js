import styled from "styled-components";

export const ContainerAddress = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90vw;
    gap: 2vh;

    Button{
        background-color: #E8222E;
    }
`

export const ScreenAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        width: 18.5rem;
        height: 1.125rem;
        font-family: Roboto;
        font-size: 1rem;
        font-weight: 450;
        letter-spacing: -0.39px;
        text-align: center;
    }
`