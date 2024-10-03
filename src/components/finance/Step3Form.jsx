import React, { useState } from "react";

const Step2Form = ({ formData, setFormData, onNext }) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Check if required fields are filled
  const validateForm = (updatedForm) => {
    const { beneficiary, accountNumber, routingNumber } = updatedForm;
    if (beneficiary && accountNumber && routingNumber) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const updatedForm = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedForm);
    validateForm(updatedForm);
  };

  return (
    <>
      <div className="space-y-4 overflow-y-scroll modal-scrollbar h-[300px]">
        {/* Beneficiary */}
        <div>
          <label className="text-sm font-semibold">Beneficiary</label>
          <input
            type="text"
            name="beneficiary"
            value={formData.beneficiary}
            onChange={handleChange}
            placeholder="Enter beneficiary"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Account Number */}
        <div>
          <label className="text-sm font-semibold">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Enter account number"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* ACH Routing Number */}
        <div>
          <label className="text-sm font-semibold">ACH Routing Number</label>
          <input
            type="text"
            name="routingNumber"
            value={formData.routingNumber}
            onChange={handleChange}
            placeholder="Enter routing number"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="text-sm font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* City */}
        <div>
          <label className="text-sm font-semibold">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Zip Code */}
        <div>
          <label className="text-sm font-semibold">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Enter zip code"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Step Indicator & Continue Button */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-gray-500 text-sm">Step 2/3</p>
        <button
          className={`py-2 px-4 rounded-lg font-semibold ${
            isButtonEnabled ? "bg-black text-white" : "bg-gray-300"
          }`}
          onClick={onNext}
          disabled={!isButtonEnabled}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Step2Form;
