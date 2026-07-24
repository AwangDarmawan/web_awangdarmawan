

import AboutImage from "../../assets/Img/Poto-TR.png";
import { Code2, EyeIcon} from "lucide-react";
import CardProjek from "./CardProjek";
import { TypeAnimation } from "react-type-animation";


export default function AboutMe({ setActiveTab }) {
   
  return (
    <section
      id="about"
      className="
      min-h-screen
      flex
      items-center
      py-20
      relative
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
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 data-aos="fade-up-left"
            className="
               text-4xl
            sm:text-5xl
            md:text-6xl
            font-black
            font-monserrat
            bg-gradient-to-r
              from-[#6366f1]
            via-[#6226d3]
            to-[#cc207c]
            
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_50px_rgba(139,92,246,0.8)]
           font-poppins
            "
          >
            {/* from-[#6366f1]
             via-[#6226d3]
             to-[#b806ff] */}
            About Me
          </h2>

         <p data-aos="fade-down-right"
  className="
  mt-3
  flex
  flex-wrap
  items-center
  justify-center
  gap-2
  text-zinc-400
  text-sm
  sm:text-base
  font-space
  "
>



    Transforming ideas into digital experiences
 

 </p>
        </div>

        {/* CONTENT */}
        <div
          className="
          grid
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
            order-2
            lg:order-1
            "
          >
            <span
            data-aos="fade-down-right"
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
              font-space
              "
            >
              ✨ About Developer
            </span>

            <h3 
              className="
              mt-4
              text-center
             lg:text-start
             xs:text-left
               font-black
              leading-none
              text-4xl
              sm:text-2xl
              md:text-6xl
              xl:text-5xl
              font-space
               hover:scale-105
              "
            >
              <span data-aos="fade-down-left" className="block text-white">
                Hello, I'm
              </span>

              <span
              data-aos="fade-down-right" 
                className="
              
                font-black
                font-poppins
                mt-3
                bg-gradient-to-r
                 from-[#6366f1]
             via-[#6226d3]
             to-[#b806ff]
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
               

                "
              >
                Awang Darmawan
              </span>
            </h3>

            <p
            data-aos="fade-up-left"
              className="
              mt-6
              max-w-xl
              text-zinc-400
              text-base
              sm:text-lg
              leading-relaxed
              font-space
              "
            >
              Saya Awang Darmawan, lulusan S1 Teknik Informatika (IPK 3.64) dengan minat pada teknologi,
              administrasi, pengembangan web, dan desain grafis. Memiliki pengalaman lebih dari 1 tahun   sebagai
                Operator Admin dan pengalaman sebagai Frontend Developer melalui Magang – Binar Academy selama 5 bulan .Selain itu saya juga pernah mengikuti -Workshop Pembuatan Game 3D menggunakan Godot Engine, Terbiasa bekerja rapi, cepat beradaptasi, dan mampu bekerja dalam tim maupun mandiri.
            </p>

            {/* QUOTE */}
            <div data-aos="fade-up"
              className="
              mt-6
              p-5
              rounded-2xl
              border
              border-violet-500/20
              bg-white/5
              backdrop-blur
              "
            >
              
              <p >
      <TypeAnimation
  sequence={[
    "Committed to continuous learning, innovation, and embracing new experiences and constructive feedback.",
    500, 
    "",   
    500, 
  ]}
  speed={60}
  deletionSpeed={60}
  repeat={Infinity}
  
  className="
    italic
    text-violet-300
    text-sm
    sm:text-base
    border-r-2
  border-violet-500
  "
/>
</p>
            </div>

            {/* BUTTON */}
            <div data-aos="fade-up-left"
              className="
              flex
              flex-wrap
              flex-row
              gap-4
              mt-8
              
              "
            >
              <button 
                onClick={() =>
                 window.open(
                 "https://drive.google.com/file/d/19OF-rsAsqgEfurnA03SP3XLekg_F-P2r/view?usp=drive_link",
                  "_blank"
                )
              }
                className="
                  w-full
               sm:w-auto
                 px-6
                py-3
             rounded-xl
              font-space
               bg-gradient-to-r
             from-[#6366f1]
      via-[#6226d3]
    to-[#b806ff]

  text-white

  shadow-[0_0_40px_rgba(139,92,246,0.3)]
  flex
  items-center
  justify-center
  gap-2

   hover:scale-105
  
  transition-all
  duration-300
                "
              >
                <EyeIcon size={18} />
                Lihat CV
              </button>

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
                w-full
                sm:w-auto
                px-6
                py-3
                rounded-xl
                bg-black
                shadow-[0_0_40px_rgba(139,92,246,0.3)]
                flex
                items-center
                justify-center
                gap-2
                hover:scale-105
                transition-all
                duration-300
                font-space
                "
              >
                <Code2 size={18} />
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
            flex
            justify-center
            order-1
            lg:order-2
            "
          >
            <div data-aos="fade-zoom-in-right" className="relative">
              <div
                className="
                absolute
                inset-0
                bg-violet-500/20
                blur-3xl
                rounded-full
             
                "
              />

              <img
                src={AboutImage}
                alt="Awang Darmawan"
                className="
                relative
                block
                mx-auto
                w-[75%]
               sm:w-[65%]
               md:w-[55%]
               lg:w-[70%]
              
                rounded-full
                object-contain
                drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]
                transition-all
                duration-300
                hover:scale-105
                "
              />
            </div>
          </div>
        </div>

        {/* CARD SECTION */}
        <div className="mt-20">
          <CardProjek  setActiveTab={setActiveTab} />
        </div>
      </div>
    </section>
  );
}