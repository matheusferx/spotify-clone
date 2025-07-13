# Spotify Clone 🎧

Este projeto é um clone simplificado do Spotify, criado com React (Vite) no frontend e Node.js + Express no backend. Ele simula funcionalidades básicas da plataforma, como listagem de artistas, músicas, player e navegação entre páginas.

---

## 🔗 Demonstração

- **Frontend (Vercel):** [spotify-clone-frontend.vercel.app](https://spotify-clone-frontend.vercel.app)
- **Backend (Render):** [spotify-clone-1g2p.onrender.com](https://spotify-clone-1g2p.onrender.com)

> ℹ️ O backend está hospedado no Render, que pode levar alguns segundos para iniciar na primeira requisição.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React, Vite, React Router DOM, CSS Modules
- **Backend:** Node.js, Express, MongoDB Atlas
- **Hospedagem:** Vercel (frontend) e Render (backend)
- **Outros:** Axios, dotenv, MongoDB Driver

---

## ✨ Funcionalidades

- Listagem dinâmica de artistas e músicas
- Páginas individuais para cada artista e música
- Player para ouvir previews
- Busca dinâmica (simulada)
- Layout responsivo baseado no design do Spotify
- Navegação rápida (SPA)

---

## 🚀 Como funciona

- O frontend faz requisições HTTP para a API Node.js.
- A API consulta os dados em um banco MongoDB na nuvem (Atlas).
- Os dados são renderizados dinamicamente no React.
- O player simula a experiência de escutar música na plataforma.

---

## 🧑‍💻 Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/spotify-clone.git
cd spotify-clone
```

### 2. Backend

```bash
cd back-end/api
npm install
npm start
```
O backend estará disponível em `http://localhost:3001`.

### 3. Frontend

```bash
cd ../../front-end
npm install
npm run dev
```
O frontend estará disponível em `http://localhost:5173`.

> **Importante:** O frontend espera que a variável de ambiente `VITE_API_URL` aponte para a URL da API (local ou do Render).

---

## Deploy

### Frontend (Vercel)

- O frontend está hospedado no [Vercel](https://vercel.com/).
- O deploy é feito automaticamente a cada push na branch principal.
- A variável de ambiente `VITE_API_URL` deve ser configurada no painel da Vercel para apontar para a API do Render.

### Backend (Render)

- O backend está hospedado no [Render](https://render.com/).
- O deploy é feito automaticamente a cada push na branch principal.
- O MongoDB está hospedado no Atlas, e a string de conexão é configurada nas variáveis de ambiente do Render.

---

## Estrutura de Pastas

```
spotify-clone/
  ├── back-end/
  │   └── api/
  │       ├── server.js
  │       └── connect.js
  └── front-end/
      ├── src/
      │   ├── components/
      │   ├── pages/
      │   └── App.jsx
      └── .env
```

---

## Créditos

- Projeto desenvolvido por Matheus Fernandes.
- Inspirado no Spotify.

---

## Licença

Este projeto é apenas para fins educacionais e não deve ser usado para fins comerciais.

```
VITE_API_URL=https://spotify-clone-1g2p.onrender.com
```