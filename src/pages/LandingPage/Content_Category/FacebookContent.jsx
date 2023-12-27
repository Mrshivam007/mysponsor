import React, {useEffect, useState} from "react";
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
import { fetchContentPlatform } from "../../../redux/actions/contentAction";
import { useDispatch, useSelector } from "react-redux";
import ContentCard from "../Desktop_Sponsor_CC/ContentCard";
const FacebookContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const ContentDetails = useSelector(state => state.content)
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    dispatch(fetchContentPlatform())
  },[])

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
        <EventsHeader title={"Sponsor Facebook Creators"} logo={cclogo} />
        <ContentCard
          line={"Sponsor Facebook creators"}
          cardData={ContentDetails.contentCategory?.facebook}
        />
        <Footer />
      </div>
    </>
  );
};

export default FacebookContent;
