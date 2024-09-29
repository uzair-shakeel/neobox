import React, { useState } from "react";

const PreferencesForm = ({ step, onNext }) => {
  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("");
  const [currency, setCurrency] = useState("");

  const isFormValid = () => {
    return (
      language.trim() !== "" && country.trim() !== "" && currency.trim() !== ""
    );
  };

  const handleNext = () => {
    if (isFormValid()) {
      onNext();
    }
  };

  return (
    <div className="relative w-2/4 p-8">
      <h3 className="text-[24px] font-semibold mb-6">Shop Preferences</h3>
      <p className="text-gray-500 mb-4">
        Let’s get started! Tell us about you and your shop.
      </p>

      {/* Shop Language Field */}
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
          onChange={(e) => setLanguage(e.target.value)}
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

      {/* Country Field */}
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

      {/* Currency Field */}
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

      {/* Next Button */}
      <button
        type="button"
        className={`w-full py-2 px-4 rounded-lg ${
          isFormValid()
            ? "bg-black text-white"
            : "bg-gray-300 text-white cursor-not-allowed"
        }`}
        onClick={handleNext}
        disabled={!isFormValid()}
      >
        Next
      </button>
    </div>
  );
};

export default PreferencesForm;
