import HeroImage from "../../assets/vd/pcs.gif";
import { TypeAnimation } from "react-type-animation";
import {
  // Mail,
  User2,
  ExternalLink,
} from "lucide-react";

import SocialLinks from "./SocialLink";

export default function Hero({setActiveTab}) {
  return (
    <section
    id="home"
      className="
      min-h-screen
      flex
      items-center
      relative
      z-10
      mt-10
      
      "
    >
      <div
        className="
        container
        mx-auto
        px-5
        lg:px-10
         
        "
      > 
 
        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          items-center
           
          "
        >
          <div className="order-2 lg:order-1">
          
          {/* LEFT */}
          <div>

            <span
              data-aos="fade-right"
              className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
             
              rounded-full
              border
              border-violet-500/30
              bg-violet-500/10
              text-violet-300
              text-sm
             hover:scale-105
                 shadow-[0_0_40px_rgba(139,92,246,0.3)]
                 drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]
                 font-space
              "
            >
              ✨ Ready to Innovate
            </span>

            <h1
              data-aos="fade-up-right"
              className="
              mt-3
              font-black
              leading-none
              text-5xl
              sm:text-6xl
              md:text-7xl
              xl:text-7xl
           drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
            font-space
              "
            >
              Web
              <br />

              <span
                className="
                bg-gradient-to-r
                from-[#6366f1]
             via-[#6226d3]
             to-[#b806ff]
                bg-clip-text
                text-transparent
                  drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
                "
              >
                Developer
              </span>
            </h1>
{/* 
            <h2
              data-aos="fade-up"
              className="
              mt-6
              text-lg
              text-violet-300
              w-[25ch]
overflow-hidden
whitespace-nowrap
border-r-4
border-violet-500/40
 animate-typing1
font-space

              "
            >
            Next Generation Web Developer
            </h2> */}
            <h2 data-aos="fade-up" className=" mt-6">
            <TypeAnimation  
  sequence={[
    "Next Generation Web Developer",
    500,
    "",
    500,
  ]}
  speed={150}
  deletionSpeed={50}
  repeat={Infinity}
  className="
    mt-6
    text-lg
    text-violet-300
    font-space
    border-r-4
border-violet-500/40
  "
/>
</h2>

            <p
              data-aos="fade-down-left"
              className="
              mt-5
              max-w-xl
              text-zinc-400
              text-base
              sm:text-lg
              font-space
              font-normal
              
              "
            >
              Menciptakan Website Yang Inovatif,
              Fungsional, dan User-Friendly
              untuk Solusi Digital.
              Di bawah ini merupakan gambaran perjalanan saya dalam dunia pengembangan website, teknologi digital, administrasi, serta desain grafis yang terus berkembang seiring pengalaman dan pembelajaran yang saya jalani. .
            </p>

            {/* Skills */}
            {/* <div
              data-aos="fade-up"
              className="
              flex
              flex-wrap
              gap-3
              mt-6
              font-inter font-medium
             
              "
            >
              {[
                "React",
                "Javascript",
                "Node.js",
                "Tailwind",
                "Boostrap",
                "Superbase",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                  px-5
py-2
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
shadow-[0_0_20px_rgba(139,92,246,0.4)]
                  "
                >
                  {skill}
                </span>
              ))}
            </div> */}

            {/* Buttons */}

            <div
              data-aos="fade-up"
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              font-inter 
              text-sm
              "
            >
              <button
                    onClick={() => {
    setActiveTab("projects");

    document
      .getElementById("portfolio")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
                className="
                px-6 py-3
               
                rounded-xl
                bg-black
                hover:scale-105
                transition
                shadow-[0_0_40px_rgba(139,92,246,0.3)]
                flex
                items-center
                justify-center
                gap-2
                "
              >
                Projects
                <ExternalLink size={18} />
              </button>

              <button
                onClick={() => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
                className="
                px-6 py-3
                rounded-xl
                bg-black
                hover:scale-105
                transition
                shadow-[0_0_40px_rgba(139,92,246,0.3)]
                flex
                items-center
                justify-center
                gap-2
                "
              >
                About Me
                <User2 size={18} />
              </button>
            </div>

            <SocialLinks />
          </div>
          </div>

          {/* RIGHT */}

          <div
            data-aos="zoom-in"
            className="
            flex
            justify-center
              order-1
            lg:order-2
            bg-transparent
            "
          >
            <img
              src={HeroImage}
              alt="Frontend Developer"
              className="
              w-full
              max-w-[300px]
              sm:max-w-[400px]
              md:max-w-[500px]
              lg:max-w-[500px]
                drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
              object-contain
              bg-transparent
               transition-all
    duration-300
    hover:scale-105
              
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}