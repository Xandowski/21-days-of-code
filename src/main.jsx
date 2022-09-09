import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes,
  Route, } from "react-router-dom";
import { App } from './App'
import { HelloWorld } from './pages/HelloWorld'
import './global.css'
import { ThemeSwitchProvider } from './contexts/ThemeSwitchContext'
import { Calculator } from './pages/Calculator';
import { PageNotFound } from './pages/PageNotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeSwitchProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/helloworld" element={<HelloWorld />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeSwitchProvider>
  </React.StrictMode>
)
