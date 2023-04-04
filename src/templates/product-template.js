import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled'
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
    query($slug: String!) {
        contentfulProduct(slug: {eq: $slug}) {
            slug
            title
            currentPrice
            compareAtPrice
            description {
              description
            }
            mainImage {
              url
              gatsbyImageData(width: 400, placeholder: BLURRED)
            }
        }
    }
`
const ProductContainer = styled.div`
    border: 1px solid black;
    display: flex;
    max-width: 800px;
    margin: auto;
    margin-top: 5rem;
`

const ChildDiv = styled.div`
    flex: 1
`

const Title = styled.h1`
    margin: 0;
`

const Price = styled.p`
    margin: 0;
    margin-bottom: 1rem;
    display: flex;
    p {
        text-decoration: line-through;
        margin: 0;
        margin-left: 0.5rem;
    }
`

const AddToCartButton = styled.button`
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

const FreeShipping = styled.p`
    font-size: 0.8rem;  
    text-align: center;
`

export default function ProductTemplate({ data }) {
    const { mainImage, title, currentPrice, compareAtPrice, description } = data.contentfulProduct;

    return (
        <ProductContainer>
            <ChildDiv>
                <GatsbyImage image={mainImage.gatsbyImageData} />
            </ChildDiv>
            <ChildDiv>
                <p>BREADCRUMBS / BREADCRUMBS / BREADCRUMBS </p>
                <Title>{title}</Title>    
                <Price>${currentPrice} {compareAtPrice && <p>${compareAtPrice}</p>}</Price>
                <AddToCartButton>ADD TO CART</AddToCartButton>
                <FreeShipping>Free shipping on orders over $50. Free returns. </FreeShipping>
                <div>
                    <p>{description.description}</p>
                </div>
            </ChildDiv>
        </ProductContainer>
    )   
}