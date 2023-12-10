import React from "react";
import paymentImg from "../../../assets/img/payment-img.jpg";
import heart from "../../../assets/img/heart2.svg";
import bgimage from "../../../assets/img/circle-bg.png";
import { Footer, NavBar } from "../../../components";
import ContentDetailsBox from "../ContentDetailBox/ContentDetailsBox";
const ContentDetails = () => {
  return (
    <>
      <div
        className="events-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <NavBar />
        <ContentDetailsBox />
        <Footer />
      </div>
    </>
  );
};

export default ContentDetails;
