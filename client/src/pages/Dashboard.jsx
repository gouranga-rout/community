// client/src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useReferralContext } from "../contexts/ReferralContext";
import axios from "axios";

const Dashboard = () => {
  const { referralLink } = useReferralContext();
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Dashboard loaded successfully!");
  }, []);

  return (
    <div>
      <h2>{message}</h2>
      <p>Your Referral Link: {referralLink}</p>
    </div>
  );
};

export default Dashboard;

