// src/components/NavBar.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 5px 10px;

  &:hover {
    background-color: #555;
    border-radius: 4px;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/login">Login</NavItem>
      <NavItem to="/todo">Todo</NavItem>
      <NavItem to="/qrcode">QR Code Generator</NavItem>
      <NavItem to="/movie">Movie Search</NavItem>
      <NavItem to="/quiz">Quiz</NavItem>
      <NavItem to="/translate">Translate</NavItem>
    </NavBarContainer>
  );
};

export default NavBar;
