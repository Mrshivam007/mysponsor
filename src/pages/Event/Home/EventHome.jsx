import React, { useEffect, useState } from "react";
import calendar from "../../../assets/img/calendar.svg";
import camera from "../../../assets/img/camera.svg";
import listevents from "../../../assets/img/list_events.png";
import bgimage from "../../../assets/img/circle-bg.png";
import cardImg1 from "../../../assets/img/list_events_card1.jpg";
import cardImg2 from "../../../assets/img/list_events_card2.jpg";
import cardImg3 from "../../../assets/img/list_events_card3.jpg";
import { EventsHeader, Footer, NavBar } from "../../../components";
import { Link } from "react-router-dom";
import YourEvent from "../YourEvent/YourEvent";
import EventNavBar from "../EventNavbar/EventNavbar";
const EventHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  return (
    <>
      <div
        className="list-events-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        
        {/* ---DESKTOP VIEW---  */}
        <div className="desktop-view">
          <EventsHeader title={"List Events"} logo={listevents} />
          {/* <Choice /> */}
          <YourEvent />
        </div>
        {/* ---DESKTOP VIEW END--- */}
        {/* ---MOBILE VIEW--- */}

        <div className="mobile-view">
          <h2 className="sponsor-mobile-text">Get your event listed</h2>
          <div className="page-section">
        {/* <h1 className="choice-heading">{line}</h1> */}

        <div className="container choice-container">
          <div className="row" style={{ flexWrap: "nowrap" }}>
            <div className="col-lg-6">
              <Link to="/events">
                <div
                  className="card-service wow fadeInUp choice-card"
                  style={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="body choice-body choice-1 text-left">
                    <h2 className="font-weight-bolder mb-0">Events</h2>
                    <div className="card_line"></div>
                    <p className="choice-para mt-2 text-left">
                      We help you define your SEO objective & develop a
                      realistic strategy with you
                    </p>
                    <button
                      to="/events"
                      className="choice-btn btn text-white py-1 font-weight-bold"
                      style={{
                        float: "left",
                        backgroundColor: "#00448B",
                        borderRadius: "15px",
                      }}
                    >
                      Explore now
                    </button>
                  </div>
                  <div
                    className="header choice-img mb-0"
                  >
                    <img src={calendar} alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link to="/sponsored_events">
                <div
                  className="card-service wow fadeInUp choice-card"
                  style={{
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="body choice-body choice-2 text-left">
                    <h2 className="font-weight-bolder mb-0">
                      Sponsored Event
                    </h2>
                    <div className="card_line"></div>
                    <p className="choice-para mt-2 text-left">
                      We help you define your SEO objective & develop a
                      realistic strategy with you
                    </p>
                    <button
                      to="/cc"
                      className="choice-btn btn text-white py-1 font-weight-bold"
                    >
                      Explore now
                    </button>
                  </div>
                  <div className="header choice-img mb-0">
                    <img src={camera} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </div>
        {/* ---MOBILE VIEW END--- */}
        <div className="container">
          <div className="list-events-box">
            <h2>
              List your event and get sponsored worldwide by different sponsors
            </h2>
          </div>
        </div>
        <div className="container events-home-cards mb-5">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card list-events-card">
                <img
                  src={cardImg1}
                  alt="..."
                  style={{
                    padding: "5%",
                    borderRadius: "25px",
                  }}
                />
                <div className="card-body" style={{ padding: "0 0 0 5%" }}>
                  <h5 className="card-text font-weight-bold">
                    Want your events sponsored?
                  </h5>
                  <button
                    className="btn text-white p-1 font-weight-bold mb-3"
                  >
                    <Link to={"create_event"} style={{color: 'white'}} >
                      List an Events
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card list-events-card">
                <img
                  src={cardImg2}
                  alt="..."
                  style={{
                    padding: "5%",
                    borderRadius: "25px",
                  }}
                />
                <div className="card-body" style={{ padding: "0 0 0 5%" }}>
                  <h5 className="card-text font-weight-bold">
                    Update Your Event
                  </h5>
                  <button
                    className="btn text-white p-1 font-weight-bold mb-3"
                  >
                    <Link to={"update_UpcomingEvent"} style={{color: 'white'}} >
                    Update an Event
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card list-events-card">
                <img
                  src={cardImg3}
                  alt="..."
                  style={{
                    padding: "5%",
                    borderRadius: "25px",
                  }}
                />
                <div className="card-body" style={{ padding: "0 0 0 5%" }}>
                  <h5 className="card-text font-weight-bold">
                    Delete Your Event
                  </h5>
                  <button
                    className="btn text-white p-1 font-weight-bold mb-3"
                  >
                    <Link to={"delete_event"} style={{color: 'white'}}>
                    Delete an Event
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default EventHome;
