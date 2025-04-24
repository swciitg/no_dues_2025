import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/context.jsx'
import { AdminContextProvider } from './context/adminContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <AdminContextProvider>
      <App />
      </AdminContextProvider>
    </ContextProvider>
  </StrictMode>,
)
