// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Adicionar Navigate para redirecionamento
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import IPAddressFinder from './pages/IPAddressFinder';
import LanguageTranslator from './pages/LanguageTranslator';
import MovieSearchEngine from './pages/MovieSearchEngine';
import QRCodeGenerator from './pages/QRCodeGenarator';
import QuizApp from './pages/QuizApp';
import TodoApp from './pages/TodoApp';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import useAuth from './hooks/useAuth'; // Hook de autenticação

const App = () => {
  const { token } = useAuth();

  // Função de proteção de rotas
  const ProtectedRoute = ({ element }) => {
    return token ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ip-address-finder" element={<ProtectedRoute element={<IPAddressFinder />} />} />
        <Route path="/language-translator" element={<ProtectedRoute element={<LanguageTranslator />} />} />
        <Route path="/movie-search-engine" element={<ProtectedRoute element={<MovieSearchEngine />} />} />
        <Route path="/qr-code-generator" element={<ProtectedRoute element={<QRCodeGenerator />} />} />
        <Route path="/quiz-app" element={<ProtectedRoute element={<QuizApp />} />} />
        <Route path="/todo-app" element={<ProtectedRoute element={<TodoApp />} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
