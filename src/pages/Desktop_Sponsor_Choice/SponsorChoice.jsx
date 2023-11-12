import React from "react";
import bgimage from "../../assets/img/circle-bg.png";
import spevents from "../../assets/img/sponsor_events-logo.png";
import {
  NavBar,
  EventsHeader,
  Choice,
  Footer,
  SponserE,
  Banner,
  SponsorCC,
} from "../../components";
import { ContentCreators4, EventsCards } from "../../data/data";
const SponsorChoice = () => {
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
        <EventsHeader title={"Sponsor Choice"} logo={spevents} />
        <Choice />
        <SponserE line={"Sponser Events Near You"} cardData={EventsCards} />
      </div>
      <Banner />
      <div className="container category-container">
        <SponsorCC cardData={ContentCreators4} />
      </div>
      <Footer />
    </>
  );
};

export default SponsorChoice;
