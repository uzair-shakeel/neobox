"use client";
import { useState, useRef, useEffect } from "react";
import { LuChevronsUpDown, LuSearch } from "react-icons/lu";
import { MdArrowBackIos } from "react-icons/md";
import {
  RiApps2Line,
  RiHome5Line,
  RiLogoutCircleLine,
  RiMoneyDollarCircleLine,
  RiSettings3Line,
  RiStoreLine,
} from "react-icons/ri";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isSalesChannelsVisible, setIsSalesChannelsVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const catalogRef = useRef(null);
  const financesRef = useRef(null);

  const toggleSalesChannels = () => {
    setIsSalesChannelsVisible((prev) => !prev);
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // Close if the same dropdown is clicked again
    } else {
      setOpenDropdown(dropdown); // Open the clicked dropdown
    }
  };

  // Detect clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        catalogRef.current &&
        !catalogRef.current.contains(event.target) &&
        financesRef.current &&
        !financesRef.current.contains(event.target)
      ) {
        setOpenDropdown(null); // Close dropdown when clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside className="w-[272px] bg-[#F4F4F5] border-r px-[12px] py-[16px] flex flex-col justify-between">
      <div>
        <div className="px-[8px] border-b flex justify-between">
          <div className="flex gap-[8px]">
            <span
              className="h-[28px] w-[28px] rounded-[5.6px] border-[0.7px] border-[#FFFFFF4D] flex items-center justify-center bg-white"
              style={{
                boxShadow: `
              0px 0px 0px 0.7px #DFDFDF,
              0px 1.4px 3.5px -0.7px #292C3280,
              inset 0px -2.8px 0px 0px #DFDFDFB2
            `,
              }}
            >
              <img src="/neobox-icon.png" className="w-[21px] h-[19.53px]" />
            </span>
            <h1 className="text-xl font-semibold">Neobox</h1>
          </div>
          <span
            className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-white border border-[#E4E4E7]"
            style={{ boxShadow: "0px -3px 0px 0px #00000014 inset" }}
          >
            <TbLayoutSidebarRightExpand size={16} />
          </span>
        </div>
        <div className="mt-[30px]">
          <div className="px-[13px] py-[14px] bg-white flex items-center justify-between border border-[#E4E4E7] rounded-[8px]">
            <span className="flex items-center gap-[8px]">
              <RiStoreLine size={20} color="#52525B" /> Mob Shop
            </span>
            <LuChevronsUpDown size={20} color="#71717A" />
          </div>
        </div>
        <div className="flex items-center bg-[#EBEBEB] ps-[12px] py-[9px] pe-[4px] rounded-[8px] w-full mt-[16px] relative">
          <span className="min-w-[20px] min-h-[20px] mr-[8px]">
            <LuSearch color="#52525B" size={20} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="bg-[#EBEBEB] outline-none  placeholder:text-[#71717A] text-sm w-[67%]"
          />
          <div className="absolute right-[4px] h-full py-[3px]">
            <div className="bg-white px-[8px] h-full rounded-[6px] flex gap-[4px] items-center">
              <span className="text-black text-[14px] font-semibold">
                <img
                  src="/search-right-icon.svg"
                  className="w-[12px] h-[12px]"
                />
              </span>
              <span className="text-[14px] font-[400] leading-[21.7px] text-[#09090B]">
                K
              </span>
            </div>
          </div>
        </div>
        <nav className="mt-[16px]">
          <span className="text-[12px] font-[500] leading-[18.6px] text-[#3F3F46]">
            Menu
          </span>
          <ul className="space-y-[2px] mt-[8px]">
            <li>
              <NavLink
                to="/home" // Change this to the correct path
                className={({ isActive }) =>
                  `flex items-center gap-[12px] font-[500] text-[14px] leading-[21.7px] ${
                    isActive ? "bg-white text-[#0D0D12]" : "text-[#52525B]"
                  } rounded-[8px] py-[8px] px-[12px]`
                }
              >
                <RiHome5Line size={20} /> Home
              </NavLink>
            </li>
            <li ref={catalogRef} className="transition">
              <button
                onClick={() => toggleDropdown("catalog")}
                className="flex items-center justify-between w-full text-[#0D0D12] font-[500] text-[14px] leading-[21.7px] hover:bg-white rounded-[8px] py-[8px] px-[12px]"
              >
                <span className="flex items-center gap-[12px]">
                  <RiApps2Line size={20} /> Catalog
                </span>
                <span>
                  <MdArrowBackIos
                    className={`mt-[-4px] transition transform ${
                      openDropdown === "catalog"
                        ? "mt-[7px] rotate-90"
                        : "mt-[-4px] rotate-[-90deg]"
                    }`}
                    color="#52525B"
                    size={12}
                  />
                </span>
              </button>

              {/* Dropdown content for Catalog */}
              {openDropdown === "catalog" && (
                <div className="mt-[2px] p-[12px] bg-white shadow rounded-[8px] flex flex-col">
                  {/* Dropdown items */}
                  <NavLink
                    to="/catalog-item-1" // Change this to the correct path
                    className={({ isActive }) =>
                      `px-1 py-1 ${
                        isActive
                          ? "bg-gray-100 text-[#0D0D12]"
                          : "text-[#52525B]"
                      } rounded-[8px]`
                    }
                  >
                    Catalog Item 1
                  </NavLink>
                  <NavLink
                    to="/catalog-item-2" // Change this to the correct path
                    className={({ isActive }) =>
                      `px-1 py-1 ${
                        isActive
                          ? "bg-gray-100 text-[#0D0D12]"
                          : "text-[#52525B]"
                      } rounded-[8px]`
                    }
                  >
                    Catalog Item 2
                  </NavLink>
                </div>
              )}
            </li>

            {/* Finances Button and Dropdown */}
            <li ref={financesRef}>
              <button
                onClick={() => toggleDropdown("finances")}
                className="flex items-center justify-between w-full text-[#0D0D12] font-[500] text-[14px] leading-[21.7px] hover:bg-white rounded-[8px] py-[8px] px-[12px]"
              >
                <span className="flex items-center gap-[12px]">
                  <RiMoneyDollarCircleLine size={20} /> Finances
                </span>
                <span>
                  <MdArrowBackIos
                    className={`mt-[-4px] transition transform ${
                      openDropdown === "finances"
                        ? "mt-[7px] rotate-90"
                        : "mt-[-4px] rotate-[-90deg]"
                    }`}
                    color="#52525B"
                    size={12}
                  />
                </span>
              </button>

              {/* Dropdown content for Finances */}
              {openDropdown === "finances" && (
                <div className="mt-[2px] p-[12px] bg-white shadow rounded-[8px] flex flex-col">
                  {/* Dropdown items */}
                  <NavLink
                    to="/catalog-item-1" // Change this to the correct path
                    className={({ isActive }) =>
                      `px-1 py-1 ${
                        isActive
                          ? "bg-gray-100 text-[#0D0D12]"
                          : "text-[#52525B]"
                      } rounded-[8px]`
                    }
                  >
                    Finance Item A
                  </NavLink>
                  <NavLink
                    to="/catalog-item-2" // Change this to the correct path
                    className={({ isActive }) =>
                      `px-1 py-1 ${
                        isActive
                          ? "bg-gray-100 text-[#0D0D12]"
                          : "text-[#52525B]"
                      } rounded-[8px]`
                    }
                  >
                    Finance Item B
                  </NavLink>
                </div>
              )}
            </li>
            <li>
              <NavLink
                to="/customers" // Change this to the correct path
                className={({ isActive }) =>
                  `flex items-center gap-[12px] font-[500] text-[14px] leading-[21.7px] ${
                    isActive ? "bg-white text-[#0D0D12]" : "text-[#52525B]"
                  } rounded-[8px] py-[8px] px-[12px]`
                }
              >
                <img src="/customers.svg" className="w-[20px] h-[20px]" />{" "}
                Customers
              </NavLink>
            </li>
            <li>
              <button
                onClick={toggleSalesChannels}
                className="flex items-center gap-[8px] mt-[16px] text-[#71717A] text-[12px] font-[500] leading-[18.6px]"
              >
                <span>
                  <MdArrowBackIos
                    className={`transform transition ${
                      isSalesChannelsVisible
                        ? "mt-[7px] rotate-90"
                        : "mt-[-4px] rotate-[-90deg]"
                    }`} // Rotates the arrow when clicked
                    color="#71717A"
                    size={12}
                  />
                </span>
                Sales Channels
              </button>

              {/* Conditionally render the <a> link */}
              {isSalesChannelsVisible && (
                <NavLink
                  to="/online-store" // Change this to the correct path
                  className={({ isActive }) =>
                    `mt-[8px] flex items-center gap-[12px] font-[500] text-[14px] leading-[21.7px] ${
                      isActive ? "bg-white text-[#0D0D12]" : "text-[#52525B]"
                    } rounded-[8px] py-[8px] px-[12px]`
                  }
                >
                  <RiStoreLine size={20} color="#52525B" /> Online Store
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t rounded-[8px] bg-white py-[8px] w-full mt-1">
        <div className="flex items-center justify-between w-full flex-grow border-b pb-[8px] px-[12px] w-full">
          <div className="flex items-center ">
            <span className="min-h-[40px] min-w-[40px]">
              <img
                src="/profile.png"
                alt="User"
                className="w-[40px] h-[40px] rounded-[8px] mr-[12px] object-cover"
              />
            </span>
            <div>
              <p className="text-[14px] font-[500] leading-[21.7px] text-[#09090B]">
                Max Verstappen
              </p>
              <p className="text-[12px] font-[400] leading-[18.6px] text-[#71717A]">
                lewis@mail.com
              </p>
            </div>
          </div>
          <span>
            <MdArrowBackIos
              className="rotate-[-90deg] mt-[-4px]"
              color="#71717A"
              size={12}
            />
          </span>{" "}
        </div>
        <ul className="p-[8px]">
          <li>
            <a
              href="#"
              className="flex items-center text-[#52525B] rounded-[8px] hover:bg-gray-100 py-[9px] px-[12px]"
            >
              <RiSettings3Line size={20} className="mr-[12px]" /> Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-[#52525B] rounded-[8px] hover:bg-gray-100 py-[9px] px-[12px]"
            >
              <RiLogoutCircleLine size={20} className="mr-[12px]" /> Log out
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
