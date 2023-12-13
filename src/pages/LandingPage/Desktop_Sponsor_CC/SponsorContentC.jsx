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
import { fetchContent } from "../../../redux/actions/contentAction";
import { useDispatch, useSelector } from "react-redux";
import "./cc-page.css";
import ContentCard from "./ContentCard";
const SponsorContentC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const ContentDetails = useSelector(state => state.content)
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    dispatch(fetchContent())
  },[])
  console.log(ContentDetails);

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
        <EventsHeader title={"Sponsor Content Creators"} logo={cclogo} />
        <ContentCard
          line={"Sponsor content creators"}
          cardData={ContentDetails.contentDetails}
        />
        <SocialmediaBox />
        <div className="cc-cards-desktop">
          <SponsorCC
            line={"Sponsor Other Creators"}
            cardData={ContentCreators8}
          />
        </div>
        <div className="cc-cards-mobile">
          <SponsorCC cardData={ContentCreators4} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SponsorContentC;
