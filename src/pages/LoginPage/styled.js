import { Button } from "@material-ui/core";
import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  width: 100vw;
  
  p, img{
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

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

Button{
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;

  Button {
  background-color: #e8222e;
  color: black;
  width: 19rem;
  height: 2.625rem;
  margin: 0.5rem 0 1rem;
  padding: 0 1rem;
  cursor: pointer;
}
`