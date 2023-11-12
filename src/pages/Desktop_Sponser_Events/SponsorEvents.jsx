import React from "react";
import SponserE from "../../components/Sponser/SponserE";
import EventsHeader from "../../components/Header/events-header";
import bgimage from "../../assets/img/circle-bg.png";
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import spevents from "../../assets/img/sponsor_events-logo.png";
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
        <SponserE line={"Festival Events"} />
        <SponserE line={"Concerts"} />
        <SponserE line={"Promotional Events"} />
        <SponserE line={"Sports Events"} />
        <SponserE line={"Comedy Shows"} />
        <SponserE line={"Motivational Events"} />
        <SponserE line={"Reality Shows"} />
        <Footer />
      </div>
    </>
  );
};

export default SponsorEvents;
