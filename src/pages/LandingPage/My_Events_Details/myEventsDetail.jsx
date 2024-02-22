import React, { useEffect } from "react";
import "./myeventdetails.css";
import bgimage from "../../../assets/img/circle-bg.png";
import { EventsCards } from "../../../data/data.js";
import {
  Footer,
  MyEventsBox,
  NavBar,
  SponserE,
} from "../../../components/index.js";
import { useLocation } from "react-router-dom";
import MyEventSponsor from "../../../components/My_Event_Sponsor_Box/MySponsorEvent.jsx";
const MyEventsDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const location = useLocation();
  const eventData = location.state?.eventData || null;
  console.log(eventData);
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
        
        <MyEventSponsor eventData={eventData} />
        <SponserE cardData={EventsCards} />
        
      </div>
    </>
  );
};

export default MyEventsDetail;
