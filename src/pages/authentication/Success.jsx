import React from "react";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../../components/settings/Header";

const Success = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleContinue = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div>
      <Header />

      <div className="min-h-screen flex flex-col mx-4 justify-center items-center bg-gray-50">
        <div className="relative w-full max-w-md p-8 space-y-6 bg-white shadow-md border border-[#E4E4E7] rounded-[16px]">
          <img
            src="/Ilustrations.svg"
            alt=""
            className="absolute top-0 left-1/2 -translate-x-1/2"
          />

          <div className="text-center w-[90%] mx-auto pt-40">
            <h2 className=" text-[24px] font-[500] text-gray-900">
              Success Create Account{" "}
            </h2>
            <p className=" text-[16px] px-3 text-gray-600">
              Open link at your email and reset your password and make a new
              password again.{" "}
            </p>
          </div>

          {/* Continue Button */}
          <div>
            <button
              type="button"
              className={`w-full py-2 px-4 rounded-lg bg-black text-white`}
              onClick={handleContinue} // Call handleContinue on click
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
