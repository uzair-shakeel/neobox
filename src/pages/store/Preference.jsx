import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreHeader from "../../components/StoreHeader";

const Preferences = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const isFormValid = () => {
    return country.trim() !== "" && currency.trim() !== "";
  };

  const handleButtonClick = () => {
    if (isFormValid()) {
      navigate("/store/name");
    }
  };

  return (
    <div>
      <StoreHeader />
      <div className="min-h-screen">
        <div className="flex h-full w-full bg-[#FAFAFA] border-gray-300">
          {/* Left Panel: Stepper */}
          <div className="md:w-2/4 w-full border-r h-screen border-gray-300 sm:px-8 px-4 py-8 md:flex flex-col hidden">
            <h2 className="text-[24px] font-semibold mb-6">Setup your store</h2>
            <ul className="space-y-6">
              {[
                "Preferences your store",
                "Name your store",
                "How’ll get you paid",
                "Your store security",
              ].map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <span
                      className={`w-[40px] h-[40px] text-black inline-flex items-center justify-center rounded-full bg-white ${
                        index === 0 ? "border-2 font-bold border-black" : ""
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium">{step}</h3>
                    <p className="text-sm text-gray-500">
                      {index === 0
                        ? "Let’s get started. tell about you and your shop"
                        : "You can just draft a name now and change it later."}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="absolute bottom-8 left-8">
              <select
                className="border border-gray-300 bg-white p-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="English (US)">
                  <img src="/Bank Icon.svg" alt="" /> English (US)
                </option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="relative md:w-2/4 w-full min-h-screen sm:px-8 px-4 py-8 bg-white">
            <h3 className="text-[24px] font-semibold mb-6">Shop Preferences</h3>
            <p className="text-gray-500 mb-4">
              Let’s get started! Tell us about you and your shop.
            </p>

            <div className="mb-6">
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-700"
              >
                Shop Language
              </label>
              <select
                id="language"
                value={language}
                onChange={handleLanguageChange}
                className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
              <p className="mt-1 text-sm text-gray-500">
                This is a hint text to help user
              </p>
            </div>

            <div className="mb-6">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Canada"
              />
              <p className="mt-1 text-sm text-gray-500">
                Tell Us where your shop is based
              </p>
            </div>

            <div className="mb-6">
              <label
                htmlFor="currency"
                className="block text-sm font-medium text-gray-700"
              >
                Currency
              </label>
              <input
                type="text"
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="$ Canadian Dollar"
              />
              <p className="mt-1 text-sm text-gray-500">
                The currency you’ll use to price the items you sell on Neobox.
              </p>
            </div>

            <button
              type="button"
              className={`md:w-[90%] w-full md:absolute bottom-10 py-2 px-4 rounded-lg ${
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
      </div>
    </div>
  );
};

export default Preferences;
