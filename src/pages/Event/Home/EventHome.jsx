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
        <NavBar />
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
          <div className="container choice-boxes my-3">
            <div className="row">
              <div className="col-6">
                <Link to="/events">
                  <div className="card-blog choice-box">
                    <img src={calendar} alt="" />
                    <p className="text-center text-white font-weight-bolder mb-0">
                      Your Event
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/sponsored_events">
                  <div className="card-blog choice-box">
                    <img src={camera} alt="" />
                    <p className="text-center text-white font-weight-bolder mb-0">
                      Sponsored Event
                    </p>
                  </div>
                </Link>
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
        <Footer />
      </div>
    </>
  );
};

export default EventHome;
