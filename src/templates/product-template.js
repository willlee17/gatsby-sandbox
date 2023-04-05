import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import { ProductContainer, ChildDiv, Title, Price, AddToCartButton, FreeShipping, BreadCrumbs, linkStyles, Accordion } from './product-template.styles';

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
            collection {
                slug
            }
            mainImage {
              url
              gatsbyImageData(width: 400, placeholder: BLURRED)
            }
        }
    }
`

export default function ProductTemplate({ data }) {
    const [ isOpen, setIsOpen ] = useState(false);

    const { mainImage, title, currentPrice, compareAtPrice, description, collection } = data.contentfulProduct;

    const breadCrumbText = collection[0].slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ' )

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <ProductContainer>
            <ChildDiv>
                <GatsbyImage image={mainImage.gatsbyImageData} alt="product-image"/>
            </ChildDiv>
            <ChildDiv>
                <BreadCrumbs><Link to="/" css={linkStyles}>Home</Link> / <Link to={`/collections/${collection[0].slug}`} css={linkStyles}>{breadCrumbText}</Link> /  </BreadCrumbs>
                <Title>{title}</Title>    
                <Price>${currentPrice} {compareAtPrice && <p>${compareAtPrice}</p>}</Price>
                <AddToCartButton>ADD TO CART</AddToCartButton>
                <FreeShipping>Free shipping on orders over $50. Free returns. </FreeShipping>
                <hr/>
                <Accordion  onClick={toggleAccordion}>Description</Accordion>
                {isOpen && <p>{description.description}</p>}
                <hr/>
            </ChildDiv>
        </ProductContainer>
    )   
}