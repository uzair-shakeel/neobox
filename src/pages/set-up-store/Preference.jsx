import React, { useState } from "react";

const Preferences = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <div className="flex h-full w-full bg-white  border-gray-300">
        {/* Left Panel: Stepper */}
        <div className="w-2/4 border-r h-screen border-gray-300 p-8">
          <h2 className="text-[24px] font-semibold mb-6">Setup your store</h2>
          <ul className="space-y-6">
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-8 h-8 text-white bg-black inline-flex items-center justify-center rounded-full">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-medium">
                  Preferences your store
                </h3>
                <p className="text-sm text-gray-500">
                  Let’s get started. tell about you and your shop
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-8 h-8 text-black bg-gray-300 inline-flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-medium">Name your store</h3>
                <p className="text-sm text-gray-500">
                  You can just draft a name now and change it later.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-8 h-8 text-black bg-gray-300 inline-flex items-center justify-center rounded-full">
                  3
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-medium">How’ll get you paid</h3>
                <p className="text-sm text-gray-500">
                  If you’re still figuring it out, you can skip this for now
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="w-8 h-8 text-black bg-gray-300 inline-flex items-center justify-center rounded-full">
                  4
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-medium">Your store security</h3>
                <p className="text-sm text-gray-500">
                  If you’re still figuring it out, you can skip this for now
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Panel: Form */}
        <div className="relative w-2/4 p-8">
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
              value="Canada"
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Tell Us where your shop is based"
            />
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
              value="$ Canadian Dollar"
              disabled
              className="mt-1 block w-full p-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="The currency you’ll use to price the items you sell on Neobox."
            />
          </div>

          <button
            type="button"
            className="w-full bg-black text-white py-3 px-6 rounded-md shadow hover:bg-gray-900 transition-colors"
          >
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
