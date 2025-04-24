import React, { useEffect, useState } from "react";
import { useReferralContext } from "../contexts/ReferralContext";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const { referralLink } = useReferralContext();

  useEffect(() => {
    // Example API call to fetch data using axios
    const fetchData = async () => {
      try {
        const response = await axios.get("/your/api/endpoint");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [referralLink]);

  return (
    <div>
      <h1>Dashboard</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;

