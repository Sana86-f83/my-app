import Image from "next/image";
import React from "react";

const Food_Category = () => {
  return (
    <div className="h-[803px] w-[1792.31px] mt-[120px] ml-[300px] text-white  ">
      <Image
        src={"/food_category/Food Category.png"}
        alt="Food Category Image"
        width={177}
        height={40}
        className="h-[40px] w-[177px] ml-[591px]"
      ></Image>
      {/* <Image
        src={"/food_category/background.png"}
        alt="background Image"
        width={532}
        height={444}
        className="h-[444px] w-[532px] absolute mt-[100px] ml-[1022px] "
      ></Image> */}
      <h1 className="h-[56px] w-[446px] flex  font-bold text-[48px] mt-[15px] ml-[456px]">
        <span className="text-darkyellow flex h-[60px]">Ch</span>oose Food Item
      </h1>
      <div className="h-[329px] w-[1320px] mt-[57px] flex justify-between ">
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
  );
};

export default Food_Category;
