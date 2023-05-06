import React from 'react';
import styled from 'styled-components';
import {BsFillHandbagFill,BsFillHeartFill}from "react-icons/bs"
import {CgProfile}from "react-icons/cg"
import {BiHeartCircle} from "react-icons/bi"
import { Link } from 'react-router-dom';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #2196F3;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
//fff
//0D2538
//039BE5
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to={"/"}><li>Home</li></Link>
      <Link to={"/product"}><li>University</li></Link>
      <Link to={"/product"}><li>Acadamics</li></Link>
      <Link to={"/sign-up"}><li>Sign-up</li></Link>
      <Link to={"/login"}><li>Login</li></Link>
      <li> <BiHeartCircle size={"25px"}/> </li>
      
      <Link to={"/admin"}><li> <CgProfile size={"25px"} /> </li></Link>
      <li></li>
    </Ul>
  )
}
//Academics
export default RightNav