import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaCode,FaUser, FaClock} from "react-icons/fa";
import { useEffect, useState } from "react";


function Intro() {
     const [timeLeft, setTimeLeft] = useState(3); // ⬅️ 5 detik intro

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);
  return (
    <section
   
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#050014]
        relative
        overflow-hidden
      "
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />

      <div className="relative text-center px-5">
        
        {/* ICONS */}
        <div className="flex justify-center gap-5 mb-6">
          <div className="p-3 rounded-full hover:scale-105
              hover:border-violet-500/40
               hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
              shadow-[0_0_20px_rgba(139,92,246,0.4)] backdrop-blur-md  ">
            <FaCode className="text-violet-400 text-xl sm:text-2xl md:text-3xl" />
          </div>

          <div className="p-3 rounded-full 
            hover:border-violet-500/40
               hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
              shadow-[0_0_20px_rgba(139,92,246,0.4)] backdrop-blur-md  ">
            <FaUser className="text-violet-400 text-xl sm:text-2xl md:text-3xl" />
          </div>

          <div className="p-3 rounded-full hover:border-violet-500/40
               hover:drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
              shadow-[0_0_20px_rgba(139,92,246,0.4)] backdrop-blur-md ">
            <FaGithub className="text-violet-400 text-xl sm:text-2xl md:text-3xl" />
          </div>
        </div>

      {/* TIME BADGE */}
<div className="flex justify-center mb-3">
  <div
    className="
      flex items-center gap-2
      px-3 py-1
      rounded-full
      bg-white/5
      border border-white/10
      backdrop-blur-md
      text-xs sm:text-sm
      text-violet-300
      shadow-[0_0_15px_rgba(139,92,246,0.2)]
    "
  >
    <FaClock className="text-violet-400 text-xs sm:text-sm " />
    <h3 className="font-space font-black">
      {timeLeft} Detik
    </h3>
  </div>
</div>
       
        {/* TITLE */}
<h1
  className="
    font-black
    font-space
    text-3xl
    sm:text-4xl
    md:text-6xl
    lg:text-7xl
    leading-tight
    drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
  "
>
 {/* LINE 1 */}
<div className="flex flex-wrap justify-center gap-2 sm:gap-4">
  
  <span
    data-aos="zoom-in"
    data-aos-delay="0"
    data-aos-duration="600"
    className="text-white"
  >
    Welcome
  </span>

  <span
    data-aos="zoom-in-right"
    data-aos-delay="400"
    data-aos-duration="600"
    className="text-white"
  >
    To
  </span>

  <span
    data-aos="zoom-in-right"
    data-aos-delay="550"
    data-aos-duration="600"
    className="text-white"
  >
    My
  </span>

</div>
    

  {/* LINE 2 */}
  <span
    data-aos="fade-up-left"
    data-aos-delay="200"
    className="
      block
      bg-gradient-to-r
      from-[#6366f1]
      via-[#6226d3]
      to-[#b806ff]
      bg-clip-text
      text-transparent
      drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]
    "
  >
    Portfolio Website
  </span>
</h1>

        {/* TYPING NAME */}
        <div className="mt-6 text-lg sm:text-xl md:text-2xl font-space
        ">
          <TypeAnimation
            sequence={[
              "Hi, I'm Awang Darmawan",
              1500,
             
            ]}
            speed={50}
            repeat={Infinity}
            className="
              bg-gradient-to-r
              from-[#6366f1]
              via-[#6226d3]
              to-[#b806ff]
              bg-clip-text
              text-transparent
              font-black
               drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]"
               
          />
        </div>

       

        {/* BUTTON */}
       
      </div>
    </section>
  );
}

export default Intro;