import React, { useEffect, useState } from "react";
import SponserE from "./SponserE";
import SponserCC from "./SponsorCC";
import backgroundimg from "../../assets/img/circle-bg.png";
import { ContentCreators4, EventsCards } from "../../data/data";
import { fetchContent } from "../../redux/actions/contentAction";
import { fetchEvent } from "../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import ContentCard from "../../pages/LandingPage/Desktop_Sponsor_CC/ContentCard";
import CreatorCard from "../CreatorCard/CreatorCard";

const SponsorHome = () => {
  const dispatch = useDispatch();
  const ContentDetails = useSelector((state) => state.content);
  const EventDetails = useSelector((state) => state.event);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    dispatch(fetchContent());
    dispatch(fetchEvent());
  }, []);
  console.log("Event", EventDetails);
  console.log("Content", ContentDetails);

  return (
    <>
      <div
        className="bg-sponsor"
        style={{
          height: "auto",
          backgroundImage: `url(${backgroundimg})`,
        }}
      >
        <SponserE
          line={"Sponsor Events Near You"}
          cardData={EventDetails.eventDetails?.live_event}
        />

        {/* <SponserCC line={"Sponsor Content Creators"} cardData={ContentCreators4} /> */}
        {/* <ContentCard line={"Sponsor Content Creators"} cardData={ContentDetails.contentDetails?.upcoming_content} /> */}
        <CreatorCard line={"Sponsor Content Creators "} />
      </div>
    </>
  );
};

export default SponsorHome;
