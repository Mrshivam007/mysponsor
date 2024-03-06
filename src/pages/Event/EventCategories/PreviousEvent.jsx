import React, { useEffect } from "react";
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
import { fetchEvent, fetchAllEvent } from "../../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import MyEventCard from "../MyEventCrad/MyEventCard";
import EventMobileCard from "./EventMobileCards";
import Loading from "../../../components/Loading/Loading";
const PreviousEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  console.log(userDetails);

  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event);
  useEffect(() => {
    dispatch(fetchAllEvent());
  }, []);

  const isLoading = () => {
    return eventDetails?.loading;
  };

  console.log("past dynamic data", eventDetails);
  console.log("static data", EventsCards);

  return (
    <>
      {isLoading() ? (
        <Loading />
      ) : (
        <>
          <div
            className="events-bg"
            style={{
              width: "100%",
              height: "auto",
              backgroundImage: `url(${bgimage})`,
            }}
          >
            <div className="events-page-desktop">
              <EventsHeader title={"Previous Events"} logo={spevents} />
              {/* <SponserE cardData={eventDetails.eventDetails} line={"Previous Events"} /> */}
              <MyEventCard cardData={eventDetails.eventDetails?.past_event} />
              {/* <SponserE cardData={EventsCards} line={"Concerts"} />
          <SponserE cardData={EventsCards} line={"Promotional Events"} />
          <SponserE cardData={EventsCards} line={"Sports Events"} />
          <SponserE cardData={EventsCards} line={"Comedy Shows"} />
          <SponserE cardData={EventsCards} line={"Motivational Events"} />
          <SponserE cardData={EventsCards} line={"Reality Shows"} /> */}
            </div>
            <div className="events-page-mobile">
              <EventMobileCard
                line={"Previous Events"}
                cardData={eventDetails.eventDetails?.past_event}
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

export default PreviousEvent;
