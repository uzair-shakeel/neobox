import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { RiFilterLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { PiDotsThree } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import DeleteCollectionModal from "../../components/catalog/deleteCollectionModal";

export default function Collections() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const collections = [
    { id: 1, name: "On Sale", slug: "on-sale", items: 4 },
    { id: 2, name: "Best Seller", slug: "best-seller", items: 9 },
    { id: 3, name: "Flash Sale", slug: "flash-sale", items: 10 },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    // Implement your delete logic here
    console.log("Deleted");
    handleCloseModal();
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:px-[32px] md:px-[24px] px-[16px] py-[27px]">
        <div className="flex flex-col bg-white">
          <div className="flex items-center justify-between lg:pb-[32px] md:pb-[24px] pb-[16px] flex-wrap gap-[6px]">
            <h1 className="md:text-[24px] text-[20px] leading-[36px] font-[500]">
              Collections
            </h1>
            <NavLink to="/add-category">
              <button className="flex items-center gap-[8px] rounded-[10px] md:text-[16px] text-[14px] tracking-[-2%] font-[400] bg-black text-white md:p-[16px] p-[9px]">
                <AiOutlinePlus stroke="0.1px" size={18} />
                <span>Add Collections</span>
              </button>
            </NavLink>
          </div>

          <div className="flex justify-between flex-wrap xl:gap-[48px] md:gap-[24px] gap-[16px] pt-[8px]">
            {/* Search Bar */}
            <div className="flex flex-grow items-center bg-[#F4F4F5] rounded-[10px] ps-[12px] md:py-[14px] py-[10px]">
              <LuSearch color="#374151" size={20} className="mr-[8px]" />
              <input
                type="text"
                placeholder="Search Inventory"
                className="bg-transparent outline-none w-full h-full pe-[12px] placeholder:text-[#52525B]"
              />
            </div>

            {/* Buttons Section */}
            <div className="flex items-center flex-wrap gap-[12px]">
              {/* Show All Orders Button */}
              <button className="flex items-center border border-[#E4E4E7] rounded-[10px] sm:px-[16px] px-[12px] sm:py-[14px] py-[12px] sm:text-[16px] text-[14px] text-[#09090B] font-[500]">
                <span className="min-h-[20px] min-w-[20px]">
                  <IoFilterSharp size={20} className="mr-[8px]" />
                </span>
                Show all collections
              </button>

              {/* Sort Button */}
              <button className="flex items-center border border-[#E4E4E7] rounded-[10px] sm:px-[16px] px-[12px] sm:py-[14px] py-[12px] sm:text-[16px] text-[14px] text-[#09090B] font-[500]">
                <span className="min-h-[20px] min-w-[20px]">
                  <RiFilterLine size={20} className="mr-[8px]" />
                </span>
                Sort by last updated
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto md:py-[24px] py-[20px]">
          <div className="border border-[#E4E4E7] rounded-[8px] p-[8px]">
            <table className="min-w-full bg-[#FFFFFF]">
              <thead className="bg-[#FAFAFA] text-left">
                <tr>
                  <th className="ps-[16px] py-[18px]">
                    <input
                      type="checkbox"
                      className="cursor-pointer rounded-[6px] custom-checkbox focus:ring-indigo-500"
                    />
                  </th>
                  <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] tracking-[-1%]">
                    Collections
                  </th>
                  <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] tracking-[-1%]">
                    Slug
                  </th>
                  <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] tracking-[-1%]">
                    Items
                  </th>
                  <th className="px-[16px] py-[14px]"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {collections.map((collection) => (
                  <tr key={collection.id} className="hover:bg-gray-50">
                    <td className="ps-[16px] py-[18px]">
                      <input
                        type="checkbox"
                        className="cursor-pointer rounded-[6px] custom-checkbox focus:ring-indigo-500"
                      />
                    </td>
                    <td className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[16px] text-[14px]">
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
                        <button
                          className="md:w-[48px] md:h-[48px] md:min-h-[48px] md:min-w-[48px] w-[30px] h-[30px] min-h-[30px] min-w-[30px] flex items-center justify-center border border-[#E4E4E7] rounded-full text-[#09090B]"
                          onClick={handleOpenModal}
                        >
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

      {/* Delete Modal */}
      <DeleteCollectionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDelete}
      />
    </div>
  );
}
