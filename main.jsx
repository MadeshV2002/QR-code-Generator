import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Qr from './QrCode/Qr'
import './QrCode/Qr.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Qr/>
  </StrictMode>,
)
