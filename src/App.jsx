import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import Intro from "./Pages/Intro";
import "react-toastify/dist/ReactToastify.css";
import Delete from "./Components/Kempat/Delete";



function App() {
   const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return <Intro />;
  }


  return (
    <>
       <BrowserRouter>
          <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
    </>
  )
}

export default App
