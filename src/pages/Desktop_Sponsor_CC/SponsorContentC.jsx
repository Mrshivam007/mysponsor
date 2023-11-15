import React from "react";
import bgimage from "../../assets/img/circle-bg.png";
import cclogo from "../../assets/img/content-creator.jpg";
import {
  NavBar,
  EventsHeader,
  SocialmediaBox,
  SponsorCC,
  Footer,
} from "../../components";
import { ContentCreators4, ContentCreators8 } from "../../data/data";
import "./cc-page.css";
const SponsorContentC = () => {
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
        <EventsHeader title={"Sponsor Content Creators"} logo={cclogo} />
        <SponsorCC cardData={ContentCreators4} />
        <SocialmediaBox />
        <div className="cc-cards-desktop">
          <SponsorCC cardData={ContentCreators8} />
        </div>
        <div className="cc-cards-mobile">
          <SponsorCC cardData={ContentCreators4} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SponsorContentC;
