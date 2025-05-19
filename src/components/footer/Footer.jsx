import React from "react";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-5 mt-3  bg-amber-50 flex flex-wrap justify-center items-center gap-2 md:gap-10  absolute right-0 left-0 ">
      <p>Eyesome made with 💜 by ThanhNg224 </p>
      <p className="flex gap-3">
        <a href="https://github.com/ThanhNg224">
          <AiFillGithub className="text-2xl text-gray-800" />
        </a>
        <a href="https://www.linkedin.com/in/nguyễn-thành-a7a8b3355/">
          <AiOutlineLinkedin className="text-2xl text-gray-800" />
        </a>
        <a href="https://www.facebook.com/nguyen.thanh.619149/">
          <AiOutlineFacebook className="text-2xl text-gray-800" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
