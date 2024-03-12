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
import MyEventSponsor from "./MyEventSponsor.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventbyId } from "../../../redux/actions/eventByIdAction.js";
const EventDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const location = useLocation();
  const eventData = location.state?.eventData || null;
  const eventId = eventData?.event_id;
  const eventIdbyUrl = new URLSearchParams(location.search).get("eventId");
  const event_id = eventId || eventIdbyUrl
  console.log("got event id from Url  ", eventIdbyUrl);
  const eventById = useSelector((state) => state.eventById);
  useEffect(() => {
    if (event_id) {
      dispatch(fetchEventbyId(event_id));
    }
  }, [event_id, dispatch]);
  const Data = eventById?.eventById;
  return (
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
  );
};

export default EventDetails;
