import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/authentication/Signup"; // Ensure the path is correct
import "./App.css";
import CreatePassword from "./pages/authentication/CreatePassword";
import OTP from "./pages/authentication/OTP";
import Verify from "./pages/authentication/Verify";
import Success from "./pages/authentication/Success";
import Preferences from "./pages/store/Preference";
import StoreName from "./pages/store/StoreName";
import SetupPayout from "./pages/store/Payout";
import SetupSecurity from "./pages/store/Security";
import Dashboard from "./pages/home/Dashboard";
import Settings from "./pages/settings/Settings";
import Wallet from "./pages/finance/Wallet";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/create-password" element={<CreatePassword />} />
          <Route path="/signup/otp" element={<OTP />} />
          <Route path="/signup/verify" element={<Verify />} />
          <Route path="/signup/success" element={<Success />} />
          <Route path="/store/preference" element={<Preferences />} />
          <Route path="/store/name" element={<StoreName />} />
          <Route path="/store/payout" element={<SetupPayout />} />
          <Route path="/store/security" element={<SetupSecurity />} />
          {/* You can add more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
