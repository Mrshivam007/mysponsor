import React from "react";
import SponserE from "../../components/Sponser/SponserE";
import EventsHeader from "../../components/Header/events-header";
import bgimage from "../../assets/img/circle-bg.png";
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import spevents from "../../assets/img/sponsor_events-logo.png";
import { cardData3 } from "../../data/data";
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
        <SponserE cardData={cardData3} line={"Festival Events"} />
        <SponserE cardData={cardData3} line={"Concerts"} />
        <SponserE cardData={cardData3} line={"Promotional Events"} />
        <SponserE cardData={cardData3} line={"Sports Events"} />
        <SponserE cardData={cardData3} line={"Comedy Shows"} />
        <SponserE cardData={cardData3} line={"Motivational Events"} />
        <SponserE cardData={cardData3} line={"Reality Shows"} />
        <Footer />
      </div>
    </>
  );
};

export default SponsorEvents;
