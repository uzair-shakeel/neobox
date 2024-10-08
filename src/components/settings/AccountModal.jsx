import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AccountModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // State to manage input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Condition to check if all fields are filled
  const isFormComplete = firstName && lastName && phone && email;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg relative">
        <h2 className="text-center text-xl font-semibold mb-4">Account</h2>
        <p className="text-center text-gray-500 mb-6">
          Add new members to your store
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
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
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Button that changes style based on form completion */}
          <button
            className={`w-full mt-4 p-2 rounded-md ${
              isFormComplete
                ? "bg-black text-white"
                : "bg-gray-300 text-white"
            }`}
            disabled={!isFormComplete} // Optionally disable button if form isn't complete
          >
            Save
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          <MdClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default AccountModal;
