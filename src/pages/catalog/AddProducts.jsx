"use client";

import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import CustomEditor from "../../components/CustomEditor";
import { LuPlus, LuSearch } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Published");
  const [hidden, setHidden] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [collectionInput, setCollectionInput] = useState("");
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [file, setFile] = useState(null);

  const [price, setPrice] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [isVariableProduct, setIsVariableProduct] = useState(false);

  const handleAddTag = () => {
    if (tagInput.trim() !== "" && !selectedTags.includes(tagInput.trim())) {
      setSelectedTags([...selectedTags, tagInput.trim()]);
    }
    setTagInput("");
  };

  const handleAddCollection = () => {
    if (
      collectionInput.trim() !== "" &&
      !selectedCollections.includes(collectionInput.trim())
    ) {
      setSelectedCollections([...selectedCollections, collectionInput.trim()]);
    }
    setCollectionInput("");
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag)); // Remove selected tag
  };

  const handleRemovecollection = (collection) => {
    setSelectedCollections(selectedCollections.filter((t) => t !== collection)); // Remove selected tag
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };
  const handleCollectionKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddCollection();
    }
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-[32px] py-[27px]">
        <div className="flex items-center justify-between pb-[32px]">
          <h1 className="text-[24px] leading-[36px] font-[500]">Add Product</h1>
          <div className="flex gap-[10px]">
            <button className="rounded-[12px] border border-[#E4E4E7] text-[16px] tracking-[-2%] font-[500] bg-white text-black px-[16px] py-[13px] flex items-center justify-center">
              Discard
            </button>
            <button className="rounded-[12px] text-[16px] tracking-[-2%] font-[500] bg-black text-white p-[13px] w-[120px] flex items-center justify-center">
              Save
            </button>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-[24px]">
          <div className="md:w-[65%] w-full">
            <h3 className="text-[#09090B] text-[24px] font-[500] mb-[24px]">
              Products
            </h3>
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

            <div className="space-y-[32px] pt-[16px] mt-[16px] border-t border-t-[#F4F4F5]">
              {/* Media Upload */}
              <div>
                <h2 className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                  Media
                </h2>
                <div className="flex gap-[12px] h-[188px]">
                  {file && (
                    <div className="relative w-[188px] h-full rounded-[9.07px] text-center text-sm">
                      <img
                        src={URL.createObjectURL(file)} // Use URL.createObjectURL to preview the image
                        alt="Uploaded preview"
                        className="h-full w-full object-cover rounded-[9.07px]"
                      />
                      <span
                        className="absolute top-[8px] right-[8px] h-[32px] w-[32px] border border-[#E4E4E7] rounded-full bg-white flex items-center justify-center cursor-pointer"
                        onClick={handleRemoveFile} // Remove file when clicking the close icon
                      >
                        <IoMdClose size={16} />
                      </span>
                    </div>
                  )}

                  <label
                    htmlFor="file-upload"
                    className={`block ${
                      file ? "w-[240px]" : "w-full"
                    } h-full border border-dashed border-[#D4D4D8] rounded-[8px] flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors px-[16px] py-[18px]`}
                  >
                    <span className="min-h-[26] min-w-[26]">
                      <AiOutlineCloudUpload size={30} />
                    </span>
                    <p className="text-center text-[#09090B] text-[14px] font-[500] pb-[4px] pt-[10px]">
                      Choose a file or drag & drop it here
                    </p>
                    <p className="text-[#52525B] text-[12px] font-[400] mb-[4px]">
                      JPG or PNG formats, up to 5MB
                    </p>
                    <button
                      htmlFor="file-upload"
                      className="py-[5px] px-[16px] text-[14px] text-[#09090B] font-[500] rounded-[6px] border border-[#E4E4E7] mt-[10px] relative overflow-hidden cursor-pointer"
                    >
                      Browse File
                      <input
                        id="file-upload"
                        type="file"
                        className="absolute inset-0 opacity-0 h-full w-full cursor-pointer"
                        accept="image/jpeg,image/png"
                        onChange={handleFileUpload} // Handle image upload on file selection
                      />
                    </button>
                  </label>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="space-y-[24px]">
                <h2 className="text-[#09090B] text-[20px] font-[500]">
                  Pricing
                </h2>
                <div className="grid grid-cols-2 gap-[8px]">
                  <div>
                    <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                      Pricing
                    </label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="0.00"
                      className="block w-full px-[12px] py-[8px] bg-[#F4F4F5] rounded-[10px] text-[16px] font-[400] placeholder:text-[#A1A1AA] focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                      Cost Pricing
                    </label>
                    <input
                      type="number"
                      value={costPrice}
                      onChange={(e) => setCostPrice(e.target.value)}
                      placeholder="0.00"
                      className="block w-full px-[12px] py-[8px] bg-[#F4F4F5] rounded-[10px] text-[16px] font-[400] placeholder:text-[#A1A1AA] focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* Variation Checkbox */}
              <div className="space-y-[24px]">
                <h2 className="text-[#09090B] text-[20px] font-[500]">
                  Variation
                </h2>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isVariableProduct}
                    onChange={(e) => setIsVariableProduct(e.target.checked)}
                    className="cursor-pointer rounded-[6px] custom-checkbox focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="isVariable"
                    className="ml-[8px] block text-[14px] text-[#09090B] font-[500]"
                  >
                    This product is variable, has different colors, size, etc.
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[35%] w-full">
            <div className="space-y-[48px]">
              <div>
                <h3 className="text-[20px] leading-[28px] font-[500] mb-[24px]">
                  Product Status
                </h3>
                <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                  Status
                </label>
                <select
                  className="w-full py-[11px] px-[12px] pr-[40px] bg-[#F4F4F5] rounded-[10px] appearance-none relative cursor-pointer"
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
                    id="hideProduct"
                    checked={hidden}
                    onChange={(e) => setHidden(e.target.checked)}
                    className="cursor-pointer rounded-[6px] custom-checkbox focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="hideProduct"
                    className="text-[14px] font-[500] text-[#09090B]"
                  >
                    Hide this product
                  </label>
                </div>
                <p className="text-[14px] font-[400] text-[#3F3F46]">
                  Hidden products are not searchable and visible in storefront.
                  Hidden products are only accessible by direct link.
                </p>
              </div>
              <div>
                <div className="mb-[40px]">
                  <h3 className="text-[#09090B] text-[20px] font-[500] mb-[24px]">
                    Organization
                  </h3>
                  <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                    Collections
                  </label>
                  <div className="flex flex-grow items-center bg-[#F4F4F5] rounded-[10px] ps-[12px] py-[14px]">
                    <LuSearch color="#374151" size={20} className="mr-[8px]" />
                    <input
                      type="text"
                      className="bg-transparent outline-none w-full h-full pe-[12px] placeholder:text-[#52525B]"
                      placeholder="Search for collections"
                      value={collectionInput}
                      onChange={(e) => setCollectionInput(e.target.value)} // Update input value
                      onKeyPress={handleCollectionKeyPress} // Add tag on Enter key press
                    />
                  </div>

                  <div className="flex flex-wrap gap-[8px] mt-[16px]">
                    {selectedCollections.map((collection) => (
                      <span
                        key={collection}
                        className="px-[12px] py-[4px] bg-[#E4E4E7] rounded-full flex items-center text-[#18181B] text-[14px] tracking-[-2%] font-[400]"
                      >
                        {collection}
                        <button
                          className="ml-[2px]"
                          onClick={() => handleRemovecollection(collection)}
                        >
                          <IoMdClose color="#18181B" size={15} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
                <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                  Tags
                </label>
                <div className="flex items-center flex-wrap gap-[8px]">
                  <input
                    type="text"
                    className="flex-grow py-[11px] px-[12px] bg-[#F4F4F5] placeholder:text-[#52525B] rounded-[10px] min-w-[50px]"
                    placeholder="Modern, Classic, Trendy"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)} // Update input value
                    onKeyPress={handleKeyPress} // Add tag on Enter key press
                  />
                  <button
                    className="border border-[#E4E4E7] rounded-full w-[48px] h-[48px] flex items-center justify-center"
                    onClick={handleAddTag} // Add tag on button click
                  >
                    <LuPlus color="#09090B" size={20} />
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
              <div className="pb-[32px]">
                <h3 className="text-[#09090B] text-[20px] font-[500] mb-[24px]">
                  Shipping
                </h3>
                <label className="block text-[#09090B] text-[14px] font-[500] leading-[21.7px] mb-[6px]">
                  Weight
                </label>
                <div className="flex gap-[6px]">
                  <input
                    type="number"
                    placeholder="0"
                    className="flex-1 min-w-0 block w-full py-[11px] px-[12px] placeholder:text-[#52525B] text-[#09090B] bg-[#F4F4F5] text-[16px] rounded-[10px] focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <select className="bg-[#F4F4F5] text-[#09090B] text-[16px] font-[400] rounded-[10px] focus:ring-indigo-500 focus:border-indigo-500 py-[11px] px-[12px]">
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
