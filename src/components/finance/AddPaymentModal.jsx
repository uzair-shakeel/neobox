import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiChevronLeft } from "react-icons/fi";
import Select from "react-select";
import countryList from "react-select-country-list";
import Step2Form from "./Step3Form";
import Step4Form from "./Step4Form"; // New Step 4 Component
import Step5Form from "./step5Form"; // New Step 5 Component

const AddMethodModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [formData, setFormData] = useState({
    recipientName: "",
    country: { value: "US", label: "United States" },
    currency: "USD",
    beneficiary: "",
    accountNumber: "",
    routingNumber: "",
    address: "",
    city: "",
    zipCode: "",
  });

  // Move to next step
  const nextStep = (method) => {
    setSelectedMethod(method);
    setStep(2);
  };
  const countryOptions = countryList()
    .getData()
    .map((country) => ({
      value: country.value,
      label: country.label,
    }));

  // Back to previous step
  const previousStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black opacity-30 z-40"></div>

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative bg-white max-w-[420px] w-full p-6 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute top-6 right-4 text-gray-500 hover:text-gray-900"
            onClick={onClose}
          >
            <MdClose size={24} />
          </button>

          {/* Step 1: Select Withdrawal Method */}
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold mb-4">
                Add a new withdrawal method
              </h2>
              <p className="text-gray-500 mb-6">Withdrawal methods</p>

              <div className="space-y-4">
                <div
                  className="flex gap-3 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => nextStep("Instant Card Transfer")}
                >
                  <img src="/card icon.svg" alt="" />
                  <div>
                    <p className="font-semibold">Instant Card Transfer</p>
                    <p className="text-sm text-gray-500">
                      Support 40+ currencies
                    </p>
                  </div>
                  <span className="text-green-500 text-sm">Fastest</span>
                </div>

                <div
                  className="flex gap-3 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => nextStep("Bank Transfer")}
                >
                  <img src="/Bank Icon.svg" alt="" />
                  <div>
                    <p className="font-semibold">Bank Transfer</p>
                    <p className="text-sm text-gray-500">
                      Support 180+ currencies
                    </p>
                  </div>
                </div>

                <div
                  className="flex gap-3 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => nextStep("Wise")}
                >
                  <img src="/wise icon.svg" alt="" />
                  <div>
                    <p className="font-semibold">Wise</p>
                    <p className="text-sm text-gray-500">
                      Instant and support 7+ currencies
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Step 2: Form Input */}
          {step === 2 && (
            <>
              {/* Back Button */}
              <button
                className="absolute top-6 left-4 text-gray-500 hover:text-gray-900"
                onClick={previousStep}
              >
                <FiChevronLeft size={24} />
              </button>

              <h2 className="text-xl font-semibold mb-4 text-center">
                Add a new withdrawal method
              </h2>
              <p className="text-gray-500 text-center mb-6">{selectedMethod}</p>

              {/* Form */}
              <div className="space-y-4">
                {/* Recipient Name */}
                <div>
                  <label className="text-sm font-semibold">
                    Recipient Name
                  </label>
                  <input
                    type="text"
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="text-sm font-semibold">Country</label>
                  <Select
                    options={countryOptions}
                    value={formData.country}
                    onChange={handleCountryChange}
                    className="w-full mt-2"
                  />
                </div>

                {/* Currency */}
                <div>
                  <label className="text-sm font-semibold">Currency</label>
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">CAD</option>
                    {/* Add more currencies as needed */}
                  </select>
                </div>
              </div>

              {/* Step Indicator & Continue Button */}
              <div className="mt-6 flex justify-between items-center">
                <p className="text-gray-500 text-sm">Step 1/3</p>
                <button
                  className="py-2 px-4 bg-black text-white rounded-lg font-semibold"
                  disabled={!formData.recipientName}
                  onClick={() => setStep(3)}
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {/* Step 3: Use Step2Form Component */}
          {step === 3 && (
            <>
              {/* Back Button */}
              <button
                className="absolute top-6 left-4 text-gray-500 hover:text-gray-900"
                onClick={previousStep}
              >
                <FiChevronLeft size={24} />
              </button>

              <h2 className="text-xl font-semibold text-center mb-4">
                Add a new withdrawal method
              </h2>
              <p className="text-gray-500 mb-6 text-center">{selectedMethod}</p>

              {/* Step 2 Form */}
              <Step2Form
                formData={formData}
                setFormData={setFormData}
                onNext={() => setStep(4)}
              />
            </>
          )}

          {/* Step 4: New Step 4 Component */}
          {step === 4 && (
            <>
              <button
                className="absolute top-6 left-4 text-gray-500 hover:text-gray-900"
                onClick={previousStep}
              >
                <FiChevronLeft size={24} />
              </button>
              <div className="flex justify-center items-center">
                <h2 className="text-[24px] font-bold">Verification Required</h2>
              </div>
              <p className="text-center mt-2 text-[14px] text-gray-600">
                Enter the code sent to marquezmarc@gmail.com
              </p>

              <Step4Form
                formData={formData}
                setFormData={setFormData}
                onNext={() => setStep(5)}
              />
            </>
          )}

          {/* Step 5: New Step 5 Component */}
          {step === 5 && (
            <>
              <Step5Form
                formData={formData}
                setFormData={setFormData}
                onClose={onClose}
                onNext={() => console.log("Submit the final form")}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AddMethodModal;
