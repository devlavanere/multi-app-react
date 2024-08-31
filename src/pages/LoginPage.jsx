import { useState } from 'react';
import styled from 'styled-components';

// Estilos principais do container
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
`;

// Estilos do formulário de login
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }
`;

// Estilo dos campos de entrada
const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  width: 250px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #764ba2;
  }
`;

// Estilo dos botões
const Button = styled.button`
  padding: 12px 25px;
  margin-top: 10px;
  background-color: #6a1b9a;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
  width: 140px;

  &:hover {
    background-color: #4a148c;
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

// Estilo do contêiner de botões
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

// Componente de Login
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find((user) => user.email === email);

    if (!user || user.password !== password) {
      alert('Credenciais inválidas');
      return;
    }

    const token = btoa(email);
    localStorage.setItem('token', token);

    alert('Login bem-sucedido');
    window.location.href = '/';
  };

  const handleRegister = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some((user) => user.email === email);

    if (userExists) {
      alert('Usuário já cadastrado');
      return;
    }

    const newUser = { email, password };
    localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
    alert('Usuário registrado com sucesso');
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <ButtonContainer>
          <Button type="submit">Entrar</Button>
          <Button type="button" onClick={handleRegister}>
            Registrar
          </Button>
        </ButtonContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
