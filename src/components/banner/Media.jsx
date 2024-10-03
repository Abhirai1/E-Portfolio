import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaReact, FaYoutube } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://github.com/abhirai1">
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/abhishek-rai-692397227/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <IoLogoJavascript />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Media