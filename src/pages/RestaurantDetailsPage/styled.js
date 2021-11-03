import styled from "styled-components";

export const RestaurantDetailsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderContainer = styled.header`
display: grid;
grid-template-columns: 1fr 7fr;
align-items: center;

    img{
        justify-self: center;
    }
    p{
        justify-self: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        font-weight: 500;
        margin-right: 10px;
    }
`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 16px
`

export const RestauranteDetails = styled.div`
    display: flex;
    flex-direction: column;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    img{
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    div{
        display: flex;
        flex-direction: row;
    }
`