import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import emailjs from 'emailjs-com';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
