import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import FeatureWork from "./components/feature-works";
import Recentpost from "./components/recentpost";
import TestFeatureWork from "./components/test-feature";

export default function Home() {
  return (
    <div>
      <Hero />
      <Recentpost />
      {/* <FeatureWork /> */}
      <TestFeatureWork />
    </div>
  );
}
