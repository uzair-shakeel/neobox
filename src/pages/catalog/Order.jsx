import React from "react";
import { FaBox, FaTruck, FaHome, FaCheckCircle } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import { RiArrowLeftLine } from "react-icons/ri";

export default function Order() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-[32px] py-[27px]">
        <h1 className="text-[24px] leading-[36px] font-[500] pt-[5px] pb-[32px] flex items-center gap-[16px]">
          <span className="min-h-[20px] min-w-[20px]">
            <RiArrowLeftLine size={20} />
          </span>
          Order 1001
        </h1>
        <div className="flex flex-col md:flex-row gap-[24px] pt-[15px]">
          <div className="md:w-[65%] w-full">
            <div
              className="bg-white p-[24px] rounded-[8px] border border-[#E4E4E7]"
              style={{
                boxShadow: "0px 1px 2px 0px #1018280F",
              }}
            >
              <h2 className="text-2xl font-bold mb-[32px]">Shipping</h2>
              <div className="flex justify-between items-start mb-[16px]">
                <div className="flex flex-col items-center">
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white border border-dashed border-[#151515]">
                    <div className="w-[33.6px] h-[33.6px] bg-[#151515] rounded-full flex items-center justify-center text-white">
                      <FaBox size={20} />
                    </div>
                  </div>
                  <p className="text-[#3F3F46] text-[14px] font-[400] mt-[8px] mb-[4px]">
                    Step 1
                  </p>
                  <p className="text-[#09090B] font-[500] text-[16px]">
                    Packaging
                  </p>
                </div>
                <div className="flex-1 h-[4px] rounded-[8px] bg-[#151515] mx-2 my-[18px]"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                    <FaTruck size={20} />
                  </div>
                  <p className="text-[#3F3F46] text-[14px] font-[400] mt-[8px] mb-[4px]">
                    Step 2
                  </p>
                  <p className="text-[#09090B] font-[500] text-[16px]">
                    On its way
                  </p>
                </div>
                <div className="flex-1 h-[4px] rounded-[8px] bg-[#E4E4E7] mx-2 my-[18px]"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                    <FaHome size={20} />
                  </div>
                  <p className="text-[#3F3F46] text-[14px] font-[400] mt-[8px] mb-[4px]">
                    Step 3
                  </p>
                  <p className="text-[#09090B] font-[500] text-[16px]">
                    On Destination
                  </p>
                </div>
                <div className="flex-1 h-[4px] rounded-[8px] bg-[#E4E4E7] mx-2 my-[18px]"></div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                    <FaCheckCircle size={20} />
                  </div>
                  <p className="text-[#3F3F46] text-[14px] font-[400] mt-[8px] mb-[4px]">
                    Step 4
                  </p>
                  <p className="text-[#09090B] font-[500] text-[16px]">
                    Delivered
                  </p>
                </div>
              </div>
              <div className="bg-purple-100 text-purple-800 p-3 rounded-lg text-center">
                Package still on processing
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold">Order 1001</h2>
                  <p className="text-gray-600">09 May 2024</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Paid
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Processing
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Iva Ryan</h3>
                <p className="text-gray-600">Customer ID : 121231</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Order Items</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="BBQ Sauce"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">BBQ Sauces</h3>
                    <p className="text-gray-600">$800,740</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p>1x</p>
                  <p className="font-semibold">$800,740</p>
                </div>
              </div>
              <button className="mt-6 bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
                <FaBox /> Mark as shipped
              </button>
            </div>
          </div>

          <div className="md:w-[35%] w-full">
            <div
              className="bg-white p-[24px] rounded-[8px] border border-[#E4E4E7] w-full"
              style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
            >
              <h2 className="text-[20px] font-[500] text-[#09090B] mb-[30px]">
                Payment
              </h2>
              <p className="font-[500] text-[16px] text-[#09090B] pb-[4px]">
                Paid via Debit Card
              </p>
              <p className="text-[#3F3F46] text-[14px] font-[400] mb-[30px]">
                27 Jan 2024 11:33 am
              </p>
              <div className="flex justify-between mb-[14px] gap-[6px]">
                <p className="text-[#3F3F46] text-[14px] text-[400]">
                  Subtotal
                </p>
                <p className="font-[400] text-[16px] text-[#09090B]">
                  $800,740
                </p>
              </div>
              <div className="flex justify-between gap-[6px]">
                <p className="font-[600] text-[16px] text-[#3F3F46]">Total</p>
                <p className="font-[600] text-[16px] text-[#3F3F46]">
                  $800,740
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
