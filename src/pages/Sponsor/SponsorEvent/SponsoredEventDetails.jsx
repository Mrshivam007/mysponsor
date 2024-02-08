import React, { useEffect } from "react";
import bgimage from "../../../assets/img/circle-bg.png";
import { EventsCards } from "../../../data/data.js";
import {
  Footer,
  MyEventsBox,
  NavBar,
  SponserE,
} from "../../../components/index.js";
import { useLocation } from "react-router-dom";
import SponsorEventBox from "../SponsorEventBox/SponsorEventBox.jsx";
import SponsorNavbar from "../SponsorNavbar/SponsorNavbar.jsx";
import SponsorFooter from "../../../components/Footer/SponsorFooter.jsx";
const SponsoredEventDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const location = useLocation();
  const eventData = location.state?.eventData || null;
  console.log("This is events api in sponsor events details page",eventData);
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
        
        <SponsorEventBox eventData={eventData} />
        <SponserE cardData={EventsCards} />
        
      </div>
    </>
  );
};

export default SponsoredEventDetails;
