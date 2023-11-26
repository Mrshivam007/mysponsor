import React from "react";
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
        <SponserE line={"Festival Events"} cardData={EventsCards} />
        <Footer />
      </div>
    </>
  );
};

export default MyEventsDetail;
