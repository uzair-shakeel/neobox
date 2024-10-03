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
import products from "../../assets/ProductsData";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("week");
  const activeData = data[activeTab];

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:px-[32px] md:px-[24px] px-[16px] py-[27px]">
        <div className="flex gap-1 flex-wrap justify-between items-center mb-[16px]">
          <h2 className="md:text-[32px] sm:text-[28px] text-[24px] leading-[44.8px] text-[#09090B] font-[500]">
            Hello, Marc!
          </h2>
          <button className="bg-black text-white md:px-[16px] px-[11px] md:py-[13px] py-[9px] rounded-[12px] flex items-center gap-[8px] justify-center">
            <span className="min-h-[20px] min-w-[20px]">
              <CiGlobe size={20} />{" "}
            </span>
            Open Site
          </button>
        </div>

        <div className="bg-[#F7FEE7] border border-[#151515] rounded-[8px] md:px-[24px] sm:px-[12px] px-[8px] md:py-[15px] py-[9px] md:mb-[24px] mb-[16px] mt-[16px] flex justify-between items-center gap-1 flex-wrap relative">
          <div className="flex items-center">
            <span className="min-h-[22px] min-w-[22px] mr-[8px]">
              <BiBook size={22} color="#22C55E" />
            </span>
            <span className="lg:text-[18px] sm:text-[16px] text-[14px] leading-[25.2px] font-[400] text-[#3F3F46] md:pe-0 pe-5">
              Learn how to set up your store step by step.
            </span>
          </div>
          <div className="flex items-center md:gap-[24px] gap-1">
            <a
              href="#"
              className="bg-white border-[#E4E4E7] border rounded-[6px] md:ms-0 me-5 py-[5px] px-[8px] text-[14px] font-[500] leading-[21.7px] text-[#09090B] hover:underline flex items-center justify-center gap-[4px]"
            >
              Learn more <LuArrowUpRight size={16} />
            </a>
            <span className="md:flex hidden">
              <IoMdClose size={22} />
            </span>
            <span className="md:hidden flex absolute right-[8px] top-1/2 -translate-y-1/2 md:relative">
              <IoMdClose size={22} />
            </span>
          </div>
        </div>

        <h3 className="flex items-center gap-[4px] md:text-[24px] text-[18px] md:leading-[36px] text-[#09090B] font-[500] md:mb-[8px] mb-[4px]">
          Welcome to Neobox{" "}
          <span>
            <img src="/wave.png" />
          </span>
        </h3>
        <p className="md:text-[18px] text-[16px] md:leading-[25.2px] font-[400] text-[#3F3F46] md:mb-[24px] mb-[18px]">
          A quick guide to getting your first sale
        </p>

        <div className="bg-[#F5F3FF] border border-[#8B5CF6] rounded-[8px] md:p-[24px] p-[10px] md:mb-[36px] mb-[22px] flex flex-col md:gap-[24px] gap-[12px]">
          <div className="flex items-center md:gap-[24px] gap-2 w-full">
            <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F7FEE7]">
              <RiArchiveStackLine className="text-[#151515]" size={22} />
            </span>

            <div className="flex justify-between items-center flex-wrap w-full gap-1">
              <div>
                <h4 className="md:text-[20px] sm:text-[16px] text-[14px] md:leading-[28px] font-[500] mb-[4px]">
                  Stock your store
                </h4>
                <p className="md:text-[16px] md:text-[14px] text-[12px] font-[400] md:leading-[25.6px] text-[#52525B]">
                  Let's get started. Add your products & Categories.
                </p>
              </div>
              <button className="flex items-center  gap-[4px] md:text-[16px] text-[14px] font-[500] bg-white text-[#09090B] md:px-[16px] px-[10px] md:py-[11px] py-[8px] rounded-[10px] border border-[#E4E4E7]">
                Set Up{" "}
                <LuArrowUpRight className="md:w-[18px] md:h-[18px] w-[14px] h-[14px]" />
              </button>
            </div>
          </div>
          <div className="flex items-center md:gap-[24px] gap-2 w-full">
            <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#F7FEE7]">
              <RiInboxUnarchiveLine className="text-[#151515]" size={22} />
            </span>

            <div className="flex justify-between items-center flex-wrap w-full gap-1">
              <div>
                <h4 className="md:text-[20px] sm:text-[16px] text-[14px] md:leading-[28px] font-[500] mb-[4px]">
                  Set up your withdrawal methods to receive payments.
                </h4>
                <p className="md:text-[16px] md:text-[14px] text-[12px] font-[400] md:leading-[25.6px] text-[#52525B]">
                  Let's get started, tell about you and your shop
                </p>
              </div>
              <button className="flex items-center  gap-[4px] md:text-[16px] text-[14px] font-[500] bg-white text-[#09090B] md:px-[16px] px-[10px] md:py-[11px] py-[8px] rounded-[10px] border border-[#E4E4E7]">
                Set Up{" "}
                <LuArrowUpRight className="md:w-[18px] md:h-[18px] w-[14px] h-[14px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-start w-full gap-[24px]">
          <div className="lg:w-[70%]">
            <div className="flex items-start justify-between mb-[16px] flex-wrap gap-2">
              <h2 className="md:text-[20px] text-[18px] leading-[28px] font-[500]">
                Overview performance
              </h2>

              {/* Tabs */}
              <div className="flex bg-[#F4F4F5] rounded-[8px] overflow-hidden p-[2px] flex-wrap">
                {Object.keys(data).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`sm:px-[20px] px-[11.5px] py-[7px] capitalize sm:text-[14px] text-[12px] leading-[21.7px] font-[400] focus:outline-none ${
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
              <div className="sm:py-[16px] py-[12px] sm:px-[24px] px-[12px] border border-[#F4F4F5] flex items-center justify-between gap-1">
                <div className="flex flex-col sm:gap-[8px] gap-[2px]">
                  <h3 className="sm:text-[18px] text-[16px] text-[#3F3F46] sm:leading-[25.2px] font-[400]">
                    Total Views
                  </h3>
                  <p className="text-[#09090B] sm:text-[32px] text-[24px] font-[500] sm:leading-[44.8px]">
                    {activeData.totalViews}
                  </p>
                  <p className="text-[#6B7280] font-[400] sm:text-[14px] text-[12px] sm:leading-[21.7px]">
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
              <div className="sm:py-[16px] py-[12px] sm:px-[24px] px-[12px] border border-[#F4F4F5] flex items-center justify-between gap-1">
                <div className="flex flex-col sm:gap-[8px] gap-[2px]">
                  <h3 className="sm:text-[18px] text-[16px] text-[#3F3F46] sm:leading-[25.2px] font-[400]">
                    Visits
                  </h3>
                  <p className="text-[#09090B] sm:text-[32px] text-[24px] font-[500] leading-[44.8px]">
                    {activeData.visits}
                  </p>
                  <p className="text-[#6B7280] font-[400] sm:text-[14px] text-[12px] sm:leading-[21.7px]">
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
              <div className="sm:py-[16px] py-[12px] sm:px-[24px] px-[12px] border border-[#F4F4F5] flex items-center justify-between gap-1">
                <div className="flex flex-col sm:gap-[8px] gap-[2px]">
                  <h3 className="sm:text-[18px] text-[16px] text-[#3F3F46] sm:leading-[25.2px] font-[400]">
                    Orders
                  </h3>
                  <p className="text-[#09090B] sm:text-[32px] text-[24px] font-[500] sm:leading-[44.8px]">
                    {activeData.orders}
                  </p>
                  <p className="text-[#6B7280] font-[400] sm:text-[14px] text-[12px] sm:leading-[21.7px]">
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
              <div className="sm:py-[16px] py-[12px] sm:px-[24px] px-[12px] border border-[#F4F4F5] flex items-center justify-between gap-1">
                <div className="flex flex-col sm:gap-[8px] gap-[2px]">
                  <h3 className="sm:text-[18px] text-[16px] text-[#3F3F46] sm:leading-[25.2px] font-[400]">
                    Conversion Rate
                  </h3>
                  <p className="text-[#09090B] sm:text-[32px] text-[24px] font-[500] sm:leading-[44.8px]">
                    {activeData.conversionRate}
                  </p>
                  <p className="text-[#6B7280] font-[400] sm:text-[14px] text-[12px] sm:leading-[21.7px]">
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

          <div className="lg:w-[30%] w-full">
            {/* Products Section */}
            <div className="">
              <div className="flex items-center justify-between md:mb-[16px] mb-[10px]">
                <h3 className="md:text-[20px] text-[18px] text-[#09090B] font-[500] leading-[28px]">
                  Products
                </h3>
                <a
                  href="#"
                  className="px-[8px] py-[5px] text-[#0A0A0A] md:text-[14px] text-[12px] leading-[21.7px] font-[500] flex items-center justify-center gap-[4px]"
                >
                  See All{" "}
                  <IoArrowForwardOutline className="md:w-[15px] md:h-[15px] h-[13px] w-[13px]" />
                </a>
              </div>
              <div
                className="md:px-[20px] px-[12px] py-[16px] border border-[#E4E4E7] rounded-[8px] flex flex-col gap-[16px] "
                style={{ boxShadow: "0px 1px 2px 0px #1018280F" }}
              >
                <div className="flex justify-between items-center text-[#09090B]">
                  <span className="font-[400] md:text-[18px] text-[16px] md:leading-[25.2px]">
                    Active listings
                  </span>
                  <span className="md:text-[24px] text-[20px] md:leading-[36px] font-[500]">
                    6
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#09090B]">
                  <span className="font-[400] md:text-[18px] text-[16px] md:leading-[25.2px]">
                    Hidden listings
                  </span>
                  <span className="md:text-[24px] text-[20px] md:leading-[36px] font-[500]">
                    12
                  </span>
                </div>
                <div className="flex justify-between items-center text-[#09090B]">
                  <span className="font-[400] md:text-[18px] text-[16px] md:leading-[25.2px]">
                    Sold out
                  </span>
                  <span className="md:text-[24px] text-[20px] md:leading-[36px] font-[500]">
                    5
                  </span>
                </div>
              </div>
            </div>

            {/* Top Products Placeholder */}
            <div className="md:mt-[24px] mt-[30px]">
              <h3 className="text-[20px] text-[#09090B] font-[500] leading-[28px] md:mb-[16px] mb-[10px]">
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
