import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { Link } from 'react-router-dom';


const Nav = styled.nav`
  width: 100%;
  height: 75px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color:#F5F5F5;
  position:relative;
    position:sticky;
    top:0;
     z-index: 100;
    margin: auto;
  .logo {
    padding: 12px 0;
    padding-bottom:0px;
  }
  .navbar{
   
  }
`

const Navbar = () => {
  return (
    <Nav className="navbar">
      <div className="logo">
        <Link to={"/"}>        <span style={{fontFamily:"sans-serif",fontSize:"28px",color:"#1A237E",fontWeight:"bolder"}}>Career</span ><span style={{fontFamily:"sans-serif",fontSize:"28px",color:"#03A9F4",fontWeight:"bolder"}}>Mantra</span>
</Link>
        <p style={{fontFamily:"sans-serif",fontSize:"10px",marginTop:"0px", paddingTop:"0px"}}>select.study.apply</p>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar