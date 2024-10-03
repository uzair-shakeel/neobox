import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const RootComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // mobile breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // check on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StrictMode>
      {/*
      {isMobile ? (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="p-6 bg-white rounded-lg mx-6 shadow-lg text-center max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Mobile Version Coming Soon
            </h2>
            <p className="text-gray-600">
              The mobile version will be updated after a day. Please check the
              desktop version in the meantime. Apologies for the inconvience ;D
            </p>
          </div>
        </div>
      ) : (
        <App />
      )}
    */}

      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<RootComponent />);
