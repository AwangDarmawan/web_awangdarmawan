import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import DataProjek from "./DataProjek"
import { ArrowLeft } from "lucide-react";






export default function DetailProjek() {
    const navigate = useNavigate();
     const { title } = useParams();

  const project = DataProjek.find((item) => item.title === title);

  if (!project) {
    return (
      <div className="text-white p-10">
        Project tidak ditemukan
      </div>
    );
  }
  return (
    <section className="min-h-screen bg-[#070A1A] text-white px-4 sm:px-6 lg:px-16 py-10">
       {/* BACK BUTTON */}
  <button
    onClick={() => navigate(-1)}
    className="
      
      flex items-center gap-1
      px-2 py-2
      rounded-xl
      hover:bg-white/20
   
      text-sm
       
border
border-white/10
bg-white/5
backdrop-blur
transition-all
duration-300
hover:scale-105
hover:border-violet-500/40
hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
shadow-[0_0_20px_rgba(139,92,246,0.4)]
font-montserrat
font-black
    "
  >
     <ArrowLeft size={16} />
     Back
  </button>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
         <h1
  className="
    text-3xl sm:text-5xl lg:text-6xl
     leading-tight
    bg-gradient-to-t from-[#6366f1] via-[#6226d3] to-[#b806ff]
    bg-clip-text text-transparent
    drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
    my-2
    flex flex-col
    gap-2
    font-space
    font-black
  "
>
  <span>{project.title}</span>
  <span className="text-white sm:pt-0">Profile</span>
</h1>

          <div className="
          h-1 w-20  relative rounded-full my-4
            bg-gradient-to-r
    from-[#6366f1]
    via-[#6226d3]
    to-[#b806ff]
    shadow-[0_0_15px_rgba(139,92,246,0.6)]" />

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-space">
          {project.desc}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4 mt-6 font-space">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold">{project.techstack.length}</p>
              <p className="text-sm text-gray-400">Total Teknologi</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-bold">  {project.keyfeature.length}</p>
              <p className="text-sm text-gray-400">Fitur Utama</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
             onClick={() => window.open(project.demo, "_blank")}
              href="#"
              className="flex items-center gap-2 px-5 py-3 rounded-xl     bg-gradient-to-r
             from-[#6366f1]
  via-[#6226d3]
  to-[#b806ff]

  text-white

  shadow-[0_0_40px_rgba(139,92,246,0.3)]
 

   hover:scale-105
  
  transition-all
  duration-300 hover:bg-indigo-700  font-space font-bold"
            >
              <FaExternalLinkAlt size={14} />
              Live Demo
            </button>

            <button
             onClick={() => window.open(project.linkgithub, "_blank")}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 transition hover:scale-105 hover:border-violet-500/40
hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              <FaGithub size={16} />
              Github
            </button>
          </div>

          {/* TECH STACK */}
          <div className="mt-8">
            

            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs 
                  font-space
                  rounded-full
border
border-white/10
bg-white/5
backdrop-blur
transition-all
duration-300
hover:scale-105
hover:border-violet-500/40
hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          {/* IMAGE PREVIEW */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <img
              src={project.image}
              alt="project preview"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* FEATURES CARD */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg  mb-4 flex items-center gap-2 font-bold font-space">
              ⭐ Key Features
            </h3>

           <ol className="space-y-2 text-gray-300">
  {project.keyfeature.map((item, i) => (
    <li key={i} className="flex gap-2 font-bold font-space">
      <span className="text-gray-300 ">
        {i + 1}.
      </span>
      {item}
    </li>
  ))}
</ol>
          </div>

        </div>
      </div>
    </section>
  );
}