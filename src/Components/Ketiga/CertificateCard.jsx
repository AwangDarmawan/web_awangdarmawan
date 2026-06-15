

import { Eye } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import DataCertificate from "./DataCertificate";

export default function CertificateCard() {
  return (
    <PhotoProvider>
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
        "
      >
        {DataCertificate.map((certificate, index) => (
          <div
            key={certificate.title}
            data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
            data-aos-delay={index * 100}
            data-aos-duration="800"
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              border-[6px]
              border-[#22304f]
          
            
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]
              shadow-[0_0_25px_rgba(99,102,241,0.25)]
                
          bg-[#11162f]
        
         
          hover:border-violet-500/30
          
            "
          >
            <PhotoView src={certificate.image}>
              <div className="relative cursor-pointer">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    w-full
                    aspect-[16/10]
                    object-cover
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/50
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-white/15
                      backdrop-blur-md
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Eye
                      size={24}
                      className="text-white"
                    />
                  </div>

                  <span
                    className="
                      text-white
                      font-semibold
                      text-lg
                      font-space
                    "
                  >
                    View Certificate
                  </span>
                </div>
              </div>
            </PhotoView>
             <div className="p-2  sm:p-4">
                <div className="flex items-start justify-between gap-3">
              <h3
                className="
                  text-lg
                  font-bold
                  text-white
                  font-space
                "
              >
                {certificate.title}
              </h3>
               <span
      className="
        shrink-0
        rounded-full
        border
        border-violet-500/30
        bg-violet-500/10
        px-2
        py-1
        text-[10px]
        sm:text-xs
        text-violet-300
        font-medium
      "
    >
      {certificate.year}
    </span>
  </div>

              <p
                className="
                  mt-1
                  text-sm
                  text-zinc-400
                  font-space
                "
              >
                {certificate.issuer}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
}