import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";

export function Statictics() {
 const [myDonation, setMyDonation] = useState(0);

 useEffect(() => {
  const donationGiven = JSON.parse(localStorage.getItem('donationGiven')) || []

    const total = donationGiven.length
    setMyDonation(total);

 }, [])
 console.log(myDonation);

  const data = [
    ["Donation", "Percentage per donation"],
    ["Total Donation", 12],
    ["Your Donation", myDonation],
    
  ];

  return (
     <Chart
      chartType="PieChart"
      data={data}
      width={"100%"}
      height={"500px"}
    />
    
    
  );
}
export default Statictics;