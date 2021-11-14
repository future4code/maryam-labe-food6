import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 0 -0.5px 0 0 rgb(0 0 0 / 25%);
    background-color: white;
    bottom: 0;
    left: 0;
    position: fixed;
`

export const FooterIcones = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #b8b8b8;
    width: 100vw;
    /* padding: 0.688rem 2.875rem 0.688rem 2.938rem; */
    
    img{
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        padding: 0.288rem 2.875rem 0.688rem 2.875rem;
    }
`