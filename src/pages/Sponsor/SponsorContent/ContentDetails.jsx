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
import MyContentBox from "../../../components/My_Content_Details_Box/MyContentBox.jsx";
import SponsorContentBox from "./SponsorContentBox.jsx";
import MyContentSponsor from "./MyContentSponsor.jsx";
const ContentDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const location = useLocation();
  const contentData = location.state?.contentData || null;
  console.log(contentData);
  return (
    <>
      <div
        className="myevents-bg"
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: '1%',
          backgroundImage: `url(${bgimage})`,
        }}
      >
        
        {/* <SponsorContentBox contentData={contentData} /> */}
        <MyContentSponsor contentData={contentData} />
        {/* <SponserE cardData={EventsCards} /> */}
        
      </div>
    </>
  );
};

export default ContentDetails;
