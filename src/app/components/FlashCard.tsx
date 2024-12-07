



import React from "react";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

interface FlashCardProps {
  imageSrc: string; // Use this prop for the dynamic image
  discount: string;
  title: string;
  price: string;
  stars: number;
}

const FlashCard: React.FC<FlashCardProps> = ({ imageSrc, discount, title, price, stars }) => {
  return (
    <div className="relative group bg-white mx-auto w-[270px] h-[350px] flex flex-col">
      {/* Upper Section with Light Gray Background */}
      <div className="relative bg-[#F5F5F5] h-[200px] w-full flex items-center justify-center">
        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {discount}
        </div>

        {/* Icons */}
        <div className="absolute top-2 right-2 flex space-x-2">
          <AiOutlineHeart className="text-gray-500 hover:text-red-500 cursor-pointer" size={18} />
          <AiOutlineEye className="text-gray-500 hover:text-blue-500 cursor-pointer " size={18} />
        </div>

        {/* Product Image */}
        <Image src={imageSrc} alt={title} width={150} height={150} className="object-contain" />

        {/* Add to Cart Button */}
        <button className="absolute bottom-0 bg-black text-white px-4 py-2 rounded w-[90%] lg:w-full hidden group-hover:block">
          Add to Cart
        </button>
      </div>

      {/* Lower Section with White Background */}
      <div className="bg-white p-4 flex flex-col flex-grow items-start ">
        {/* Product Info */}
        <h2 className="text-[16px] font-semibold">{title}</h2>
        <p className="text-[16px] font-bold text-[#DB4444] pt-3">{price}<span className="text-[#000000] opacity-[0.5]"> $160</span></p>

        {/* Stars */}
        <div className="mt-2 flex justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={`mx-0.5 ${index < stars ? "text-yellow-400 " : "text-gray-300"}`}
            >
              ★ 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashCard;



