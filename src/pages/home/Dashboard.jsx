"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { BiBook } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { LuArrowUpRight } from "react-icons/lu";
import { RiArchiveStackLine, RiInboxUnarchiveLine } from "react-icons/ri";
import { IoArrowForwardOutline } from "react-icons/io5";
import Revenue from "../../components/Revenue";
import ChatButton from "../../components/ChatButton";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("week");
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

        <div className="flex lg:flex-row flex-col items-start w-full gap-[24px]">
          <div className="lg:w-[70%]">
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
            <div
              className="grid grid-cols-1 md:grid-cols-2 rounded-[8px] overflow-hidden border border-[#F4F4F5]"
              style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
            >
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

            <Revenue />
          </div>

          <div className="lg:w-[30%]">
            {/* Products Section */}
            <div className="">
              <div className="flex items-center justify-between mb-[16px]">
                <h3 className="text-[20px] text-[#09090B] font-[500] leading-[28px]">
                  Products
                </h3>
                <a
                  href="#"
                  className="px-[8px] py-[5px] text-[#0A0A0A] text-[14px] leading-[21.7px] font-[500] flex items-center justify-center gap-[4px]"
                >
                  See All <IoArrowForwardOutline size={15} />
                </a>
              </div>
              <div
                className="px-[20px] py-[16px] border border-[#E4E4E7] rounded-[8px] flex flex-col gap-[16px]"
                style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
              >
                <div className="flex justify-between items-center text-[#09090B]">
                  <span className="font-[400] text-[18px] leading-[25.2px]">
                    Active listings
                  </span>
                  <span className="text-[24px] leading-[36px] font-[500]">
                    6
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#09090B]">
                  <span className="font-[400] text-[18px] leading-[25.2px]">
                    Hidden listings
                  </span>
                  <span className="text-[24px] leading-[36px] font-[500]">
                    12
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#09090B]">
                  <span className="font-[400] text-[18px] leading-[25.2px]">
                    Sold out
                  </span>
                  <span className="text-[24px] leading-[36px] font-[500]">
                    5
                  </span>
                </div>
              </div>
            </div>

            {/* Top Products Placeholder */}
            <div className="mt-[24px]">
              <h3 className="text-[20px] text-[#09090B] font-[500] leading-[28px] mb-[16px]">
                Products
              </h3>

              {products.length > 0 ? (
                <div
                  className="px-[24px] py-[16px] border border-[#E4E4E7] rounded-[8px] flex flex-col items-center justify-center gap-[8px]"
                  style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
                >
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-[16px] items-center py-[8px] border-b border-[#F4F4F5] w-full"
                    >
                      <div
                        className="rounded-full w-[40px] h-[40px] bg-white border border-[#E4E4E7] flex items-center justify-center"
                        style={{ boxShadow: "0px 1px 1px 0px #0D0D120D" }}
                      >
                        <img
                          src={product.imageSrc}
                          className="w-[40px] h-[40px]"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <h4 className="font-[500] text-[#0A0A0A] text-[14px] leading-[21.7px]">
                          {product.name}
                        </h4>
                        <p className="text-[#71717A] text-[12px] font-[400] leading-[18.6px]">
                          Quantity: {product.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="px-[24px] py-[60px] border border-[#E4E4E7] rounded-[8px] flex flex-col items-center justify-center gap-[8px]"
                  style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
                >
                  <span className="min-h-[56px] min-w-[56px] mx-auto">
                    <img
                      src="/no-product-icon.svg"
                      className="h-[56px] w-[56px]"
                    />
                  </span>
                  <p className="text-[#3F3F46] text-center text-[16px] font-[400] leading-[25.6px]">
                    No data available
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <ChatButton />
    </div>
  );
}

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

const products = [
  {
    id: 1,
    name: "Nestle fiteness",
    quantity: 14434,
    imageSrc: "/product-img-1.png",
  },
  {
    id: 2,
    name: "Flirt Drink Straberyy",
    quantity: 12,
    imageSrc: "/product-img-2.png",
  },
  {
    id: 3,
    name: "BBQ Sauces",
    quantity: 15,
    imageSrc: "/product-img-3.png",
  },
  {
    id: 4,
    name: "Nestle fitness",
    quantity: 20,
    imageSrc: "/product-img-1.png",
  },
];
