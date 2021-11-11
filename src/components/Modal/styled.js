import styled from "styled-components";
import { Modal } from "@material-ui/core";

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: 150px;
    max-width: 340px;
    margin: 0 auto;
    padding: 2rem 1rem;
    background-color: #fff;
    border-radius: 10px;
`

export const ModalContainer = styled(Modal)`
    display: flex;
    align-items: center;
    outline: none;
`
