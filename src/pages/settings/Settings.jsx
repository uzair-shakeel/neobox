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
    <div className={`min-h-screen w-screen overflow-hidden flex bg-white `}>
      {/* Sidebar Component */}
      <div className={isModalOpen ? "blur-[2px]" : ""}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div
        className={`${
          activeTab === "Staff" ? "w-[80%] sm:w-full" : "w-full"
        } lg:px-[32px] md:px-[24px] px-[16px]`}
      >
        <div className="flex justify-between items-center flex-wrap gap-[6px] pt-5">
          <h2
            className={`md:text-[24px] text-[20px] font-[500] ${
              isModalOpen ? "blur-[2px]" : ""
            }`}
          >
            Settings
          </h2>
          <button className="md:text-[16px] text-[14px] flex lg:gap-2 gap-1 items-center text-gray-500 hover:underline">
            <IoIosHelpCircleOutline className="md:w-[20px] md:h-[20px] h-[18px] w-[18px]" />
            Help and Feedback
          </button>
        </div>

        {/* Tabs */}
        <div
          className={`border-b mt-6 mb-8 ${isModalOpen ? "blur-[2px]" : ""}`}
        >
          <nav className="-mb-px flex md:space-x-8 space-x-4">
            <button
              onClick={() => handleTabChange("General")}
              className={`md:text-[16px] text-[14px] font-medium ${
                activeTab === "General"
                  ? "border-b-2 border-[#A3E635] text-black"
                  : "text-gray-500"
              } py-4 px-1`}
            >
              General
            </button>
            <button
              onClick={() => handleTabChange("Staff")}
              className={`md:text-[16px] text-[14px] font-medium ${
                activeTab === "Staff"
                  ? "border-b-2 border-[#A3E635] text-black"
                  : "text-gray-500"
              } py-4 px-1`}
            >
              Staff
            </button>
            <button
              onClick={() => handleTabChange("Brand")}
              className={`md:text-[16px] text-[14px] font-medium ${
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
