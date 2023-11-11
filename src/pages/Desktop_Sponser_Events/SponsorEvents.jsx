import React from "react";
import SponserE from "../../components/Sponser/SponserE";
import EventsHeader from "../../components/Header/events-header";
import bgimage from "../../assets/img/circle-bg.png";
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import spevents from "../../assets/img/sponsor_events-logo.png";
const SponsorEvents = () => {
  const cardData = [
    {
      id: 1,
      name: 'Mr. Beast',
      location: 'Durg, C.G.',
      platform: 'Youtube',
      price: '1 Million<',
      people: '50 Million',
    },
    {
      id: 2,
      name: 'Mr. Beast',
      location: 'Durg, C.G.',
      platform: 'Youtube',
      price: '1 Million<',
      people: '50 Million',
    },
    {
      id: 3,
      name: 'Mr. Beast',
      location: 'Durg, C.G.',
      platform: 'Youtube',
      price: '1 Million<',
      people: '50 Million',
    },
    {
      id: 4,
      name: 'Mr. Beast',
      location: 'Durg, C.G.',
      platform: 'Youtube',
      price: '1 Million<',
      people: '50 Million',
    },
    // Add more data objects as needed
  ];
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
        <SponserE line={"Festival Events"} cardData={cardData}  />
        <SponserE line={"Concerts"} cardData={cardData} />
        <SponserE line={"Promotional Events"} cardData={cardData} />
        <SponserE line={"Sports Events"} cardData={cardData} />
        <SponserE line={"Comedy Shows"} cardData={cardData} />
        <SponserE line={"Motivational Events"} cardData={cardData} />
        <SponserE line={"Reality Shows"} cardData={cardData} />
        <Footer />
      </div>
    </>
  );
};

export default SponsorEvents;
