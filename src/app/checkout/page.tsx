"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaCreditCard, FaPaypal, FaMoneyBillAlt } from "react-icons/fa";
import Link from "next/link";

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  const calculateTotalAmount = () => calculateSubtotal() + 10; // Adding $10 for shipping fee (example)

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert("Payment successful! Thank you for your purchase.");
      // You can redirect to a confirmation page or clear the cart here
    }, 2000);
  };

  return (
    <div className="min-h-screen py-10 px-6 lg:w-full">
      <div className="max-w-screen-lg mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Your cart is empty</p>
            <Link href="/" className="text-blue-500 hover:underline mt-4">
              Go back to shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Order Summary</h2>

              {/* Order Details */}
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>
                      {item.title} x{item.quantity}
                    </span>
                    <span>${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              {/* Totals */}
              <div className="mt-6 grid grid-cols-3 gap-10 text-xl font-semibold text-gray-700">
                <p>Subtotal</p>
                <p>Shipping</p>
                <p>Total Amount</p>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-10 text-xl">
                <p>${calculateSubtotal().toFixed(2)}</p>
                <p>$10.00</p>
                <p>${calculateTotalAmount().toFixed(2)}</p>
              </div>

              {/* Payment Options */}
              <h2 className="mt-8 text-xl font-semibold text-gray-700">Select Payment Method</h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <button
                  onClick={() => setSelectedPaymentMethod("credit-card")}
                  className={`flex items-center gap-2 py-2 px-4 rounded-md ${
                    selectedPaymentMethod === "credit-card" ? "bg-[#DB4444] text-white" : "bg-gray-200"
                  }`}
                >
                  <FaCreditCard /> Credit Card
                </button>
                <button
                  onClick={() => setSelectedPaymentMethod("paypal")}
                  className={`flex items-center gap-2 py-2 px-4 rounded-md ${
                    selectedPaymentMethod === "paypal" ? "bg-red-600 text-white" : "bg-gray-200"
                  }`}
                >
                  <FaPaypal /> PayPal
                </button>
                <button
                  onClick={() => setSelectedPaymentMethod("cash")}
                  className={`flex items-center gap-2 py-2 px-4 rounded-md ${
                    selectedPaymentMethod === "cash" ? "bg-red-600 text-white" : "bg-gray-200"
                  }`}
                >
                  <FaMoneyBillAlt /> Cash on Delivery
                </button>
              </div>

              {/* Proceed to Payment */}
              <div className="mt-6">
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`py-2 px-8 rounded-md flex items-center gap-2 ${
                    isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-[#DB4444] text-white hover:bg-red-700"
                  }`}
                >
                  <FaCreditCard />
                  {isProcessing ? "Processing..." : "Proceed to Payment"}
                </button>
              </div>
            </div>
            <Link href="/" >Go back to Home</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;



