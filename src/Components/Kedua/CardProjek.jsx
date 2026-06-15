import DataCertificate from "../Ketiga/DataCertificate";
import DataProjek from "../Ketiga/DataProjek"
import DataTechStack from "../Ketiga/DataTechStack";

const CardProjek = ( {setActiveTab}) => {
   const totalProjects = DataProjek.length;
   const totalcertificate = DataCertificate.length;
   const totaltechstack =  DataTechStack.length;
  return (
    <>
      {/* STATS SECTION */}
<div
  className="
  mt-16
  grid
  grid-cols-1
  sm:grid-cols-2
  xl:grid-cols-3
  gap-5
  
  "
>
  {[
    {
      number: totalProjects,
      title: "TOTAL PROJECTS",
      desc: "Innovative web solutions crafted",
      icon: "💻",
          tab: "projects",

    },
    {
      number: totalcertificate ,
      title: "CERTIFICATES",
      desc: "Professional skills validated",
      icon: "🏆",
      tab: "certificates",
    },
    {
  number: totaltechstack,
  title: "TOOLS EXPERTISE",
    desc: "Web development, administration, and graphic design",
  icon: "⚡",
  tab: "techstack",
}
    // {
    //   number: "1+",
    //   title: "YEARS EXPERIENCE",
    //   desc: "Continuous learning journey",
    //   icon: "🌐",
    // },
    // {
    //   number: "100%",
    //   title: "PASSION",
    //   desc: "Dedicated to web development",
    //   icon: "🚀",
    // },
  ].map((item,index) => (
    <div
      key={item.title}
      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
data-aos-delay={index * 150}
data-aos-duration="800"
  onClick={() => {
    if (item.tab) {
      setActiveTab(item.tab);

      document
        .getElementById("portfolio")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-violet-500/30
      shadow-[0_0_40px_rgba(139,92,246,0.25)]
     bg-gradient-to-br
from-[#6366f1]/20
via-[#6226d3]/10
to-[#b806ff]/20
backdrop-blur-xl
    
      "
    >
      <div
        className="
        flex
        justify-between
        items-start
        
        "
      >
        <div
          className="
          w-10
          h-10
          rounded-2xl
          bg-white/10
          flex
          items-center
          justify-center
          text-2xl
          "
        >
          {item.icon}
        </div>

        <h3
          className="
          text-4xl
          font-bold
          font-space
          "
        >
          {item.number}
        </h3>
      </div>

      <h4
        className="
        mt-6
        text-sm
        font-semibold
        tracking-wider
        text-zinc-200
        font-space
        "
      >
        {item.title}
      </h4>

      <p
        className="
        mt-2
        text-sm
        text-zinc-400
        font-space
        "
      >
        {item.desc}
      </p>
    </div>
  ))}
</div>
    </>
  )
}

export default CardProjek
