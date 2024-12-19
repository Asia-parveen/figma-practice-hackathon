"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex flex-wrap items-center h-auto sm:h-[5rem] border-b-2 px-4 sm:px-8 lg:px-16 py-2">
        {/* Logo */}
        <div className="flex-shrink-0 w-full sm:w-auto mb-2 sm:mb-0 text-center sm:text-left">
          <h2 className="text-[18px] sm:text-[24px] font-bold">Exclusive</h2>
        </div>

        {/* Navigation Links - Centered */}
        <ul className="hidden sm:flex flex-grow justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm font-medium mb-2 sm:mb-0">
          <li className="lg:text-[16px] hover:border-b-2 border-gray-700 transition-all duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="lg:text-[16px] hover:border-b-2 border-gray-700 transition-all duration-200">
            <Link href="/wishlist">About</Link>
          </li>
          <li className="lg:text-[16px] hover:border-b-2 border-gray-700 transition-all duration-200">
            <Link href="/signup">Sign Up</Link>
          </li>
          <li className="lg:text-[16px] hover:border-b-2 border-gray-700 transition-all duration-200">
            <Link href="/login">Login</Link>
          </li>
          <li className="lg:text-[16px] hover:border-b-2 border-gray-700 transition-all duration-200">
            <Link href="/products">Products</Link>
          </li>
          <li className="lg:text-[16px] hover:border-b-2 border-gray-700 transition-all duration-200">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* Search Field and Icons - Right-Aligned */}
        <div className="flex items-center w-full sm:w-auto justify-between sm:justify-end space-x-2 sm:space-x-4">
          {/* Search Field */}
          <div className="relative flex items-center w-full sm:w-auto">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full sm:w-[150px] md:w-[200px] lg:w-[230px] bg-gray-50 border border-none border-gray-300 py-2 px-4 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
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

        {/* Hamburger Icon */}
        <div className="sm:hidden flex items-center ml-auto">
          {!isMenuOpen ? (
            <AiOutlineMenu
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white space-y-6">
          <ul className="text-center space-y-4">
            <li className="text-lg font-medium hover:border-b-2 border-white transition-all duration-200">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="text-lg font-medium hover:border-b-2 border-white transition-all duration-200">
              <Link href="/wishlist" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="text-lg font-medium hover:border-b-2 border-white transition-all duration-200">
              <Link href="/signup" onClick={toggleMenu}>
                Sign Up
              </Link>
            </li>
            <li className="text-lg font-medium hover:border-b-2 border-white transition-all duration-200">
              <Link href="/login" onClick={toggleMenu}>
                Login
              </Link>
            </li>
            <li className="text-lg font-medium hover:border-b-2 border-white transition-all duration-200">
              <Link href="/products" onClick={toggleMenu}>
                Products
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
