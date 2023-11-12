import React from "react";
import bgimage from "../../assets/img/circle-bg.png";
import cclogo from "../../assets/img/content-creator.jpg";
import EventsHeader from "../../components/Header/events-header";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/navbar";
import SponsorCC from "../../components/Sponser/SponsorCC";
import SocialmediaBox from "../../components/Categories/SocialmediaBox";
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
        <SponsorCC end={4} />
        <SocialmediaBox />
        <SponsorCC end={8} />
        <Footer />
      </div>
    </>
  );
};

export default SponsorContentC;
