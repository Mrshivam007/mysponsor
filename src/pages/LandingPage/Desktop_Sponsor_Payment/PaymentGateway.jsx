import React from "react";
import bgimage from "../../../assets/img/circle-bg.png";
import { Footer, NavBar, SponserE, SponsorPay } from "../../../components/index.js";
import { EventsCards } from "../../../data/data.js";
const PaymentGateway = () => {
  return (
    <>
      <div
        className="payment-bg"
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: '1%',
          backgroundImage: `url(${bgimage})`,
        }}
      >
        
        <SponsorPay />
        <SponserE line={"Festival Events"} cardData={EventsCards} />
        
      </div>
    </>
  );
};

export default PaymentGateway;
