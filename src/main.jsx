import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes,
  Route, } from "react-router-dom";
import { App } from './App'
import { HelloWorld } from './pages/HelloWorld'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/helloworld" element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
