import React, { useEffect } from "react";
import bgimage from "../../../assets/img/circle-bg.png";
import { EventsCards } from "../../../data/data.js";
import {
  Footer,
  MyEventsBox,
  NavBar,
  SponserE,
} from "../../../components/index.js";
import { useLocation } from "react-router-dom";
import SponsorEventBox from "../SponsorEventBox/SponsorEventBox.jsx";
import SponsorContentBox from "../SponsorContentBox/SponsorContentBox.jsx";
import { fetchSponsoredContentById } from "../../../redux/actions/sponsorAction.js";
import { useDispatch, useSelector } from "react-redux";
const SponsoredContentDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const location = useLocation();
  const contentData = location.state?.eventData || null;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSponsoredContentById(contentData.content_sponsor_id));
  }, []);
  const contentDetails = useSelector((state) => state.sponsor);
  // console.log("Data got from ID ",contentDetails);
  console.log("Data for id ", contentData.content_sponsor_id);
  return (
    <>
      <div
        className="myevents-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <SponsorContentBox contentData={contentData} />
        {/* <SponserE cardData={EventsCards} /> */}
      </div>
    </>
  );
};

export default SponsoredContentDetails;
