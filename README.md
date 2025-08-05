# 🎮 GameHub – Video Game Discovery App

**GameHub** is a modern, responsive web application built with **React 18** that helps users discover new and trending video games. Users can filter games by platform, genre, and more. The project consumes data from a public video game API to provide real-time game listings with rich metadata.

## 🌐 Live Demo

🔗 [Visit GameHub on Vercel](https://game-hub-one-ebon.vercel.app/)

---

## 🛠️ Tech Stack

| Technology         | Description                                     |
|--------------------|-------------------------------------------------|
| **React 18**        | Front-end library for building UI components    |
| **Chakra UI**       | Modular and accessible component library       |
| **Axios**           | For API integration and HTTP requests          |
| **TanStack React Query** | Powerful asynchronous state and data fetching |
| **Zustand**         | Lightweight global state management            |
| **React Infinite Query** | Infinite scrolling for game listings       |
| **React Router DOM** | Client-side routing                           |
| **Bootstrap**       | Additional responsive layout support           |
| **Vercel**          | Deployment and hosting platform                |

---

## 🚀 Features

- 🔍 **Game Search** – Find games based on name, genre, or platform
- 🧩 **Filters** – Browse games by genre, platform, and rating
- 🔁 **Infinite Scroll** – Automatically load more games as you scroll
- ⚡ **Optimized Data Fetching** – Using React Query for caching and performance
- 🌓 **Responsive UI** – Mobile-friendly design using Chakra UI and Bootstrap
- 🔄 **Routing** – Navigate between pages without reloads using React Router
- 📦 **State Management** – App-wide state managed efficiently with Zustand

---
# Getting Started
To get started with GameHub, follow these steps:

Clone this repository to your local machine.
Run npm install to install the required dependencies.
Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
Add the API key to src/services/api-client.ts
Run npm run dev to start the web server.
# Start the development server
npm run dev
