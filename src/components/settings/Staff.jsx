import React from "react";

const StaffSettings = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-[20px] font-[500]">Staff</h3>
        <button className="mt-4 px-4 py-2 border border-[#E4E4E7] shadow-md rounded-lg">
          + Add Staff
        </button>
      </div>
      <table className="min-w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left text-[16px] font-[500]">
              Full Name
            </th>
            <th className="border border-gray-300 p-2 text-left text-[16px] font-[500]">
              Email
            </th>
            <th className="border border-gray-300 p-2 text-left text-[16px] font-[500]">
              Role
            </th>
            <th className="border border-gray-300 p-2 text-left text-[16px] font-[500]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-[16px]">
            <td className="border border-gray-300 p-2 text-[16px] font-[500]">
              Iva Ryan
            </td>
            <td className="border border-gray-300 p-2">james_hall@gmail.com</td>
            <td className="border border-gray-300 p-2">Super Admin</td>
            <td className="border border-gray-300 p-2 ">
              <span className="text-green-500 bg-[#F0FDF4] px-4 py-1 rounded-[16px]">
                Active
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-[16px] font-[500]">
              Ricky Smith
            </td>
            <td className="border border-gray-300 p-2">k.p.allen@aol.com</td>
            <td className="border border-gray-300 p-2">Members</td>
            <td className="border border-gray-300 p-2 ">
              <span className="text-black bg-[#E4E4E7] px-4 py-1 rounded-[16px]">
                Inactive
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-[16px] font-[500]">
              Patricia Sanders
            </td>
            <td className="border border-gray-300 p-2">
              s.t.sharkey@outlook.com
            </td>
            <td className="border border-gray-300 p-2">Admin</td>
            <td className="border border-gray-300 p-2 ">
              <span className="text-green-500 bg-[#F0FDF4] px-4 py-1 rounded-[16px]">
                Active
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StaffSettings;
