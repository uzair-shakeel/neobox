import React from "react";
import Sidebar from "../../components/Sidebar";

const Wallet = () => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar Component (Assumed already implemented) */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[24px] font-semibold">Wallet</h2>
          <button className="bg-black text-white p-[16px] rounded-md flex gap-2 items-center text-sm">
            <img src="/dollar.svg" alt="" />
            Download Report
          </button>
        </div>

        {/* Amount Due Section */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div>
            <p className="text-gray-900 text-[20px] font-[500]">
              Amount due for March
            </p>
            <div className="p-6 border border-gray-300 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-[40px] font-[500] ">CAD 80.493,00</h3>
                <p className="text-[14px] text-gray-600">
                  Your sales cover your fees
                </p>
              </div>
              <img src="/GreenChart.svg" alt="" />
            </div>
          </div>
          <div>
            <p className="text-gray-900 text-[20px] font-[500]">
              Available for deposit
            </p>
            <div className="p-6 border border-gray-300 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-[40px] font-[500]">CAD 44.493,00</h3>
                <p className="text-[14px] text-gray-600">
                  Deposit schedule weekly
                </p>
              </div>
              <img src="/purpleChart.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Activity Summary */}
        <div className="mb-10">
          <h4 className="text-[20px] font-[500] mb-4">Activity Summary</h4>
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              <button className="flex items-center py-2 px-4 bg-gray-100 rounded-lg">
                <span className="material-icons mr-2">sell</span>
                Sales
              </button>
              <span className="font-semibold">CAD 829.00</span>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center py-2 px-4 bg-gray-100 rounded-lg">
                <span className="material-icons mr-2">money_off</span>
                Fees
              </button>
              <span className="font-semibold">USD 57.00</span>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center py-2 px-4 bg-gray-100 rounded-lg">
                <span className="material-icons mr-2">
                  account_balance_wallet
                </span>
                Deposit
              </button>
              <span className="font-semibold">USD 323.00</span>
            </div>
            <button className="text-gray-500">Last Year ▾</button>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h4 className="text-[20px] font-[500] mb-4">Recent Activity</h4>
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
