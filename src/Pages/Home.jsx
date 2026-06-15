
import { useState } from 'react';
import AboutMe from '../Components/Kedua/AboutMe'
import PortfolioSection from '../Components/Ketiga/PortofolioSection'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Pertama/Hero'
import Hubungi from '../Components/Kempat/HubungiSection';

function Home() {
    const [activeTab, setActiveTab] = useState("projects");
  return (
    <>
      <div
      className="
      min-h-screen
      bg-[#050014]
      text-white
      relative
      overflow-hidden
    "
    >
      <Navbar/>
      {/* <Hero /> */}
      <div className="pt-14">
      <Hero setActiveTab={setActiveTab}/>
     <AboutMe setActiveTab={setActiveTab}/>
     <PortfolioSection
      activeTab={activeTab}
          setActiveTab={setActiveTab}/>
          <Hubungi/>
</div>
    </div>
    </>
  )
}

export default Home
