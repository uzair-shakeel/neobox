import React from "react";

const StaffSettings = () => {
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
    <div className="">
      <div className="flex justify-between items-center flex-wrap w-full">
        <h3 className="md:text-[20px] text-[18px] font-[500]">Staff</h3>
        <button className="md:px-4 px-3 py-2 md:text-[16px] text-[14px] border border-[#E4E4E7] shadow-md rounded-lg">
          + Add Staff
        </button>
      </div>
      {/* Wrapping the table in a scrollable container */}
      <div className="overflow-x-auto md:pb-[24px]  pt-[16px]">
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
    </div>
  );
};

export default StaffSettings;
