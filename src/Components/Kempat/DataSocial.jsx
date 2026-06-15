import {
  FaLinkedin,
  FaInstagram,
  FaGithub,

  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
const DataSocial = [
   {
    name: "Email",
    username: "adarmawan468@gmail.com",
    link: "mailto:adarmawan468@gmail.com",
    icon: <FaEnvelope size={20} />,
  },
  {
    name: "LinkedIn",
    username: "Awang Darmawan",
    link: "https://www.linkedin.com/in/awangdarmawan-bb37b42a9",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "Instagram",
    username: "@awang_drmwn",
    link: "https://www.instagram.com/awng_drmwn/",
    icon: <FaInstagram size={20} />,
  },
  {
    name: "Github",
    username: "Awang Darmawan",
    link: "https://github.com/AwangDarmawan",
    icon: <FaGithub size={20} />,
  },
  {
    name: "Whatsapp",
    username: "+6283125307355",
    link: "https://wa.me/6283125307355",
    icon: <FaWhatsapp size={20} />,
  },
];
export default DataSocial