import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const options = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
  { value: "last-year", label: "Last Year" },
];

const Revenue = () => {
  const [selectedOption, setSelectedOption] = useState(options[1]); // Default is Weekly
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false); // Close dropdown after selecting an option
  };

  return (
    <div className="mt-[24px]">
      <div className="flex justify-between gap-1 flex-wrap mb-[2px]">
        <h2 className="sm:text-[20px] text-[18px] leading-[28px] font-[500] mb-[16px]">
          Revenue
        </h2>

        {/* Custom Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center px-[12px] gap-[4px] py-[5px] sm:text-[16px] text-[14px] w-fit border border-[#E4E4E7] rounded-[6px]"
          >
            {selectedOption.label}
            <MdKeyboardArrowDown className="text-gray-500" />
          </button>

          {dropdownOpen && (
            <div className="absolute -right-4 mt-[6px] w-fit bg-white border border-[#E5E5E5] rounded-[10px] shadow-lg">
              {options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center p-[8px] hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionChange(option)}
                >
                  <label className="flex items-center cursor-pointer px-[12px] py-[9px] gap-[12px]">
                    <input
                      type="radio"
                      id={option.value}
                      name="revenue"
                      value={option.value}
                      checked={selectedOption.value === option.value}
                      onChange={() => {}}
                      className="custom-radio"
                    />
                    <span className="text-[#262626] w-max">{option.label}</span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Revenue Section */}
      <div
        className="border border-[#E4E4E7] rounded-[8px] md:px-[24px] px-[12px] py-[15px]"
        style={{
          boxShadow: "0px 1px 2px 0px #1018280F",
        }}
      >
        <div className="flex flex-col md:gap-[8px] gap-[4px] mb-[32px]">
          <h3 className="md:text-[18px] text-[16px] text-[#3F3F46] md:leading-[25.2px] font-[400]">
            Total Revenue
          </h3>
          <p className="text-[#09090B] md:text-[32px] text-[24px] font-[500] md:leading-[44.8px]">
            $14,020,110
          </p>
          <p className="text-[#6B7280] font-[400] md:text-[14px] text-[12px] md:leading-[21.7px]">
            You gained <span className="text-[#8B5CF6]">+$420.00</span> this
            month
          </p>
        </div>

        <div>
          <img className="w-full" src="/bar-chart.png" alt="Bar chart" />
        </div>
      </div>
    </div>
  );
};

export default Revenue;
