import React, { useState } from "react";

const StoreSetup = () => {
  const [storeName, setStoreName] = useState("");
  const [step1Checked, setStep1Checked] = useState(false);

  const handleStoreNameChange = (e) => {
    setStoreName(e.target.value);
  };

  const isStoreNameValid = () => {
    return (
      storeName.length >= 4 &&
      storeName.length <= 20 &&
      /^[a-zA-Z0-9 ]+$/.test(storeName)
    );
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Panel: Stepper */}
      <div className="w-2/4 border-r h-screen border-gray-300 p-8">
        <h2 className="text-[24px] font-semibold mb-6">Setup your store</h2>
        <ul className="space-y-6">
          <li className="flex items-start space-x-3">
            <span
              className={`w-8 h-8 bg-black inline-flex items-center justify-center rounded-full`}
            ></span>
            <div>
              <h3 className="text-[18px] font-medium">
                Preferences your store
              </h3>
              <p className="text-sm text-gray-500">
                Let’s get started. Tell about you and your shop.
              </p>
            </div>
          </li>
          {[
            "Name your store",
            "How’ll get you paid",
            "Your store security",
          ].map((step, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span
                  className={`w-8 h-8 text-black inline-flex items-center justify-center rounded-full ${
                    index === 0 ? "border-[1.4px] font-bold border-black" : ""
                  }`}
                >
                  {index + 2}
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
      <div className="relative w-2/4 p-8">
        <h3 className="text-[24px] font-semibold mb-6">Name your store</h3>
        <p className="text-gray-500 mb-4">
          Let’s get started! Tell us about you and your shop.
        </p>

        <div className="mb-6">
          <label
            htmlFor="storeName"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="storeName"
            value={storeName}
            onChange={handleStoreNameChange}
            className="mt-1 block w-full p-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your store name"
          />
          <p className="mt-1 text-sm text-gray-500">
            • Between 4-20 characters
            <br />• No special characters, or accented letters
          </p>
        </div>

        <button
          type="button"
          className={`w-[90%] absolute bottom-10 py-2 px-4 rounded-lg ${
            isStoreNameValid()
              ? "bg-black text-white"
              : "bg-gray-300 text-white cursor-not-allowed"
          }`}
          disabled={!isStoreNameValid()}
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default StoreSetup;
