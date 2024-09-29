import React, { useState } from "react";

const SetupSecurity = () => {
  const [security, setSecurity] = useState("");
  const [step, setStep] = useState(1); // State to track steps

  const handleSecurityChange = (e) => {
    setSecurity(e.target.value);
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2); // Move to step 2 when "Save and Continue" is clicked
    } else if (step === 2) {
      setStep(3); // Move to step 3 after setting up 2FA
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Panel: Stepper */}
      <div className="w-2/4 border-r h-screen border-gray-300 p-8">
        <h2 className="text-[24px] font-semibold mb-6">Setup your store</h2>
        <ul className="space-y-6">
          <li className="flex items-start space-x-3">
            <span className="w-8 h-8 bg-black inline-flex items-center justify-center rounded-full"></span>
            <div>
              <h3 className="text-[18px] font-medium">Name your store</h3>
              <p className="text-sm text-gray-500">
                Let’s get started. Tell about you and your shop.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-8 h-8 bg-black inline-flex items-center justify-center rounded-full"></span>
            <div>
              <h3 className="text-[18px] font-medium">
                Preferences your store
              </h3>
              <p className="text-sm text-gray-500">
                Let’s get started. Tell about you and your shop.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <span className="w-8 h-8 bg-black inline-flex items-center justify-center rounded-full"></span>
            <div>
              <h3 className="text-[18px] font-medium">How’ll get you paid</h3>
              <p className="text-sm text-gray-500">
                Let’s get started. Tell about you and your shop.
              </p>
            </div>
          </li>
          {["Your store security"].map((step, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span
                  className={`w-8 h-8 text-black inline-flex items-center justify-center rounded-full ${
                    index === 0 ? "border-[1.4px] font-bold border-black" : ""
                  }`}
                >
                  {index + 4}
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

      {/* Right Panel: Conditional Form Rendering */}
      <div className="relative w-2/4 p-8">
        {step === 1 ? (
          <>
            <h3 className="text-[24px] font-semibold mb-6">
              Keep your store extra safe
            </h3>
            <p className="text-gray-500 mb-4">
              Help us keep our community safe by turning on two-factor
              authentication (2FA)
            </p>

            <p className="mt-1 text-sm underline pb-6 cursor-pointer text-[18px] font-[500] text-[#7A4DF5]">
              How does 2FA work?
            </p>

            <div className="mb-6">
              <label
                htmlFor="security"
                className="block text-sm font-medium text-gray-700"
              >
                Choose an option to get started
              </label>
              <select
                id="security"
                value={security}
                onChange={handleSecurityChange}
                className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select an option</option>
                <option>Authenticator App</option>
                <option>SMS Verification</option>
              </select>
            </div>

            <button
              type="button"
              className="w-[90%] absolute bottom-10 py-2 px-4 rounded-lg bg-black text-white"
              onClick={handleContinue}
            >
              Save and Continue
            </button>
          </>
        ) : step === 2 ? (
          <>
            <h3 className="text-[24px] font-semibold mb-6">
              Setup two-factor authentication
            </h3>
            <p className="text-gray-500 mb-4">
              1. Open your authenticator app. Then, scan this QR code.
            </p>

            <div className="mb-6">
              {/* QR Code Placeholder */}
              <div className="w-48 h-48 bg-gray-300 flex items-center justify-center">
                [QR Code]
              </div>

              <p className="mt-4">Or, enter this key in your app:</p>
              <div className="mt-2 mb-4 flex items-center space-x-2">
                <input
                  type="text"
                  value="NKFNSDKNFSD23M23948124Y124"
                  readOnly
                  className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md shadow-sm sm:text-sm"
                />
                <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-600">
                  📋
                </button>
              </div>

              <label
                htmlFor="authCode"
                className="block text-sm font-medium text-gray-700"
              >
                2. Enter the six-digit code from your app:
              </label>
              <input
                type="text"
                id="authCode"
                placeholder="Enter the Code"
                className="mt-1 block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="button"
              className="w-[90%] absolute bottom-10 py-2 px-4 rounded-lg bg-black text-white"
              onClick={handleContinue}
            >
              Continue
            </button>
          </>
        ) : (
          <>
            <h3 className="text-[24px] font-semibold mb-6">You're all set!</h3>
            <p className="text-gray-500 mb-4">
              Your account is now protected by two-factor authentication via the
              authenticator app. You can turn off your 2FA anytime in your
              security settings.
            </p>

            <div className="mb-6">
              <div className="border border-gray-300 p-4 rounded-md">
                <h4 className="font-medium text-gray-800 mb-4">
                  Make sure to save your backup codes!
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Keep these codes in a safe place. You'll need them to sign in
                  if you ever lose access to your 2FA device. These codes are
                  shown only once, so save them now.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>126493</div>
                  <div>123145</div>
                  <div>042345</div>
                  <div>657343</div>
                  <div>252536</div>
                  <div>853453</div>
                </div>

                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-md">
                    Save to your device
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-md">
                    Copy codes
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-[90%] absolute bottom-10 py-2 px-4 rounded-lg bg-black text-white"
            >
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SetupSecurity;
