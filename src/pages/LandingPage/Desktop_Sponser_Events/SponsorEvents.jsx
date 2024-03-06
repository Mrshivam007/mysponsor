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
import "./events-page.css";
import Loading from "../../../components/Loading/Loading";
import EventMobile from "./EventMobile";
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

  const isLoading = () => {
    return eventDetails.eventDetailsLoading;
  };

  console.log("static data", EventsCards);
  // const cardData = eventDetails.eventDetails.upcoming_event;
  // console.log("This is card data", cardData);
  const cardData1 = eventDetails?.eventDetails?.upcoming_event;
  const cardData2 = eventDetails?.eventDetails?.live_event;
  return (
    <div>
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
              <EventsHeader title={"Sponsor Events"} logo={spevents} />
              {cardData2 && cardData2.length > 0 ? (
                <SponserE line="Live Events" cardData={cardData2} />
              ) : (
                <>
                </>)}
              {cardData1 && cardData1.length > 0 ? (
                <SponserE line="Upcoming Events" cardData={cardData1} />
              ) : (
                <>
                </>)}
              {/* <SponserE line={cardData2 ? "Live Events" : "Live Events is not available"} cardData={cardData2} />
              <SponserE line={cardData1 ? "Upcoming Events" : "Upcoming Events is not available"} cardData={cardData1} /> */}
            </div>

            <div className="events-page-mobile">
              {/* <MobileCards cardData={cardData} /> */}
              {/* <SponserE line={"Upcoming Events"} cardData={cardData1} /> */}
              {/* <SponserE line={"Live Events"} cardData={cardData2} /> */}
              {cardData2 && cardData2.length > 0 ? (
                <EventMobile line="Live Events" cardData={cardData2} />
              ) : (
                <>
                </>
              )}
              {cardData1 && cardData1.length > 0 ? (
                <EventMobile line="Upcoming Events" cardData={cardData1} />
              ) : (
                <>
                </>
              )}
              {/* <EventMobile line={cardData2 ? "Live Events" : "Live Events is not available"} cardData={cardData2} />
              <EventMobile line={cardData1 ? "Upcoming Events" : "Upcoming Events is not available"} cardData={cardData1} /> */}

            </div>

          </div>
        </>
      )}
    </div>
  );
};

export default SponsorEvents;
