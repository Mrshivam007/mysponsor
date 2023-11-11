import React from "react";
import bgimage from "../../assets/img/circle-bg.png";
import cclogo from "../../assets/img/content-creator.jpg";
import EventsHeader from "../../components/Header/events-header";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/navbar";
import SponsorCC from "../../components/Sponser/SponsorCC";
import Categories from "../../components/Categories/Categories";
const SponsorContentC = () => {
  const cardData = [
    {
      id: 1,
      name: 'Mr. Beast',
      platform: 'Youtube',
      price: '1 Million <',
      people: '50 Million',
    },
    {
      id: 2,
      name: 'Mr. Beast',
      platform: 'Youtube',
      price: '1 Million <',
      people: '50 Million',
    },
    {
      id: 3,
      name: 'Mr. Beast',
      platform: 'Youtube',
      price: '1 Million <',
      people: '50 Million',
    },
    {
      id: 4,
      name: 'Mr. Beast',
      platform: 'Youtube',
      price: '1 Million <',
      people: '50 Million',
    },
    // Add more data objects as needed
  ];
  const cardData2 = [
    {
      id: 1,
      name: 'Mr. Beast',
      platform: 'Youtube',
      price: '1 Million <',
      people: '50 Million',
    },
    {
      id: 2,
      name: 'Mr. Beast',
      platform: 'Youtube',
      price: '1 Million <',
      people: '50 Million',
    },
    {
      id: 3,
      name: 'Mr. Beast',
      platform: 'Youtube',
      price: '1 Million <',
      people: '50 Million',
    },
    {
      id: 4,
      name: 'Mr. Beast',
      platform: 'Youtube',
      price: '1 Million <',
      people: '50 Million',
    },
    {
      id: 5,
      name: 'Mr. Beast',
      platform: 'Youtube',
      price: '1 Million <',
      people: '50 Million',
    },
    {
      id: 6,
      name: 'Mr. Beast',
      platform: 'Youtube',
      price: '1 Million <',
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
        <EventsHeader title={"Sponsor Content Creators"} logo={cclogo} />
        <SponsorCC cardData={cardData} />
        <SponsorCC cardData={cardData2} />
        <Footer />
      </div>
    </>
  );
};

export default SponsorContentC;
