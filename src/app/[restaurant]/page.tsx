import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const Restaurant = () => {
  return (
    <div className="w-[1920px] h-[925px] bg-black ">
      <div className="w-[1320px]  h-[87px]  flex m-auto   ">
        {/* Foodtuck */}
        <div className=" flex  ml-[605px] w-[109px] h-[32px] relative justify-center items-center">
          <h1 className="flex text-[24px] font-bold text-darkyellow  font-sans ">
            Food <span className="text-white  font-sans  ">tuck</span>
          </h1>
        </div>
        {/* navbar */}
        <div className=" w-[507px] h-[24px] text-white text-[16px] absolute mt-[48px] ">
          <ul className=" flex justify-between">
            <li>Home</li>
            <p className="h-[7px] w-[7px] rounded-full bg-darkyellow mt-[22px] -ml-[60px]"></p>
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
              className="flex absolute w-[310px] h-[54px] justify-between rounded-full ml-[978px] -mt-[40px] bg-bgblack   border border-offset-2 border-primarycolor"
              type="text"
              placeholder="Search..."
            />
            <CiSearch className=" absolute text-[36px] flex justify-between ml-[1238px] -mt-[30px] text-white bg-bgblack" />
          </div>
          <HiOutlineShoppingBag className="absolute text-white font-bold h-[24px] w-[24px] ml-[1290px] -mt-[28px] " />
        </div>
      </div>
      {/* HERO DIV */}
      <div className="h-[950px] w-[1920px] absolute ">
        <Image
          src={"/1-restaurant/Hero_backrgound_image.png"}
          alt="Hero Background Image"
          width={1920}
          height={950}
          className="-mt-[120px] opacity-10"
        ></Image>
      </div>
      {/* Right Side Image Div */}
      <div className="absolute h-[670px] w-[877.8px]">
        <Image
          src={"/1-restaurant/main_display_image.png"}
          alt="Main Display Image"
          width={877.8}
          height={670}
          className="mt-[49px] ml-[927px]"
        ></Image>
      </div>
      {/* Left Side Text Div */}
      <div className="h-[356px] w-[472px] absolute mt-[144px] text-white ml-[359px] ">
        <Image
          src={"/1-restaurant/Its Quick & Amusing!.png"}
          alt="Its Quick & Amusing! Image"
          width={249}
          height={40}
          className=""
        ></Image>
        <h1 className="h-[68px] w-[472px] mt-[8px]  flex  font-bold text-[60px] absolute leading-tight tracking-tight ">
          <span className="text-darkyellow flex h-[60px]">Th</span>e Art of
          speed
        </h1>
        <h1 className="h-[68px] w-[472px] mt-[88px]  flex  font-bold text-[60px] absolute leading-tight tracking-tight ">
          food Quality
        </h1>
        <p className="h-[48px] w-[418px] text-[16px] mt-[176px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>
        <button className="h-[60px] w-[190px] text-white text-[16px] bg-darkyellow rounded-full mt-[32px]">
          See Menu
        </button>
      </div>
      <div>
        <Image
          src={"/1-restaurant/vertical_image.png"}
          alt="Vertical Image"
          width={25.28}
          height={492}
          className="mt-[52px] ml-[300px]"
        ></Image>
      </div>
    </div>
  );
};

export default Restaurant;
