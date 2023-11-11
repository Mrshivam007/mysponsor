import React from "react";
import bgimage from "../../assets/img/circle-bg.png";
import spevents from "../../assets/img/sponsor_events-logo.png";
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import EventsHeader from "../../components/Header/events-header"

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
        <Footer />
      </div>
    </>
  );
};

export default SponsorChoice;
