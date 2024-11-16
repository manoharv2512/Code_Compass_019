import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Article1 from './components/Article1.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LandingPage/>
    <App />
    <Article1 />
    </BrowserRouter>
)
