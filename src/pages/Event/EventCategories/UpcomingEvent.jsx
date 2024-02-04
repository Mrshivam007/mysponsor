import React, { useEffect, useState } from "react";
import {
  NavBar,
  EventsHeader,
  SponserE,
  Footer,
  MobileCards,
} from "../../../components";
import bgimage from "../../../assets/img/circle-bg.png";
import spevents from "../../../assets/img/sponsor_events-logo.png";
import { EventsCards, EventsPageCards } from "../../../data/data";
import { fetchEvent, fetchEventbyId, fetchAllEvent } from "../../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import MyEventCard from "../MyEventCrad/MyEventCard";
import { useLocation } from "react-router-dom";
import EventMobileCard from "./EventMobileCards";
import EventNavBar from "../EventNavbar/EventNavbar";
const UpcomingEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  console.log(userDetails);

  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event);
  const [successMessage, setSuccessMessage] = useState("");
  const [deletionMessage, setDeletionMessage] = useState("");
  useEffect(() => {
    dispatch(fetchAllEvent());
  }, []);

  useEffect(() => {
    // Retrieve success message from sessionStorage
    const message1 = sessionStorage.getItem("successMessage");
    const message2 = sessionStorage.getItem("deletionMessage");
    // Clear success message from sessionStorage
    sessionStorage.removeItem("successMessage");
    sessionStorage.removeItem("deletionMessage");

    if (message1) {
      setSuccessMessage(message1);
    } else if (message2) {
      setDeletionMessage(message2);
    }
  }, []);

  console.log("dynamic data", eventDetails?.eventAllDetails?.upcoming_event);
  console.log("static data", EventsCards);

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
        <EventNavBar />
        <div className="events-page-desktop">
          <EventsHeader title={"Upcoming Event"} logo={spevents} />
          {/* <SponserE cardData={eventDetails.eventDetails} line={"Upcoming Event"} /> */}
          {successMessage && (
            <div className="container">
              <div
                class="alert alert-success"
                role="alert"
                style={{ borderRadius: "10px" }}
              >
                {successMessage}
              </div>
            </div>
          )}
          {deletionMessage && (
            <div className="container">
              <div
                class="alert alert-danger"
                role="alert"
                style={{ borderRadius: "10px" }}
              >
                {deletionMessage}
              </div>
            </div>
          )}
          <MyEventCard cardData={eventDetails?.eventAllDetails?.upcoming_event} />
          {/* <SponserE cardData={EventsCards} line={"Concerts"} />
          <SponserE cardData={EventsCards} line={"Promotional Events"} />
          <SponserE cardData={EventsCards} line={"Sports Events"} />
          <SponserE cardData={EventsCards} line={"Comedy Shows"} />
          <SponserE cardData={EventsCards} line={"Motivational Events"} />
          <SponserE cardData={EventsCards} line={"Reality Shows"} /> */}
        </div>
        <div className="events-page-mobile">
        {successMessage && (
            <div className="container">
              <div
                class="alert alert-success"
                role="alert"
                style={{ borderRadius: "10px" }}
              >
                {successMessage}
              </div>
            </div>
          )}
          {deletionMessage && (
            <div className="container">
              <div
                class="alert alert-danger"
                role="alert"
                style={{ borderRadius: "10px" }}
              >
                {deletionMessage}
              </div>
            </div>
          )}
          <EventMobileCard
            line={"Upcoming Event"}
            cardData={eventDetails?.eventAllDetails?.upcoming_event}
          />
          <div
            className="btn d-block text-white font-weight-bolder"
            style={{
              margin: "5%",
              borderRadius: "10px",
              backgroundColor: "rgb(0, 78, 169)",
            }}
          >
            Load More
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UpcomingEvent;
