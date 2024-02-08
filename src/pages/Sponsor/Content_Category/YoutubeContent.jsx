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
import ContentCard from "../SponsorContent/ContentCard";
import SponsorNavbar from "../SponsorNavbar/SponsorNavbar";
const YoutubeContentSponsor = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const ContentDetails = useSelector(state => state.content)
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    dispatch(fetchContentPlatform())
  },[])
  console.log("Content Details ",ContentDetails?.contentCategory?.youtube);

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
        
        <EventsHeader title={"Youtube Content"} logo={cclogo} />
        <ContentCard
          line={"Sponsor Youtube creators"}
          cardData={ContentDetails?.contentCategory?.youtube}
        />
        {/* <SocialmediaBox /> */}
        {/* <div className="cc-cards-desktop">
          <ContentCard
            line={"Sponsor Other Creators"}
            cardData={ContentDetails.contentDetails?.past_content}
          />
        </div>
        <div className="cc-cards-mobile">
          <SponsorCC cardData={ContentCreators4} />
        </div> */}
        
      </div>
    </>
  );
};

export default YoutubeContentSponsor;
