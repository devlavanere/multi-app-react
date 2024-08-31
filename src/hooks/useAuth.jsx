// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (email, password) => {
    // Simulando a autenticação e geração de token
    if (email === 'user@example.com' && password === 'password') {
      const fakeToken = 'fake-jwt-token';
      localStorage.setItem('token', fakeToken);
      setToken(fakeToken);
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return { token, login, logout };
};

export default useAuth;
