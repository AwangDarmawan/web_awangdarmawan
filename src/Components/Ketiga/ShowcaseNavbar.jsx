import {
  Code2,
  Award,
  Boxes
} from "lucide-react";

export default function ShowcaseNavbar({
  activeTab,
  setActiveTab,
}) {

  const tabs = [
    {
      id: "projects",
      label: "Projects",
      icon: <Code2 size={24} />,
    },
    {
      id: "certificates",
      label: "Certificates",
      icon: <Award size={24} />,
    },
    {
      id: "techstack",
      label: "Expertise",
      icon: <Boxes size={24} />,
    },
  ];

  return (
   
    <div
  className="
  grid
  grid-cols-3
  gap-2
  p-2
  rounded-3xl
  border
  border-white/10
  bg-white/5
  backdrop-blur
  font-space
  
  "
>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`
          py-4
sm:py-4
md:py-5
px-2

      rounded-xl
      sm:rounded-2xl

      transition-all
      duration-300

          ${
        activeTab === tab.id
          ? `
            bg-gradient-to-r
            from-[#6366f1]/20
            to-[#b806ff]/20
            border
            border-violet-500/30
          `
          : `
            border
            border-transparent
            hover:bg-white/5
          `
      }
      `}
    >
          <div
            className="
             flex
        flex-col
        items-center
        justify-center
    
    min-h-[60px]
    sm:min-h-[70px]
            "
          >
            {/* <div className="scale-75 sm:scale-100"> */}
            <div 
            className="
             text-[20px]
      sm:text-[22px]
      md:text-[24px]
      flex
      items-center
      justify-center">
          {tab.icon}
        </div>
            <span
          className="
              text-xs
      sm:text-sm
      md:text-base
      font-bold
      leading-none
      text-center
      break-words
      pt-2
          
          "
        >
          {tab.label}
        </span>
          </div>
        </button>
      ))}
    </div>
  );
}