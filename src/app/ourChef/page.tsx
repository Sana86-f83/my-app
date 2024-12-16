import React from "react";
import Heading from "../components/headingprops";
import ChefImage from "../components/chefimage";

const OurChef = () => {
  return (
    <div className="w-[1920px] h-[2000px] bg-white ">
      <Heading Heading="Our Chef" home="Home" pagename="Chef" />
      <div className="w-[1920px] h-[1626px]  ">
        {/* 12div chef1 */}
        <div className="grid grid-cols-4 relative  w-[1320px] h-[1386px] m-auto mt-[120px]">
          <ChefImage
            name="Tahmina Rumi"
            detail="Chef"
            image="/imagesChef/ChefCard1.png" // Custom image path
          />
          <ChefImage
            name="Jorina Begum"
            detail="Chef"
            image="/imagesChef/ChefCard2.png" // Custom image path
          />
          <ChefImage
            name="M.Mohammad"
            detail="Chef"
            image="/imagesChef/ChefCard3.png" // Custom image path
          />
          <ChefImage
            name="Munna Kathy"
            detail="Chef"
            image="/imagesChef/ChefCard4.png" // Custom image path
          />
          <ChefImage
            name="Tahmina Rumi"
            detail="/Chef"
            image="/imagesChef/ChefCard5.png" // Custom image path
          />
          <ChefImage
            name="Bisnu devgon"
            detail="Chef"
            image="/imagesChef/ChefCard6.png" // Custom image path
          />
          <ChefImage
            name="Motin Molladsf"
            detail="Chef"
            image="/imagesChef/ChefCard7.png" // Custom image path
          />
          <ChefImage
            name="William Rumi"
            detail="Chef"
            image="/imagesChef/ChefCard8.png" // Custom image path
          />
          <ChefImage
            name="Kets william roy"
            detail="Chef"
            image="/imagesChef/ChefCard9.png" // Custom image path
          />
          <ChefImage
            name="Mahmud kholil"
            detail="Chef"
            image="/imagesChef/ChefCard10.png" // Custom image path
          />
          <ChefImage
            name="Ataur Rahman"
            detail="Chef"
            image="/imagesChef/ChefCard11.png" // Custom image path
          />
          <ChefImage
            name="Monalisa holly"
            detail="Chef"
            image="/imagesChef/ChefCard12.png" // Custom image path
          />
        </div>
      </div>
    </div>
  );
};

export default OurChef;
