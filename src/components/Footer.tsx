import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-[20px] flex flex-wrap gap-[10px] justify-between ">
      <a href="/">
        <Image
          src="/images/logo.png"
          width={120}
          height={80}
          className="max-h-[80px] h-full object-contain object-center"
          alt="logo"
        ></Image>
      </a>

      <span className="text-[0.9rem] font-[500] text-[#9e9e9e]">
        Trun Coder - Copyright 2024
      </span>
    </div>
  );
};

export default Footer;
