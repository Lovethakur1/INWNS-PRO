import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="h-screen flex bg-gradient-to-b from-pink-100 to-green-50 m-0">
      {/* Left */}
      <div className="flex-1 flex flex-col justify-center space-y-5 pl-44 leading-snug m-0">
        <h2 className="text-gray-900 text-xl font-semibold m-0">
          NEW ARRIVALS ONLY
        </h2>
        <div className="flex items-center space-x-5 m-0">
          <p className="text-gray-900 text-7xl font-semibold m-0">new</p>
          <img src={hand_icon} className="w-20 m-0" alt="Hand Icon" />
        </div>
        <p className="text-gray-900 text-7xl font-semibold m-0">Collection</p>
        <p className="text-gray-900 text-7xl font-semibold m-0">for everyone</p>
        <div className="flex justify-center items-center gap-2 w-60 h-20 rounded-full mt- bg-red-500 text-white text-lg font-medium m-0">
          <div>Latest Collection</div>
          <img src={arrow_icon} className="w-8 m-0" alt="Arrow Icon" />
        </div>
      </div >
      {/* Right */}
      <div className="flex-1 flex items-center justify-center m-0">
        <img src={hero_img} alt="Hero Image" className="w-80 m-0" />
      </div>
    </div>
  ); 
};

export default Hero;
