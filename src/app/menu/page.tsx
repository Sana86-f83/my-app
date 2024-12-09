import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="flex w-[1320px] h-[656px]  m-auto">
      <div className="relative flex mx-auto w-[148px] text-[32px] leading-10  h-[40px] ">
        <Image
          src={"/menu/choose & pick.png"}
          alt={"menu-head"}
          width={148}
          height={40}
          className="  "
        ></Image>
      </div>
      <div className="flex absolute ml-[505px] mr-[263px]">
        <h1 className=" tracking-wide w-[358px] h-[56px] text-[48px] mt-[50px] text-darkyellow ">
          Fr<span className="text-white">om Our Menu </span>
        </h1>
      </div>
      {/* navbar */}
      <div className="absolute  mt-[110px] w-[1056px] h-[28px]">
        <ul className="flex justify-between text-[20px] font-bold text-white cursor-pointer mt-[56px]">
          <li className="text-darkyellow hover:underline hover:underline-offset-2  ">
            Breakfast
          </li>
          <li className="hover:underline hover:underline-offset-2>Lunch"></li>
          <li className="hover:underline hover:underline-offset-2>Lunch">
            Dinner
          </li>
          <li className="hover:underline hover:underline-offset-2>Lunch">
            Desert1
          </li>
          <li className="hover:underline hover:underline-offset-2>Lunch">
            Drink
          </li>
          <li className="hover:underline hover:underline-offset-2>Lunch">
            Snacks
          </li>
          <li className="hover:underline hover:underline-offset-2>Lunch">
            Suops
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
