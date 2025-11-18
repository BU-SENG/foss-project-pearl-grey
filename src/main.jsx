import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { DonationProvider } from './context/DonationContext'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DonationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DonationProvider>
    </ThemeProvider>
  </React.StrictMode>
)
