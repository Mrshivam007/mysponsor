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
import {
  fetchAllEvent,
} from "../../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import MyEventCard from "../MyEventCrad/MyEventCard";
import { useLocation } from "react-router-dom";
import EventMobileCard from "./EventMobileCards";
import Loading from "../../../components/Loading/Loading";
import SuccessToast from "../../../components/Toast/Success";
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
  }, [successMessage]);

  const isLoading = () => {
    return eventDetails?.loading;
  };

  console.log("dynamic data", eventDetails?.eventAllDetails?.upcoming_event);
  console.log("static data", EventsCards);

  return (
    <>
      {isLoading() ? (
        <Loading />
      ) : (
        <>
          {successMessage && <SuccessToast message={successMessage} />}
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
          <div
            className="events-bg"
            style={{
              width: "100%",
              height: "auto",
              backgroundImage: `url(${bgimage})`,
            }}
          >
            <div className="events-page-desktop">
              <EventsHeader title={"Upcoming Event"} logo={spevents} />
              <MyEventCard
                cardData={eventDetails?.eventAllDetails?.upcoming_event}
              />
            </div>
            <div className="events-page-mobile">
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
          </div>
        </>
      )}
    </>
  );
};

export default UpcomingEvent;
