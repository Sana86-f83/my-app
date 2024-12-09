import Image from "next/image";
import React from "react";
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookieThin } from "react-icons/pi";
import { PiWineThin } from "react-icons/pi";

const Chooseyou = () => {
  return (
    <div className="relative flex -mt-[140px] w-[1320px] h-[716px] ml-[300px]  ">
      {/* innerdiv-image */}
      {/* leftdiv */}
      <div className="relative w-[659px] h-[716px]">
        <div className="absolute w-[362px] h-[365px]mt-[2px] ">
          <Image
            src={"/choose-you/image-1.png"}
            alt={"image-1"}
            width={362}
            height={365}
          ></Image>
        </div>
        <div className=" w-[281px] h-[231px] ml-[373px] mt-[120px]">
          <Image
            src={"/choose-you/image-2.png"}
            alt={"image-2"}
            width={281}
            height={231}
          ></Image>
        </div>
        <div className=" absolute w-[244px] h-[306px] mt-[18px]">
          <Image
            src={"/choose-you/image-3.png"}
            alt={"image-3"}
            width={244}
            height={306}
          ></Image>
        </div>
        <div className="w-[221px] h-[226px] ml-[255px] mt-[18px]">
          <Image
            src={"/choose-you/image-4.png"}
            alt={"image-4"}
            width={221}
            height={226}
          ></Image>
        </div>
        <div className=" absolute w-[161px] h-[168px] ml-[491px] -mt-[235px] ">
          <Image
            src={"/choose-you/image-5.png"}
            alt={"image-5"}
            width={161}
            height={168}
          ></Image>
        </div>
        <div className="  w-[161px] h-[168px]  ml-[491px] -mt-[58px]  ">
          <Image
            src={"/choose-you/image-6.png"}
            alt={"image-6"}
            width={161}
            height={168}
          ></Image>
        </div>
      </div>
      {/* rightdiv */}
      <div className="absolute w-[526px] h-[716px]   ml-[794px]">
        <div className="w-[175px] h-[40px] mt-[62px] ">
          <Image
            src={"/choose-you/whychoose.png"}
            alt={"why-choose"}
            width={175}
            height={40}
          ></Image>
        </div>

        <h2 className="flex w-[433px] h-[56px] mt-[8px] text-white text-[48px] font-bold tracking-tight">
          <span className=" flex h-[56px]  text-darkyellow">Ex</span>
          tra ordinary taste
        </h2>

        <h2 className="flex w-[433px] h-[56px] text-white  text-[48px] font-bold tracking-tight ">
          And Experienced
        </h2>
        <p className="mt-[32px] w-[526px] h-[120] text-[16px] font-inter yleading-6 tracking-wider font-normal text-white ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="relative flex justify-between w-[374px] h-[135px]  mt-[32px]">
          <div className="flex justify-center items-center w-[102px] h-[100px] bg-darkyellow">
            <PiHamburgerLight className="w-[56px] h-[56px] text-white " />
          </div>
          <p className="absolute mt-[109px] w-[85px] h-[26px] text-[18px] ml-[4px] leading-7 font-normal text-white">
            Fast Food
          </p>
          <div className="flex justify-center items-center w-[102px] h-[100px] bg-darkyellow">
            <PiCookieThin className="w-[56px] h-[56px] text-white " />
          </div>
          <p className="absolute mt-[109px] w-[52px] h-[24px] text-[18px] ml-[160px] font-normal text-white">
            Lunch
          </p>

          <div className="flex justify-center items-center w-[102px] h-[100px] bg-darkyellow">
            <PiWineThin className="w-[56px] h-[56px] text-white" />
          </div>
          <p className="absolute mt-[109px] w-[56px] h-[24.65px] ml-[290px] text-[18px] font-normal text-white">
            Dinner
          </p>
        </div>
        <div className="flex w-[374px] h-[93px] bg-white  mt-[41px] rounded-lg ml-[2px] ">
          <p className="w-[10px] h-[93px] bg-darkyellow rounded-l-lg"></p>
          <p className="w-[82px] h-[56px] text-darkyellow ml-[41px] mt-[15px] text-[48px] mb-[17px] font-bold">
            30+
          </p>
          <p className="w-[143px] h-[32px]  text-[24px] font-bold ml-[24px]  text-bgblack  mt-[42px]">
            Experienced
          </p>
          <p className="flex w-[105px] h-[28px]  text-[20px] -ml-[141px] mt-[22px] text-black/80">
            Years of
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chooseyou;
