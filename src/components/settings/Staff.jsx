import React, { useState } from "react";
import AddStaffModal from "./AddStaffModal";
import EditStuffModal from "./EditStuffModal";

const StaffSettings = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [staffData, setStaffData] = useState([
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
      role: "Member",
      status: "Inactive",
    },
    {
      id: 3,
      fullName: "Patricia Sanders",
      email: "s.t.sharkey@outlook.com",
      role: "Admin",
      status: "Active",
    },
  ]);

  const handleRowClick = (staff) => {
    setSelectedStaff(staff);
    setIsEditModalOpen(true);
  };

  const handleAddStaff = (newStaff) => {
    setStaffData((prevData) => [...prevData, newStaff]);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center flex-wrap w-full">
        <h3 className="md:text-[20px] text-[18px] font-[500]">Staff</h3>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="md:px-4 px-3 py-2 md:text-[16px] text-[14px] font-medium border border-[#E4E4E7] rounded-lg"
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
                <tr
                  key={staff.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleRowClick(staff)}
                >
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
                      className={`px-4 py-1 rounded-[16px] ${staff.status === "Active"
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
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddStaff={handleAddStaff} // Pass the add staff function
      />

      {/* Edit Staff Modal */}
      <EditStuffModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        staff={selectedStaff} // Pass the selected staff to the modal
      />
    </div>
  );
};

export default StaffSettings;
