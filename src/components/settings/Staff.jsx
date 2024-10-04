import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import styles for phone input

const AddStaffModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

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
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone numbers
            </label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputClass="w-full px-4 py-2 bg-gray-100 border w-full border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              containerStyle={{ width: "100%" }}
            />
            {/* <PhoneInput
              country={"us"}
              value={phone} // The phone number value
              onChange={(phone) => setPhone(phone)} // Update state on change
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              inputStyle={{
                width: "100%",
                borderRadius: "0.375rem",
                border: "1px solid #D1D5DB",
                padding: "0.5rem 0.75rem",
                height: "42px",
                fontSize: "16px",
              }}
            /> */}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="marcmarquez@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Roles
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring focus:border-blue-300">
              <option>Admin</option>
              <option>Super Admin</option>
              <option>Member</option>
            </select>
          </div>

          <div>
            <button
              type="button"
              className="w-full py-2 px-4 bg-gray-300 text-white rounded-lg cursor-not-allowed"
              disabled
            >
              Send Invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const StaffSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const staffData = [
    {
      id: 1,
      fullName: "Iva Ryan",
      email: "james_hall@gmail.com",
      role: "Super Admin",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Ricky Smith",
      email: "k.p.allen@aol.com",
      role: "Members",
      status: "Inactive",
    },
    {
      id: 3,
      fullName: "Patricia Sanders",
      email: "s.t.sharkey@outlook.com",
      role: "Admin",
      status: "Active",
    },
    // Add more staff members as needed
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center flex-wrap w-full">
        <h3 className="md:text-[20px] text-[18px] font-[500]">Staff</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="md:px-4 px-3 py-2 md:text-[16px] text-[14px] border border-[#E4E4E7] shadow-md rounded-lg"
        >
          + Add Staff
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto md:pb-[24px] pt-[16px]">
        <div className="border border-[#E4E4E7] rounded-[8px] p-[8px]">
          <table className="min-w-full bg-[#FFFFFF]">
            <thead className="bg-[#FAFAFA] text-left">
              <tr>
                <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] sm:text-[16px] text-[14px] tracking-[-1%]">
                  Full Name
                </th>
                <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] sm:text-[16px] text-[14px] tracking-[-1%]">
                  Email
                </th>
                <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] sm:text-[16px] text-[14px] tracking-[-1%]">
                  Role
                </th>
                <th className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[18px] sm:text-[16px] text-[14px] tracking-[-1%]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {staffData.map((staff) => (
                <tr key={staff.id} className="hover:bg-gray-50">
                  <td className="px-[16px] py-[14px] text-[#09090B] font-[500] md:text-[16px] text-[14px]">
                    {staff.fullName}
                  </td>
                  <td className="px-[16px] py-[14px]  text-[#09090B] font-[400] text-[14px]">
                    {staff.email}
                  </td>
                  <td className="px-[16px] py-[14px]  text-[#09090B] font-[400] text-[14px]">
                    {staff.role}
                  </td>
                  <td className="px-[16px] py-[14px] text-[#09090B] font-[400] text-[14px]">
                    <span
                      className={`px-4 py-1 rounded-[16px] ${
                        staff.status === "Active"
                          ? "text-green-500 bg-[#F0FDF4]"
                          : "text-black bg-[#E4E4E7]"
                      }`}
                    >
                      {staff.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Staff Modal */}
      <AddStaffModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default StaffSettings;
