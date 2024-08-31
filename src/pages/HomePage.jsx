// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Welcome to the Application</h1>
      <Grid>
        <Card onClick={() => navigate('/ip-address-finder')}>IP Address Finder</Card>
        <Card onClick={() => navigate('/language-translator')}>Language Translator</Card>
        <Card onClick={() => navigate('/movie-search-engine')}>Movie Search Engine</Card>
        <Card onClick={() => navigate('/qr-code-generator')}>QR Code Generator</Card>
        <Card onClick={() => navigate('/quiz-app')}>Quiz App</Card>
        <Card onClick={() => navigate('/todo-app')}>Todo App</Card>
      </Grid>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;
