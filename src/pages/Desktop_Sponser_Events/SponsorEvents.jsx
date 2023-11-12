import React from "react";
import { NavBar, EventsHeader, SponserE, Footer } from "../../components";
import bgimage from "../../assets/img/circle-bg.png";
import spevents from "../../assets/img/sponsor_events-logo.png";
import { EventsCards } from "../../data/data";
const SponsorEvents = () => {
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
        <EventsHeader title={"Sponsor Events"} logo={spevents} />
        <SponserE cardData={EventsCards} line={"Festival Events"} />
        <SponserE cardData={EventsCards} line={"Concerts"} />
        <SponserE cardData={EventsCards} line={"Promotional Events"} />
        <SponserE cardData={EventsCards} line={"Sports Events"} />
        <SponserE cardData={EventsCards} line={"Comedy Shows"} />
        <SponserE cardData={EventsCards} line={"Motivational Events"} />
        <SponserE cardData={EventsCards} line={"Reality Shows"} />
        <Footer />
      </div>
    </>
  );
};

export default SponsorEvents;
