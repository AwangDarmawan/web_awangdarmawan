// import { useState } from "react";
import ShowcaseNavbar from "./ShowcaseNavbar";
import ProjectCard from "./ProjectCard";
import CertificateCard from "./CertificateCard";
import TechStackCard from "./TechStackCard";

export default function PortfolioSection({ activeTab,setActiveTab}) {
  // const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="portfolio"
      className="
      py-20
      relative
      "
    >
      <div className="container mx-auto px-5 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10">

          <h2
          data-aos="fade-up-left"
            className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-black
            bg-gradient-to-r
               from-[#6366f1]
            via-[#6226d3]
            to-[#cc207c]
            
            bg-clip-text
            text-transparent
            font-poppins
             drop-shadow-[0_0_50px_rgba(139,92,246,0.8)]
            "
          >
         
            Portofolio Showcase
          </h2>

          <p data-aos="fade-down-right"
            className="
            mt-4
            text-zinc-400
            max-w-2xl
            mx-auto
            text-sm
            sm:text-base
            font-space
            "
          >
            Explore my journey through projects,
            certifications, and technical expertise.
          </p>

        </div>

        <ShowcaseNavbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="mt-8">

          {activeTab === "projects" && (
            <ProjectCard />
          )}

          {activeTab === "certificates" && (
            <CertificateCard />
          )}

          {activeTab === "techstack" && (
            <TechStackCard />
          )}

        </div>
      </div>
    </section>
  );
}