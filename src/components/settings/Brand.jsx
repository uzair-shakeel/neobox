import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const BrandSettings = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        {/* Logo Section */}
        <div className="border border-gray-400 rounded-lg p-8">
          <div className="bg-[#FAFAFA] border border-dashed cursor-pointer border-[#D4D4D8] rounded-[8px] px-[24px] py-[16px]">
            <div className="h-[25px] w-auto">
              <AiOutlineCloudUpload className="h-full w-full object-cover" />
            </div>
            <p className="text-center mb-2 text-[14px] font-[500]">
              Choose a file or drag & drop it here
            </p>
            <p className="text-center text-[12px] text-gray-500">
              JPG or PNG formats, up to <br /> 5MB
            </p>
          </div>
          <div className="mt-4">
            <label className="block text-start text-[16px] font-[500]">
              Logo
            </label>
            <p className="text-start text-gray-500 text-[14px]">
              Min 512x512 px, PNG or JPEG formats.
            </p>
          </div>
        </div>

        {/* Favicon Section */}
        <div className="border  border-gray-400 rounded-lg p-8">
          <div className="bg-[#FAFAFA] border border-dashed cursor-pointer border-[#D4D4D8] rounded-[8px] px-[24px] py-[16px]">
            <div className="h-[25px] w-auto">
              <AiOutlineCloudUpload className="h-full w-full object-cover" />
            </div>
            <p className="text-center mb-2 text-[14px] font-[500]">
              Choose a file or drag & drop it here
            </p>
            <p className="text-center text-[12px] text-gray-500">
              JPG or PNG formats, up to <br /> 5MB
            </p>
          </div>
          <div className="mt-4">
            <label className="block text-start font-[500] text-[16px]">
              Favicon
            </label>
            <p className="text-start text-gray-500 text-[14px]">
              Min 50x50px, PNG or JPEG formats.
            </p>
          </div>
        </div>
      </div>

      {/* Header Image Section */}
      <div className="mt-8 border  border-gray-400 rounded-lg p-8">
        <div className="bg-[#FAFAFA] border border-dashed cursor-pointer border-[#D4D4D8] rounded-[8px] px-[24px] py-[16px]">
          <div className="h-[25px] w-auto">
            <AiOutlineCloudUpload className="h-full w-full object-cover" />
          </div>
          <p className="text-center mb-2 text-[14px] font-[500]">
            Choose a file or drag & drop it here
          </p>
          <p className="text-center text-[12px] text-gray-500">
            JPG or PNG formats, up to <br /> 5MB
          </p>
        </div>
        <div className="mt-4">
          <label className="block text-start font-[500] text-[16px]">
            Header Image
          </label>
          <p className="text-start text-gray-500 text-[14px]">
            Min 1600x900 px, PNG or JPEG formats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandSettings;
