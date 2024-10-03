import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { RiLogoutCircleLine, RiSettings3Line } from "react-icons/ri";

const StoreHeader = () => {
  const [profileDropdown, setProfileDropdown] = useState(null);
  return (
    <header className="flex gap-2 justify-between flex-grow items-center w-full sm:px-8 px-4 py-2 bg-[#FAFAFA] border-b border-b-[#E4E4E7]">
      <div className="flex items-center gap-[8px]">
        <span
          className="md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-[5.6px] border-[0.7px] border-[#FFFFFF4D] flex items-center justify-center bg-white"
          style={{
            boxShadow: `
    0px 0px 0px 0.7px #DFDFDF,
    0px 1.4px 3.5px -0.7px #292C3280,
    inset 0px -2.8px 0px 0px #DFDFDFB2
  `,
          }}
        >
          <img
            src="/neobox-icon.png"
            className="md:w-[29px] md:h-[26.98px] w-[21px] h-[19.53px]"
          />
        </span>
        <h1 className="dm:text-[24px] text-[18px] font-[500]">Neobox</h1>
      </div>
      <div
        className={`relative border border-[#E4E4E7] rounded-t-[8px] ${
          profileDropdown ? "rounded-b-0" : "rounded-b-[8px]"
        } bg-white py-[8px] sm:max-w-[248px] max-w-[165px] mt-1 w-full`}
      >
        <div
          onClick={() => {
            setProfileDropdown(!profileDropdown);
          }}
          className="flex items-center justify-between gap-1 xl:px-[12px] px-[6px] w-full"
        >
          <div className="flex items-center ">
            <span className="md:min-h-[40px] min-h-[30px] md:min-w-[40px] min-w-[30px]">
              <img
                src="/profile.png"
                alt="User"
                className="md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-[8px] object-cover"
              />
            </span>
            <div className="lg:ms-[12px] ms-[6px]">
              <p className="sm:text-[14px] text-[13px] font-[500] sm:leading-[21.7px] text-[#09090B]">
                Max Verstappen
              </p>
              <p className="sm:text-[12px] text-[11px] font-[400] sm:leading-[18.6px] text-[#71717A]">
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
          className={`absolute left-[-1px] right-0 w-[100.8%] bg-white shadow-lg border border-[#E4E4E7] rounded-b-lg mt-[-3px] pt-[8px] px-[8px] z-10 ${
            profileDropdown ? "block" : "hidden"
          }`}
          style={{ top: "100%" }} // Ensures the dropdown appears just below the div above
        >
          <li>
            <a
              href="#"
              className="flex items-center text-[#52525B] rounded-[8px] hover:bg-gray-100 px-[12px] py-[9px]"
            >
              <span className="min-h-[20px] min-w-[20px] h-[20px] w-[20px]">
                <RiSettings3Line className="h-full w-full" />{" "}
              </span>
              <span className="lg:ms-[12px] ms-[6px]">Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-[#52525B] rounded-[8px] hover:bg-gray-100 py-[9px] px-[12px]"
            >
              <span className="min-h-[20px] min-w-[20px] h-[20px] w-[20px]">
                <RiLogoutCircleLine className="h-full w-full" />{" "}
              </span>
              <span className="lg:ms-[12px] ms-[6px]">Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default StoreHeader;
