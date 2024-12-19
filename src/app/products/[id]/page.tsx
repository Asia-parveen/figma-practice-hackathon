"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import CartSidebar from "../../../app/components/CartSidebar";
import Header from "@/app/components/Header";

// Mock product data
const products = [
  {
    id: 1,
    title: "Breed Dry Dog Food",
    price: "$100",
    description: "High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
    image: "/images/Cart (6).png",
  },
  {
    id: 2,
    title: "CANON EOS DSLR Camera",
    price: "$200",
    description: "High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
    image: "/images/Cart (5).png",
  },
  {
    id: 3,
    title: "ASUS FHD Gaming Laptop",
    price: "$150",
    description: "High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
    image: "/images/Cart (4).png",
  },
  {
    id: 4,
    title: "Curology Product Set",
    price: "$300",
    description: "High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
    image: "/images/Cart (1).png",
  },
  {
    id: 5,
    title: "Kids Electric Car",
    price: "$120",
    description: "High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
    image: "/images/Cart (3).png",
  },
  {
    id: 6,
    title: "Jr. Zoom Soccer Cleats",
    price: "$250",
    description: "High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
    image: "/images/Cart (2).png",
  },
  {
    id: 7,
    title: "GP11 Shooter USB Gamepad",
    price: "$180",
    description: "High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
    image: "/images/Cart (1).png",
  },
  {
    id: 8,
    title: "Quilted Satin Jacket",
    price: "$320",
    description: "High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.",
    image: "/images/Cart.png",
  },
];

const fetchProductById = (id: number) => {
  return products.find((product) => product.id === id) || null;
};

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const product = fetchProductById(parseInt(params.id, 10));
  const { addToCart } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    setCartOpen(true);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen py-10 px-6 lg:w-full relative">
        {/* Overlay */}
        {isCartOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setCartOpen(false)}
          />
        )}

        <CartSidebar isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
        <div className="max-w-screen-lg mx-auto p-6 flex flex-col lg:flex-row gap-8 z-10 relative">
          {/* Left side: Small Images (First 3 images stacked) */}
          <div className="flex flex-col gap-4 w-full lg:w-[170px]">
            <img
              src={product.image}
              alt={`${product.title} view 1`}
              className="w-full h-[120px] object-cover rounded-md"
            />
            <img
              src={product.image}
              alt={`${product.title} view 2`}
              className="w-full h-[120px] object-cover rounded-md"
            />
            <img
              src={product.image}
              alt={`${product.title} view 3`}
              className="w-full h-[120px] object-cover rounded-md"
            />
            <img
              src={product.image}
              alt={`${product.title} view 4`}
              className="w-full h-[120px] object-cover rounded-md"
            />
          </div>

          {/* Left side: Main Large Product Image (Below small images) */}
          <div className="w-full lg:w-[520px] lg:h-[520px] mb-6 lg:mb-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Right side: Product Details */}
          <div className="flex flex-col w-full lg:w-[300px] lg:ml-5">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span> {/* Example for 5 stars */}
            </div>

            {/* Price */}
            <p className="text-gray-600 text-lg font-semibold">{product.price}</p>

            {/* Product Description */}
            <p className="mt-4 text-gray-700">{product.description}</p>

            {/* Color and Size Options */}
            <div className="mt-6 mb-4">
              {/* Color Options */}
              <div className="flex gap-3 mb-2">
                <span className="font-semibold">Colors:</span>
                <button className="w-8 h-8 bg-red-500 rounded-full"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
                <button className="w-8 h-8 bg-green-500 rounded-full"></button>
              </div>

              {/* Size Chart */}
              <div>
                <span className="font-semibold ">Sizes:</span>
                <div className="grid grid-cols-5 gap-2 mt-[20px]">
                  <button className="px-2 py-2 border border-gray-500 rounded-md hover:bg-[#DB4444]">SM</button>
                  <button className="px-2 py-2 border border-gray-500 rounded-md hover:bg-[#DB4444]">S</button>
                  <button className="px-4 py-2 border border-gray-500 rounded-md hover:bg-[#DB4444]">M</button>
                  <button className="px-4 py-2 border border-gray-500 rounded-md hover:bg-[#DB4444]">L</button>
                  <button className="px-4 py-2 border border-gray-500 rounded-md hover:bg-[#DB4444]">XL</button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-6 px-6 py-2 bg-[#DB4444] text-white rounded hover:bg-red-400"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;








