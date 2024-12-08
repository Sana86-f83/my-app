import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div>
      {/* navbar */}
      <div className=" w-[507px] h-[24px] text-white text-[16px] absolute mt-[48px] ">
        <ul className=" flex justify-between">
          <li>Home</li>
          <li>Menu</li>
          <li>Blog</li>
          <li>Pages</li>
          <li className="w-[64px] flex gap-1">
            About
            <IoIosArrowDown className="mt-[5px] text-white" />
          </li>

          <li>shop</li>
          <li>Contact</li>
        </ul>

        <div className="flex  ">
          <input
            className="flex absolute  w-[310px] h-[54px] justify-between rounded-full ml-[978px] -mt-[40px] bg-bgblack   border border-offset-2 border-primarycolor"
            type="text"
            placeholder="Search..."
          />
          <CiSearch className=" absolute text-[36px] flex justify-between ml-[1238px] -mt-[30px] text-white bg-bgblack" />
        </div>
        <HiOutlineShoppingBag className="absolute text-white font-bold h-[24px] w-[24px] ml-[1290px] -mt-[28px] " />
      </div>
    </div>
  );
};

export default Navbar;
