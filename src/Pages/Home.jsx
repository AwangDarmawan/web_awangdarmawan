import { Helmet } from "react-helmet-async";
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

       <Helmet>
        <title>Jasa Pembuatan Website & Desain | Awang Darmawan</title>

       <meta
  name="description"
  content="Jasa pembuatan website. Solusi untuk bisnis pribadi maupun perusahaan dengan harga terjangkau. Lihat portfolio proyek terbaik kami."
/>

        <meta
          name="keywords"
          content="Portofolio Awang Darmawan,Awang Darmawan,Website Bisnis,Website Undangan pernikahan,Desain Poster  "
        />

        <meta name="author" content="Awang Darmawan" />

        <link
          rel="canonical"
          href="https://awangdarmawan.vercel.app/"
        />
        <meta
  property="og:title"
  content="Jasa Pembuatan Website | Awang Darmawan"
  />

  <meta
  property="og:description"
  content="Portfolio dan jasa pembuatan website profesional."
    />

  <meta
  property="og:url"
  content="https://awangdarmawan.vercel.app/"
  />

<meta
property="og:type"
content="website"
/>

<script type="application/ld+json">
{`
{
"@context":"https://schema.org",
"@type":"ProfessionalService",
"name":"Awang Darmawan",
"url":"https://awangdarmawan.vercel.app/",
"description":"Jasa Pembuatan Website",
"serviceType":"Web Development"
}
`}
</script>
      </Helmet>

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
