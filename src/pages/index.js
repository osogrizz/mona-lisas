/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ItemListing from '../components/items/ItemListing'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-around;

    margin: 0 auto;
  }
  
`

const FooterStyles = styled.footer`
  margin: 0 auto;
  max-width: 950px;
  font-size: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  a {
    text-decoration: none;
    color: #444;
    font-weight: 100;
  }
`


const Card = styled.div`
  margin: 20px;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  min-height: 304px;
  box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.15), 0 17px 17px 0 rgba(0, 0, 0, 0.15);

  Image {
    margin-bottom: 0.8rem;
  }

  h1 {
    padding: 0.8rem;
  }
  h3 {
    margin-top: 0.4rem;
    font-weight: 400;
  }

  p {
    /* padding: 0.2rem; */
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
  
  button {
    margin: 20px;
    border: 1px solid #fff;
    background: #7df442;
    width: 80px;
    /* padding: 5px; */
    border-radius: 5px;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    &:hover {
      cursor: pointer;
      color: #7df442;
      background: #fff;
      border: 1px solid #7df442;
    }
  }

  @media only screen and (max-width: 1082px) and (min-width: 426px) {
    margin-top: 2.5rem;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 80px;
    p {
      font-size: 0.8rem;
    }
  }
`

const Title = styled.h1`
  text-align: center;
  /* font-family: 'Sacramento', cursive; */
  font-size: 62px;
  font-weight: 200;
  color: darkred;
`

const IndexPage = ( data ) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Link to="/" style={{ textDecoration: 'none' }}>
      <Title>Mona Lisa's Books</Title>
      <div style={{ paddingTop: `5px`, margin: `0 auto`, maxWidth: `330px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Link>
    <h4>So many books so little time...</h4>
    
    <CardContainer>
      {/* {data.allMarkdownRemark.edges.map(({node}) => (
        <ItemListing key={node.id} item={node} /> 
    ))} */}

      <Card>
        <Image fluid={data.card} style={{ width: '200px', margin: '0 auto', marginTop: '10px' }} />
        <h3>Title: Book 1</h3>
        <p>Author: Book 1</p>
        <p>Price: $3.00</p>
        <button
          type="submit"
          className="snipcart-add-item"
          data-item-id="1"
          data-item-name="Book-1"
          data-item-price="3.00"
          data-item-weight="2.5"
          data-item-url="https://pedantic-banach-caf9e2.netlify.com/"
          data-item-description="A good book"
        >
            Add
        </button>
      </Card>
      <Card>
        <Image fluid={data.card} style={{ width: '200px', margin: '0 auto', marginTop: '10px' }} />
        <h3>Title: Book 2</h3>
        <p>Author: Book 2</p>
        <p>Price: $3.00</p>
        <button
          type="submit"
          className="snipcart-add-item"
          data-item-id="2"
          data-item-name="Book-2"
          data-item-price="4.00"
          data-item-weight="2.5"
          data-item-url="https://pedantic-banach-caf9e2.netlify.com/"
          data-item-description="A good book"
        >
            Add
        </button>
      </Card>
      <Card>
        <Image fluid={data.card} style={{ width: '200px', margin: '0 auto', marginTop: '10px' }} />
        <h3>Title: Book 3</h3>
        <p>Author: Book 3</p>
        <p>Price: $3.00</p>
        <button
          type="submit"
          className="snipcart-add-item"
          data-item-id="3"
          data-item-name="Book-3"
          data-item-price="5.00"
          data-item-weight="2.5"
          data-item-url="https://pedantic-banach-caf9e2.netlify.com/"
          data-item-description="A good book"
        >
            Add
        </button>
      </Card>

      
    </CardContainer>

    <hr style={{ marginTop: '40px'}} />

    <FooterStyles>
      <div>
              Copyright © 
        {' '}
        {new Date().getFullYear()}
        ,  Mona Lisa's Books - All Rights Reserved
      </div>

      <div style={{ textAlign: 'right', }}>
        <a href="https://leo-torres.com" target="_blank" rel="noopener noreferrer">A BobaBird Website</a>
      </div>
    </FooterStyles>
  </Layout>
)

export default IndexPage
  

// export const query = graphql`
// query SiteMeta {
//   site{
//     siteMetadata {
//       title
//       # desc
//     }
//   }
//   allMarkdownRemark {
//     edges {
//       node {
//         id
//         frontmatter {
//           title
//           date(formatString: "MMM DD YYYY")
//         }
//         fields {
//           slug
//         }
//         html
//         excerpt
//       }
//     }
//   }
// }
// `

// export const query = graphql`
//   query StoreQuery {
//     card: imageSharp(fluid: {originalName: {eq: "gatsby-icon.png"} }) {
//       fluid(maxWidth: 1240) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `;

