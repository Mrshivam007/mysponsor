import React, { useEffect, useState } from "react";
import calendar from "../../../assets/img/calendar.svg";
import camera from "../../../assets/img/camera.svg";
import listevents from "../../../assets/img/list_events.png";
import bgimage from "../../../assets/img/circle-bg.png";
import cardImg1 from "../../../assets/img/list_events_card1.jpg";
import cardImg2 from "../../../assets/img/list_events_card2.jpg";
import cardImg3 from "../../../assets/img/list_events_card3.jpg";
import { Choice, EventsHeader, Footer, NavBar } from "../../../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const EventCategories = () => {
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
          paddingBottom: '1%',
        }}
      >
        
        {/* ---DESKTOP VIEW---  */}
        <div className="desktop-view">
          <EventsHeader title={"Your Events"} logo={listevents} />
          {/* <Choice /> */}
        </div>
        {/* ---DESKTOP VIEW END--- */}
        {/* ---MOBILE VIEW--- */}

        <div className="mobile-view">
          <h2 className="sponsor-mobile-text">Get your event listed</h2>
        </div>
        {/* ---MOBILE VIEW END--- */}

        <div className="container">
          <div className="list-events-box">
            <h2>
              Track all your event activities here
            </h2>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
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
                    Your Live Events
                  </h5>
                  <button
                    className="btn text-white py-1 font-weight-bold mb-3"
                  >
                    <Link to={"live_event"} style={{ color: 'white' }} >
                      Live Events
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
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
                    Your Upcoming Event
                  </h5>
                  <button
                    className="btn text-white py-1 font-weight-bold mb-3"
                  >
                    <Link to={"upcoming_event"} style={{ color: 'white' }} >
                      Upcoming Event
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3">
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
                    Your Previous Event
                  </h5>
                  <button
                    className="btn text-white py-1 font-weight-bold mb-3"
                  >
                    <Link to={"previous_event"} style={{ color: 'white' }} >
                      Previous Event
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

export default EventCategories;
