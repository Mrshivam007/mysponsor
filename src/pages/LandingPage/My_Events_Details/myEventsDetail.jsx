import React, { useEffect } from "react";
import "./myeventdetails.css";
import bgimage from "../../../assets/img/circle-bg.png";
import { EventsCards } from "../../../data/data.js";
import {
  Footer,
  MyEventsBox,
  NavBar,
  SponserE,
} from "../../../components/index.js";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MyEventSponsor from "../../../components/My_Event_Sponsor_Box/MySponsorEvent.jsx";
import { fetchEventbyId } from "../../../redux/actions/eventByIdAction.js";
import Loading from "../../../components/Loading/Loading.jsx";
const MyEventsDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const location = useLocation();
  const eventData = location.state?.eventData || null;
  // console.log("getting id ",eventData.event_id);
  const dispatch = useDispatch();
  const eventId = eventData.event_id;
  const eventById = useSelector((state) => state.eventById);
  useEffect(() => {
    dispatch(fetchEventbyId(eventId));
  }, []);

  console.log("getting data based on event id", eventById);
  const isLoading = () => {
    return eventById?.loading;
  };
  const Data = eventById?.eventById;
  console.log("data getting ", Data);

  return (
    <>
      {isLoading() ? (
        <Loading />
      ) : (
        <>
      <div
        className="myevents-bg"
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: '1%',
          backgroundImage: `url(${bgimage})`,
        }}
      >

        {Data && <MyEventSponsor eventData={Data} />}
        {/* <SponserE cardData={EventsCards} /> */}
      </div>
      </>
      )}
    </>
  );
};

export default MyEventsDetail;
