import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Code from './Code.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Code />
  </StrictMode>,
)
