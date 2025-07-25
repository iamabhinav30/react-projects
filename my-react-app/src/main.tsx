import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppContentProvider from './providers/AppContentProviders.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContentProvider>
      <App />
    </AppContentProvider> 
  </StrictMode>,
)
