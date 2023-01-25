import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from "./Nav"
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/" >
    {/* <img src={require('../images/logo_only.png')} alt='Website-Logo' height= '50px' width="50px" /> */}
    <img src={require('../images/logo_with_name-removebg-preview.png')} alt='Website-Logo' height= '70px' width="250px" />
</NavLink>
<Nav />
    </MainHeader>
  )
}

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: rgb(255, 244, 207);

display: flex;
justify-content: space-between;
align-items: center;
position: relative;
.logo {
  height: 5rem;
}
`;

export default Header