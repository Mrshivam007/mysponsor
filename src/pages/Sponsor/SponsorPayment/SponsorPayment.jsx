import React from "react";
import "./payment.css";
import bgimage from "../../../assets/img/circle-bg.png";
import SponsorNavbar from "../SponsorNavbar/SponsorNavbar";
import { Footer } from "../../../components";
import SponsorpayCard from "./SponsorpayCard";

const SponsorPayment = () => {
  return (
    <>
      <SponsorNavbar />
      <div
        className="sponsor-pay-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <div className="container">
          <h2 className="sponsor-pay-text">Payment Gateway</h2>
          <h2 className="sponsor-pay-mobile-text">Payment Gateway</h2>
        </div>
        <SponsorpayCard />
        <div className="container">
          <div className="box amount-info">
            <div className="d-flex justify-content-between font-weight-bolder">
              <h5>Sponsor Total</h5>
              <h5>₹50,000</h5>
            </div>
            <div className="d-flex justify-content-between font-weight-bolder">
              <h5>GST(19%)</h5>
              <h5>+ ₹9,000</h5>
            </div>
            <div className="d-flex justify-content-between font-weight-bolder">
              <h5>Platform Fee</h5>
              <h5>+ ₹0</h5>
            </div>
          </div>
          <hr style={{ borderTop: "1px solid #535353" }} />
          <div className="box grand-total">
            <h5 className="text-center">Grand Total</h5>
            <div className="d-flex justify-content-center">
              <span className="bagde-pill text-white text-xl">₹59,000</span>
            </div>
          </div>
          <button className="category-btn btn mb-3" style={{ width: "100%" }}>
            <p className="category-btn-text">Sponsor</p>
          </button>
          <div className="payment-description">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              adipisci voluptates esse ut impedit, assumenda quae nam
              voluptatum, ad temporibus dolore nobis eveniet dolor! Consequatur
              nulla saepe, nesciunt mollitia voluptates aut voluptatem id
              repudiandae dignissimos, voluptatibus tenetur expedita autem culpa
              nihil deleniti omnis? Iusto enim quae voluptate assumenda illo
              harum!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SponsorPayment;
