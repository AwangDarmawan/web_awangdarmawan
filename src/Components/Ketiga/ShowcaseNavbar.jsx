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
      icon: <Code2 size={18} />,
    },
    {
      id: "certificates",
      label: "Certificates",
      icon: <Award size={18} />,
    },
    {
      id: "techstack",
      label: "Expertise",
      icon: <Boxes size={18} />,
    },
  ];

  return (
    // <div
    //   className="
    //   flex
    //   overflow-x-auto
    //   gap-3
    //   p-2
    //   rounded-3xl
    //   border
    //   border-white/10
    //   bg-white/5
    //   backdrop-blur
    //   "
    // >
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
           py-3
      sm:py-4
      md:py-5

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

        gap-1
        sm:gap-2
            "
          >
            <div className="scale-75 sm:scale-100">
          {tab.icon}
        </div>
            <span
          className="
          text-[10px]
          xs:text-[11px]
          sm:text-sm
          md:text-base
          font-medium
          leading-none
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