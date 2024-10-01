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
    <div>
      <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
        {label}
      </label>
      <div className="flex items-center flex-wrap gap-[8px] relative">
        {showSearchIcon && (
          <LuSearch
            color="#374151"
            size={20}
            className="absolute left-[12px] mr-[8px]"
          />
        )}
        <input
          type="text"
          className={`flex-grow py-[11px] ${
            showSearchIcon && "ps-[40px]"
          } px-[12px] bg-[#F4F4F5] placeholder:text-[#52525B] rounded-[10px] min-w-[50px]`}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        {showPlusButton && (
          <button
            className="border border-[#E4E4E7] rounded-full w-[48px] h-[48px] flex items-center justify-center"
            onClick={onAddItem}
          >
            <LuPlus color="#09090B" size={20} />
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
