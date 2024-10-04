import React from "react";
import Sidebar from "../../components/Sidebar";
import { IoIosMore } from "react-icons/io";

const Wallet = () => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar Component (Assumed already implemented) */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-[30%]  flex-grow py-6 p-3 lg:p-8">
        {/* Header */}
        <div className="flex justify-between w-full items-center mb-8">
          <h2 className="text-[18px] lg:text-[24px] font-semibold">Wallet</h2>
          <button className="bg-black text-white p-[10px] lg:p-[16px] rounded-md flex gap-2 items-center text-sm">
            <img src="/dollar.svg" alt="" />
            Download Report
          </button>
        </div>

        {/* Amount Due Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div>
            <p className="text-gray-900 text-[16px] lg:text-[20px] font-[500]">
              Amount due for March
            </p>
            <div className="p-3 lg:p-6 border border-gray-300 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-[25px] lg:text-[40px] font-[500] ">
                  CAD 80.493,00
                </h3>
                <p className="text-[12px] lg:text-[14px] text-gray-600">
                  Your sales cover your fees
                </p>
              </div>
              <img src="/GreenChart.svg" alt="" />
            </div>
          </div>
          <div>
            <p className="text-gray-900 text-[16px] lg:text-[20px] font-[500]">
              Available for deposit
            </p>
            <div className="p-3 lg:p-6 border border-gray-300 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-[25px] lg:text-[40px] font-[500]">
                  CAD 44.493,00
                </h3>
                <p className="text-[12px] lg:text-[14px] text-gray-600">
                  Deposit schedule weekly
                </p>
              </div>
              <img src="/purpleChart.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Activity Summary */}
        <div className=" mb-10 text-[14px] text-gray-900">
          <div className="flex items-center justify-between">
            <h4 className="text-[16px] lg:text-[20px] font-medium mb-4">
              Activity Summary
            </h4>
            {/* Dropdown */}
            <button className="text-gray-600 text-sm font-medium border border-gray-300 rounded-lg py-2 px-4 bg-white shadow-sm">
              Last Year ▾
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-3 lg:items-center bg-white p-2 py-4 lg:p-4 shadow-sm rounded-lg border border-gray-200">
            {/* Sales Section */}
            <div className="flex space-x-4 items-center justify-between lg:w-1/3  lg:px-3 lg:border-r border-gray-200">
              <button className="flex items-center py-2 px-4 border border-gray-300 rounded-full bg-white shadow-sm">
                <img src="/sales.svg" alt="Sales" className="h-5 w-5 mr-2" />
                <span className="text-gray-600 font-semibold">Sales</span>
              </button>
              <span className="font-semibold text-lg text-gray-800">
                CAD 829.00
              </span>
            </div>

            {/* Fees Section */}
            <div className="flex space-x-4 items-center justify-between lg:w-1/3  lg:px-3 lg:border-r border-gray-200">
              <button className="flex items-center py-2 px-4 border border-gray-300 rounded-full shadow-sm">
                <img src="/fees.svg" alt="Sales" className="h-5 w-5 mr-2" />

                <span className="text-gray-600 font-semibold">Fees</span>
              </button>
              <span className="font-semibold text-lg text-gray-800">
                USD 57.00
              </span>
            </div>

            {/* Deposit Section */}
            <div className="flex space-x-4 items-center justify-between lg:w-1/3  lg:px-3 ">
              <button className="flex items-center py-2 px-4 border border-gray-300 rounded-full bg-white shadow-sm">
                <img src="/deposit.svg" alt="Sales" className="h-5 w-5 mr-2" />

                <span className="text-gray-600 font-semibold">Deposit</span>
              </button>
              <span className="font-semibold text-lg text-gray-800">
                USD 323.00
              </span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="flex justify-between items-center">
            <h4 className="text-[16px] lg:text-[20px] font-[500] mb-4">
              Recent Activity
            </h4>
            <div className="flex gap-3 items-center">
              <button className="text-gray-600 text-sm font-medium border border-gray-300 rounded-lg px-2 py-2 lg:px-4 bg-white shadow-sm">
                Last Year ▾
              </button>
              <button className="text-gray-600 text-sm font-medium border border-gray-300 rounded-full p-2 bg-white shadow-sm">
                <IoIosMore />
              </button>
            </div>
          </div>
          <div className=" overflow-x-auto">
            <table className="w-full bg-white border border-gray-300 rounded-[8px]">
              <thead>
                <tr className="text-left text-gray-900 text-[16px] font-[500] border-b">
                  <th className="py-4 px-6">Order</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Customer ID</th>
                  <th className="py-4 px-6">Total</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Repeat for each row */}
                <tr className="text-sm text-[16px] text-gray-900 border-b">
                  <td className="py-4 px-6">1001</td>
                  <td className="py-4 px-6 text-gray-500">09 May 2024</td>
                  <td className="py-4 px-6 font-[500]">12121313</td>
                  <td className="py-4 px-6 font-[500]">$800,740</td>
                  <td className="py-4 px-6">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      Success
                    </span>
                  </td>
                </tr>
                <tr className="text-sm text-gray-800 border-b">
                  <td className="py-4 px-6">1002</td>
                  <td className="py-4 px-6 text-gray-500">22 Apr 2024</td>
                  <td className="py-4 px-6 font-[500]">1212131212</td>
                  <td className="py-4 px-6 font-[500]">$1,053,099</td>
                  <td className="py-4 px-6">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full">
                      Failed
                    </span>
                  </td>
                </tr>
                <tr className="text-sm text-gray-800 border-b">
                  <td className="py-4 px-6">1003</td>
                  <td className="py-4 px-6 text-gray-500">12 Feb 2024</td>
                  <td className="py-4 px-6 font-[500]">Patricia Sanders</td>
                  <td className="py-4 px-6 font-[500]">$393,730</td>
                  <td className="py-4 px-6">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      Success
                    </span>
                  </td>
                </tr>
                {/* Add more rows as necessary */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
