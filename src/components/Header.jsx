import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Estilo principal do Header
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #6a1b9a;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Estilo do título ou logo do Header
const Logo = styled.h1`
  font-size: 24px;
`;

// Estilo do botão de logout
const LogoutButton = styled.button`
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #f50057;
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Header = () => {
  const navigate = useNavigate();

  // Função para lidar com o logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token para efetuar o logout
    navigate('/login'); // Redireciona para a página de login
  };

  // Verifica se o usuário está logado
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  return (
    <HeaderContainer>
      <Logo>My App</Logo>
      {isLoggedIn && (
        <LogoutButton onClick={handleLogout}>Sign Out</LogoutButton>
      )}
    </HeaderContainer>
  );
};

export default Header;
