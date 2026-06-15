// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


// export default function SocialLinks() {
//   const socials = [
//     FaGithub,
//     FaLinkedin,
//     FaInstagram,
//   ];

//   return (
//     <div className="flex gap-5 mt-10 ">
//       {socials.map((Icon, index) => (
//         <button
//           key={index}
//           className="
//             h-10
//             w-10
//             rounded-xl
//             border
//             border-white/10
//             bg-white/5
//             backdrop-blur
//             flex
//             items-center
//             justify-center
//             hover:bg-violet-500/20
//             transition
//             hover:scale-105
//           "
//         >
//           <Icon size={20} />
//         </button>
//       ))}
//     </div>
//   );
// }
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  const socials = [
    {
      icon: FaGithub,
      link: "https://github.com/AwangDarmawan",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/awangdarmawan-bb37b42a9",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/awng_drmwn/",
    },
  ];

  return (
    <div className="flex gap-5 mt-10">
      {socials.map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              h-10
              w-10
              rounded-xl
              border
              border-white/10
              bg-white/5
              backdrop-blur
              flex
              items-center
              justify-center
              hover:bg-violet-500/20
              transition
              hover:scale-105
            "
          >
            <Icon size={20} className="text-violet-400" />
          </a>
        );
      })}
    </div>
  );
}