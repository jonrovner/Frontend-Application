import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';


const NavUnlisted = styled.ul`

  display: flex;
  gap: 3rem;
  justify-content: space-between;
  margin:0;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
 
  @media screen and (min-width: 600px) {
    flex-direction:column;
    justify-content: flex-start;
    gap:.5rem;
    padding-top: 0;
  
  }
    
  
  

  ul{
    margin:0;
    padding: 0;
    padding-inline-start: 0;
  }

  a {
    text-decoration: none;
  }

  li {
    background-color: #272e71;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 3px;
    color:white;
    font-size: 1rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;


function Navigation() {
  return (
    <NavUnlisted>
      <NavLink to="/" activeclassname="current" exact>
        <li>Main</li>
      </NavLink>
      <NavLink to="/product/6781" activeclassname="current" exact>
        <li>Product</li>
      </NavLink>
    </NavUnlisted>
  );
}

export default Navigation
