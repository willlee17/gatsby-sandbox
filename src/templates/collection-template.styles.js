import styled from '@emotion/styled'
import { css } from '@emotion/react';


export const BannerDiv = styled.div`
    display: flex;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
`

export const BannerHeader = styled.div`
    flex: 1;    
    display: flex;
    justify-content: center;
    align-items: center;
    & > p {
        font-size: 3rem;
    }
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
`

export const Card = styled.div`
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
`

export const ProductTitle = styled.div`
    margin-left: 0.5rem;
    margin-top: 0.5rem;
`

export const Price = styled.div`
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    p {
        text-decoration: line-through;
        margin: 0;
        margin-left: 0.5rem;
    }
`

export const ShopButton = styled.p`
    margin-left: 0.5rem;    
    margin-bottom: 1rem;
`

export const linkStyles = css`
    color: black;
    text-decoration: none;
`