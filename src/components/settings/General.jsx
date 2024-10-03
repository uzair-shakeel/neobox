// GeneralSettings.js
import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import AccountModal from "./AccountModal"; // Import the AccountModal component
import StoreInfoModal from "./StoreInfoModal"; // Import the StoreInfoModal component
import LanguageModal from "./LanguageModal";

const GeneralSettings = ({
  setStoreInfoModalOpen,
  isAccountModalOpen,
  isLanguageModalOpen,
  isStoreInfoModalOpen,
  setAccountModalOpen,
  setLanguageModalOpen,
  isModalOpen,
}) => {
  return (
    <div>
      <div
        className={`grid md:grid-cols-2 grid-cols-1 gap-4 text-[18px] ${
          isModalOpen ? "blur-[2px]" : ""
        }`}
      >
        <button
          onClick={() => setStoreInfoModalOpen(true)} // Open Store Info Modal on click
          className="w-full flex justify-between items-center p-4 text-left md:text-[16px] text-[14px] border border-gray-300 rounded-lg"
        >
          <span>Store name, email, address</span>
          <span className="text-gray-500">
            <IoMdArrowForward />
          </span>
        </button>
        <button
          onClick={() => setAccountModalOpen(true)} // Open Account Modal on click
          className="w-full flex justify-between items-center p-4 text-left md:text-[16px] text-[14px] border border-gray-300 rounded-lg"
        >
          <span>Account</span>
          <span className="text-gray-500">
            <IoMdArrowForward />
          </span>
        </button>
        <button
          onClick={() => setLanguageModalOpen(true)} // Open Store Info Modal on click
          className="w-full flex justify-between items-center p-4 text-left md:text-[16px] text-[14px] border border-gray-300 rounded-lg"
        >
          <span>Language</span>
          <span className="text-gray-500">
            <IoMdArrowForward />
          </span>
        </button>
      </div>

      {/* Store Info Modal */}
      <StoreInfoModal
        isOpen={isStoreInfoModalOpen}
        onClose={() => setStoreInfoModalOpen(false)} // Close Store Info Modal
      />

      {/* Language Modal */}
      <LanguageModal
        isOpen={isLanguageModalOpen}
        onClose={() => setLanguageModalOpen(false)} // Close Store Info Modal
      />

      {/* Account Modal */}
      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setAccountModalOpen(false)} // Close Account Modal
      />
    </div>
  );
};

export default GeneralSettings;
