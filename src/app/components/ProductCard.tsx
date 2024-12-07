import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductIcons from "./ProductIcons";

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, imageSrc }) => {
  return (
    <div className="relative w-[270px] h-[322px] bg-white shadow-lg rounded-lg p-4">
      {/* Left icons */}
      <ProductIcons />

      {/* Product image */}
      <div className="w-[250px] h-[250px] mx-auto">
        <Image src={imageSrc} alt={title} width={250} height={250} className="object-contain rounded-lg" />
      </div>

      {/* Product details */}
      <div className="flex flex-col items-center justify-between mt-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-red-600 font-bold">{price}</p>
        <Link href={`/products/${id}`}>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

