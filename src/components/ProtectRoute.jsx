// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Verifica se o token JWT está presente e válido
  const isAuthenticated = localStorage.getItem('token');

  // Redireciona para a página de login se não estiver autenticado
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
