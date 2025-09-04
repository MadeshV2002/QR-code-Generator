import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import WeatherApp from './Weather/WeatherApp'
// import FormValidation from './formSamples/FormValidation'
// import ValidationForm from './formSamples/ValidationForm'
import Qr from './QrCode/Qr'
import './QrCode/Qr.css'
// import UserCard from './UserCard'
//  import App from './App.jsx'

// import UseEffect from './UseEffects/UseEffect'
// import AdviceApi from './AdviceApiApp/AdviceApi'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   {/* <UserCard/> */}
   <Qr/>
   {/* <ValidationForm/> */}
   {/* <UseEffect/> */}
   {/* <AdviceApi/> */}
   {/* <WeatherApp/> */}
  </StrictMode>,
)
