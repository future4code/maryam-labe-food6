import styled from "styled-components"

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

export const ContainerEditUser = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    gap: 2vh;

    Button {
        background-color: #e8222e;
        color: black;
        height: 42px;
        border-radius: 2px;
    }
`
