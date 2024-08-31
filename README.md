# Refatoração Multi-App

O projeto foi refatorado para incluir, modularização, tramento de erros, autenticação JWT, persistência de dados no Local Storage. Procedimentos realizados visando facilitar a manutenção e a escalabilidade.

## Arquitetura

### Modularização
O código foi reestruturado em módulos distintos para melhorar a manutenção e a legibilidade:
- **Componentes**: São os elementos visuais e interativos da aplicação. Exemplo: `Header`, `Footer`, `Navbar`.
- **Páginas**: Representam as diferentes visualizações da aplicação. Exemplo: `LoginPage`, `HomePage`.
- **Serviços**: Gerenciam a lógica de negócio e comunicação com APIs ou armazenamento local. Exemplo: `authService`, `taskService`.

### Tratamento de Erros
O tratamento de erros foi melhorado para garantir que o aplicativo lide com erros de forma clara e amigável para o usuário. Isso inclui mensagens de erro adequadas e a visualização de falhas de forma que não afete a experiência do usuário.

## Autenticação

### JWT (JSON Web Tokens)
Implementação de autenticação utilizando JWT para proteger rotas sensíveis e gerenciar o login do usuário. Inclui:
- **Login**: Autenticação com credenciais e geração de tokens.
- **Renovação de Tokens**: Mecanismos básicos para renovação de tokens.

## Validação de Dados
Os dados JSON recebidos e enviados são validados para garantir que estejam corretos e completos, evitando erros e inconsistências.

## Interação com API
A interação com APIs foi otimizada para garantir requisições eficientes e seguras. As requisições são tratadas com cuidado para melhorar a performance e a segurança.

### Melhorias Específicas

- **Substituição de APIs**: Considera-se a troca da API do OMDB pela API do TMDB para buscar informações sobre filmes, oferecendo mais funcionalidades e dados.
  - **OMDB API**: [http://www.omdbapi.com/?apikey=[sua_api_key]&s=filme](http://www.omdbapi.com/?apikey=[sua_api_key]&s=filme)
  - **TMDB API**: [https://api.themoviedb.org/3/search/movie?api_key=[sua_api_key]&query=filme](https://api.themoviedb.org/3/search/movie?api_key=[sua_api_key]&query=filme)
 

## Melhorias no Todo App

- **Funcionamento sem JSON Server**: O Todo App foi modificado para funcionar sem JSON Server, utilizando LocalStorage para persistência dos dados. Isso melhora a simplicidade e a performance da aplicação.

## Instruções para Execução

### Clonar o Repositório

1. **Clone o Repositório do GitHub**:
   Primeiro, você precisa clonar o repositório para o seu ambiente local. Substitua `URL_DO_REPOSITORIO` pela URL do repositório no GitHub.

   ```bash
   git clone URL_DO_REPOSITORIO

### Navegue para o Diretório do Projeto

2. **Navegue para o Diretório do Projeto**:
   Após clonar o repositório, navegue para o diretório do projeto.

   ```bash
   cd nome-do-repositorio

### Instale as Dependências

3. **Instale as Dependências**:
  Certifique-se de que você tem o Node.js e o npm instalados.
  Com o Node.js e npm instalados, execute o seguinte comando para instalar as dependências do projeto(node_modules).

   ```bash
   npm install

4. **Intale jsonwebtoken para a autenticação JWT além de outras bibliotecas necessárias**:

   ```bash
   npm install jsonwebtoken bcryptjs cors

5. **Inicie o Servidor de Desenvolvimento do Frontend**:
   ```bash
   npm run dev 

   Após executar o comando, você verá uma mensagem indicando que o servidor está rodando, geralmente em http://localhost:3000 ou outro endereço configurado.

6. **Abra o Projeto no Navegador**:
Abra seu navegador e acesse o endereço fornecido pelo Vite (por padrão, http://localhost:3000). Você verá a aplicação React Multi-App em execução.

### Recursos Utilizados

- ReactJS
- JavaScript
- Axios
- Styled-Components
- Json Web Token(JTW)
- LocalStorage
- API - TMDB
- NPM
- Git
- GitHub

### Video Multi-App Refatorado
<video src="
https://github.com/user-attachments/assets/8da7371d-7e0e-480c-acd1-16e1cdd24352" controls></video>

### Autor

[<img src="https://avatars.githubusercontent.com/u/125924854?s=400&u=505601333417c0f00a726bb3e1e757dcaa874463&v=4" width=115><br><sub>Michel L. Sampaio</sub>](https://github.com/devlavanere)
