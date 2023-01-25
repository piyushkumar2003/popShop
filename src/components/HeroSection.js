import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {Button} from "../styles/Button"

const HeroSection = (props) => {
  return (
    <Wrapper>
        <div className='container' >
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                <p className='intro-data'>Welcome to</p>
                    <h1>{props.title}</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus mi diam, quis vehicula libero ultrices vel. Donec purus quam, sagittis non cursus ultricies, rutrum ac neque. Aliquam eget eros leo. Praesent pretium ornare vulputate. Ut sed felis a lectus porta placerat. Etiam vitae nunc et ligula ullamcorper tristique. Vestibulum a maximus ex. Donec ultrices, neque non lacinia semper, eros felis semper urna, et pretium mi erat ac diam. 
                    </p>
                    <NavLink to="/products">
                        <Button >Shop Now</Button>
                    </NavLink>
            </div>
            {/* 'home page image-section */}
            <div>
                <figure>
                <img src={require('../images/hero.jpg')} 
                    alt='Family'
                    className='img-style'/>
                </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      font-family: 'Sofia Sans Semi Condensed', sans-serif;
      font-size: 24px;
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;