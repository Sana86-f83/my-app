import Image from "next/image";
import React from "react";

const Restaurant = () => {
  return (
    
    <div className="relative w-[1920px]  h-[830px] -mt-[120px] bg-black">
      {/* HERO DIV */}
      <div className="hidden lg:flex w-full h-auto lg:h-[818px] lg:w-[1920px] absolute ">
        <Image
          src={"/1-restaurant/Hero_backrgound_image.png"}
          alt="Hero Background Image"
          width={1920}
          height={818}
          className="-mt-[120px] opacity-10"
        ></Image>
      </div>
      <div>
        {/* Right Side Image Div */}
        <div className="">
          <div className="absolute lg:h-[670px] w-[320px] h-[400px] md:w-[400px] md:h-[450px] md:mt-[100px]  lg:w-[877.8px] mt-[450px]  px-auto  lg:mt-[49px]">
            <Image
              src={"/1-restaurant/main_display_image.png"}
              alt="Main Display Image"
              width={877.8}
              height={670}
              className="ml-[30px] md:ml-[350px] lg:ml-[927px]"
            ></Image>
          </div>
          {/* Left Side Text Div */}
          <div className="lg:h-[356px] lg:w-[472px]  w-full h-auto absolute pl-[40px] lg:pl-[0px] mt-[90px] text-white lg:ml-[359px] lg:mt-[144px]">
            <Image
              src={"/1-restaurant/Its Quick & Amusing!.png"}
              alt="Its Quick & Amusing! Image"
              width={249}
              height={40}
              className=""
            ></Image>
            <h1 className="h-[68px] w-[472px] lg:mt-[8px] mt-[12px] flex   font-bold text-[40px] lg:text-[60px] absolute leading-tight tracking-tight ">
              <span className="text-darkyellow flex lg:h-[60px]">Th</span>e Art
              of speed
            </h1>
            <h1 className="h-[68px] w-[472px] mt-[60px] lg:mt-[88px]  flex  font-bold text-[40px] lg:text-[60px] absolute leading-tight tracking-tight ">
              food Quality
            </h1>
            <p className="h-[48px] justify-center w-[318px] lg:w-[418px] text-[16px] mt-[130px] lg:mt-[176px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <button className="lg:h-[60px] w-[120px] h-[35px] lg:w-[190px] text-white text-[16px] bg-darkyellow rounded-full mt-[50px] lg:mt-[32px]">
              See Menu
            </button>
          </div>
          <div>
            <Image
              src={"/1-restaurant/vertical_image.png"}
              alt="Vertical Image"
              width={25.28}
              height={492}
              className="hidden lg:flex lg:mt-[65px] lg:ml-[300px]"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
