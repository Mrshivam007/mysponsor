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
import { useDispatch, useSelector } from "react-redux";
import Update_MobileCards from "./Update_MobileCard";
import Update_ContentCard from "./Update_ContentCard";
import Loading from "../../../components/Loading/Loading";
const Update_UpcomingContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

  const dispatch = useDispatch();
  const contentDetails = useSelector((state) => state.content);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    dispatch(fetchContent());
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

  console.log(contentDetails);

  // console.log("dynamic data", eventDetails.eventDetails);
  // console.log("static data", EventsCards);

  const isLoading = () => {
    return contentDetails?.loading;
  };

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
              <EventsHeader title={"Update Listed Content"} logo={spevents} />
              {/* <SponserE cardData={eventDetails.eventDetails} line={"Upcoming Event"} /> */}
              {successMessage && (
                <div class="alert alert-success" role="alert">
                  {successMessage}
                </div>
              )}
              <Update_ContentCard
                cardData={contentDetails.contentDetails?.live_content}
              />
              {/* <SponserE cardData={EventsCards} line={"Concerts"} />
          <SponserE cardData={EventsCards} line={"Promotional Events"} />
          <SponserE cardData={EventsCards} line={"Sports Events"} />
          <SponserE cardData={EventsCards} line={"Comedy Shows"} />
          <SponserE cardData={EventsCards} line={"Motivational Events"} />
          <SponserE cardData={EventsCards} line={"Reality Shows"} /> */}
            </div>
            <div className="events-page-mobile">
              <Update_MobileCards
                line={"Update My Content"}
                cardData={contentDetails.contentDetails?.live_content}
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

export default Update_UpcomingContent;
