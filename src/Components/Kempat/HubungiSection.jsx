import {
  FaCommentDots,
  FaImage,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";
import Poto from "../../assets/Img/awangband.jpg"

import DataSocial from "./DataSocial";

export default function HubungiSection() {
  return (
    <section
      id="hubungi"
      className="
      py-16
      sm:py-20
      lg:py-24
      px-4
      sm:px-6
      lg:px-10
      "
    >

      <div className="max-w-7xl mx-auto">
        

        {/* HEADING */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 data-aos="fade-up-left"
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
           
            bg-gradient-to-r
            from-[#6366f1]
            via-[#6226d3]
            to-[#cc207c]
            bg-clip-text
            text-transparent
            font-poppins
            font-black
             
            
             drop-shadow-[0_0_50px_rgba(139,92,246,0.8)]
            "
          >
            Hubungi Saya
          </h2>

          <p
          data-aos="fade-down-right"
            className="
            mt-3
            text-sm
            sm:text-base
            text-zinc-400
            font-space
            "
          >
            Punya pertanyaan? Kirim pesan dan saya akan
            segera membalasnya.
          </p>
        </div>

        {/* MAIN GRID */}
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-[380px_1fr]
          gap-6
          lg:gap-8
          "
        >

          {/* LEFT */}
        
          <div
          data-aos="fade-down"
           className="
           rounded-3xl
           border
           border-white/10
           bg-white/5
           backdrop-blur-xl
           p-5
           sm:p-6
           h-fit
           lg:w-fit
             lg:min-w-[320px]
           "
          >
            <h3 className="text-2xl font-bold from-[#6366f1]
            via-[#6226d3]
            to-[#cc207c]
            font-poppins
             bg-clip-text
            text-transparent
            bg-gradient-to-t
            drop-shadow-[0_0_50px_rgba(139,92,246,0.8)]
            ">
              Hubungi
            </h3>

            <p className="mt-2 text-sm text-zinc-400 font-space">
              Ada yang ingin didiskusikan?
              Kirim pesan dan mari kita bicara.
            </p>

            

            {/* SOCIAL */}
            <div
              className="
              mt-8
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-4
               lg:w-fit
               
              "
            >
              <h4 className="font-semibold mb-4 font-space">
                Connect With Me
              </h4>

              <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
                "
              >
                {DataSocial.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    p-3
                    hover:border-violet-500/40
                    hover:bg-white/10
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                  
                    "
                  >
                    <div className="text-violet-400 text-lg">
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                        text-sm
                      
                        text-white
                        truncate
                        font-space
                        font-black
                        "
                      >
                        {item.name}
                      </p>

                      <p
                        className="
                        text-xs
                        text-zinc-400
                        truncate
                        font-space
                        "
                      >
                        {item.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
          data-aos="fade-down"
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-5
            sm:p-6
            "
          >
            <div className="flex items-center gap-2 mb-3 ">
              <FaCommentDots
                size={18}
                className="text-violet-400"
              />
              <div>
             
                 <h3 className="font-semibold font-space flex items-center gap-2">
                Komentar <span className="from-[#6366f1]
            via-[#6226d3]
            to-[#cc207c]
           
             bg-clip-text
            text-transparent
            bg-gradient-to-t
            drop-shadow-[0_0_50px_rgba(139,92,246,0.8)]
           ">(231)</span>
              </h3>
              
            </div>
            </div>

            {/* COMMENT FORM */}
            <div className="space-y-4 font-space">
              <input
                placeholder="Enter your name"
                className="
                w-full
                h-12
                px-4
                rounded-xl
                border
                border-white/10
                bg-white/5
                outline-none
                "
              />

              <textarea
                rows={4}
                placeholder="Write your message here..."
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/5
                p-4
                resize-none
                outline-none
                "
              />
              <div className="space-y-2">
  <label className="text-sm text-zinc-300 font-medium">
    Profile Photo <span className="text-zinc-500">(Opsional)</span>
  </label>

  <label
    className="
      flex
      flex-col
      items-center
      justify-center
      gap-2
      h-32
      rounded-2xl
      border
      border-dashed
      border-white/10
      bg-white/5
      cursor-pointer
      hover:border-violet-500/40
      transition-all
    "
  >
    <input
      type="file"
      accept="image/*"
      className="hidden"
    />

    <FaImage className="text-violet-400" size={22} />

    <span className="text-sm text-zinc-400">
      Choose Profile Photo
    </span>

    <span className="text-xs text-zinc-500">
      Max file size: 5MB
    </span>
  </label>
</div>

              <button
                className="
                w-full
             h-12
    rounded-xl
    bg-gradient-to-r
    from-[#6366f1]
    via-[#6226d3]
    to-[#b806ff]
    flex
    items-center
    justify-center
    gap-2
    
    text-white
    hover:scale-[1.02]
    hover:shadow-[0_0_25px_rgba(139,92,246,0.4)]
    transition-all
    duration-300 font-space font-black"
              >
                <FaPaperPlane size={16} />
                Kirim komentar
              </button>
            </div>
                
            {/* COMMENT LIST */}
            <div
              className="
              mt-6
              space-y-4
              max-h-[500px]
              overflow-y-auto
              pr-2
              font-space
              "
            >
              <div
  className="
    mt-6
    rounded-2xl
    border
    border-violet-500/20
    bg-violet-500/5
    p-4
     shadow-[0_0_40px_rgba(139,92,246,0.3)]
     hover:scale-105
  "
>
  <div className="mb-3">
    <span
      className="
        text-xs
        font-semibold
        
      text-zinc-300
        uppercase
        font-space
      "
    >
      📌 Pinned Comment
    </span>
  </div>

  <div className="flex gap-3">
    <img
      src={Poto}
      alt="Admin"
      className="
        w-12
        h-12
        rounded-full
        object-cover
        border
        border-violet-500/30
      "
    />

    <div className="flex-1">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h4 className="font-semibold">
          Awang Darmawan
        </h4>

        <span
          className="
            px-2
            py-0.5
            text-xs
            rounded-full
            bg-violet-500/20
            text-violet-300
           font-semibold
            font-space
          "
        >
          Admin
        </span>
      </div>

    
    </div>
  </div>
  
    </div>
 <div
  className="
    mt-2
    flex
    flex-col
    sm:flex-row
    sm:items-center
    sm:justify-between
    gap-2
  "
>
  <p
    className="
      text-sm
      text-zinc-300
      leading-relaxed
    "
  >
    Masukan Anda membantu saya terus berkembang. 🚀
  </p>

  <p
    className="
      text-xs
      text-zinc-500
      shrink-0
    "
  >
    22 Des 2024
  </p>
</div>
</div>
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-4
                  font-space
                  "
                >
                 
                <div className="flex gap-3">
    {/* <img
      src={FaUser}
      alt="Admin"
      className="
        w-12
        h-12
        rounded-full
        object-cover
        border
        border-violet-500/30
      "
    /> */}
    <FaUser className="text-violet-400 text-4xl"  size={20}/>

    <div className="flex-1">
    <div className="flex justify-between items-center">

        <h4 className="font-semibold">
          User{item}
        </h4>

       

    
    </div>
  </div>
  
    </div>
 <div
  className="
    mt-2
    flex
    flex-col
    sm:flex-row
    sm:items-center
    sm:justify-between
    gap-2
  "
>
  <p
    className="
      text-sm
      text-zinc-300
      leading-relaxed
    "
  >
   Terus lah bermimpi
  </p>

  <p
    className="
      text-xs
      text-zinc-500
      shrink-0
    "
  >
    20 Januari 2025
  </p>
</div>
</div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}