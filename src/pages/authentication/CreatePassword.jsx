import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom"; // Import navigate and location
import Header from "../../components/settings/Header";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // New state for password visibility
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; // Safely retrieve email from state

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordEntered(e.target.value.length > 0);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isValidLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);

  const goToOTP = () => {
    navigate("/signup/otp", { state: { email } }); // Navigate to OTP page with email
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md border border-[#E4E4E7] rounded-[16px]">
          {/* Logo */}
          <div>
            <h2 className="text-start text-[24px] font-[500] text-gray-900">
              Let’s you get started
            </h2>
            <p className="text-start text-[16px] text-gray-500">
              Enter your detail to register and start to discover!
            </p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-start mb-2 text-[14px] font-[500] text-gray-900">
              Email
            </h4>
            <input
              type="email"
              value={email} // Use the email from state
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            />
          </div>

          {/* Full Name */}
          <div>
            <h4 className="text-start mb-2 text-[14px] font-[500] text-gray-900">
              Full Name
            </h4>
            <input
              type="text"
              placeholder="Marc Marquez"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            />
          </div>

          {/* Password */}
          <div>
            <h4 className="text-start mb-2 text-[14px] font-[500] text-gray-900">
              Password
            </h4>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"} // Toggle input type
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {!isPasswordVisible ? (
                  <FaEye size={20} />
                ) : (
                  <FaEyeSlash size={20} />
                )}
              </div>
            </div>
          </div>

          {/* Password Strength */}
          {isPasswordEntered && (
            <div>
              <div className="flex justify-between gap-[10px] mt-2 mb-1">
                <span
                  className={`h-[8px] w-1/4 ${
                    hasLowerCase ? "bg-[#FACC15]" : "bg-[#F4F4F5]"
                  }`}
                ></span>
                <span
                  className={`h-[8px] w-1/4  ${
                    hasUpperCase ? "bg-[#FACC15]" : "bg-[#F4F4F5]"
                  }`}
                ></span>
                <span
                  className={`h-[8px] w-1/4  ${
                    hasNumber ? "bg-[#FACC15]" : "bg-[#F4F4F5]"
                  }`}
                ></span>
                <span
                  className={`h-[8px] w-1/4 ${
                    isValidLength ? "bg-[#FACC15]" : "bg-[#F4F4F5]"
                  }`}
                ></span>
              </div>

              <ul className="text-sm space-y-1">
                <li className={`flex items-center gap-2 `}>
                  {isValidLength ? (
                    <img src="/Check.svg" alt="" />
                  ) : (
                    <img src="/Cross.svg" alt="" />
                  )}
                  8 Characters Minimum
                </li>
                <li className={`flex items-center gap-2 `}>
                  {hasNumber ? (
                    <img src="/Check.svg" alt="" />
                  ) : (
                    <img src="/Cross.svg" alt="" />
                  )}
                  A Number
                </li>
                <li className={`flex items-center gap-2`}>
                  {hasUpperCase ? (
                    <img src="/Check.svg" alt="" />
                  ) : (
                    <img src="/Cross.svg" alt="" />
                  )}
                  An Uppercase Letter
                </li>
                <li className={`flex items-center gap-2`}>
                  {hasLowerCase ? (
                    <img src="/Check.svg" alt="" />
                  ) : (
                    <img src="/Cross.svg" alt="" />
                  )}
                  A Lowercase Letter
                </li>
              </ul>
            </div>
          )}

          {/* Continue Button */}
          <div>
            <button
              type="button"
              className={`w-full py-2 px-4 rounded-lg ${
                isValidLength && hasNumber && hasUpperCase && hasLowerCase
                  ? "bg-black text-white"
                  : "bg-gray-300 text-white cursor-not-allowed"
              }`}
              disabled={
                !(isValidLength && hasNumber && hasUpperCase && hasLowerCase)
              }
              onClick={goToOTP} // Navigate to OTP on click
            >
              Continue
            </button>
          </div>

          {/* Terms */}
          <p className="text-[16px] text-[#3F3F46] mt-4">
            By clicking Register, you agree to accept Neobox{" "}
            <a href="#" className="underline font-[500]">
              Terms and Condition
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
