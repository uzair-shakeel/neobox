"use client";
import React from "react";
import Sidebar from "../../components/Sidebar";
import { RiFilterLine, RiQuestionLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import ChatButton from "../../components/ChatButton";
import { IoFilterSharp } from "react-icons/io5";

export default function Orders() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-[32px] py-[27px]">
        <div className="flex flex-col bg-white">
          <div className="flex justify-between pb-[32px]">
            <h1 className="text-[24px] leading-[36px] font-[500]">Orders</h1>
            <div className="flex items-center gap-[8px] text-[16px] tracking-[-2%] font-[400] text-[#0A0A0A]">
              <RiQuestionLine size={20} color="#0A0A0A" />
              <span>Help and Feedback</span>
            </div>
          </div>

          <div className="flex justify-between gap-[48px] pt-[8px]">
            {/* Search Bar */}
            <div className="flex flex-grow items-center bg-[#F4F4F5] rounded-[10px] ps-[12px] py-[14px]">
              <LuSearch color="#374151" size={20} className="mr-[8px]" />
              <input
                type="text"
                placeholder="Search Orders"
                className="bg-transparent outline-none w-full h-full pe-[12px] placeholder:text-[#52525B]"
              />
            </div>

            {/* Buttons Section */}
            <div className="flex items-center gap-[12px]">
              {/* Show All Orders Button */}
              <button className="flex items-center border border-[#E4E4E7] rounded-[10px] px-[16px] py-[14px] text-[16px] text-[#09090B] font-[500]">
                <IoFilterSharp size={20} className="mr-[8px]" />
                Show All Orders
              </button>

              {/* Sort Button */}
              <button className="flex items-center border border-[#E4E4E7] rounded-[10px] px-[16px] py-[14px] text-[16px] text-[#09090B] font-[500]">
                <RiFilterLine size={20} className="mr-[8px]" />
                Sort by last created
              </button>
            </div>
          </div>
        </div>

        {orders.length > 0 ? (
          <div className="overflow-x-auto py-[24px]">
            <div className="border border-[#E4E4E7] rounded-[8px] p-[8px]">
              <table className="min-w-full bg-[#FFFFFF]">
                <thead className="">
                  <tr className="bg-[#FAFAFA]">
                    <th className="px-[16px] py-[14px] text-left text-[#09090B] font-[500] text-[16px] border-b border-b-[#0A0A0A] border-opacity-[0.1]">
                      Name
                    </th>
                    <th className="px-[16px] py-[14px] text-left text-[#09090B] font-[500] text-[16px] border-b border-b-[#0A0A0A] border-opacity-[0.1]">
                      Date
                    </th>
                    <th className="px-[16px] py-[14px] text-left text-[#09090B] font-[500] text-[16px] border-b border-b-[#0A0A0A] border-opacity-[0.1]">
                      Customer
                    </th>
                    <th className="px-[16px] py-[14px] text-left text-[#09090B] font-[500] text-[16px] border-b border-b-[#0A0A0A] border-opacity-[0.1]">
                      Payment
                    </th>
                    <th className="px-[16px] py-[14px] text-left text-[#09090B] font-[500] text-[16px] border-b border-b-[#0A0A0A] border-opacity-[0.1]">
                      Delivery
                    </th>
                    <th className="px-[16px] py-[14px] text-left text-[#09090B] font-[500] text-[16px] border-b border-b-[#0A0A0A] border-opacity-[0.1]">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-[16px] py-[14px] text-[#09090B] text-[16px] font-[400] border-b border-b-[#0A0A0A] border-opacity-[0.1] text-gray-700">
                        {order.id}
                      </td>
                      <td className="px-[16px] py-[14px] text-[#09090B] text-[16px] font-[400] border-b border-b-[#0A0A0A] border-opacity-[0.1] text-gray-700">
                        {order.date}
                      </td>
                      <td className="px-[16px] py-[14px] text-[#09090B] text-[16px] font-[500] border-b border-b-[#0A0A0A] border-opacity-[0.1] text-gray-700">
                        {order.customer}
                      </td>
                      <td className="px-[16px] py-[14px] text-[#09090B] font-[500] border-b border-b-[#0A0A0A] border-opacity-[0.1]">
                        <span
                          className={`px-[12px] py-[4px] rounded-full text-[14px] ${
                            order.paymentStatus === "Paid"
                              ? "bg-[#F0FDF4] text-[#22C55E]"
                              : "bg-[#FCE8EC] text-[#EF4444]"
                          }`}
                        >
                          {order.paymentStatus}
                        </span>
                      </td>
                      <td className="px-[16px] py-[14px] text-[#09090B] border-b border-b-[#0A0A0A] border-opacity-[0.1]">
                        <span
                          className={`px-[12px] py-[4px] rounded-full text-[14px] ${
                            order.deliveryStatus === "Delivered"
                              ? "bg-[#F0FDF4] text-[#22C55E]"
                              : order.deliveryStatus === "Processing"
                              ? "bg-[#FEF9C3] text-[#CA8A04]"
                              : "bg-[#FCE8EC] text-[#EF4444]"
                          }`}
                        >
                          {order.deliveryStatus}
                        </span>
                      </td>
                      <td className="px-[16px] py-[14px] text-[#09090B] text-right text-[14px] font-[500] border-b border-b-[#0A0A0A] border-opacity-[0.1] text-gray-700">
                        {order.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-full py-[50px]">
            <span className="min-h-[200px] min-w-[200px]">
              <img src="/space-ship.svg" alt="No Orders" />
            </span>
            <h3 className="text-[24px] font-[500] leading-[36px] text-[#09090B] mt-[24px]">
              You have no orders yet
            </h3>
            <p className="text-[#3F3F46] text-[16px] font-[400] mt-[4px]">
              This is where you’ll see orders.
            </p>
          </div>
        )}
      </main>

      {/* Chat Button */}
      <ChatButton />
    </div>
  );
}

const orders = [
  {
    id: 1001,
    date: "09 May 2024",
    customer: "Iva Ryan",
    paymentStatus: "Paid",
    deliveryStatus: "Processing",
    total: "$800,740",
  },
  {
    id: 1002,
    date: "22 Apr 2024",
    customer: "Ricky Smith",
    paymentStatus: "Paid",
    deliveryStatus: "Processing",
    total: "$1,053,099",
  },
  {
    id: 1003,
    date: "12 Feb 2024",
    customer: "Patricia Sanders",
    paymentStatus: "Paid",
    deliveryStatus: "Processing",
    total: "$393,730",
  },
  {
    id: 1004,
    date: "04 Apr 2024",
    customer: "Rhonda Rhodes",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
    total: "$85,832",
  },
  {
    id: 1005,
    date: "13 Apr 2024",
    customer: "Jerry Helfer",
    paymentStatus: "Paid",
    deliveryStatus: "Processing",
    total: "$352,480",
  },
  {
    id: 1006,
    date: "18 Feb 2024",
    customer: "Eddie Lake",
    paymentStatus: "Paid",
    deliveryStatus: "Processing",
    total: "$483,971",
  },
  {
    id: 1007,
    date: "08 Apr 2024",
    customer: "Rodger Struck",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
    total: "$573,360",
  },
  {
    id: 1008,
    date: "11 Apr 2024",
    customer: "Judith Rodriguez",
    paymentStatus: "Failed",
    deliveryStatus: "Failed",
    total: "$531,703",
  },
  {
    id: 1009,
    date: "02 Mar 2024",
    customer: "Corina McCoy",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
    total: "$362,438",
  },
  {
    id: 1010,
    date: "17 Mar 2024",
    customer: "Dennis Callis",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",
    total: "$1,233,970",
  },
];
