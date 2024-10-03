import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../../components/settings/Header";

const OTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate(); // Initialize navigate

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input box if a number is entered
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Move focus to the previous field when backspace is pressed
    if (e.key === "Backspace" && otp[index] === "") {
      e.target.previousSibling?.focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleSubmit = () => {
    if (isOtpComplete) {
      navigate("/signup/success"); // Navigate to /verify page
    }
  };

  return (
    <div>
      <Header />

      <div className="min-h-screen flex flex-col mx-4 justify-center items-center bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md border border-[#E4E4E7] rounded-[16px]">
          {/* Logo */}
          <div>
            <h2 className="text-start text-[24px] font-[500] text-gray-900">
              Enter 6 digit code
            </h2>
            <p className="text-start text-[16px] text-gray-500">
              We sent it to +12312312323{" "}
              <a href="#" className="text-[#7A4DF5] underline font-[500]">
                Change
              </a>
            </p>
          </div>

          {/* OTP Input Fields */}
          <div className="flex justify-center space-x-2">
            {otp.map((data, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-9 text-center text-[20px] bg-gray-100 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={data}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onKeyUp={(e) => handleKeyPress(e, index)}
                />
              );
            })}
          </div>

          <div>
            {/* Continue Button */}
            <div>
              <button
                type="button"
                className={`w-full py-2 px-4 rounded-lg ${
                  isOtpComplete
                    ? "bg-black text-white"
                    : "bg-gray-300 text-white cursor-not-allowed"
                }`}
                disabled={!isOtpComplete}
                onClick={handleSubmit} // Call handleSubmit on click
              >
                Continue
              </button>
            </div>

            {/* Resend OTP */}
            <p className="text-center text-[14px] mt-3 font-[500] text-gray-900">
              Didn’t receive a code?{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
