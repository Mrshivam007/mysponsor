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
import {
  fetchEvent,
  fetchEventCategory,
} from "../../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
const SponsorEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event);
  useEffect(() => {
    dispatch(fetchEvent());
  }, []);

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  console.log("dynamic data", eventDetails.eventDetails.past_event);
  console.log("static data", EventsCards);
  const cardData = eventDetails.eventDetails.upcoming_event;
  console.log("This is card data", cardData);
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
        <div className="events-page-desktop">
          <EventsHeader title={"Sponsor Events"} logo={spevents} />
          <SponserE cardData={cardData} />
        </div>

        <div className="events-page-mobile">
          <MobileCards cardData={cardData} />
          {/* <SponserE cardData={cardData} /> */}
        </div>
      </div>
    </>
  );
};

export default SponsorEvents;
