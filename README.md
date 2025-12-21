# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🍔 Food Delivery App

A modern and responsive **Food Delivery Web Application** built using **React**.  
This project focuses on a clean UI, smooth user experience, cart management, and scalable architecture.

---

## 🚀 Project Overview

This Food Delivery App allows users to:
- Browse food items by category
- Add and remove items from the cart
- View total cart amount dynamically
- Place orders
- Sign in using a login popup
- Navigate smoothly using React Router

The project is currently **frontend-focused**, with backend integration planned for future updates.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **React Router DOM**
- **Context API** (Global State Management)
- **CSS** (Custom Styling)
- **Vite** (Fast Build Tool)

### Backend (Planned / Future Scope)
- Node.js
- Express.js
- MongoDB
- Authentication (JWT)
- Payment Gateway Integration

---

## ✨ Features

### ✅ Implemented Features (Frontend)
- Responsive Navbar
- Category-based food filtering
- Cart functionality (Add / Remove items)
- Dynamic total cart amount
- Login popup UI
- Reusable components
- Clean and modular code structure

### ⏳ Backend Features (Planned)
- User authentication
- Order management
- Database integration
- Admin panel
- Payment system

---

## 📂 Project Structure

```bash
src/
│
├── assets/              # Images and static assets
├── components/          # Reusable UI components
│   ├── Navbar/
│   ├── FoodDisplay/
│   ├── FoodItem/
│   ├── Header/
│   ├── Footer/
│   └── LoginPopup/
│
├── context/
│   └── StoreContext.jsx # Global state management
│
├── pages/
│   ├── Home/
│   ├── Cart/
│   └── PlaceOrder/
│
├── App.jsx
├── main.jsx
└── index.css
