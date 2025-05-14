import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Code from './Code.jsx'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Click me to visit Google'
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <Code />
  // </StrictMode>,
  reactElement
)
