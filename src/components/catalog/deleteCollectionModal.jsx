import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

const DeleteCollectionModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">Remove 1 selected category</h2>
          <button className="text-gray-500" onClick={onClose}>
            &#x2715;
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Removing a category cannot be restored.
        </p>
        <div className="flex justify-end mt-4 gap-4">
          <button
            className="px-4 py-2 bg-white border border-gray-300 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md"
            onClick={onDelete}
          >
            <span className="flex items-center justify-center gap-1">
              <RiDeleteBin7Line size={18} />
              <span>Delete</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCollectionModal;
