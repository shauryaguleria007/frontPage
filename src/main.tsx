import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Login } from './Pages/Login/Login.tsx'
import { Register } from './Pages/Register/Register.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './Pages/Home/Home.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
