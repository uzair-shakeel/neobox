import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import styles for phone input

const EditStaffModal = ({ isOpen, onClose, staff, onUpdateStaff }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Admin");
  const [status, setStatus] = useState("Active");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (staff) {
      setFullName(staff.fullName);
      setEmail(staff.email);
      setRole(staff.role);
      setPhone(staff.phone);
      setStatus(staff.status); // Assuming status is part of the staff object
    }
  }, [staff]);

  if (!isOpen) return null;

  const handleUpdateStaff = () => {
    const updatedStaff = {
      ...staff,
      fullName,
      email,
      role,
      status,
      phone,
    };
    onUpdateStaff(updatedStaff);
    onClose(); // Close the modal after updating
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[400px] p-6 relative">
        {/* Modal Header */}
        <div className="flex justify-between flex-col items-center mb-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 absolute right-4 top-5"
          >
            ✕
          </button>
          <h2 className="text-[18px] font-semibold">Edit Staff</h2>
          <p className="text-sm text-[#3F3F46]">Edit Store Member Details</p>
        </div>

        {/* Modal Content */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Marc"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone numbers
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="marcmarquez@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Roles
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Admin</option>
              <option>Super Admin</option>
              <option>Member</option>
            </select>
          </div>

          <div>
            <button
              type="button"
              onClick={handleUpdateStaff}
              className="w-full py-2 px-4 mb-3 bg-[#151515] text-base text-white rounded-lg"
            >
              Save
            </button>

            <button
              type="button"
              className="w-full py-2 px-4 bg-[#DF1C41] text-base text-white rounded-lg"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStaffModal;
