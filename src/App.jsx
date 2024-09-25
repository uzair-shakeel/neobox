import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup"; // Ensure the path is correct
import "./App.css";
import CreatePassword from "./pages/CreatePassword";
import OTP from "./pages/OTP";
import Verify from "./pages/Verify";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/success" element={<Success />} />
          {/* You can add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
