import Image from "next/image";
import React from "react";

const Restaurant = () => {
  return (
    <div className="relative w-[1920px] h-[830px] -mt-[120px] bg-black">
      {/* HERO DIV */}
      <div className="h-[818px] w-[1920px] absolute ">
        <Image
          src={"/1-restaurant/Hero_backrgound_image.png"}
          alt="Hero Background Image"
          width={1920}
          height={818}
          className="-mt-[120px] opacity-10"
        ></Image>
      </div>
      {/* Right Side Image Div */}
      <div className="absolute h-[670px] w-[877.8px] mt-[49px]">
        <Image
          src={"/1-restaurant/main_display_image.png"}
          alt="Main Display Image"
          width={877.8}
          height={670}
          className=" ml-[927px]"
        ></Image>
      </div>
      {/* Left Side Text Div */}
      <div className="h-[356px] w-[472px] absolute  text-white ml-[359px] mt-[144px]">
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
