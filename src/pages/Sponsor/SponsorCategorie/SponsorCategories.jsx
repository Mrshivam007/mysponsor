import React, {useEffect, useState} from "react";
import catlogo from "../../../assets/img/category-bg-logo.png";
import bgimage from "../../../assets/img/circle-bg.png";
import {
  NavBar,
  Footer,
  EventsHeader,
  CatpageBox,
  Banner,
  SponserE,
} from "../../../components";
import { EventsCards } from "../../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvent } from "../../../redux/actions/eventAction";

const SponsorCategoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const EventDetails = useSelector(state => state.event)
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    dispatch(fetchEvent())
  },[])
  console.log("Event", EventDetails);

  return (
    <>
      <div
        className="events-bg"
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: '1%',
          backgroundImage: `url(${bgimage})`,
        }}
      >
        
        <EventsHeader title={"Categories"} logo={catlogo} />
        <CatpageBox line={"Categories"} />
      </div>
      <div className="cat-page-banner">
        <Banner />
      </div>
      <div className="container triangle-bg">
        <SponserE cardData={EventDetails.eventDetails?.live_event} />
      </div>
      <div className="mobile-view mb-4">
        <SponserE cardData={EventDetails.eventDetails?.live_event} />
      </div>
      
    </>
  );
};

export default SponsorCategoryPage;
