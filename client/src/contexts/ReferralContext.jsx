// client/src/contexts/ReferralContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ReferralContext = createContext();

export const ReferralProvider = ({ children }) => {
  const [referralLink, setReferralLink] = useState("");

  useEffect(() => {
    const fetchReferral = async () => {
      try {
        const res = await axios.get("https://community-fc8g.onrender.com/api/referral");
        setReferralLink(res.data.referralLink);
      } catch (err) {
        console.error("Error fetching referral:", err);
      }
    };
    fetchReferral();
  }, []);

  return (
    <ReferralContext.Provider value={{ referralLink }}>
      {children}
    </ReferralContext.Provider>
  );
};

export const useReferralContext = () => useContext(ReferralContext);
