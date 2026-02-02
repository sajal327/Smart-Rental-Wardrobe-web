import loginImage from "../../assets/images/image.png";
// import loginImage from "../../assets/images/login.png";
import logo from "../../assets/images/logo.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* IMAGE SECTION */}
      <div className="hidden lg:flex">
        <img
          src={loginImage}
          alt="Fashion"
          className=" w-full max-w-[100%] h-full max-h-screen object-cover"
        />
      </div>

      {/* <div className="hidden lg:flex h-screen">
        <img
          src={loginImage}
          alt="Fashion"
          className="h-full w-full max-w-[90%] object-contain"
        />
      </div> */}

      {/* LOGIN SECTION – 50% */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <img src={logo} alt="LAXXA" className="mx-auto mb-2 w-[160px]" />

          <p className="text-gray-500 mb-8">Luxury Fashion Experience</p>

          <div className="flex items-center border rounded-lg overflow-hidden mb-6">
            <span className="px-4 text-gray-600 border-r bg-gray-50">+91</span>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full px-4 py-3 focus:outline-none"
            />
          </div>

          <button className="w-full bg-[#06273C] text-white py-3 rounded-full font-medium hover:bg-slate-800 transition mb-6">
            Sign In
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button className="w-full border py-3 rounded-full flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium text-gray-700">
              Sign up with Google
            </span>
          </button>

          <p className="text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <span className="text-slate-900 font-medium cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import loginImage from "../../assets/images/login.png";
// import logo from "../../assets/images/logo.png";

// const LoginPage = () => {
//   return (
//     <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
//       {/* LEFT IMAGE SECTION */}
//       <div className="hidden lg:flex h-screen overflow-hidden">
//         <img
//           src={loginImage}
//           alt="Fashion"
//           className="max-h-full max-w-full object-cover"
//         />
//       </div>

//       {/* RIGHT LOGIN SECTION */}
//       <div className="flex items-center justify-center px-6 min-h-screen">
//         <div className="w-full max-w-md text-center">
//           {/* Logo */}
//           <img
//             src={logo}
//             alt="LAXXA"
//             className="mx-auto mb-2 w-[160px] object-contain"
//           />

//           <p className="text-gray-500 mb-8">Luxury Fashion Experience</p>

//           {/* Phone Input */}
//           <div className="flex items-center border rounded-lg overflow-hidden mb-6">
//             <span className="px-4 text-gray-600 border-r bg-gray-50">+91</span>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               className="w-full px-4 py-3 focus:outline-none"
//             />
//           </div>

//           {/* Sign In Button */}
//           <button className="w-full bg-[#06273C] text-white py-3 rounded-full font-medium hover:bg-slate-800 transition mb-6">
//             Sign In
//           </button>

//           {/* OR Divider */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className="flex-1 h-px bg-gray-300" />
//             <span className="text-gray-400 text-sm">OR</span>
//             <div className="flex-1 h-px bg-gray-300" />
//           </div>

//           {/* Google Sign Up */}
//           <button className="w-full border py-3 rounded-full flex items-center justify-center gap-3 hover:bg-gray-50 transition">
//             <img
//               src="https://www.svgrepo.com/show/475656/google-color.svg"
//               alt="Google"
//               className="w-5 h-5"
//             />
//             <span className="font-medium text-gray-700">
//               Sign up with Google
//             </span>
//           </button>

//           {/* Footer */}
//           <p className="text-sm text-gray-500 mt-6">
//             Don’t have an account?{" "}
//             <span className="text-slate-900 font-medium cursor-pointer">
//               Sign Up
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
