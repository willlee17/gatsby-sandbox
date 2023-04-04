import React from "react";
import { graphql, Link } from "gatsby";
import styled from '@emotion/styled'
import { GatsbyImage } from "gatsby-plugin-image"

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
            }
        }
    }
`

const BannerDiv = styled.div`
    display: flex;
    border: 1px solid black;
`

const Image = styled.img`
    flex: 1;
`

const BannerHeader = styled.div`
    flex: 1;    
    display: flex;
    justify-content: center;
    align-items: center;
    & > p {
        font-size: 3rem;
    }
`

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
`

const Card = styled.div`
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
`

const ProductTitle = styled.div`
    margin-left: 0.5rem;
    margin-top: 0.5rem;
`

const Price = styled.p`
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

const ShopButton = styled.p`
    margin-left: 0.5rem;    
    margin-bottom: 1rem;
`

export default function CollectionTemplate({ data }) {
    const { collectionBannerImage, collectionName, productsReference } = data.contentfulCollection; 

   return (
    <>
        <BannerDiv>
            <GatsbyImage image={collectionBannerImage.gatsbyImageData} />
            <BannerHeader><p>{collectionName}</p></BannerHeader>
        </BannerDiv>
        
        <ProductsContainer>
            {productsReference?.map((productRef) => (
                <Card>
                    <GatsbyImage image={productRef.mainImage.gatsbyImageData} />
                    <ProductTitle>{productRef.title}</ProductTitle>
                    <Price>${productRef.currentPrice} {productRef.compareAtPrice && <p>${productRef.compareAtPrice}</p>}</Price>
                    <Link to={`/${productRef.slug}`}><ShopButton>Go To Product</ShopButton></Link>
                    
                </Card>
            ))}
        </ProductsContainer>
    </>
    )
}
