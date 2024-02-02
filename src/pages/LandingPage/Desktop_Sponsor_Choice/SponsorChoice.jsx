import React, { useEffect, useState } from "react";
import bgimage from "../../../assets/img/circle-bg.png";
import spevents from "../../../assets/img/sponsor_events-logo.png";
import calendar from "../../../assets/img/calendar.svg";
import camera from "../../../assets/img/camera.svg";
import { fetchContent } from "../../../redux/actions/contentAction";
import { fetchEvent } from "../../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import {
  EventsHeader,
  Choice,
  Footer,
  SponserE,
  Banner,
  SponsorCC,
  MobileCards,
  NavBar,
} from "../../../components";
import {
  ChoicePageCards,
  ContentCreators4,
  EventsCards,
} from "../../../data/data";
import { Link } from "react-router-dom";
const SponsorChoice = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const dispatch = useDispatch();
  const ContentDetails = useSelector(state => state.content)
  const EventDetails = useSelector(state => state.event)
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    dispatch(fetchContent())
    dispatch(fetchEvent())
  },[])
  console.log("Event", EventDetails);
  console.log("Content", ContentDetails);

  return (
    <>
      <NavBar />
      <div
        className="events-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <EventsHeader title={"Sponsor Choice"} logo={spevents} />
        <div className="choice-page-desktop">
          <Choice />
          <SponserE line={"Sponser Events Near You"} cardData={EventDetails.eventDetails?.live_event} />
        </div>
        <div className="choice-page-desktop">
          <Banner />
        </div>
      </div>
      {/* <div className="choice-page-mobile">
        <h3 className="font-weight-bolder pl-4 mb-3">Sponsor your choice</h3>
        <div className="container choice-boxes">
          <div className="row">
            <div className="col-6">
              <Link to="/events">
                <div className="card-blog choice-box">
                  <img src={calendar} alt="" />
                  <p className="text-center text-white font-weight-bolder mb-0">
                    Event
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-6">
              <Link to="/cc">
                <div className="card-blog choice-box">
                  <img src={camera} alt="" />
                  <p className="text-center text-white font-weight-bolder mb-0">
                    Content Creators
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="d-flex d-md-none justify-content-between px-4 mt-4"
          style={{ marginBottom: "-13%" }}
        >
          <p className="font-weight-bolder text-lg">Top events near you</p>
          <Link to="/events">
            <p className="font-weight-bold" style={{ color: "#004EA9" }}>
              See more
            </p>
          </Link>
        </div>
        <MobileCards cardData={ChoicePageCards} />
      </div>
      <div className="triangle-bg-choice">
        <div
          className="d-flex d-md-none justify-content-between px-4 mt-4"
          style={{ marginBottom: "-13%" }}
        >
          <p className="font-weight-bolder text-lg">Top events near you</p>
          <Link to="/cc">
            <p className="font-weight-bold" style={{ color: "#004EA9" }}>
              See more
            </p>
          </Link>
        </div>
        <SponsorCC cardData={ContentDetails.contentDetails?.live_content} />
      </div> */}
      <Footer />
    </>
  );
};

export default SponsorChoice;
