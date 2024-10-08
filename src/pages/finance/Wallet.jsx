import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

const Wallet = () => {
  // Dropdown states for both buttons
  const [isPeriodDropdownOpen, setIsPeriodDropdownOpen] = useState(false);
  const [isPeriodDropdown2Open, setIsPeriodDropdown2Open] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Last Year");
  const [selectedPeriod2, setSelectedPeriod2] = useState("Last Year");

  const togglePeriodDropdown = () =>
    setIsPeriodDropdownOpen(!isPeriodDropdownOpen);

  const togglePeriodDropdown2 = () =>
    setIsPeriodDropdown2Open(!isPeriodDropdown2Open);


  const handleSelectPeriod = (period) => {
    setSelectedPeriod(period);
    setIsPeriodDropdownOpen(false);
  };

  const handleSelectPeriod2 = (period) => {
    setSelectedPeriod2(period);
    setIsPeriodDropdown2Open(false);
  };


  return (
    <div className="min-h-screen flex bg-white">
      <Sidebar />

      <div className="w-[30%] flex-grow py-6 p-3 lg:p-8">
        <div className="flex justify-between w-full items-center mb-8">
          <h2 className="text-[18px] lg:text-[24px] font-semibold">Wallet</h2>
          <button className="bg-black text-white p-[10px] lg:p-[16px] rounded-md flex gap-2 items-center text-sm">
            <img src="/dollar.svg" alt="" />
            Download Report
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {/* Amount Due Section */}
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
        <div className="mb-10 text-[14px] text-gray-900">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-[16px] lg:text-[20px] font-medium">
              Activity Summary
            </h4>

            {/* Dropdown 1: Period */}
            <div className="relative">
              <button
                onClick={togglePeriodDropdown}
                className="text-gray-600 text-sm font-medium border border-gray-300 rounded-lg py-2 px-4 bg-white shadow-sm"
              >
                {selectedPeriod} ▾
              </button>

              {isPeriodDropdownOpen && (
                <div className="absolute mt-2 py-2 w-full bg-white rounded-lg shadow-lg border border-gray-300">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleSelectPeriod("Last Month")}
                  >
                    Last Month
                  </button>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleSelectPeriod("Last Year")}
                  >
                    Last Year
                  </button>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleSelectPeriod("All Time")}
                  >
                    All Time
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white p-2 py-4 lg:p-4 shadow-sm rounded-lg border border-gray-200">
            <div className="flex space-x-4 items-center pr-3 justify-between lg:border-r border-gray-200 relative">
              <button className="flex items-center gap-2 justify-start pl-1 pr-2 py-1 max-w-[114px] border border-gray-300 rounded-full bg-white shadow-sm w-full">
                <div className="w-8 h-8 bg-[#F5F3FF] rounded-full flex justify-center items-center">
                  <img src="/sales.svg" alt="sales" className="h-5 w-5" />
                </div>
                <span className="text-gray-600 font-semibold">Sales</span>
              </button>

              <span className="font-semibold text-lg text-gray-800">
                CAD 829.00
              </span>
            </div>

            <div className="flex space-x-4 items-center pr-3 justify-between lg:border-r border-gray-200 relative">
              <button className="flex items-center gap-2 justify-start pl-1 pr-2 py-1 max-w-[114px] border border-gray-300 rounded-full bg-white shadow-sm w-full">
                <div className="w-8 h-8 bg-[#F7FEE7] rounded-full flex justify-center items-center">
                  <img src="/fees.svg" alt="Fees" className="h-5 w-5" />
                </div>
                <span className="text-gray-600 font-semibold">Fees</span>
              </button>

              <span className="font-semibold text-lg text-gray-800">
                USD 57.00
              </span>
            </div>

            <div className="flex space-x-4 items-center pr-3 justify-between">
              <button className="flex items-center gap-2 justify-start pl-1 pr-2 py-1 max-w-[114px] border border-gray-300 rounded-full bg-white shadow-sm w-full">
                <div className="w-8 h-8 bg-[#F5F3FF] rounded-full flex justify-center items-center">
                  <img src="/deposit.svg" alt="Deposit" className="h-5 w-5" />
                </div>
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
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-[16px] lg:text-[20px] font-[500]">
              Recent Activity
            </h4>
            <div className="flex gap-3 items-center">
              <div className="relative">
                <button
                  onClick={togglePeriodDropdown2}
                  className="text-gray-600 text-sm font-medium border border-gray-300 rounded-lg py-2 px-4 bg-white shadow-sm"
                >
                  {selectedPeriod2} ▾
                </button>

                {isPeriodDropdown2Open && (
                  <div className="absolute mt-2 py-2 w-full bg-white rounded-lg shadow-lg border border-gray-300">
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => handleSelectPeriod2("Last Month")}
                    >
                      Last Month
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => handleSelectPeriod2("Last Year")}
                    >
                      Last Year
                    </button>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => handleSelectPeriod2("All Time")}
                    >
                      All Time
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
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
                  <td className="py-4 px-6 text-gray-500">07 May 2024</td>
                  <td className="py-4 px-6 font-[500]">1212</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
