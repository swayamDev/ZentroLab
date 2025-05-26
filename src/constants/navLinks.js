import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.webp";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const LINKS = [
  { href: "#home", name: "Home" },
  { href: "#services", name: "Services" },
  { href: "#use-cases", name: "Use Cases" },
  { href: "#team", name: "Team" },
  { href: "#testimonials", name: "Testimonials" },
];

export const PARTNER_LOGOS = [
  {
    src: logo1,
    alt: "Company One",
  },
  {
    src: logo2,
    alt: "Company Two",
  },
  {
    src: logo3,
    alt: "Company Three",
  },
  {
    src: logo4,
    alt: "Company Four",
  },
  {
    src: logo5,
    alt: "Company Five",
  },
  {
    src: logo6,
    alt: "Company Six",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "#",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "#",
  },
];
