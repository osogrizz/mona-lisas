import React from 'react'
// import Link from 'gatsby'
import styled from 'styled-components'

import Image from '../image'

// const CardContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   justify-content: center;
//   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//     Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

//   @media (max-width: 425px) {
//     display: grid;
//     grid-template-columns: 1fr;
//     justify-content: space-around;

//     margin: 0 auto;
//   } 
// `

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

const ItemListing = ({ data, item }) => (
  <>
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
      <h3>Title: Book 1</h3>
      <p>Author: Book 1</p>
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
      <h3>Title: Book 1</h3>
      <p>Author: Book 1</p>
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

  </>
)

export default ItemListing