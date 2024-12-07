import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";

const ProductIcons: React.FC = () => {
  return (
    <div className="absolute left-2 top-2 flex flex-col space-y-2">
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <FaEye className="text-gray-600" />
      </button>
      <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <FaHeart className="text-red-600" />
      </button>
    </div>
  );
};

export default ProductIcons;

