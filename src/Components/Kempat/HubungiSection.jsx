import {
  FaCommentDots,
 
  FaUser,
} from "react-icons/fa";
import Poto from "../../assets/Img/awangband.jpg"


import { useEffect, useState } from "react";
import {  GetDataKomentar } from "../Services/DataHub";
import SocialCard from "./SocialCard";
import FormHub from "./FormHub";


export default function HubungiSection() {
   const [datas, setDatas] = useState([]);
  // const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const result = await GetDataKomentar();
      setDatas(result);
      // setLoading(false);
    };

    fetchData();
  }, []);


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
            {/* SOCIAL */}
            <SocialCard/>
           
            

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
           "> ({datas.length})</span>
              </h3>
              
            </div>
            </div>

            {/* COMMENT FORM */}
            
            <FormHub  setDatas={setDatas}/>
                
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
    22 Mei 2026
  </p>
</div>
</div>
      
            
              <div className="space-y-4">
      {datas.map((item) => (
        <div
          key={item.id}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-4
            font-space
          "
        >
          {/* HEADER */}
          <div className="flex gap-3">
            {item.image ? (
              <img
                src={item.image}
                alt={item.nama}
                className="
                  w-10
                  h-10
                  rounded-full
                  object-cover
                  border
                  border-violet-500/30
                "
              />
            ) : (
              <FaUser
                className="text-white w-10
                  h-10
                  rounded-full
                  object-cover
                  border
                  border-violet-500/30"
                size={40}
              />
            )}

            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-white">
                  {item.nama}
                </h4>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="
              mt-3
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
              {item.deskripsi}
            </p>

            <p
              className="
                text-xs
                text-zinc-500
                shrink-0
              "
            >
              {new Date(item.created_at).toLocaleDateString(
                "id-ID",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}