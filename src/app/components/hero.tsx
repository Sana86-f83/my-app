import React from "react";
import { Heebo } from "next/font/google";
import Image from "next/image";

const heebo = Heebo({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className=" md:w-[1030px] md:h-[308px] p-6  my-[66px] mx-auto items-center md:justify-between flex flex-col-reverse md:flex-row justify-evenly">
      {/* left-div */}
      <div className="w-[95%] flex flex-col justify-between items-start md:w-[521px] md:h-[305] ">
        <h1
          className={`${heebo.className} mt-[20px] md:mt-0 text-2xl  md:text-[48px]  font-black text-firstHeading leading-tight`}
        >
          Hi, I am John,
          <br />
          Creative Technologist
        </h1>
        <p
          className={`${heebo.className}"w-[497px] h-[66px] mt-[12px] md:mt-[29px] text-firstHeading opacity-1 font-normal text-[16px]"`}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={`${heebo.className} text-white  w-[205px] h-[50px] bg-darkpink mt-[70px] md:mt-[38px] text-[18px] font-medium rounded-sm shadow-md shadow-buttonshadow  `}
        >
          Download Resume
        </button>
      </div>
      {/* right div  */}
      <div className="w-[292px] h-[299px]  relative">
        <Image
          className="z-50"
          src={"/Images/hero-image.png"}
          alt={"hero-Image"}
          width={292}
          height={299}
        ></Image>
        <div className="bg-heroElipse w-[292px] h-[299px] rounded-full absolute top-2 right-6 -left-2 -z-10" />
      </div>
    </div>
  );
};

export default Hero;
