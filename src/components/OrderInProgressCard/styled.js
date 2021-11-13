import styled from "styled-components";

export const OrderCard = styled.div`
  position: fixed;
  bottom: 70px;
  background-color: #E86E5A;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 7.375rem;
  align-items: center;
  z-index: 10;
`
export const InnerContainer = styled.div`
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
    width: 2rem;
    margin-right: 2rem;
  }
`