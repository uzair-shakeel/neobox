import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const StoreInfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if the modal is closed

  // State to manage input values
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  // Condition to check if all fields are filled
  const isFormComplete = storeName && email && address && city && zipCode;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg relative">
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
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="info@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Zip Code</label>
            <input
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Button that changes style based on form completion */}
          <button
            className={`w-full mt-4 p-2 rounded-md ${
              isFormComplete
                ? "bg-black text-white"
                : "bg-gray-300 text-white"
            }`}
            disabled={!isFormComplete} // Optionally disable button if form isn't complete
          >
            Save
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          <MdClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default StoreInfoModal;
