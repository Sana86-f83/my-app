import Image from "next/image";
import React from "react";

interface ChefImageProps {
  name: string;
  detail: string;
  image: string; // Image prop
}


const ChefImage = ({ name, detail, image }: ChefImageProps) => {
  return (
    <div>
      {/* chef5 */}
      <div className="flex w-[312px] h-[446px] relative ">
                {/* Image ke liye dynamic prop */}
        <Image
          src={image}  // Dynamic image prop
          alt={"teamchef-image"}
          width={312}
          height={446}
        />

        <div className="flex  w-[312px] h-[67px] bg-white/90 mt-[379px] absolute">
          <h1 className="flex  w-[60%] left-[50%]  font-semibold h-[28px] text-[20px] text-cheftextcolor mt-[12px] m-auto justify-center  ">
            {name}
          </h1>
          <p className="flex w-[20%] text-[20px] h-[24px] text-coloricon  mt-[4px] m-auto justify-center">
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefImage;
