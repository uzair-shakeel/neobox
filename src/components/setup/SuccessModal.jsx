import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative w-full max-w-md p-8 space-y-6 bg-white shadow-md border border-[#E4E4E7] rounded-[16px]">
        <img
          src="/Ilustrations.svg"
          alt=""
          className="absolute top-0 left-1/2 -translate-x-1/2"
        />

        <div className="text-center w-[90%] mx-auto pt-40">
          <h2 className=" text-[24px] font-[500] text-gray-900">
            Your store is open for business!
          </h2>
          <p className=" text-[16px] px-3 text-gray-600">
            Open link at your email and reset your password and make a new
            password again.
          </p>
        </div>

        {/* Continue Button */}
        <div>
          <button
            type="button"
            className={`w-full py-2 px-4 rounded-lg bg-black text-white`}
            onClick={onClose} // Call handleContinue on click
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
