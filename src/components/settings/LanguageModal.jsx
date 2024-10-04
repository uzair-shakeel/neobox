// LanguageModal.js
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const LanguageModal = ({ isOpen, onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("english"); // Default language

  if (!isOpen) return null; // Don't render if the modal is closed

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg relative">
        <h2 className="text-center text-xl font-semibold mb-4">Language</h2>
        <p className="text-center text-gray-500 mb-6">
          Change your store language
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Shop Language</label>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="english">English</option>
              <option value="french">French</option>
            </select>
          </div>

          <button className="w-full mt-4 p-2 bg-gray-300 text-white rounded-md">
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

export default LanguageModal;
