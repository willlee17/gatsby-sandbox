import * as React from "react"
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  {
    page: allContentfulPage {
      edges {
        node {
          name
          collections {
            collectionName
            slug
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

const Header = styled.h1`
  text-align: center;
`
const CollectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 450px);
  grid-auto-flow: column;
  gap: 1rem;
`

const Card = styled.div`
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
`
const Title = styled.h4`
  font-weight: bold;
  padding-left: 0.6rem;
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
`
const Description = styled.p`
  padding-left: 0.6rem;
  font-size: 0.8rem;
`
const ImageContainer = styled.div`
  position: relative;
  height:300px;
  &:hover .shopButton {
    display: block;
  }
`

const ShopButton = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  width: 300px;
  border: none;
  color: black;
  background-color: white;
  letter-spacing: 1px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`

const HR = styled.hr`
  margin-left: 0.6rem;
  margin-right: 0.6rem;
`

export default function Home({ data }) {
  const { collections } = data.page.edges[0].node;

  return (
    <>
      <Header>Our Collections</Header>
      <CollectionsGrid>
        { collections.map((collection) => (
        <Card> 
          <ImageContainer>
            <GatsbyImage image={collection.collectionBannerImage.gatsbyImageData} />
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
