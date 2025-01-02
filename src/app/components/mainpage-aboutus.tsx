import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";

const Mainpageabout = () => {
  return (
    <div className="w-[1920px] h-[786px]  bg-black relative ">
      <div className="flex flex-col w-[1320px] h-[552px] ml-[30px] lg:ml-[300px] mt-[0px] lg:mt-[118px] absolute lg:flex-row bg-black text-white ">
        {/* left side div for text */}
        <div className="flex-1 lg:max-w-[660px]">
          <Image
            src={"/about_us/About us.png"}
            alt="About Us Image"
            width={91}
            height={40}
            className="mb-4"
          />
          <div className="W-[562px] h-[562px] ">
            <h1 className="w-[526px] h-[110px] lg:text-[48px] text-[32px] font-bold tracking-tight leading-tight">
              <span className="text-darkyellow font-bold ">We </span> Create the
              best
              <br />
              foody Product
            </h1>
            <div className="lg:mt-[33px] mt-[4px]">
              <p className="text-[16px] lg:text-[18px] text-left lg:text-justify w-[300px] h-auto lg:w-[526px] lg:h-[130px] leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>
            </div>
            <div className="mt-[12px] lg:mt-[24px]">
              <div className="flex items-start gap-0 lg:gap-2 ">
                <TiTick className="text-darkyellow text-[18px]" />
                <p className="text-[16px] lg:text-[18px]">
                  Lacus nisi, et ac dapibus sit eu velit{" "}
                  <br className="lg:hidden flex" />
                  in consequat.
                </p>
              </div>
              <div className="flex items-center lg:items-start gap-0 lg:gap-2 mt-[10px] lg:mt-[24px]">
                <TiTick className="text-darkyellow text-[18px]" />
                <p className="text-[16px] lg:text-[18px]">
                  Quisque diam pellentesque bibendum{" "}
                  <br className="lg:hidden flex" />
                  non dui volutpat fringilla
                </p>
              </div>
              <div className="flex items-start gap-0 lg:gap-2 mt-[13px] lg:mt-[24px]">
                <TiTick className="text-darkyellow text-[18px]" />
                <p className="text-[16px] lg:text-[18px]">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                  <br className="lg:hidden flex" />
                  adipiscing elit
                </p>
              </div>
              <button className=" mt-[6px] lg:mt-8 px-4 py-2 lg:px-6 lg:py-3 bg-darkyellow text-white text-[14px] lg:text-[16px] rounded-full">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* right side div for Images */}
        <div className="lg:flex flex-col lg:flex-row  w-[660px] relative  ">
          <div className="lg:w-[660px] lg:h-[330px] w-[322px] h-[210px] absolute mt-[4px]">
            <Image
              src={"/about_us/egg_sandwich.png"}
              alt="Egg Sandwich Image"
              width={660}
              height={330}
              className="rounded-lg"
            />
          </div>
          <div className="lg:flex flex-col lg:flex-row gap-4  mt-[180px] lg:mt-[346px] absolute">
            <Image
              src={"/about_us/snacks.png"}
              alt="Snacks Image"
              width={322}
              height={194}
              className="rounded-lg "
            />
            <Image
              src={"/about_us/sandwich.png"}
              alt="Sandwich Image"
              width={322}
              height={194}
              className="rounded-lg mt-[10px] lg:mt-[0px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpageabout;
