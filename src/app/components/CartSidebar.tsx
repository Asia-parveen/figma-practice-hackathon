import React from "react";
import { useCart } from "../context/CartContext";
import { FaTimes, FaTrash, FaShoppingCart, FaCreditCard } from "react-icons/fa";
import Link from "next/link";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 w-[300px] bg-white shadow-lg h-full transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-gray-400" onClick={onClose}>
        <FaTimes className="text-2xl hover:text-red-500" />
      </button>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {/* Cart Items */}
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between border-b pb-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold ">{item.title}</h3>
                    <p className="text-sm text-gray-600 pt-[10px]">
                      ${parseFloat(item.price.slice(1)) * item.quantity}
                    </p>
                    <div className="flex items-center gap-2 mt-1 pt-[10px]">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-6 h-6 text-black border rounded hover:bg-gray-300 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-6 h-6 text-black border rounded hover:bg-gray-300 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="ml-4">
                    <FaTrash className="text-red-500 hover:text-red-600 text-lg" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Subtotal and Buttons */}
            <div className="mt-4 border-t ">
              <p className="font-semibold text-lg">
                Subtotal: ${calculateSubtotal().toFixed(2)}
              </p>
              <button className="w-full border border-gray-500 hover:bg-[#DB4444] hover:text-white hover:border-none text-black py-2 mt-2 flex items-center justify-center mb-[20px] ">
                <FaShoppingCart className="mr-2 "/> <Link href="/viewcart">View Cart</Link>
              </button>
              <button className="w-full bg-[#DB4444] text-white  hover:border hover:border-black hover:bg-none py-2 mt-2 flex items-center justify-center ">
                <FaCreditCard className="mr-2" /><Link href="/checkout">CheckOut</Link>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;

