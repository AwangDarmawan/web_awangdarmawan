import DataSocial from "./DataSocial";


function SocialCard() {
  return (
    <>
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
          
    </>
  )
}

export default SocialCard
