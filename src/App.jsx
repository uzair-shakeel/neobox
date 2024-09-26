import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/authentication/Signup"; // Ensure the path is correct
import "./App.css";
import CreatePassword from "./pages/authentication/CreatePassword";
import OTP from "./pages/authentication/OTP";
import Verify from "./pages/authentication/Verify";
import Success from "./pages/authentication/Success";
import Preferences from "./pages/set-up-store/Preference";

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
          <Route path="/store/preference" element={<Preferences />} />
          {/* You can add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
