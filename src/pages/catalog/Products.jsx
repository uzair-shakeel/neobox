"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { RiFilterLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import ChatButton from "../../components/ChatButton";
import { IoFilterSharp } from "react-icons/io5";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  IoIosArrowDown,
  IoIosCheckmarkCircleOutline,
  IoMdClose,
} from "react-icons/io";
import { Link } from "react-router-dom";
import products from "../../assets/ProductsData";
import { AiOutlinePlus } from "react-icons/ai";

export default function Products() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [note, setNote] = useState(true);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / rowsPerPage);

  // Slice orders based on pagination
  const currentproducts = products.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRowsChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to the first page
  };
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:px-[32px] md:px-[24px] px-[16px] py-[27px]">
        <div className="flex flex-col bg-white">
          <div className="flex flex-wrap gap-[6px] items-center justify-between pt-[5px] lg:pb-[32px] md:pb-[24px] pb-[16px]">
            <h1 className="md:text-[24px] text-[20px] leading-[36px] font-[500]">
              Products
            </h1>
            <Link to="/add-product">
              <button className="flex items-center gap-[8px] rounded-[10px] md:text-[16px] text-[14px] tracking-[-2%] font-[400] bg-black text-white md:p-[16px] p-[9px]">
                <AiOutlinePlus stroke="0.1px" size={18} />
                <span>Add Product</span>
              </button>
            </Link>
          </div>

          <div className="flex justify-between flex-wrap xl:gap-[48px] md:gap-[24px] gap-[16px] pt-[8px]">
            {/* Search Bar */}
            <div className="flex flex-grow items-center bg-[#F4F4F5] rounded-[10px] ps-[12px] md:py-[14px] py-[10px]">
              <LuSearch color="#374151" size={20} className="mr-[8px]" />
              <input
                type="text"
                placeholder="Search products"
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
                Show All Products
              </button>

              {/* Sort Button */}
              <button className="flex items-center border border-[#E4E4E7] rounded-[10px] sm:px-[16px] px-[12px] sm:py-[14px] py-[12px] sm:text-[16px] text-[14px] text-[#09090B] font-[500]">
                <span className="min-h-[20px] min-w-[20px]">
                  <RiFilterLine size={20} className="mr-[8px]" />
                </span>
                Sort by name A-Z
              </button>
            </div>
          </div>
        </div>

        <div
          className={` ${
            note ? "flex" : "hidden"
          }  justify-between items-center py-[8px] px-[10px] gap-1 md:mt-[24px] mt-[16px] border border-[#E4E4E7] rounded-[8px] md:mb-[10px]`}
        >
          <div className="flex items-center gap-[8px]">
            <span className="min-h-[20px] min-h-[20px]">
              <IoIosCheckmarkCircleOutline color="#22C55E" size={20} />
            </span>
            <p className="text-[#09090B] font-[500] md:text-[16px] sm:text-[14px] text-[12px]">
              Product added successfully. It will be approved by the Neobox team
              within 2 days
            </p>
          </div>
          <button
            onClick={() => setNote(false)}
            className="min-h-[24px] min-w-[24px] cursor-pointer"
          >
            <IoMdClose className="md:w-[24px] md:h-[24px] h-[20px] w-[20px]" />
          </button>
        </div>

        {products.length > 0 ? (
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
                    <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] sm:text-[16px] text-[14px] tracking-[-1%]">
                      Product
                    </th>
                    <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] sm:text-[16px] text-[14px] tracking-[-1%]">
                      Status
                    </th>
                    <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] sm:text-[16px] text-[14px] tracking-[-1%]">
                      Price
                    </th>
                    <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] sm:text-[16px] text-[14px] tracking-[-1%]">
                      Inventory
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {currentproducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="ps-[16px] py-[18px]">
                        <input
                          type="checkbox"
                          className="custom-checkbox cursor-pointer rounded-[6px]  focus:ring-indigo-500"
                        />
                      </td>
                      <td className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[16px] text-[14px]">
                        <div className="flex items-center md:gap-[16px] gap-[6px]">
                          <div className="md:w-[64px] md:h-[64px] md:min-w-[64px] md:min-h-[64px] w-[45px] h-[45px] min-w-[45px] min-h-[45px] rounded-[8px] overflow-hidden">
                            <img
                              src={product.imageSrc}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {product.name}
                        </div>
                      </td>
                      <td className="px-[16px] py-[14px]  text-[#09090B] font-[400] text-[14px]">
                        <span
                          className={`px-[12px] py-[4px] rounded-full text-[14px] ${
                            product.status === "Published"
                              ? "bg-[#F0FDF4] text-[#22C55E]"
                              : "bg-[#E4E4E7] text-[#18181B]"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="px-[16px] py-[14px]  text-[#09090B] font-[400] text-[14px]">
                        {product.price}
                      </td>
                      <td className="px-[16px] py-[14px] text-[#09090B] font-[400] text-[14px]">
                        {product.quantity} stock for 1 variants
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
              Let’s add a new product!
            </h3>
            <p className="text-[#3F3F46] text-[16px] font-[400] mt-[4px]">
              Simple flow to make your new card.
            </p>
          </div>
        )}

        {/* Pagination Section */}
        <div className="flex md:flex-row flex-col md:gap-1 gap-[16px] flex-wrap justify-between items-center md:mt-[24px] mt-[10px]">
          {/* Page Info */}
          <div className="md:text-[16px] text-[14px] font-[400] text-[#3F3F46] md:order-1 order-3">
            Page {currentPage} of {totalPages}
          </div>

          {/* Pagination Buttons */}
          <div className="flex items-center space-x-2 order-2">
            <button
              onClick={handlePrevPage}
              className={`md:w-[40px] w-[30px] md:h-[40px] h-[30px] flex items-center justify-center rounded-full border border-[#E4E4E7] ${
                currentPage === 1
                  ? "text-[#A3A3A3] cursor-not-allowed"
                  : "text-[#09090B] cursor-pointer"
              }`}
              disabled={currentPage === 1}
            >
              <BiChevronLeft className="md:w-[24px] md:h-[24px] w-[20px] h-[20px]" />
            </button>

            {/* Display page numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index + 1)}
                className={`md:w-[40px] w-[30px] md:h-[40px] h-[30px] flex items-center justify-center rounded-full border md:text-[16px] text-[14px] ${
                  currentPage === index + 1
                    ? "bg-[#151515] text-[#FFFFFF] font-[500] "
                    : "hover:bg-gray-200 border-[#E4E4E7] font-[400] text-[#3F3F46]"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              className={`md:w-[40px] w-[30px] md:h-[40px] h-[30px] flex items-center justify-center rounded-full border border-[#E4E4E7] ${
                currentPage === totalPages
                  ? "text-[#A3A3A3] cursor-not-allowed"
                  : "text-[#09090B] cursor-pointer"
              }`}
              disabled={currentPage === totalPages}
            >
              <BiChevronRight className="md:w-[24px] md:h-[24px] w-[20px] h-[20px]" />
            </button>
          </div>

          {/* Rows Per Page Section */}
          <div className="relative text-sm text-gray-600 flex items-center md:order-3 order-1">
            {/* Dropdown Icon on the Left */}
            <span className="absolute left-2 text-gray-600">
              <IoIosArrowDown size={20} />{" "}
              {/* Replace with your desired dropdown icon */}
            </span>

            <select
              value={rowsPerPage}
              onChange={handleRowsChange}
              className="pl-8 pr-2 border-none text-gray-800 appearance-none bg-transparent cursor-pointer md:text-[16px] text-[14px]"
              style={{
                backgroundImage: "none", // Hide the default arrow
              }}
            >
              {[6, 10, 15].map((size) => (
                <option key={size} value={size}>
                  {size} Rows per page
                </option>
              ))}
            </select>
          </div>
        </div>
      </main>

      {/* Chat Button */}
      <ChatButton />
    </div>
  );
}
