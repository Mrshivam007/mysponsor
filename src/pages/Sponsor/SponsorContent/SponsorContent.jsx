import React, { useEffect, useState } from "react";
import bgimage from "../../../assets/img/circle-bg.png";
import cclogo from "../../../assets/img/content-creator.jpg";
import {
  NavBar,
  EventsHeader,
  SocialmediaBox,
  SponsorCC,
  Footer,
} from "../../../components";
import { ContentCreators4, ContentCreators8 } from "../../../data/data";
import { fetchContent } from "../../../redux/actions/contentAction";
import { useDispatch, useSelector } from "react-redux";
import ContentCard from "./ContentCard";
import Loading from "../../../components/Loading/Loading";
const SponsorContentC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const ContentDetails = useSelector((state) => state.content);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  const isLoading = () => {
    return ContentDetails?.loading;
  };

  console.log("Content Details past ", ContentDetails);

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
            <EventsHeader title={"Sponsor Content Creators"} logo={cclogo} />
            <ContentCard
              line={"Upcoming Content"}
              cardData={ContentDetails.contentDetails?.upcoming_content}
            />
            <ContentCard
              line={"Live Content"}
              cardData={ContentDetails.contentDetails?.live_content}
            />
            <SocialmediaBox />
            <div className="cc-cards-desktop">
              <ContentCard
                line={"Sponsor Other Creators"}
                cardData={ContentDetails.contentDetails?.upcoming_content}
              />
            </div>
            <div className="cc-cards-mobile">
              <ContentCard
                line={"Sponsor Other Creators"}
                cardData={ContentDetails.contentDetails?.upcoming_content}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SponsorContentC;
