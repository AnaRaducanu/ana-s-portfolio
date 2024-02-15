import React from "react";
import Image from "next/image";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  const paragraphStyle = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    color: "#133362",
  };
  return (
    <footer
      id="footer"
      className="mx-auto my-10 max-w-3xl px-4 text-center sm:px-6 md:max-w-5xl flex flex-col items-center"
    >
      <p className="font-bold " style={paragraphStyle}>
        Designed and built with next.js by Ana Raducanu
      </p>
      <p>© {new Date().getFullYear() + " "} all rights reserved</p>
    </footer>
  );
};

export default Footer;
