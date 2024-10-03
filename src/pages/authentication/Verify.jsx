import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../../components/settings/Header";

const Verify = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const isPhoneValid = phone.length >= 10;

  const handleContinue = () => {
    if (isPhoneValid) {
      navigate("/signup/otp"); // Navigate to /signup/otp
    }
  };

  return (
    <div>
      <Header />

      <div className="min-h-screen flex flex-col justify-center mx-4 items-center bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md border border-[#E4E4E7] rounded-[16px]">
          {/* Logo */}
          <div>
            <h2 className="text-start text-[24px] font-[500] text-gray-900">
              Verify Yourself
            </h2>
            <p className="text-start text-[16px] text-gray-500">
              Verify your phone number with a code
            </p>
          </div>

          {/* Phone Number Input */}
          <div>
            <h4 className="text-start mb-2 text-[14px] font-[500] text-gray-900">
              Phone
            </h4>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputClass="w-full px-4 py-2 bg-gray-100 border w-full border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              containerStyle={{ width: "100%" }}
            />
          </div>

          {/* Continue Button */}
          <div>
            <button
              type="button"
              className={`w-full py-2 px-4 rounded-lg ${
                isPhoneValid
                  ? "bg-black text-white"
                  : "bg-gray-300 text-white cursor-not-allowed"
              }`}
              disabled={!isPhoneValid}
              onClick={handleContinue} // Call handleContinue on click
            >
              Continue
            </button>
          </div>

          {/* Didn't receive code */}
          <p className="text-center text-[14px] mt-3 font-[500] text-gray-900">
            Didn’t receive a code?{" "}
            <a href="#" className="text-[#46BFA9] underline font-[500]">
              Resend
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
