import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import AddMethodModal from "../../components/finance/AddPaymentModal"; // Modal component

const Withdrawal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex h-screen relative">
      {/* Main Content with Blur on Sidebar and Content When Modal is Open */}
      <div
        className={`flex bg-gray-50 h-full w-full transition-all duration-300 ${
          isModalOpen ? "blur-[2px]" : ""
        }`}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 px-8 py-6">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
            Withdrawal Methods
          </h2>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Content - Saved Withdrawal Methods */}
            <div className="col-span-12 lg:col-span-6">
              <h3 className="text-lg font-semibold mb-4">
                Saved withdrawal methods
              </h3>
              <div className="bg-white border border-gray-200 p-3 lg:p-6 rounded-lg shadow-sm mb-6">
                <div className="flex justify-between items-center border border-gray-200 rounded-lg p-2 lg:p-4">
                  <div className="flex items-center space-x-2 lg:space-x-4">
                    <img
                      src="/bank.svg"
                      alt="Bank Icon"
                      className="border border-gray-100 p-2 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-[13px] lg:text-[16px]">
                        Bank Transfer • CAD
                      </p>
                      <p className="text-[10px] lg:text-[14px] text-gray-500">
                        marquezemarc@gmail.com
                      </p>
                    </div>
                  </div>
                  <img src="/arrows.svg" alt="Arrow Icon" />
                </div>
                <p className="text-[13px] lg:text-sm text-gray-600 mt-4">
                  Use them to withdraw your funds from Neobox once a payment is
                  received. Click on each method to customize or view details.
                </p>

                {/* Add Method Button */}
                <button
                  onClick={openModal}
                  className="flex mt-4 w-full items-center justify-center lg:w-auto space-x-2 font-semibold py-2 px-5 border border-gray-300 text-[14px] lg:text-[17px] rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <HiOutlinePlusSm /> <span>Add Method</span>
                </button>
              </div>
            </div>

            {/* Right Content - Help Section */}
            <div className="col-span-12 lg:col-span-6">
              <h3 className="text-lg font-semibold mb-4">
                How to withdraw your money?
              </h3>
              <div className="bg-[#F5F3FF] rounded-lg p-6 grid lg:grid-cols-2 gap-8 lg:gap-2 justify-between">
                <div>
                  <h3 className="text-[18px] lg:text-[24px] font-semibold mb-3">
                    Get your money sent to multiple accounts automatically.
                  </h3>
                  <p className="text-[14px] text-gray-600 mb-4">
                    Deposit every month
                  </p>

                  <div className="flex justify-between items-center mt-6">
                    <button className="bg-white border w-full justify-center lg:w-auto border-gray-100 hover:bg-gray-100 transition-colors text-[14px] lg:text-[17px] rounded-lg p-4 font-semibold flex items-center space-x-2 ">
                      <span>Learn more</span>
                      <MdArrowOutward size={20} />
                    </button>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <img
                    src="/coins.svg"
                    alt="Money Icon"
                    className="w-auto h-[130px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <AddMethodModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default Withdrawal;
