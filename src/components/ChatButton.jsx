import React from "react";
import { RiMessage2Line } from "react-icons/ri";

const ChatButton = () => {
  return (
    <button className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg">
      <RiMessage2Line size={24} />
    </button>
  );
};

export default ChatButton;
