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
import { fetchEvent, fetchEventbyId } from "../../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import Update_EventCard from "../Update_Event/Update_EventCard";
import Delete_EventCard from "./DeleteEventCard";
import Delete_MobileCards from "./DeleteEventMobileCard";
const DeleteEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  console.log(userDetails);

  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    dispatch(fetchEventbyId(userDetails.user_id))
  }, []);

  useEffect(() => {
    // Retrieve success message from sessionStorage
    const message = sessionStorage.getItem("successMessage");

    // Clear success message from sessionStorage
    sessionStorage.removeItem("successMessage");

    if (message) {
      setSuccessMessage(message);
      console.log(message);
    }
  }, []);

  console.log("dynamic data", eventDetails.eventDetails);
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
        <NavBar />
        <div className="events-page-desktop">
          <EventsHeader title={"Delete Your Listed Events"} logo={spevents} />
          {/* <SponserE cardData={eventDetails.eventDetails} line={"Upcoming Event"} /> */}
          {successMessage && (
            <div class="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          <Delete_EventCard cardData={eventDetails.eventDetails?.upcoming_event} />
          {/* <SponserE cardData={EventsCards} line={"Concerts"} />
          <SponserE cardData={EventsCards} line={"Promotional Events"} />
          <SponserE cardData={EventsCards} line={"Sports Events"} />
          <SponserE cardData={EventsCards} line={"Comedy Shows"} />
          <SponserE cardData={EventsCards} line={"Motivational Events"} />
          <SponserE cardData={EventsCards} line={"Reality Shows"} /> */}
        </div>
        <div className="events-page-mobile">
          <Delete_MobileCards
            line={"Upcoming Event"}
            cardData={eventDetails.eventDetails?.upcoming_event}
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

export default DeleteEvent;
