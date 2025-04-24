// src/contexts/ReferralContext.jsx

import { createContext, useContext, useState } from 'react';

// Create Context for Referral and Auth
const ReferralContext = createContext();

// Context Provider Component
export const ReferralProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state
  const [referralLink, setReferralLink] = useState(''); // Referral link state

  const login = (userData) => {
    setUser(userData);
    setReferralLink(userData.referralLink); // Assuming userData has referralLink
  };

  const logout = () => {
    setUser(null);
    setReferralLink('');
  };

  return (
    <ReferralContext.Provider value={{ user, referralLink, login, logout }}>
      {children}
    </ReferralContext.Provider>
  );
};

// Custom Hook to use the Referral Context
export const useReferralContext = () => {
  return useContext(ReferralContext);
};

