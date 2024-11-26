import { Heebo } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const heebo = Heebo({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className="flex justify-center space-y-6 items-center flex-col h-[243px] bg-footerbg">
      <div className="flex w-[279px] h-[30px] text-iconscolor justify-evenly">
        <Link href={""}>
          {" "}
          <FaFacebookSquare className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          {" "}
          <FaInstagram className="w-[30px] h-[30px]" />
        </Link>
        <Link href={""}>
          {" "}
          <FaTwitter className="w-[36.92px] h-[30px]" />
        </Link>
        <Link href={""}>
          {" "}
          <FaLinkedin className="w-[30px] h-[30px]" />
        </Link>
      </div>
      <p
        className={`${heebo.className} text-black  text-center font-medium  text-[20px] md:text-[22px]`}
      >
        Copyright ©2020 All rights reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
