import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';


const NavUnlisted = styled.ul`

  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
  }

  li {
    color: #272e71;
    font-size: 1.3rem;
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
      <NavLink to="/" activeClassName="current" exact>
        <li>Main</li>
      </NavLink>
      <NavLink to="/product/6781" activeClassName="current" exact>
        <li>Product</li>
      </NavLink>
    </NavUnlisted>
  );
}

export default Navigation
