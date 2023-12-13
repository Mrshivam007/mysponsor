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
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <NavBar />
        <SponsorPay />
        <SponserE line={"Festival Events"} cardData={EventsCards} />
        <Footer />
      </div>
    </>
  );
};

export default PaymentGateway;
