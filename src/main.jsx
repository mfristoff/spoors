import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'
import { installChunkRecovery } from '@/lib/chunkRecovery'
import AppErrorBoundary from '@/components/AppErrorBoundary'

installChunkRecovery()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
)
