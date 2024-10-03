import React, { useState } from "react";
import Sidebar from "../../components/Sidebar"; // Import the sidebar
import GeneralSettings from "../../components/settings/General"; // Import GeneralSettings
import StaffSettings from "../../components/settings/Staff"; // Import StaffSettings
import BrandSettings from "../../components/settings/Brand"; // Import BrandSettings
import { IoIosHelpCircleOutline } from "react-icons/io";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("General");
  const [isAccountModalOpen, setAccountModalOpen] = useState(false);
  const [isStoreInfoModalOpen, setStoreInfoModalOpen] = useState(false);
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);

  // Function to handle switching between tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const isModalOpen =
    isAccountModalOpen || isStoreInfoModalOpen || isLanguageModalOpen;

  return (
    <div className={`min-h-screen flex bg-white `}>
      {/* Sidebar Component */}
      <div className={isModalOpen ? "blur-[2px]" : ""}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex-grow p-8 `}>
        <div className="flex justify-between items-center">
          <h2
            className={`text-[24px] font-[500] ${
              isModalOpen ? "blur-[2px]" : ""
            }`}
          >
            Settings
          </h2>
          <button className="text-[16px] flex gap-2 items-center text-gray-500 hover:underline">
            <IoIosHelpCircleOutline size={20} />
            Help and Feedback
          </button>
        </div>

        {/* Tabs */}
        <div
          className={`border-b mt-6 mb-8 ${isModalOpen ? "blur-[2px]" : ""}`}
        >
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => handleTabChange("General")}
              className={`text-[16px] font-medium ${
                activeTab === "General"
                  ? "border-b-2 border-[#A3E635] text-black"
                  : "text-gray-500"
              } py-4 px-1`}
            >
              General
            </button>
            <button
              onClick={() => handleTabChange("Staff")}
              className={`text-[16px] font-medium ${
                activeTab === "Staff"
                  ? "border-b-2 border-[#A3E635] text-black"
                  : "text-gray-500"
              } py-4 px-1`}
            >
              Staff
            </button>
            <button
              onClick={() => handleTabChange("Brand")}
              className={`text-[16px] font-medium ${
                activeTab === "Brand"
                  ? "border-b-2 border-[#A3E635] text-black"
                  : "text-gray-500"
              } py-4 px-1`}
            >
              Brand
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === "General" && (
          <GeneralSettings
            isAccountModalOpen={isAccountModalOpen}
            isStoreInfoModalOpen={isStoreInfoModalOpen}
            isLanguageModalOpen={isLanguageModalOpen}
            setLanguageModalOpen={setLanguageModalOpen}
            setAccountModalOpen={setAccountModalOpen}
            setStoreInfoModalOpen={setStoreInfoModalOpen}
            isModalOpen={isModalOpen}
          />
        )}
        {activeTab === "Staff" && <StaffSettings />}
        {activeTab === "Brand" && <BrandSettings />}
      </div>
    </div>
  );
};

export default Settings;
