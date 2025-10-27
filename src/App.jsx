import { motion } from "framer-motion";
import ProductBox from "./components/ProductBox";
import HeaderBar from "./components/HeaderBar";
// 이미지 import
import robotImage from "./assets/AI_robot.png";
// microbe.png가 없으면 임시로 robotImage 사용
let microbeImage;
try {
  microbeImage = require("./assets/microbe.png");
} catch (e) {
  microbeImage = robotImage; // 임시로 같은 이미지 사용
}

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <HeaderBar />
        {/* HERO SECTION */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-800 to-blue-500 text-white text-center px-6 overflow-hidden">
        
        {/* Right robot image */}
        {robotImage && (
          <div className="absolute -right-32 top-[36.5%] transform -translate-y-1/2 hidden md:block">
            <img
              src={robotImage}
              alt="AI Robot"
              className="w-[42rem] h-[42rem] opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        )}

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
          Smart Microbial Factory & Biofoundry Lab
        </h1>
        <p className="text-2xl md:text-3xl mb-12">
          Prof. Changman Kim's Lab, Chonnam National University
        </p>

        {/* Placeholder for factory animation */}
        <div className="w-[600px] h-[350px] md:w-[800px] md:h-[450px] bg-gray-200 rounded-2xl mb-14 flex items-center justify-center shadow-inner">
          <p className="text-gray-500 text-xl">[ Factory Animation Placeholder ]</p>
        </div>

        {/* Product Boxes */}
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          <ProductBox title="People" link="/people" color="bg-green-300" size="large" />
          <ProductBox title="Research" link="/research" color="bg-blue-300" size="large" />
          <ProductBox title="Publications" link="/publications" color="bg-yellow-300" size="large" />
          <ProductBox title="Tools" link="/tools" color="bg-purple-300" size="large" />
          <ProductBox title="Contact" link="/contact" color="bg-pink-300" size="large" />
        </div>
      </section>
    </div>
  );
}
