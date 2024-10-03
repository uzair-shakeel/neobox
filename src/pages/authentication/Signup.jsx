import React, { useState } from "react";
import Header from "../../components/settings/Header";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <Header />

      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md border border-[#E4E4E7] rounded-[16px]">
          <div>
            <h2 className="text-start text-[24px] font-[500] text-gray-900">
              Sign Up
            </h2>
            <p className="text-start text-[16px]">
              Enter your detail to register and start to discover!
            </p>
          </div>

          {/* Google Sign Up */}
          <div>
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50"
            >
              <img
                src="/google.svg" // Replace with your Google icon path
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Sign Up with Google
            </button>
          </div>

          <div className="relative ">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          {/* Email Sign Up */}
          <div>
            <h4 className="text-start mb-2 text-[14px] font-[500] text-gray-900">
              Email
            </h4>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ex: marc@example.com"
            />
          </div>

          <div>
            <button
              type="button"
              className={`w-full py-2 px-4 rounded-lg ${
                isValidEmail(email)
                  ? "bg-black text-white"
                  : "bg-gray-300 text-white cursor-not-allowed"
              }`}
              disabled={!isValidEmail(email)}
            >
              Continue
            </button>
          </div>

          <p className="text-[16px] text-[#3F3F46]">
            By clicking Register, you agree to accept Neobox{" "}
            <a href="#" className="underline font-[500]">
              Terms and Condition
            </a>
          </p>

          <p className="text-[16px] text-[#3F3F46]">
            have an account?{" "}
            <a href="#" className="text-[#46BFA9] underline font-[500] ">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
