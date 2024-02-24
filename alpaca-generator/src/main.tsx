import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AlpacaProvider } from '@/contexts/AlpacaContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AlpacaProvider>
      <App />
    </AlpacaProvider>
  </React.StrictMode>,
)
