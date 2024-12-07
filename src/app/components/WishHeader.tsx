import Link from "next/link";
import React from "react";
import Image from "next/image";

const  WishHeader = () => {
  return (
    <>
      <div className="flex flex-wrap items-center h-auto sm:h-[5rem] border-b-2 px-4 sm:px-8 lg:px-16 py-2">
        {/* Logo */}
        <div className="flex-shrink-0 w-full sm:w-auto mb-2 sm:mb-0 text-center sm:text-left">
          <h2 className="text-[18px] sm:text-[24px] font-bold">Exclusive</h2>
        </div>

        {/* Navigation Links - Centered */}
        <ul className="flex-grow flex flex-wrap justify-center sm:justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm font-medium mb-2 sm:mb-0">
          <li className="lg:text-[16px]">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li className="lg:text-[16px]">
            <Link href="#" className="hover:text-gray-700">
              Contact
            </Link>
          </li>
          <li className="lg:text-[16px]">
            <Link href="#" className="hover:text-gray-700">
              About
            </Link>
          </li>
          <li className="lg:text-[16px]">
            <Link href="/signup" className="hover:text-gray-700">
              Sign Up
            </Link>
          </li>
          <li className="lg:text-[16px]">
            <Link href="/products" className="hover:text-gray-700">
              Products
            </Link>
          </li>
        </ul>

        {/* Search Field and Icons - Right-Aligned */}
        <div className="flex items-center w-full sm:w-auto justify-between sm:justify-end space-x-2 sm:space-x-4">
          {/* Search Field */}
          <div className="relative flex items-center w-full sm:w-auto">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full sm:w-[150px] md:w-[200px] lg:w-[230px] bg-gray-50 border border-none  border-gray-300 py-2 px-4 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <Image
              src="/images/search.png"
              alt="search"
              width={16}
              height={16}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            />
          </div>

          {/* Heart and Cart Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Image
              src="/images/Vector (3).png"
              alt="heart"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/images/cart1.png"
              alt="cart"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WishHeader;
