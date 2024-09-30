"use client";

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Sidebar from "../../components/Sidebar";
import CustomEditor from "../../components/CustomEditor";

export default function AddCategory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Published");
  const [hidden, setHidden] = useState(false);
  const [tags, setTags] = useState(["Modern", "Classic", "Trendy"]);
  const [selectedTags, setSelectedTags] = useState([
    "Trendy",
    "Sneaker",
    "Classic",
    "Sporty",
  ]);

  const handleAddTag = () => {
    if (tags.length > 0) {
      setSelectedTags([...selectedTags, tags[0]]);
      setTags(tags.slice(1));
    }
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
    setTags([...tags, tag]);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-[32px] py-[27px]">
        <div className="flex items-center justify-between pb-[32px]">
          <h1 className="text-[24px] leading-[36px] font-[500]">
            Add Category
          </h1>
          <div className="flex gap-[10px]">
            <button className="rounded-[12px] border border-[#E4E4E7] text-[16px] tracking-[-2%] font-[500] bg-white text-black px-[16px] py-[13px] flex items-center justify-center">
              Discard
            </button>
            <button className="rounded-[12px] text-[16px] tracking-[-2%] font-[500] bg-black text-white p-[13px] w-[120px] flex items-center justify-center">
              Save
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="md:w-[65%] w-full">
            <div className="flex flex-col gap-[16px]">
              <div>
                <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full placeholder:text-[#52525B] font-[400] py-[11px] px-[12px] bg-[#F4F4F5] rounded-[10px]"
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
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Product Status</h3>
                <label className="block mb-2">Status</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Published</option>
                  <option>Draft</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hideCategory"
                  checked={hidden}
                  onChange={(e) => setHidden(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="hideCategory">Hide this category</label>
              </div>
              <p className="text-sm text-gray-600">
                Hidden products are not searchable and visible in storefront.
                Hidden products are only accessible by direct link.
              </p>
              <div>
                <h3 className="text-lg font-semibold mb-2">Organization</h3>
                <label className="block mb-2">Slug-Tags</label>
                <div className="flex items-center border rounded-md">
                  <input
                    type="text"
                    className="flex-grow p-2"
                    placeholder="Modern, Classic, Trendy"
                    value={tags.join(", ")}
                    readOnly
                  />
                  <button className="p-2" onClick={handleAddTag}>
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-200 rounded-full flex items-center"
                  >
                    {tag}
                    <button
                      className="ml-1"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      X
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
