// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #4a90e2;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: white;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 My Application. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
