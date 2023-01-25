import styled from "styled-components";
import { Button } from "../styles/Button";
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaDiscord ,FaInstagram,FaYoutube } from "react-icons/fa"
const Footer = () => {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div >
            <h3 style={{"font-family":"'Sofia Sans Semi Condensed', sans-serif" , "font-size":"2.5rem"}}>Ready to get started?</h3>
            <h3 style={{"font-family":"'Sofia Sans Semi Condensed', sans-serif" , "font-size":"2.5rem"}}>Talk to us Today</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer>
          <div className="container grid grid-four-column" >
            <div className="footer footer-about">
              <h3>Let Us Help You </h3>
              <h4>Covid -19 Prevention </h4>
              <h4>PopShop App Download </h4>
              <h4>Return Centers </h4>
            </div>
            <div className="footer-subscribe">
              <h3>Make Money With Us</h3>
              <h4>Sell On PopShop </h4>
              <h4>Advertise Your Product</h4>
              <h4>Become an Affiliate </h4>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons" style={{"color":"white"}}>
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div >
                    <FaYoutube className="icons" />
                </div>
              </div>
            </div>
            <div className="footer-contact" >
              <h3>Contact Us</h3>
              <h4>Phone: +91 12345678978</h4>
              <h4>Email: popshope@mail.com</h4>
              <h4>Website: PopShop.com</h4>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column " style={{"color":"black"}}>
              <p>
                @{new Date().getFullYear()} PopShop. All Rights Reserved
              </p>
              <div>
                <h3 style={{"font-family":" 'Allura', cursive", "font-size": "3.4rem"}} >Front-End Project by Piyush Kumar</h3>
              </div>
            </div>
          </div>
        </footer>

    </Wrapper>
  )
}


const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }

  }

  footer {
    padding: 14rem 0 9rem 0;
    
    background-color: #5BC0F8; 
    h3 {
      font-weight : bold;
      margin-bottom: 2.4rem;
      font-family: 'Sofia Sans Semi Condensed', sans-serif;
      font-size: 24px;
      color : #000000

    }
    h4 {
      
      margin-bottom: 2.4rem;
      font-family: 'Sofia Sans Semi Condensed', sans-serif;
      font-size: 20px;
      color : #000000
    }
    p {
     
      color : #000000
      font-family: 'Sofia Sans Semi Condensed', sans-serif;
      font-size: 24px;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid #000000;
        .icons {
          color: #000000;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: #000000;
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;



export default Footer