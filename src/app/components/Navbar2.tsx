import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { PiTote } from "react-icons/pi";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <div className="absolute w-[1920px] h-[90px] bg-black/90">
      <div className="flex justify-between items-center w-[1320px] h-[32px] ml-[300px] mt-[29px] ">
        <h1 className="w-[109px] h-[32px] text-[24px] font-bold tracking-wide text-white">
          Food
          <span className="text-darkyellow">tuck</span>
        </h1>
        <ul className="flex justify-between cursor-poniter w-[508px] h-[24px] text-white text-[16px] font-normal ml-[342px] ">
          <li className="text-darkyellow">
            <Link href={"/"}>Home </Link>
          </li>
          <li>
            {" "}
            <Link href={"/menu"}>Menu </Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog </Link>
          </li>
          <li>
            {" "}
            <Link href={"/ourChef"}>Pages </Link>
          </li>
          <li>
            {" "}
            <Link href={"/about"}>About</Link>
          </li>

          <li>
            {" "}
            <Link href={"/shoplist"}>Shop</Link>
          </li>
          <li>
            {" "}
            <Link href={"/signup"}>Contact</Link>
          </li>
        </ul>
        <div className="flex justify-between  text-white items-center w-[104px] h-[24px]  ml-[357px]">
          <Link href={"/not-found"}>
            {" "}
            <CiSearch className="w-[24px] h-[24px] cursor-pointer" />{" "}
          </Link>
          <Link href={"/faqpage"}>
            <AiOutlineUser className="w-[24px] h-[24px] text-white/80 cursor-pointer" />
          </Link>
          <Link href={"/checkout"}>
            <PiTote className="w-[24px] h-[24px] cursor-pointer" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
