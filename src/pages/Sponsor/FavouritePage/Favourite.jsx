import React, { useEffect, useState } from "react";
import fav_logo from "../../../assets/img/favorite.png";
import bgimage from "../../../assets/img/circle-bg.png";
import { EventsHeader, Footer} from "../../../components";
import { Tab, Tabs } from "react-bootstrap";
import { fetchEvent } from "../../../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import FavouriteEventCard from "./FavouriteEventCard";
const Favourite = () => {
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvent());
  }, [dispatch]);

  const eventDetails = useSelector((state) => state.event);
  console.log('favroute event ',eventDetails);
  console.log("Get data for favorite event", eventDetails?.eventDetails?.live_event);
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
        
        <EventsHeader title={"Your Favourites are Here !!!"} logo={fav_logo} />
        <FavouriteEventCard cardData={eventDetails?.eventDetails?.live_event} />
        
      </div>
    </>
  );
};

export default Favourite;
