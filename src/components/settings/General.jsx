import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const GeneralSettings = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-[18px]">
        <button className="w-full flex justify-between items-center p-4 text-left md:text-[16px] text-[14px] border border-gray-300 rounded-lg">
          <span>Store name, email, address</span>
          <span className="text-gray-500">
            <IoMdArrowForward />
          </span>
        </button>
        <button className="w-full flex justify-between items-center p-4 text-left md:text-[16px] text-[14px] border border-gray-300 rounded-lg">
          <span>Account</span>
          <span className="text-gray-500">
            <IoMdArrowForward />
          </span>
        </button>
        <button className="w-full flex justify-between items-center p-4 text-left md:text-[16px] text-[14px] border border-gray-300 rounded-lg">
          <span>Language</span>
          <span className="text-gray-500">
            <IoMdArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
};

export default GeneralSettings;
