import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StartRating from './StarRating.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StartRating maxRating={5} />
  </StrictMode>,
)
