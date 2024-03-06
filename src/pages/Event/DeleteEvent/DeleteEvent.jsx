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
import Update_EventCard from "../Update_Event/Update_EventCard";
import Delete_EventCard from "./DeleteEventCard";
import Delete_MobileCards from "./DeleteEventMobileCard";
import Loading from "../../../components/Loading/Loading";
import SuccessToast from "../../../components/Toast/Success";
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
    dispatch(fetchAllEvent());
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

  const isLoading = () => {
    return eventDetails?.loading;
  };

  // console.log("dynamic data for deletion", eventDetails.eventAllDetails.upcoming_event);
  // console.log("static data", EventsCards);

  return (
    <>
      {isLoading() ? (
        <Loading />
      ) : (
        <>
          {successMessage && <SuccessToast message={successMessage} />}
          <div
            className="events-bg"
            style={{
              width: "100%",
              height: "auto",
              backgroundImage: `url(${bgimage})`,
            }}
          >
            <div className="events-page-desktop">
              <EventsHeader
                title={"Delete Your Listed Events"}
                logo={spevents}
              />
              {/* <SponserE cardData={eventDetails.eventDetails} line={"Upcoming Event"} /> */}

              <Delete_EventCard
                cardData={eventDetails?.eventAllDetails?.upcoming_event}
              />
              {/* <SponserE cardData={EventsCards} line={"Concerts"} />
            <SponserE cardData={EventsCards} line={"Promotional Events"} />
            <SponserE cardData={EventsCards} line={"Sports Events"} />
            <SponserE cardData={EventsCards} line={"Comedy Shows"} />
            <SponserE cardData={EventsCards} line={"Motivational Events"} />
            <SponserE cardData={EventsCards} line={"Reality Shows"} /> */}
            </div>
            <div className="events-page-mobile">
              <Delete_MobileCards
                line={"Delete Event"}
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

export default DeleteEvent;
