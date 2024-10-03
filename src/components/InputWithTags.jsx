import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuPlus, LuSearch } from "react-icons/lu";

const InputWithTags = ({
  label,
  placeholder,
  inputValue,
  setInputValue,
  selectedItems,
  setSelectedItems,
  showPlusButton = true,
  showSearchIcon = false,
  onAddItem,
  onRemoveItem,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onAddItem();
    }
  };

  return (
    <div className="w-full">
      <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
        {label}
      </label>
      <div className="flex items-center gap-[8px] relative">
        {showSearchIcon && (
          <LuSearch
            color="#374151"
            size={20}
            className="absolute left-[12px] mr-[8px]"
          />
        )}
        <input
          type="text"
          className={`flex-grow md:py-[11px] py-[9px] ${
            showSearchIcon && "ps-[40px]"
          } px-[12px] bg-[#F4F4F5] placeholder:text-[#52525B] rounded-[10px] min-w-[50px]`}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        {showPlusButton && (
          <button
            className="border border-[#E4E4E7] rounded-full md:min-w-[48px] md:min-h-[48px] min-w-[40px] min-h-[40px] md:w-[48px] w-[40px] md:h-[48px] h-[40px] flex items-center justify-center"
            onClick={onAddItem} // Add tag on button click
          >
            <LuPlus
              color="#09090B"
              className="md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
            />
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-[8px] mt-[16px]">
        {selectedItems.map((item) => (
          <span
            key={item}
            className="px-[12px] py-[4px] bg-[#E4E4E7] rounded-full flex items-center text-[#18181B] text-[14px] tracking-[-2%] font-[400]"
          >
            {item}
            <button className="ml-[2px]" onClick={() => onRemoveItem(item)}>
              <IoMdClose color="#18181B" size={15} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default InputWithTags;
