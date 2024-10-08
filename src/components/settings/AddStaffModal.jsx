import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import styles for phone input

const AddStaffModal = ({ isOpen, onClose, onAddStaff }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Admin");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  const handleAddStaff = () => {
    const newStaff = {
      id: Date.now(), // Generate a unique ID
      fullName,
      email,
      role,
      phone, // Include the phone number
    };
    onAddStaff(newStaff);
    onClose(); // Close the modal after adding
  };

  // Check if all fields are filled
  const isFormValid = () => {
    return fullName && email && phone; // Check if all required fields are not empty
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[400px] p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-semibold">Add Staff</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Marc"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)} // Update state
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <PhoneInput
              country={"us"}
              placeholder="+1 Phone number"
              value={phone}
              onChange={setPhone}
              className="!w-full"
              inputClass="!w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="marcmarquez@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Roles
            </label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={role}
              onChange={(e) => setRole(e.target.value)} // Update state
            >
              <option>Admin</option>
              <option>Super Admin</option>
              <option>Member</option>
            </select>
          </div>

          <div>
            <button
              type="button"
              // onClick={handleAddStaff} // Handle click event
              className={`w-full py-2 px-4 ${
                isFormValid() ? "bg-black text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } rounded-lg`}
              disabled={!isFormValid()} // Disable button if form is not valid
            >
              Send Invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffModal;
