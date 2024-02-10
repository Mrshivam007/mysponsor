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
import Loading from "../../../components/Loading/Loading";

const SponsorEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const dispatch = useDispatch();
  const eventDetails = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(fetchEvent());
  }, []);

  const isLoading = () => {
    return eventDetails.eventDetailsLoading;
  };

  const cardData = eventDetails?.eventDetails?.upcoming_event;

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
              <SponserE cardData={cardData} />
            </div>

            <div className="events-page-mobile">
              <MobileCards cardData={cardData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SponsorEvents;
