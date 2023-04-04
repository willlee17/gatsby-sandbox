import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { BannerDiv, BannerHeader, ProductsContainer, Card, ProductTitle, Price, ShopButton } from './collection-template.styles'

export const query = graphql`
    query($slug: String!) {
        contentfulCollection(slug: {eq: $slug}) {
            collectionBannerImage {
              url
              gatsbyImageData(width: 700, placeholder: BLURRED)
            }
            collectionName
            productsReference {
              compareAtPrice
              currentPrice
              slug
              title
              mainImage {
                gatsbyImageData(width: 400, placeholder: BLURRED)
              }
              id
            }
        }
    }
`


export default function CollectionTemplate({ data }) {
    const { collectionBannerImage, collectionName, productsReference } = data.contentfulCollection; 

   return (
    <>
        <BannerDiv>
            <GatsbyImage image={collectionBannerImage.gatsbyImageData} alt="collections-banner" />
            <BannerHeader><p>{collectionName}</p></BannerHeader>
        </BannerDiv>
        
        <ProductsContainer>
            {productsReference?.map((productRef) => (
                <Card key={productRef.id}>
                    <GatsbyImage image={productRef.mainImage.gatsbyImageData} alt="product-card-image" />
                    <ProductTitle>{productRef.title}</ProductTitle>
                    <Price>${productRef.currentPrice} {productRef.compareAtPrice && <p>${productRef.compareAtPrice}</p>}</Price>
                    <Link to={`/${productRef.slug}`}><ShopButton>Go To Product</ShopButton></Link>
                    
                </Card>
            ))}
        </ProductsContainer>
    </>
    )
}
