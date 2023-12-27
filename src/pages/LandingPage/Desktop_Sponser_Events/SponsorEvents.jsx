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
import { fetchEvent, fetchEventCategory } from "../../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux"
import "./events-page.css";
const SponsorEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const dispatch = useDispatch();
  const eventDetails = useSelector(state => state.event)
  useEffect(() => {
    dispatch(fetchEventCategory())
  }, [])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  console.log("dynamic data", eventDetails.eventCategory);
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
          <EventsHeader title={"Sponsor Events"} logo={spevents} />

          {[...Object.entries(eventDetails.eventCategory || {})]
            .filter(([key, value]) => value && value.length > 0)
            .sort((a, b) => b[1].length - a[1].length)
            .map(([category, cardData]) => (
              <SponserE key={category} cardData={cardData} line={`${capitalizeFirstLetter(category)} Event`} />
            ))}
        </div>

        <div className="events-page-mobile">
          <MobileCards line={"Sponsor events"} cardData={EventsPageCards} />
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

export default SponsorEvents;
