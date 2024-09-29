"use client";
import React from "react";
import Sidebar from "../../components/Sidebar";
import { RiFilterLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import ChatButton from "../../components/ChatButton";
import { IoFilterSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { PiDotsThree } from "react-icons/pi";

export default function Collections() {
  const collections = [
    { id: 1, name: "On Sale", slug: "on-sale", items: 4 },
    { id: 2, name: "Best Seller", slug: "best-seller", items: 9 },
    { id: 3, name: "Flash Sale", slug: "flash-sale", items: 10 },
  ];
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-[32px] py-[27px]">
        <div className="flex flex-col bg-white">
          <div className="flex items-center justify-between pb-[32px]">
            <h1 className="text-[24px] leading-[36px] font-[500]">
              Collections
            </h1>
            <button className="flex items-center gap-[8px] rounded-[10px] text-[16px] tracking-[-2%] font-[400] bg-black text-white p-[16px]">
              <AiOutlinePlus stroke="0.1px" size={18} />
              <span>Add Collections</span>
            </button>
          </div>

          <div className="flex justify-between gap-[48px] pt-[8px]">
            {/* Search Bar */}
            <div className="flex flex-grow items-center bg-[#F4F4F5] rounded-[10px] ps-[12px] py-[14px]">
              <LuSearch color="#374151" size={20} className="mr-[8px]" />
              <input
                type="text"
                placeholder="Search Inventory"
                className="bg-transparent outline-none w-full h-full pe-[12px] placeholder:text-[#52525B]"
              />
            </div>

            {/* Buttons Section */}
            <div className="flex items-center gap-[12px]">
              {/* Show All Orders Button */}
              <button className="flex items-center border border-[#E4E4E7] rounded-[10px] px-[16px] py-[14px] text-[16px] text-[#09090B] font-[500]">
                <IoFilterSharp size={20} className="mr-[8px]" />
                Show all collections
              </button>

              {/* Sort Button */}
              <button className="flex items-center border border-[#E4E4E7] rounded-[10px] px-[16px] py-[14px] text-[16px] text-[#09090B] font-[500]">
                <RiFilterLine size={20} className="mr-[8px]" />
                Sort by last updated
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto py-[24px]">
          <div className="border border-[#E4E4E7] rounded-[8px] p-[8px]">
            <table className="min-w-full bg-[#FFFFFF]">
              <thead className="bg-[#FAFAFA] text-left">
                <tr>
                  <th className="px-[16px] py-[18px]">
                    <input
                      type="checkbox"
                      className="w-[20px] h-[20px] rounded-[6px] border border-gray-300 checked:bg-indigo-600 focus:ring-indigo-500"
                    />
                  </th>
                  <th className="px-[16px] py-[14px] text-[#09090B] font-[500] text-[18px] tracking-[-1%]">
                    Collections
                  </th>
                  <th className="px-[16px] py-[14px] text-[#09090B] font-[500] text-[18px] tracking-[-1%]">
                    Slug
                  </th>
                  <th className="px-[16px] py-[14px] text-[#09090B] font-[500] text-[18px] tracking-[-1%]">
                    Items
                  </th>
                  <th className="px-[16px] py-[14px]"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {collections.map((collection) => (
                  <tr key={collection.id} className="hover:bg-gray-50">
                    <td className="px-[16px] py-[18px]">
                      <input
                        type="checkbox"
                        className="w-[20px] h-[20px] rounded-[6px] border border-gray-300 checked:bg-indigo-600 focus:ring-indigo-500"
                      />
                    </td>
                    <td className="px-[16px] py-[14px] text-[#09090B] font-[500] text-[16px]">
                      {collection.name}
                    </td>
                    <td className="px-[16px] py-[14px]  text-[#09090B] font-[400] text-[14px]">
                      {collection.slug}
                    </td>
                    <td className="px-[16px] py-[14px]  text-[#09090B] font-[400] text-[14px]">
                      {collection.items}
                    </td>
                    <td className="px-[16px] py-[14px] text-[#09090B] font-[400] text-[14px]">
                      <div className="flex justify-end">
                        <button className="w-[48px] h-[48px] min-h-[48px] min-w-[48px] flex items-center justify-center border border-[#E4E4E7] rounded-full text-[#09090B]">
                          <PiDotsThree size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <ChatButton />
    </div>
  );
}
