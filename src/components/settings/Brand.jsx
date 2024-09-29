import React from "react";

const BrandSettings = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
        {/* Logo Section */}
        <div className="border border-dashed border-gray-400 rounded-lg p-8">
          <p className="text-center mb-2">
            Choose a file or drag & drop it here
          </p>
          <p className="text-center text-sm text-gray-500">
            JPG or PNG formats, up to 5MB
          </p>
          <div className="mt-4">
            <label className="block text-center font-semibold">Logo</label>
            <p className="text-center text-gray-500 text-xs">
              Min 512x512 px, PNG or JPEG formats.
            </p>
          </div>
        </div>

        {/* Favicon Section */}
        <div className="border border-dashed border-gray-400 rounded-lg p-8">
          <p className="text-center mb-2">
            Choose a file or drag & drop it here
          </p>
          <p className="text-center text-sm text-gray-500">
            JPG or PNG formats, up to 5MB
          </p>
          <div className="mt-4">
            <label className="block text-center font-semibold">Favicon</label>
            <p className="text-center text-gray-500 text-xs">
              Min 50x50px, PNG or JPEG formats.
            </p>
          </div>
        </div>
      </div>

      {/* Header Image Section */}
      <div className="mt-8 border border-dashed border-gray-400 rounded-lg p-8">
        <p className="text-center mb-2">Choose a file or drag & drop it here</p>
        <p className="text-center text-sm text-gray-500">
          JPG or PNG formats, up to 5MB
        </p>
        <div className="mt-4">
          <label className="block text-center font-semibold">
            Header Image
          </label>
          <p className="text-center text-gray-500 text-xs">
            Min 1600x900 px, PNG or JPEG formats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandSettings;
