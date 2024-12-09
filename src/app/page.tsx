import Restaurant from "./[restaurant]/page";
import About_us from "./[restaurant]/about_us/page";
import Footer from "./[restaurant]/footer/page";
import Food_Category from "./[restaurant]/food_category/page";
import Chefs from "./[restaurant]/chefs/page";
import Img_b4_menu from "./img_b4_menu/page";
import Chooseyou from "./components/choose-you";

export default function Home() {
  return (
    <div className="w-[1920px] bg-black ">
      <Restaurant />
      <About_us />
      <Food_Category />
      <Chooseyou />
      <Img_b4_menu />
      <Chefs />
      <Footer />
    </div>
  );
}
