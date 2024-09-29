"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { BiBell, BiBook, BiChevronDown } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { LuArrowUpRight } from "react-icons/lu";
import { RiArchiveStackLine, RiInboxUnarchiveLine } from "react-icons/ri";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("week");

  const data = {
    day: {
      totalViews: 100,
      visits: 80,
      orders: 10,
      conversionRate: "12%",
      totalViewsDiff: "432",
      visitsDiff: "345",
      ordersDiff: "345",
      conversionRateDiff: "0.6%",
      totalViewsDiffColor: "green",
      visitsDiffColor: "green",
      ordersDiffColor: "green",
      conversionRateDiffColor: "red",
    },
    week: {
      totalViews: 732,
      visits: 600,
      orders: 124,
      conversionRate: "17%",
      totalViewsDiff: "372",
      visitsDiff: "465",
      ordersDiff: "115",
      conversionRateDiff: "0.3%",
      totalViewsDiffColor: "green",
      visitsDiffColor: "green",
      ordersDiffColor: "green",
      conversionRateDiffColor: "red",
    },
    month: {
      totalViews: 3000,
      visits: 2400,
      orders: 500,
      conversionRate: "20%",
      totalViewsDiff: "572",
      visitsDiff: "565",
      ordersDiff: "115",
      conversionRateDiff: "0.3%",
      totalViewsDiffColor: "green",
      visitsDiffColor: "green",
      ordersDiffColor: "red",
      conversionRateDiffColor: "green",
    },
    year: {
      totalViews: 40000,
      visits: 32000,
      orders: 6000,
      conversionRate: "22%",
      totalViewsDiff: "432",
      visitsDiff: "515",
      ordersDiff: "315",
      conversionRateDiff: "0.7%",
      totalViewsDiffColor: "green",
      visitsDiffColor: "red",
      ordersDiffColor: "green",
      conversionRateDiffColor: "green",
    },
  };

  const activeData = data[activeTab];

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-[32px] py-[27px]">
        <div className="flex justify-between items-center mb-[16px]">
          <h2 className="text-[32px] leading-[44.8px] text-[#09090B] font-[500]">
            Hello, Marc!
          </h2>
          <button className="bg-black text-white px-[16px] py-[13px] rounded-[12px] flex items-center gap-[8px] justify-center">
            <span className="min-h-[20px] min-w-[20px]">
              <CiGlobe size={20} />{" "}
            </span>
            Open Site
          </button>
        </div>

        <div className="bg-[#F7FEE7] border border-[#151515] rounded-[8px] px-[24px] py-[15px] mb-[24px] mt-[16px] flex justify-between items-center">
          <div className="flex items-center">
            <BiBook size={22} color="#22C55E" className="mr-[8px]" />
            <span className="text-[18px] leading-[25.2px] font-[400] text-[#3F3F46]">
              Learn how to set up your store step by step.
            </span>
          </div>
          <div className="flex items-center gap-[24px]">
            <a
              href="#"
              className="bg-white border-[#E4E4E7] border rounded-[6px] py-[5px] px-[8px] text-[14px] font-[500] leading-[21.7px] text-[#09090B] hover:underline flex items-center justify-center gap-[4px]"
            >
              Learn more <LuArrowUpRight size={16} />
            </a>
            <span>
              <IoMdClose size={22} />
            </span>
          </div>
        </div>

        <h3 className="flex items-center gap-[4px] text-[24px] leading-[36px] text-[#09090B] font-[500] mb-[8px]">
          Welcome to Neobox{" "}
          <span>
            <img src="/wave.png" />
          </span>
        </h3>
        <p className="text-[18px] leading-[25.2px] font-[400] text-[#3F3F46] mb-[24px]">
          A quick guide to getting your first sale
        </p>

        <div className="bg-[#F5F3FF] border border-[#8B5CF6] rounded-[8px] p-[24px] mb-[36px] flex flex-col gap-[24px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[24px]">
              <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F7FEE7]">
                <RiArchiveStackLine className="text-[#151515]" size={22} />
              </span>
              <div>
                <h4 className="text-[20px] leading-[28px] font-[500] mb-[4px]">
                  Stock your store
                </h4>
                <p className="text-[16px] font-[400] leading-[25.6px] text-[#52525B]">
                  Let's get started. Add your products & Categories.
                </p>
              </div>
            </div>
            <button className="flex items-center gap-[4px] text-[16px] font-[500] bg-white text-[#09090B] px-[16px] py-[11px] rounded-[10px] border border-[#E4E4E7]">
              Set Up <LuArrowUpRight size={18} />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[24px]">
              <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F7FEE7]">
                <RiInboxUnarchiveLine className="text-[#151515]" size={22} />
              </span>
              <div>
                <h4 className="text-[20px] leading-[28px] font-[500] mb-[4px]">
                  Set up your withdrawal methods to receive payments.
                </h4>
                <p className="text-[16px] font-[400] leading-[25.6px] text-[#52525B]">
                  Let's get started, tell about you and your shop
                </p>
              </div>
            </div>
            <button className="flex items-center gap-[4px] text-[16px] font-[500] bg-white text-[#09090B] px-[16px] py-[11px] rounded-[10px] border border-[#E4E4E7]">
              Set Up <LuArrowUpRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-start w-full gap-[24px]">
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-[16px]">
              <h2 className="text-[20px] leading-[28px] font-[500]">
                Overview performance
              </h2>

              {/* Tabs */}
              <div className="flex bg-[#F4F4F5] rounded-[8px] overflow-hidden p-[2px]">
                {Object.keys(data).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-[20px] py-[7px] capitalize text-[14px] leading-[21.7px] font-[400] focus:outline-none ${
                      activeTab === tab
                        ? "bg-[#FFFFFF] text-[#09090B] font-[500] rounded-[6px] shadow-sm"
                        : "bg-[#F4F4F5] text-[#52525B]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Performance Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="py-[16px] px-[24px] border border-[#F4F4F5] flex items-center justify-between gap-1">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] text-[#3F3F46] leading-[25.2px] font-[400]">
                    Total Views
                  </h3>
                  <p className="text-[#09090B] text-[32px] font-[500] leading-[44.8px]">
                    {activeData.totalViews}
                  </p>
                  <p className="text-[#6B7280] font-[400] text-[14px] leading-[21.7px]">
                    From last {activeData.totalViews} (last 7 days)
                  </p>
                </div>
                <span
                  className={`py-[4px] px-[12px] h-fit w-fit ${
                    activeData.totalViewsDiffColor === "green"
                      ? "text-[#22C55E] bg-[#F0FDF4]"
                      : "text-[#EF4444] bg-[#FCE8EC]"
                  } text-[14px] leading-[21.7px] font-[500] rounded-[16px]`}
                >
                  {activeData.totalViewsDiff}
                </span>
              </div>
              <div className="py-[16px] px-[24px] border border-[#F4F4F5] flex items-center justify-between gap-1">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] text-[#3F3F46] leading-[25.2px] font-[400]">
                    Visits
                  </h3>
                  <p className="text-[#09090B] text-[32px] font-[500] leading-[44.8px]">
                    {activeData.visits}
                  </p>
                  <p className="text-[#6B7280] font-[400] text-[14px] leading-[21.7px]">
                    From last {activeData.totalViews} (last 7 days)
                  </p>
                </div>
                <span
                  className={`py-[4px] px-[12px] h-fit w-fit ${
                    activeData.visitsDiffColor === "green"
                      ? "text-[#22C55E] bg-[#F0FDF4]"
                      : "text-[#EF4444] bg-[#FCE8EC]"
                  } text-[14px] leading-[21.7px] font-[500] rounded-[16px]`}
                >
                  {activeData.totalViewsDiff}
                </span>
              </div>
              <div className="py-[16px] px-[24px] border border-[#F4F4F5] flex items-center justify-between gap-1">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] text-[#3F3F46] leading-[25.2px] font-[400]">
                    Orders
                  </h3>
                  <p className="text-[#09090B] text-[32px] font-[500] leading-[44.8px]">
                    {activeData.orders}
                  </p>
                  <p className="text-[#6B7280] font-[400] text-[14px] leading-[21.7px]">
                    From last {activeData.totalViews} (last 7 days)
                  </p>
                </div>
                <span
                  className={`py-[4px] px-[12px] h-fit w-fit ${
                    activeData.ordersDiffColor === "green"
                      ? "text-[#22C55E] bg-[#F0FDF4]"
                      : "text-[#EF4444] bg-[#FCE8EC]"
                  } text-[14px] leading-[21.7px] font-[500] rounded-[16px]`}
                >
                  {activeData.ordersDiff}
                </span>
              </div>
              <div className="py-[16px] px-[24px] border border-[#F4F4F5] flex items-center justify-between gap-1">
                <div className="flex flex-col gap-[8px]">
                  <h3 className="text-[18px] text-[#3F3F46] leading-[25.2px] font-[400]">
                    Conversion Rate
                  </h3>
                  <p className="text-[#09090B] text-[32px] font-[500] leading-[44.8px]">
                    {activeData.conversionRate}
                  </p>
                  <p className="text-[#6B7280] font-[400] text-[14px] leading-[21.7px]">
                    From last {activeData.totalViews} (last 7 days)
                  </p>
                </div>
                <span
                  className={`py-[4px] px-[12px] h-fit w-fit ${
                    activeData.conversionRateDiffColor === "green"
                      ? "text-[#22C55E] bg-[#F0FDF4]"
                      : "text-[#EF4444] bg-[#FCE8EC]"
                  } text-[14px] leading-[21.7px] font-[500] rounded-[16px]`}
                >
                  {activeData.conversionRateDiff}
                </span>
              </div>
            </div>
          </div>

          <div>
            {/* Products Section */}
            <div className="w-[352px]">
              <h3 className="text-lg font-semibold">Products</h3>
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span>Active listings</span>
                  <span className="text-2xl font-medium">6</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Hidden listings</span>
                  <span className="text-2xl font-medium">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sold out</span>
                  <span className="text-2xl font-medium">5</span>
                </div>
              </div>
            </div>

            {/* Top Products Placeholder */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Top products</h3>
              <div className="p-4 border rounded-lg">
                <p className="text-gray-400">No data available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Revenue</h3>
          <div className="flex items-center">
            <span className="mr-2">Last Year</span>
            <BiChevronDown size={16} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-sm mb-6">
          <h4 className="text-gray-500 mb-2">Total Revenue</h4>
          <p className="text-3xl font-bold">$0</p>
        </div>
      </main>

      {/* Chat Button */}
      <button className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg">
        <BiBell size={24} />
      </button>
    </div>
  );
}
