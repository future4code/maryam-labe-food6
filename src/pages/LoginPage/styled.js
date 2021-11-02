import styled from "styled-components"

export const ScreenContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10vh;
    width: 100vw;
    
`

export const SignUpContainer = styled.div `
    display: flex;
    align-items: center;
    max-width: 500px;
` 

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 80vw;
    max-width: 500px;
    padding: 2vh;
    
    input {
        background-color: white;
        align-items: center;
    }

    button{
        margin-top: 10px;
    }
`
