import React from "react";
import exclusive_img from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="w-4/6 h-60vh flex mb-40 mx-auto px-36 bg-gradient-to-b from-pink-100 to-green-50">
      {/* offers */}
      <div className="flex-1 flex flex-col justify-center">  {/* offer left */}
        <h1 className="text-gray-700 text-6xl font-semibold">Exclusive</h1>
        <h1 className="text-gray-700 text-6xl font-semibold">Offers For You</h1>
        <p className="text-gray-700 text-base font-semibold"
>ONLY ON BEST SELLERS PRODUCTS</p>
        <button  className="w-22 h-8 rounded-full bg-red-500 border-none text-white text-xl font-medium  cursor-pointer">
 CHECK NOW</button>
      </div>
      <div className="flex-1 flex items-center justify-end pt-12"
 >
        {/* offer right */}
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
