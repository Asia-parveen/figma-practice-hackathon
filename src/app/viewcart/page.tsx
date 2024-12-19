"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrash, FaCreditCard } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ViewCartPage: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  const calculateTotalAmount = () => {
    return calculateSubtotal() + 10; // Adding $10 for shipping fee (example)
  };

  return (
    <div className="min-h-screen py-10 px-6 lg:w-full">
      <div className="max-w-screen-lg mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-700">
            <p>Your cart is empty</p>
            <Link href="/" className="text-blue-700 hover:underline mt-4">Go back to shopping</Link>
          </div>
        ) : (
          <>
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-grow ml-4 lg:ml-[60px]">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">${parseFloat(item.price.slice(1))}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-700 text-black rounded-full"
                      >
                        -
                      </button>
                      <span className="text-xl">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-700 text-black rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600 mr-[40px]"
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Summary (Horizontal layout) */}
            <div className="mt-8 flex justify-between items-center text-xl font-semibold">
              <div className="flex flex-col items-center">
                <p>Subtotal</p>
                <p>${calculateSubtotal().toFixed(2)}</p>
              </div>
              <div className="flex flex-col items-center">
                <p>Shipping</p>
                <p>$10.00</p>
              </div>
              <div className="flex flex-col items-center">
                <p>Total Amount</p>
                <p>${calculateTotalAmount().toFixed(2)}</p>
              </div>
            </div>

            {/* Checkout Button (Horizontal layout) */}
            <div className="mt-6 flex justify-between items-center">
              <Link href="/checkout">
                <button className="bg-[#DB4444] text-white py-2 px-8 rounded-md flex items-center gap-2 hover:bg-red-700">
                  <FaCreditCard /> Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewCartPage;


