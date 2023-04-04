import * as React from "react"
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import { Header, CollectionsGrid, Card, Title, Description, ImageContainer, ShopButton, HR } from './collections.styles'

export const query = graphql`
  {
    page: allContentfulPage {
      edges {
        node {
          name
          collections {
            collectionName
            slug
            id
            collectionBannerImage {
              url
              gatsbyImageData(width: 450, placeholder: BLURRED)
            }
            description
          }
        }
      }
    }
  }
`


export default function Home({ data }) {
  const { collections } = data.page.edges[0].node;

  return (
    <>
      <Header>Our Collections</Header>
      <CollectionsGrid>
        { collections.map((collection) => (
        <Card key={collection.id}> 
          <ImageContainer >
            <GatsbyImage image={collection.collectionBannerImage.gatsbyImageData} alt="collections-image" />
            <Link to={`/collections/${collection.slug}`}><ShopButton className="shopButton">SHOP</ShopButton></Link>
          </ImageContainer>
            <div>
              <Title>{collection.collectionName}</Title>
              <HR />
              <Description>{collection.description}</Description>
            </div>    
        </Card>
        ))}
      </CollectionsGrid>
    </>)
}
