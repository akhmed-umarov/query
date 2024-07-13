import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import queryClient from './api/client.ts'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
