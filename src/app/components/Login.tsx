import React from "react";
import Image from "next/image";
// import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center  px-4 lg: mb-[40px]">
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl w-full overflow-hidden">
          {/* Left Section - Image */}
          <div className="flex items-center justify-center ">
            <Image
              src="/images/signup.png"
              alt="Signup Illustration"
              width={700}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Right Section - Form */}
          <div className="p-6 lg:p-10 flex flex-col mx-auto lg:mt-[6rem]">
            <h1 className="text-2xl font-semibold text-gray-800 lg:mt-0">
              Log in to Exclusive
            </h1>
            <p className="text-gray-600 mb-6 pt-[10px] ml-0">
              Enter your details below
            </p>

            <form className="space-y-6 w-[300px]">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500"
              />
              <div className="flex">
                <button
                  type="submit"
                  className=" lg:w-[200px] bg-[#DB4444] text-white py-3  hover:bg-[#d76565] transition"
                >
                  Login
                </button>
                <button className="lg: w-[200px]  text-[#DB4444] py-3  hover:border lg: ml-5 transition">
                  Forget Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
