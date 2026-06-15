import DataTechStack from "./DataTechStack";

export default function TechStackCard() {
  return (
    <div
      className="
        grid
        grid-cols-2
        min-[480px]:grid-cols-3
        sm:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-4
        sm:gap-5
        lg:gap-6
      "
    >
      {DataTechStack.map((tech, index) => (
        <div
          key={tech.name}
          data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
          data-aos-delay={index * 50}
          className="
            group
            relative
            aspect-square
            rounded-2xl
            overflow-hidden
            border
            border-white/10
            bg-[#11162f]
            flex
            flex-col
            items-center
            justify-center
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-violet-500/30
            hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition
              bg-[radial-gradient(circle_at_top,#6366f120,transparent_60%)]
            "
          />

          {/* Logo */}
          <img
            src={tech.img}
            alt={tech.name}
            className="
              relative
              z-10
              w-12
              h-12
              sm:w-16
              sm:h-16
              lg:w-20
              lg:h-20
              object-contain
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />

          {/* Title */}
          <h3
            className="
              relative
              z-10
              mt-4
              text-xs
              sm:text-sm
              lg:text-base
              text-zinc-200
              font-semibold
              font-space
              text-center
              px-2
            "
          >
            {tech.name}
          </h3>
        </div>
      ))}
    </div>
  );
}