import React from 'react'
import Signup from '../components/Signup';
import SignupHeader from '../components/SignupHeader';

const Signpage = () => {
  return (
    <div>
        <SignupHeader/>
      <Signup/>
    </div>
  )
}

export default Signpage;





// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const Signup = () => {
//   return (
//     <>
//       <div className="min-h-screen flex items-center justify-center  px-4 lg: mb-[40px]">
//         {/* Main Container */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl w-full overflow-hidden">
//           {/* Left Section - Image */}
//           <div className="flex items-center justify-center ">
//             <Image
//               src="/images/signup.png"
//               alt="Signup Illustration"
//               width={700}
//               height={500}
//               className="object-cover"
//             />
//           </div>

//           {/* Right Section - Form */}
//           <div className="p-6 lg:p-10 flex flex-col mx-auto">
//             <h1 className="text-2xl font-semibold text-gray-800 mb-10">Create an Account</h1>
//             <p className="text-gray-600 mb-6 pt-[20px] ml-0">Enter your details below</p>
            
//             <form className="space-y-6 w-[300px]">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email or Phone Number"
//                 className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full p-2 border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-[#DB4444] text-white py-3  hover:bg-[#d76565] transition"
//               >
//                 Create Account
//               </button>
//             </form>

//             <div className="flex items-center justify-center  lg:mt-2  space-2 ">
//               <button className="flex items-center w-full border py-3  lg:mt-2 lg:pl-[3rem] hover:bg-[#d76565]">
             
//                 <Image
//                   src="/images/Icon-Google.png"
//                   alt="Google Icon"
//                   width={24}
//                   height={24}
//                   className="ml-2"
//                  />
//                  <p className='pl-3'> Sign Up with Google</p>
//               </button>
//             </div>

//             <p className="text-center text-gray-600 mt-6">
//               Already have an account?{' '}
//               <Link href="/login" className="text-gray-500  hover:underline">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;



