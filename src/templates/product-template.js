import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import { ProductContainer, ChildDiv, Title, Price, AddToCartButton, FreeShipping } from './product-template.styles';

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

export default function ProductTemplate({ data }) {
    const { mainImage, title, currentPrice, compareAtPrice, description } = data.contentfulProduct;

    return (
        <ProductContainer>
            <ChildDiv>
                <GatsbyImage image={mainImage.gatsbyImageData} alt="product-image"/>
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