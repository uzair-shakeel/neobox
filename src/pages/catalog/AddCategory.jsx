"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import CustomEditor from "../../components/CustomEditor";
import { LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

export default function AddCategory() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Published");
  const [hidden, setHidden] = useState(false);
  const [tagInput, setTagInput] = useState(""); // To hold input value
  const [selectedTags, setSelectedTags] = useState([]); // To hold selected tags

  const handleAddTag = () => {
    if (tagInput.trim() !== "" && !selectedTags.includes(tagInput.trim())) {
      setSelectedTags([...selectedTags, tagInput.trim()]); // Add tag to selectedTags
    }
    setTagInput(""); // Clear input after adding
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag)); // Remove selected tag
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto lg:px-[32px] md:px-[24px] px-[16px] py-[27px]">
        <div className="flex items-center justify-between lg:pb-[32px] md:pb-[24px] pb-[16px] flex-wrap gap-[6px]">
          <h1 className="md:text-[24px] text-[20px] leading-[36px] font-[500]">
            Add Category
          </h1>
          <div className="flex gap-[10px] flex-wrap">
            <button className="rounded-[12px] border border-[#E4E4E7] md:text-[16px] text-[14px] tracking-[-2%] font-[500] bg-white text-black md:px-[16px] px-[12px] md:py-[13px] py-[9px] flex items-center justify-center">
              Discard
            </button>
            <button className="rounded-[12px] md:text-[16px] text-[14px] tracking-[-2%] font-[500] bg-black text-white md:p-[13px] p-[7px] md:w-[120px] w-[100px] flex items-center justify-center">
              Save
            </button>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-[24px]">
          <div className="md:w-[65%] w-full">
            <div className="flex flex-col gap-[16px]">
              <div>
                <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full placeholder:text-[#52525B] font-[400] md:py-[11px] py-[8px] px-[12px] bg-[#F4F4F5] rounded-[10px]"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                  Description
                </label>
                <CustomEditor />
              </div>
            </div>
          </div>

          <div className="md:w-[35%] w-full">
            <div className="md:space-y-[48px] space-y-[30px]">
              <div>
                <h3 className="md:text-[20px] text-[18px] leading-[28px] font-[500] md:mb-[24px] mb-[16px]">
                  Product Status
                </h3>
                <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                  Status
                </label>
                <select
                  className="w-full md:py-[11px] py-[8px] px-[12px] pr-[40px] bg-[#F4F4F5] md:text-[16px] text-[14px] rounded-[10px] appearance-none relative cursor-pointer"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='black' %3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`, // Custom icon
                    backgroundPosition: "calc(100% - 14px) center", // Adjust the position of the dropdown arrow
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "14px 14px", // Size of the arrow
                  }}
                >
                  <option>Published</option>
                  <option>Hidden</option>
                </select>

                <div className="flex items-center gap-[8px] my-[16px]">
                  <input
                    type="checkbox"
                    id="hideCategory"
                    checked={hidden}
                    onChange={(e) => setHidden(e.target.checked)}
                    className="cursor-pointer rounded-[6px] custom-checkbox focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="hideCategory"
                    className="text-[14px] font-[500] text-[#09090B]"
                  >
                    Hide this category
                  </label>
                </div>
                <p className="text-[14px] font-[400] text-[#3F3F46]">
                  Hidden products are not searchable and visible in storefront.
                  Hidden products are only accessible by direct link.
                </p>
              </div>
              <div>
                <h3 className="text-[#09090B] md:text-[20px] text-[18px] font-[500] md:mb-[40px] mb-[20px]">
                  Organization
                </h3>
                <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                  Slug-Tags
                </label>
                <div className="flex items-center gap-[8px]">
                  <input
                    type="text"
                    className="flex-grow md:py-[11px] py-[9px] px-[12px] bg-[#F4F4F5] placeholder:text-[#52525B] rounded-[10px] min-w-[50px]"
                    placeholder="Modern, Classic, Trendy"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)} // Update input value
                    onKeyPress={handleKeyPress} // Add tag on Enter key press
                  />
                  <button
                    className="border border-[#E4E4E7] rounded-full md:min-w-[48px] md:min-h-[48px] min-w-[40px] min-h-[40px] md:w-[48px] w-[40px] md:h-[48px] h-[40px] flex items-center justify-center"
                    onClick={handleAddTag} // Add tag on button click
                  >
                    <LuPlus
                      color="#09090B"
                      className="md:w-[20px] md:h-[20px] w-[18px] h-[18px]"
                    />
                  </button>
                </div>

                <div className="flex flex-wrap gap-[8px] mt-[16px]">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-[12px] py-[4px] bg-[#E4E4E7] rounded-full flex items-center text-[#18181B] text-[14px] tracking-[-2%] font-[400]"
                    >
                      {tag}
                      <button
                        className="ml-[2px]"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        <IoMdClose color="#18181B" size={15} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
