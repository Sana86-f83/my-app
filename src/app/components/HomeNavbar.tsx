import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const HomeNavbar = () => {
  return (
    <div className="w-[1920px] h-[174px] bg-black ">
      <div className="relative w-[1320px] h-[87px] bg-black flex m-auto ">
        {/* Foodtuck */}
        <div className=" mx-auto w-[109px] h-[32px] ">
          <h1 className="flex text-[24px] font-bold text-darkyellow font-sans ">
            Food <span className="text-white font-sans">tuck</span>
          </h1>
        </div>

        <div className="w-[507px] h-[24px] text-white text-[16px] absolute mt-[48px] cursor-pointer z-10">
          <ul className="flex justify-between">
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/"}>Home</Link>
            </li>
            <p className="h-[7px] w-[7px] rounded-full bg-darkyellow mt-[22px] -ml-[60px]"></p>
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/menu"}>Menu</Link>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/ourChef"}>Pages</Link>
            </li>
            <li className="w-[64px] flex gap-1 cursor-pointer">
              <Link href={"/about"}>
                About
                <IoIosArrowDown className="flex -mt-[20px] ml-[46px] text-white " />
              </Link>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/shoplist"}>Shop</Link>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-1">
              <Link href={"/signup"}>Contact</Link>
            </li>
          </ul>

          <div className="flex">
            <input
              className="flex text-[18px] absolute w-[310px] h-[54px] pl-[20px] justify-between rounded-full ml-[978px] -mt-[50px] bg-bgblack border border-offset-2 border-primarycolor"
              type="text"
              placeholder="Search..."
            />
            <CiSearch className="absolute text-[36px] flex justify-between ml-[1238px] -mt-[40px] text-white bg-bgblack" />
          </div>
          <HiOutlineShoppingBag className="absolute text-white font-bold h-[24px] w-[24px] ml-[1295px] -mt-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
