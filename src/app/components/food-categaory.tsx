import Image from "next/image";
import React from "react";

const Food_Category = () => {
  return (
    <div className="bg-black w-[1920px]">
    <div className=" w-[1920px] h-[489px] flex flex-wrap lg:mt-0 mt-[450px] ">
      <div className="w-full h-auto lg:h-[489px] lg:w-[1792.31px] ml-[30px] lg:ml-[300px] text-white  ">
        <Image
          src={"/food_category/Food Category.png"}
          alt="Food Category Image"
          width={177}
          height={40}
          className="h-[40px] w-[177px] ml-[50px] lg:ml-[591px]"
        ></Image>
        <Image
          src={"/food_category/background.png"}
          alt="background Image"
          width={532}
          height={444}
          className=" hidden lg:block h-[444px] w-[532px] absolute mt-[100px] ml-[1022px] "
        ></Image>
        <h1 className="h-[56px] w-[446px]  text-left flex  font-bold text-[32px] lg:text-[48px] lg:mt-[15px] lg:ml-[456px]">
          <span className="text-darkyellow flex h-[60px]">Ch</span>oose Food
          Item
        </h1>
        <div className="h-[329px] w-[1320px] mt-[57px] grid grid-cols-1 gap-4 lg:flex lg:justify-between ">
          <div className="h-[328px] w-[305px] ">
            <Image
              src={"/food_category/dish-1.png"}
              alt="dish-1 Image"
              width={305}
              height={328}
              className=" "
            ></Image>
          </div>
          <div className="h-[328px] w-[305px] ">
            <Image
              src={"/food_category/burger.png"}
              alt="burger Image"
              width={305}
              height={328}
              className=" "
            ></Image>
          </div>
          <div className="h-[328px] w-[305px] ">
            <Image
              src={"/food_category/Salad.png"}
              alt="Salad Image"
              width={305}
              height={328}
              className=" "
            ></Image>
          </div>
          <div className="h-[328px] w-[305px] ">
            <Image
              src={"/food_category/donuts.png"}
              alt="donuts Image"
              width={305}
              height={328}
              className=" "
            ></Image>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Food_Category;
