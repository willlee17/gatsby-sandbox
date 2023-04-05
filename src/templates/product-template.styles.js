import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ProductContainer = styled.div`
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 1rem;
    max-width: 800px;
    margin: auto;
    margin-top: 5rem;
`

export const ChildDiv = styled.div`
    flex: 1
`

export const Title = styled.h1`
    margin: 0;
`

export const Price = styled.div`
    margin: 0;
    margin-bottom: 1rem;
    display: flex;
    p {
        text-decoration: line-through;
        margin: 0;
        margin-left: 0.5rem;
    }
`

export const AddToCartButton = styled.button`
    width: 95%;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    border: none;
    color: white;
    background-color: #D3D4D5;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
`

export const FreeShipping = styled.p`
    font-size: 0.8rem;  
    text-align: center;
`

export const BreadCrumbs = styled.div`
    margin-top: 0.1rem;
`

export const linkStyles = css`
    color: black;
    text-decoration: none;
`
export const Accordion = styled.button`
    border: none;
    background-color: white;
    width: 100%;
    text-align: left;
`