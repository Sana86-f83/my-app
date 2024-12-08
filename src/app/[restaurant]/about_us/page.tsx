import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";

const About_us = () => {
  return (
    <div className="h-[562px] w-[1320px] flex ml-[300px] mt-[118px] bg-black text-white ">
      {/* Right side div for text */}
      <div className="h-[562px] w-[660px]">
        <Image
          src={"/about_us/About us.png"}
          alt="About Us Image"
          width={91}
          height={40}
          className=""
        ></Image>
        <div className="">
          <h1 className="h-[55px] w-[472px]  -mt-[140px] flex  font-bold text-[48px] absolute leading-tight tracking-tight ">
            <span className="text-darkyellow flex h-[55px]">We </span>
            <span className="ml-[12px]"> Create the best</span>
          </h1>
          <h1 className="h-[55px] w-[472px] -mt-[80px]  flex  font-bold text-[48px] absolute leading-tight tracking-tight ">
            foody Product
          </h1>
          <p className="h-[130px] w-[526px] text-[16px] tracking-wide mt-[160px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in <br />
            consequat.
          </p>
        </div>
        <div className="">
          <TiTick className="mt-[23px] text-[18px] " />
          <p className="text-[18px] -mt-[18px] ml-[26px] ">
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <TiTick className="mt-[23px] text-[18px] " />
          <p className="text-[18px] -mt-[18px] ml-[26px] ">
            Quisque diam pellentesque bibendum non dui volutpat fringilla
          </p>
          <TiTick className="mt-[23px] text-[18px] " />
          <p className="text-[18px] -mt-[18px] ml-[26px]  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </p>
          <button className="h-[60px] w-[190px] text-white text-[16px] bg-darkyellow rounded-full mt-[32px]">
            Read more
          </button>
        </div>
      </div>
      {/* left side div for Images */}
      <div className="h-[562px] w-[660px] relative ml-[98px] ">
        {/* egg sandwich */}
        <div className="h-[330px] w-[660px] ">
          <Image
            src={"/about_us/egg_sandwich.png"}
            alt="Egg Sandwich Image"
            width={660}
            height={330}
            className=""
          ></Image>
        </div>
        <div className="h-[194px] w-[322px] absolute mt-[16px] ">
          <Image
            src={"/about_us/snacks.png"}
            alt="Snacks Image"
            width={322}
            height={194}
            className=""
          ></Image>
        </div>
        <div className="h-[194px] w-[322px] absolute mt-[16px] ml-[338px] ">
          <Image
            src={"/about_us/sandwich.png"}
            alt="Sandwich Image"
            width={322}
            height={194}
            className=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About_us;
