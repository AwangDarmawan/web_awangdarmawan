import {
  ExternalLink,
  ArrowRight
} from "lucide-react";
import DataProjek from "./DataProjek"

import { useNavigate } from "react-router-dom";



export default function ProjectCard() {
    const navigate = useNavigate();
  
  return (
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-3
      gap-6
    "
  >
    {DataProjek.map((project,index) => (
      <div
        key={project.title}
        data-aos={index % 2 === 0 ? "fade-up-right" : "zoom-in"}
data-aos-delay={index * 150}
data-aos-duration="800"
        className="
          group
          relative
          flex
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#11162f]
          shadow-xl
          hover:-translate-y-2
          hover:border-violet-700/30
          transition-all
          duration-300
          before:absolute
          before:inset-0
          before:bg-[radial-gradient(circle_at_top_left,#6366f120,transparent_40%)]
          before:pointer-events-none
        "
      >
        {/* IMAGE */}
        <div className="relative z-10 p-4">
          {/* <PhotoProvider>
  <PhotoView 
  src={project.image}> */}
          <img
            src={project.image}
            
            alt={project.title}
           
            className="
           
              w-full
              h-48
              rounded-2xl
              object-cover
              transition-transform
              duration-500
              hover:scale-100
            
            "
          />
          {/* </PhotoView>
          </PhotoProvider> */}
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col flex-1 px-5 pb-2">
          <h3
            className="
              text-2xl
              font-bold
              text-white
              font-inter
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-4
              text-sm
              leading-relaxed
              text-zinc-400
              font-space
            "
          >
            {project.desc}
          </p>

          {/* BUTTON */}
          <div
            className="
              mt-auto
              pt-2
              flex
              items-center
              justify-between
            "
          >
            <button
             onClick={() => window.open(project.demo, "_blank")}
              className="
                flex
                items-center
                gap-2
                text-violet-400
             
                hover:text-violet-300
                transition
                font-space
                hover:scale-95
                font-black
                
              "
            >
              Live Demo
              <ExternalLink size={16} />
            </button>

            <button
              onClick={() => navigate(`/project/${project.title}`)}
              className="
                flex
                items-center
                gap-2
                px-3
                py-2
                rounded-xl
                bg-white/10
                text-white
                hover:bg-white/20
                transition
                font-black
                font-space
                hover:scale-95
              "
            >
              Details
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);
}

