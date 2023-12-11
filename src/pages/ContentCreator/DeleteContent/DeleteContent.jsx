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
import { fetchContent } from "../../../redux/actions/contentAction";
import { useDispatch, useSelector } from "react-redux"
import Delete_EventCard from "./DeleteEventCard";
import Delete_MobileCards from "./DeleteEventMobileCard";
const DeleteContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const dispatch = useDispatch();
  const contentDetails = useSelector(state => state.content)
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    dispatch(fetchContent())
  }, [])

  useEffect(() => {
    // Retrieve success message from sessionStorage
    const message = sessionStorage.getItem('successMessage');

    // Clear success message from sessionStorage
    sessionStorage.removeItem('successMessage');

    if (message) {
      setSuccessMessage(message);
      console.log(message);
    }
  }, []);



  console.log("dynamic data", contentDetails.contentDetails);
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
          <EventsHeader title={"Upcoming Event"} logo={spevents} />
          {/* <SponserE cardData={contentDetails.contentDetails} line={"Upcoming Event"} /> */}
          {successMessage && (
            <div class="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          <Delete_EventCard cardData={contentDetails.contentDetails} />
          {/* <SponserE cardData={EventsCards} line={"Concerts"} />
          <SponserE cardData={EventsCards} line={"Promotional Events"} />
          <SponserE cardData={EventsCards} line={"Sports Events"} />
          <SponserE cardData={EventsCards} line={"Comedy Shows"} />
          <SponserE cardData={EventsCards} line={"Motivational Events"} />
          <SponserE cardData={EventsCards} line={"Reality Shows"} /> */}
        </div>
        <div className="events-page-mobile">
          <Delete_MobileCards line={"Upcoming Event"} cardData={contentDetails.contentDetails} />
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

export default DeleteContent;
