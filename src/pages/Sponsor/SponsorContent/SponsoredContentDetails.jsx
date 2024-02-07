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
import SponsorContentBox from "../SponsorContentBox/SponsorContentBox.jsx";
import SponsorNavbar from "../SponsorNavbar/SponsorNavbar.jsx";
const SponsoredContentDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const location = useLocation();
  const contentData = location.state?.eventData || null;
  console.log(contentData);
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
        <SponsorNavbar />
        <SponsorContentBox contentData={contentData} />
        {/* <SponserE cardData={EventsCards} /> */}
        <Footer />
      </div>
    </>
  );
};

export default SponsoredContentDetails;
