import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);

  return (
    <div className="mx-10">
      {/* shop cate */}
      <img
        src={props.banner}
        alt=""
        className="block mr-5 ml-14 my-3 w-5/6 rounded-md"
      />
      <div className="flex mx-20 justify-between items-center">
        {/* shopCate IndexSort */}
        <p>
          <span className="font-bold">Show 1-12 </span>Out of 36 products
        </p>
        <div className="p-5/6 py-2 px-6 rounded-full border mx-3 border-gray-800">
          {/* shopCate sort */}
          <span style={{ display: "inline-block", verticalAlign: "middle" }}>
            Sort by
          </span>
          <img
            src={dropdown_icon}
            alt=""
            className="m-2"
            style={{ display: "inline-block", verticalAlign: "middle" }}
          />
        </div>
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {/* shopCate product */}
        {products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-10 mb-3">
        <button className="cursor-pointer items-center group relative flex gap-1.5 px-8 py-4 bg-gray-900 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
