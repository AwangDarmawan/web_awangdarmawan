import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";
import "@fontsource/space-grotesk";
import './index.css'
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/bebas-neue";
import "@fontsource/montserrat";
import "@fontsource/poppins";


AOS.init({
  duration: 1000,
  easing: "ease-out-cubic",
  once: false,
  mirror: true,
  offset: 80,
  delay: 100,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
    <App />
    </HelmetProvider>
  </StrictMode>,
)
