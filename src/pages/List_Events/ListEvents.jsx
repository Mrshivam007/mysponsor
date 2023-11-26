import React from "react";
import "./listevents.css";
import listevents from "../../assets/img/list_events.png";
import bgimage from "../../assets/img/circle-bg.png";
import cardImg1 from "../../assets/img/list_events_card1.jpg";
import cardImg2 from "../../assets/img/list_events_card2.jpg";
import cardImg3 from "../../assets/img/list_events_card3.jpg";
import { Choice, EventsHeader, Footer, NavBar } from "../../components";
const ListEvents = () => {
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

        <EventsHeader title={"List Events"} logo={listevents} />
        <Choice />
        <div className="container">
          <div className="list-events-box">
            <h1>
              List your event and get sponsored worldwide by different sponsors
            </h1>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row row-cols-3">
            <div className="col">
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
                  <p className="card-text font-weight-bold mb-1">
                    Want your events sponsored?
                  </p>
                  <button
                    to="/events"
                    className="choice-btn btn text-white py-1 font-weight-bold mb-3"
                    style={{
                      float: "left",
                      backgroundColor: "#00448B",
                      borderRadius: "10px",
                    }}
                  >
                    List an Events
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
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
                  <p className="card-text font-weight-bold mb-1">
                    Want your content sponsored?
                  </p>
                  <button
                    to="/events"
                    className="choice-btn btn text-white py-1 font-weight-bold mb-3"
                    style={{
                      float: "left",
                      backgroundColor: "#00448B",
                      borderRadius: "10px",
                    }}
                  >
                    List as a content creator
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
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
                  <p className="card-text font-weight-bold mb-1">
                    Want your videos sponsored?
                  </p>
                  <button
                    to="/events"
                    className="choice-btn btn text-white py-1 font-weight-bold mb-3"
                    style={{
                      float: "left",
                      backgroundColor: "#00448B",
                      borderRadius: "10px",
                    }}
                  >
                    List an upcoming video
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

export default ListEvents;
