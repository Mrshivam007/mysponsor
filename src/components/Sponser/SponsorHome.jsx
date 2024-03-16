import React, { useEffect, useState } from "react";
import SponserE from "./SponserE";
import SponserCC from "./SponsorCC";
import backgroundimg from "../../assets/img/circle-bg.png";
import { ContentCreators4, EventsCards } from "../../data/data";
import { fetchContent } from "../../redux/actions/contentAction";
import { fetchEvent } from "../../redux/actions/eventAction";
import { fetchAllCreator } from "../../redux/actions/creatorAction";
import { useDispatch, useSelector } from "react-redux";
import ContentCard from "../../pages/LandingPage/Desktop_Sponsor_CC/ContentCard";
import CreatorCard from "../CreatorCard/CreatorCard";

const SponsorHome = () => {
  const dispatch = useDispatch();
  const ContentDetails = useSelector((state) => state.content);
  const EventDetails = useSelector((state) => state.event);
  const AllCreatorDetails = useSelector((state) => state.creator);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    dispatch(fetchContent());
    dispatch(fetchEvent());
    dispatch(fetchAllCreator())
  }, []);
  console.log("Event", EventDetails);
  console.log("Content", ContentDetails);
  console.log("All Creator", AllCreatorDetails?.allCreatorDetails);

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
        <ContentCard
          line={"Sponsor Content"}
          cardData={ContentDetails.contentDetails?.upcoming_content}
        />
        
        {/* <ContentCard
          line={"Sponsor Content Creator"}
          cardData={ContentDetails.contentDetails?.upcoming_content}
        /> */}
        <CreatorCard line={"Sponsor Content Creators"} cardData={AllCreatorDetails?.allCreatorDetails} />
      </div>
    </>
  );
};

export default SponsorHome;
