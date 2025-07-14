import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx'
import './App.css'
import { HashRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </HashRouter>
  </StrictMode>,
)
