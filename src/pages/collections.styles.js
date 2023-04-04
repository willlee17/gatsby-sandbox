import styled from '@emotion/styled';

export const Header = styled.h1`
  text-align: center;
`
export const CollectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 450px);
  grid-auto-flow: column;
  gap: 1rem;
`

export const Card = styled.div`
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
`
export const Title = styled.h4`
  font-weight: bold;
  padding-left: 0.6rem;
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
`
export const Description = styled.p`
  padding-left: 0.6rem;
  font-size: 0.8rem;
`
export const ImageContainer = styled.div`
  position: relative;
  height:300px;
  &:hover .shopButton {
    display: block;
  }
`

export const ShopButton = styled.button`
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

export const HR = styled.hr`
  margin-left: 0.6rem;
  margin-right: 0.6rem;
`