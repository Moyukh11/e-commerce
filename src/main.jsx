import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar.jsx';  
import  Footer from './Footer.jsx';


createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  
)
