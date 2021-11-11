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
    margin: 5px 16px;
`

export const RestaurantDetails = styled.div`
    display: flex;
    flex-direction: column;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    img{
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        width: 20.5rem;
        height: 7.5rem;
        object-fit: cover;
    }
    div{
        display: flex;
        flex-direction: row;
        
        p{
            margin-right: 50px;
        }
    }
`
export const RestaurantName = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    color: #e8222e;
    font-weight: 500;
    width: 20.5rem;
    height: 1.125rem;
    margin-bottom: 8px;
`

export const RestaurantInformation = styled.p`
    /* width: 6.5rem; */
    height: 1.125rem;
    margin: 0.5rem 0.5rem 0.5rem 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    color: #b8b8b8;
    margin-left: 0px;
`

export const ProductCard = styled.div`
    width: 20.5rem;
    height: 7rem;
    margin: 0.438rem 0 0;
    display: grid;
    grid-template-columns: 6rem 14.5rem;
    border-radius: 8px;
    border: 1px solid #b8b8b8;
    img{
        width: 6rem;
        height: 7rem;
        margin: 0 1rem 0 0;
        object-fit: cover;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    div{
        padding-left: 10px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export const ProductName = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #e8222e;
    margin-bottom: 0px;
    margin-top: 6px;
` 

export const ProductDescription = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.75rem;
    color: #b8b8b8;
    margin-bottom: 2px;
    margin-top: 5px;
` 

export const ProductPrice = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 2px;
    margin-top: 15px;
` 

export const AddToCartButton = styled.button`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.75rem;
    width: 5.625rem;
    height: 1.938rem;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: solid 1px black;
    position: relative;
    top: -31px;
    left: 239px;
`

export const RemoveToCartButton = styled.button`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.75rem;
    width: 5.625rem;
    height: 1.938rem;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: solid 1px black;
    position: relative;
    top: -31px;
    left: 239px;
    color: #e8222e;
`

export const CategoryTitle = styled.p`
    width: 20.5rem;
    height: 1.125rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    margin: 15px 0px 0px 3px;
`

export const DivisorLine = styled.hr`
    width: 20.5rem;
    color: black;
    height: 1px;
    margin-left: 0px;
    margin-bottom: 15px;
`

export const Quantity = styled.button `
    position: absolute;
    background-color: whitesmoke;
    border: 1px solid #e8222e;
    color: #e8222e;
    height: 2rem;
    width: 2rem;
    border-radius: 0 0.5rem 0 0.5rem;
    right: 29px;
`