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
  const [isSalesChannelsVisible, setIsSalesChannelsVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profileDropdown, setProfileDropdown] = useState(null);
  const catalogRef = useRef(null);
  const financesRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarRef = useRef(null);

  const checkWidth = () => {
    if (window.innerWidth >= 1024) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      if (window.innerWidth < 1024) {
        setIsExpanded(false);
      }
    }
  };

  useEffect(() => {
    // Check width on mount
    checkWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkWidth);

    // Add event listener for clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkWidth);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSalesChannels = () => {
    setIsSalesChannelsVisible((prev) => !prev);
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    setIsExpanded(true);
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
    <>
      <div
        className={`h-full flex sidebar-behind top-0 left-0 ${
          isExpanded ? "xl:w-[272px] lg:w-[240px] w-[70px]" : "min-w-[70px]"
        }`}
      ></div>
      <aside
        className={`fixed top-0 left-0 bg-[#F4F4F5] border-r py-[16px] h-screen transition-all duration-200 overflow-hidden overflow-y-auto ${
          isExpanded
            ? "xl:w-[272px] lg:w-[240px] w-[220px] px-[12px]"
            : "px-[8px] w-[70px]"
        } flex flex-col justify-between z-[60]`}
      >
        <div>
          <div
            className={`${
              isExpanded ? "px-[8px]" : "px-0"
            } border-b flex justify-between`}
          >
            <div className={`flex gap-[8px] ${!isExpanded && "hidden"}`}>
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
              className={`${
                isExpanded ? "h-[33px] w-[33px]" : " h-[43px] w-[43px] mx-auto"
              }  rounded-full flex items-center justify-center bg-white border border-[#E4E4E7]`}
              style={{ boxShadow: "0px -3px 0px 0px #00000014 inset" }}
              onClick={toggleSidebar}
            >
              <TbLayoutSidebarRightExpand
                className={`${
                  isExpanded ? "h-[17px] w-[17px]" : " h-[22px] w-[22px]"
                }`}
              />
            </span>
          </div>
          <div className={`mt-[30px] ${!isExpanded && "hidden"}`}>
            <div className="px-[13px] py-[14px] bg-white flex items-center justify-between border border-[#E4E4E7] rounded-[8px]">
              <span className="flex items-center gap-[8px]">
                <RiStoreLine size={20} color="#52525B" /> Mob Shop
              </span>
              <LuChevronsUpDown size={20} color="#71717A" />
            </div>
          </div>
          <div className="flex items-center bg-[#EBEBEB] py-[9px] pe-[4px] rounded-[8px] w-full mt-[16px] relative">
            <span
              className={`min-w-[20px] min-h-[20px] ${
                isExpanded ? "mr-[8px] ps-[12px]" : " ps-[4px] mx-auto"
              }`}
              onClick={() => {
                setIsExpanded(true);
              }}
            >
              <LuSearch color="#52525B" size={isExpanded ? 20 : 22} />
            </span>
            <input
              type="text"
              placeholder="Search"
              className={`bg-[#EBEBEB] outline-none  placeholder:text-[#71717A] text-sm w-[67%] ${
                !isExpanded && "hidden"
              } `}
            />
            <div
              className={`absolute right-[4px] h-full py-[3px] ${
                !isExpanded && "hidden"
              }`}
            >
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
                  to="/" // Change this to the correct path
                  className={({ isActive }) =>
                    `flex items-center gap-[12px] font-[500] text-[14px] leading-[21.7px] ${
                      isActive ? "bg-white text-[#0D0D12]" : "text-[#52525B]"
                    } rounded-[8px] py-[8px] ${
                      isExpanded ? "px-[12px]" : "px-[8px]"
                    } `
                  }
                >
                  <RiHome5Line size={isExpanded ? 20 : 22} />{" "}
                  <span className={`${!isExpanded && "hidden"}`}>Home</span>
                </NavLink>
              </li>
              <li ref={catalogRef} className="transition">
                <button
                  onClick={() => toggleDropdown("catalog")}
                  className={`flex items-center justify-between w-full text-[#0D0D12] font-[500] text-[14px] leading-[21.7px] hover:bg-[#FAFAFA] rounded-[8px] py-[8px] ${
                    isExpanded ? "px-[12px]" : "px-[8px]"
                  }
                     gap-1`}
                >
                  <span className="flex items-center gap-[12px]">
                    <RiApps2Line
                      className={`${
                        openDropdown === "catalog"
                          ? "text-[#A3E635]"
                          : "text-[#52525B]"
                      }`}
                      size={isExpanded ? 20 : 22}
                    />{" "}
                    <span className={`${!isExpanded && "hidden"}`}>
                      Catalog
                    </span>
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
                  <div
                    className="px-[12px] pb-[8px] bg-[#FAFAFA] rounded-[6px] flex flex-col"
                    style={{
                      boxShadow: "0px -3px 0px 0px #00000014 inset",
                    }}
                  >
                    {/* Dropdown items */}
                    <NavLink
                      to="/products" // Change this to the correct path
                      className={({ isActive }) =>
                        `px-[32px] py-[8px] font-[500] text-[14px] rounded-[6px] leading-[21.7px] ${
                          isActive
                            ? "bg-[#FFFFFF] border border-[#E4E4E7] text-[#09090B] shadow"
                            : "text-[#52525B]"
                        } rounded-[6px]`
                      }
                    >
                      Products
                    </NavLink>
                    <NavLink
                      to="/collections" // Change this to the correct path
                      className={({ isActive }) =>
                        `px-[32px] py-[8px] font-[500] text-[14px] rounded-[6px] leading-[21.7px] ${
                          isActive
                            ? "bg-[#FFFFFF] border border-[#E4E4E7] text-[#09090B] shadow"
                            : "text-[#52525B]"
                        } rounded-[6px]`
                      }
                    >
                      Collections
                    </NavLink>
                    <NavLink
                      to="/orders" // Change this to the correct path
                      className={({ isActive }) =>
                        `px-[32px] py-[8px] font-[500] text-[14px] rounded-[6px] leading-[21.7px] ${
                          isActive
                            ? "bg-[#FFFFFF] border border-[#E4E4E7] text-[#09090B] shadow"
                            : "text-[#52525B]"
                        } rounded-[6px]`
                      }
                    >
                      Orders
                    </NavLink>
                  </div>
                )}
              </li>

              {/* Finances Button and Dropdown */}
              <li ref={financesRef}>
                <button
                  onClick={() => toggleDropdown("finances")}
                  className={`flex items-center justify-between w-full text-[#0D0D12] font-[500] text-[14px] leading-[21.7px] hover:bg-[#FAFAFA] rounded-[8px] py-[8px] ${
                    isExpanded ? "px-[12px]" : "px-[8px]"
                  }
                     gap-1`}
                >
                  <span className="flex items-center gap-[12px]">
                    <RiMoneyDollarCircleLine
                      className={`${
                        openDropdown === "finances"
                          ? "text-[#A3E635]"
                          : "text-[#52525B]"
                      }`}
                      size={isExpanded ? 20 : 22}
                    />{" "}
                    <span className={`${!isExpanded && "hidden"}`}>
                      Finances
                    </span>
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
                  <div
                    className="px-[12px] pb-[8px] bg-[#FAFAFA] rounded-[6px] flex flex-col"
                    style={{
                      boxShadow: "0px -3px 0px 0px #00000014 inset",
                    }}
                  >
                    {/* Dropdown items */}
                    <NavLink
                      to="/finance/wallet" // Change this to the correct path
                      className={({ isActive }) =>
                        `px-[32px] py-[8px] font-[500] text-[14px] rounded-[6px] leading-[21.7px] ${
                          isActive
                            ? "bg-[#FFFFFF] border border-[#E4E4E7] text-[#09090B] shadow"
                            : "text-[#52525B]"
                        } rounded-[6px]`
                      }
                    >
                      Wallet
                    </NavLink>
                    <NavLink
                      to="/finance/withdrawal" // Change this to the correct path
                      className={({ isActive }) =>
                        `px-[32px] py-[8px] font-[500] text-[14px] rounded-[6px] leading-[21.7px] ${
                          isActive
                            ? "bg-[#FFFFFF] border border-[#E4E4E7] text-[#09090B] shadow"
                            : "text-[#52525B]"
                        } rounded-[6px]`
                      }
                    >
                      Withdrawal Methods
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
                    } rounded-[8px] py-[8px] ${
                      isExpanded ? "px-[12px]" : "px-[8px]"
                    }`
                  }
                >
                  <img
                    src="/customers.svg"
                    className={`${
                      isExpanded ? "w-[20px] h-[20px]" : "w-[22px] h-[22px]"
                    }`}
                  />{" "}
                  <span className={`${!isExpanded && "hidden"}`}>
                    Customers
                  </span>
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
                      size={isExpanded ? 12 : 14}
                    />
                  </span>
                  <span className={`${!isExpanded && "hidden"}`}>
                    Sales Channels
                  </span>
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
                    <RiStoreLine size={isExpanded ? 20 : 22} color="#52525B" />{" "}
                    <span className={`${!isExpanded && "hidden"}`}>
                      Online Store
                    </span>
                  </NavLink>
                )}
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t rounded-[8px] bg-white py-[8px] w-full mt-1">
          <div
            onClick={() => {
              setProfileDropdown(!profileDropdown);
            }}
            className={`flex items-center justify-between w-full flex-grow ${
              profileDropdown && "border-b pb-[8px]"
            }  border-b-[#E4E4E7] xl:px-[12px] px-[6px] w-full`}
          >
            <div className="flex items-center ">
              <span
                className={`${
                  isExpanded
                    ? "min-h-[40px] min-w-[40px]"
                    : "min-h-[25px] min-w-[25px]"
                }`}
              >
                <img
                  src="/profile.png"
                  alt="User"
                  className={`${
                    isExpanded ? "h-[40px] w-[40px]" : "h-[25px] w-[25px]"
                  } rounded-[8px] object-cover`}
                />
              </span>
              <div
                className={`${!isExpanded && "hidden"} lg:ms-[12px] ms-[6px]`}
              >
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
          <ul
            className={`${isExpanded ? "pb-[8px]" : "pb-0"} pt-[8px] px-[8px] ${
              profileDropdown ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href="#"
                className={`flex items-center text-[#52525B] rounded-[8px] hover:bg-gray-100 ${
                  isExpanded ? "px-[12px] py-[9px]" : "pb-[5px]"
                }`}
              >
                <span
                  className={` ${
                    isExpanded
                      ? "min-h-[20px] min-w-[20px] h-[20px] w-[20px]"
                      : "min-h-[25px] min-w-[25px] h-[25px] w-[25px]"
                  }`}
                >
                  <RiSettings3Line className="h-full w-full" />{" "}
                </span>
                <span
                  className={`${!isExpanded && "hidden"} lg:ms-[12px] ms-[6px]`}
                >
                  Settings
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center text-[#52525B] rounded-[8px] hover:bg-gray-100 py-[9px] ${
                  isExpanded ? "px-[12px] py-[9px]" : "pb-[5px]"
                }`}
              >
                <span
                  className={`${
                    isExpanded
                      ? "min-h-[20px] min-w-[20px] h-[20px] w-[20px]"
                      : "min-h-[25px] min-w-[25px] h-[25px] w-[25px]"
                  }`}
                >
                  <RiLogoutCircleLine className="h-full w-full" />{" "}
                </span>
                <span
                  className={`${!isExpanded && "hidden"} lg:ms-[12px] ms-[6px]`}
                >
                  Log out
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
