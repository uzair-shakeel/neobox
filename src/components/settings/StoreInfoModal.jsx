// StoreInfoModal.js
import React from "react";

const StoreInfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
        <h2 className="text-center text-xl font-semibold mb-4">
          Store Information
        </h2>
        <p className="text-center text-gray-500 mb-6">
          You can change store information
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Store Name</label>
            <input
              type="text"
              placeholder="Food-illiumini.Inc"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="info@gmail.com"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              placeholder="Enter City"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Zip Code</label>
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button className="w-full mt-4 p-2 bg-gray-300 text-white rounded-md">
            Save
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default StoreInfoModal;
