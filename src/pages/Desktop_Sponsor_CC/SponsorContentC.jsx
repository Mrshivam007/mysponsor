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
        <SponsorCC cardData={ContentCreators8} />
        <Footer />
      </div>
    </>
  );
};

export default SponsorContentC;
