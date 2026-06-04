import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "./styles/global.css"
import "./styles/aboutstyle.css"
import "./styles/skillsstyle.css"
import "./styles/homestyle.css"
import "./styles/projectstyle.css"
import "./styles/contactstyle.css"

createRoot(document.getElementById('root')).render(
    
    <App />
    
  
)
