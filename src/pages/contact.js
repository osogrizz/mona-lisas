/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 1050px;
  padding-bottom: 60px;

  h5 {
    font-weight: 150;
    font-size: .9rem;
    letter-spacing: 0.8px;
  }

  h4 {
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 1.5px;
  }

  p {
    color: #777;
    font-size: 16px;

    a {
      text-decoration: none;
      color: #777;
      &:hover {
        /* color: rgb(243, 235, 222); */
        color: #ad42f4;
      }
    }
  }
`


const FormContainer = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 700px;
  grid-template-columns: 1fr;
  text-align: center;
  align-content: center;
`

const InputStyles = styled.input`
  height: 50px;
  margin: 10px 0;

`

const Btn = styled.button`
  background: inherit;
  margin: 20px auto;
  border-radius: 40px;
  border-color: #222;
  padding: 5px;
  width: 100px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;

  &:focus {
      outline: none;
  }

  &:hover,
  &:focus {
      color: #ad42f4;
      border: 1px solid #71f442;
      box-shadow: 0 0 0 0 #71f442, inset 6em 3.5em 0 0 #71f442;
    }
  }
`

const TextArea  = styled.textarea`
  margin-top: 10px;
`

const LogoContainer = styled.div`
  padding-top: 5px;
  margin: 0 auto;
  max-width: 330px;
  margin-bottom: 1.45rem;
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

const ContactMe = styled.div`
  h3 {
    position: relative;
    font-size: 30px;
    font-weight: 200;
    z-index: -1;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 80px;
    overflow: hidden;
  }
  h3:before, h3:after {
    position: absolute;
    top: 50%;
    overflow: hidden;
    width: 51%;
    height: 1px;
    content: '\a0';
    background-color: #444;
}
h3:before {
    margin-left: -50%;
    text-align: right;
}

span {
  font-family: 'Sacramento', cursive;
  margin: 0 20px;
}
`

const Title = styled.h1`
  text-align: center;
  /* font-family: 'Sacramento', cursive; */
  font-size: 62px;
  font-weight: 200;
  color: darkred;
`

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Wrapper>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Title>Mona Lisa's Books</Title>
        <LogoContainer>
          <Image />
        </LogoContainer>
      </Link>
      <h4>So many books so little time...</h4>

      <ContactMe>
        <h3 className="decorated"><span>Contact Me</span></h3>
      </ContactMe>      
                
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <FormContainer>

          <InputStyles type="text" name="name" placeholder="Name" required />

          <InputStyles type="email" name="email" placeholder="Email" required />

          <TextArea name="message" id="" cols="30" rows="6" placeholder="Message" required />
          <Btn type="submit">Send</Btn>
        </FormContainer>  
      </form>

      <h5>QUESTIONS OR COMMENTS?</h5>

      <p>
Didn't find what you were looking for, or do you have a specific question? Drop
                   us a line.
      </p>

      <h5 style={{ color: '#71f442'}}>Mona Lisa's Books</h5>    
                
      <p>
                tel.
        <a href="tel:702-802-8760"> 702 802 8760</a>
      </p>
                
    </Wrapper>   
    <div style={{ margin: `0 auto`,maxWidth: `950px` }}>
      <hr /> 
    </div>
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

export default Contact
