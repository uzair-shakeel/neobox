import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SetupPayout = () => {
  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const isFormValid = () => {
    return country.trim() !== "" && language.trim() !== "";
  };

  const handleButtonClick = () => {
    if (isFormValid()) {
      navigate("/store/security"); // Replace '/next-page' with the desired route
    }
  };

  return (
    <div className="min-h-screen flex bg-[#FAFAFA]">
      {/* Left Panel: Stepper */}
      <div className="md:w-2/4 w-full border-r h-screen border-gray-300 sm:px-8 px-4 py-8 md:flex flex-col hidden">
        <h2 className="text-[24px] font-semibold mb-6">Setup your store</h2>
        <ul className="space-y-6">
          <li className="flex items-start space-x-3">
            <span
              className={`min-w-[40px] w-[40px] min-h-[40px] h-[40px] bg-black inline-flex items-center justify-center rounded-full`}
            >
              <IoMdCheckmark color="white" size={18} />
            </span>
            <div>
              <h3 className="text-[18px] font-medium">Name your store</h3>
              <p className="text-sm text-gray-500">
                Let’s get started. Tell about you and your shop.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span
              className={`min-w-[40px] w-[40px] min-h-[40px] h-[40px] bg-black inline-flex items-center justify-center rounded-full`}
            >
              <IoMdCheckmark color="white" size={18} />
            </span>
            <div>
              <h3 className="text-[18px] font-medium">
                Preferences your store
              </h3>
              <p className="text-sm text-gray-500">
                Let’s get started. Tell about you and your shop.
              </p>
            </div>
          </li>
          {["How’ll get you paid", "Your store security"].map((step, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span
                  className={`min-w-[40px] w-[40px] min-h-[40px] h-[40px] text-black inline-flex items-center justify-center rounded-full bg-white ${
                    index === 0 ? "border-2 font-bold border-black" : ""
                  }`}
                >
                  {index + 3}
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-medium">{step}</h3>
                <p className="text-sm text-gray-500">
                  {index === 0
                    ? "You can just draft a name now and change it later."
                    : "If you're still figuring it out, you can skip this for now."}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel: Form */}
      <div className="relative md:w-2/4 w-full min-h-screen sm:px-8 px-4 py-8 bg-white">
        <h3 className="text-[24px] font-semibold mb-6">
          Setup payout withdrawal
        </h3>
        <p className="text-gray-500 mb-4">
          Receive payments to your local bank account.{" "}
        </p>

        <div className="mb-6">
          <label
            htmlFor="storeName"
            className="block text-sm font-medium text-gray-700"
          >
            Method
          </label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Directly Bank Deposit</option>
            <option>Cash</option>
            <option>Card</option>
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Available in over 115 Countries
          </p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="language"
            value={country}
            onChange={handleCountryChange}
            className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
        </div>

        <button
          type="button"
          className={`w-[90%] absolute bottom-10 py-2 px-4 rounded-lg ${
            isFormValid()
              ? "bg-black text-white"
              : "bg-gray-300 text-white cursor-not-allowed"
          }`}
          disabled={!isFormValid()}
          onClick={handleButtonClick}
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default SetupPayout;
