import React, { useEffect } from "react";
import "./myeventdetails.css";
import bgimage from "../../assets/img/circle-bg.png";
import { EventsCards } from "../../data/data.js";
import {
  Footer,
  MyEventsBox,
  NavBar,
  SponserE,
} from "../../components/index.js";
const MyEventsDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  return (
    <>
      <div
        className="myevents-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <NavBar />
        <MyEventsBox />
        <SponserE cardData={EventsCards} />
        <Footer />
      </div>
    </>
  );
};

export default MyEventsDetail;
