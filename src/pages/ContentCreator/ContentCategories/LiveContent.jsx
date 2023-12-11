import React, { useEffect, useState } from "react";
import listevents from "../../../assets/img/list_events.png";
import bgimage from "../../../assets/img/circle-bg.png";
import { EventsHeader, Footer, NavBar } from "../../../components";
import ContentCard from "../ContentCard/ContentCard";
import { fetchContent } from "../../../redux/actions/contentAction";
import { useDispatch, useSelector } from "react-redux";
import MyContentCard from "../MyContentCard/MyContentCard";
const LiveContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const ContentDetails = useSelector(state => state.content)
  const [successMessage, setSuccessMessage] = useState('');
  useEffect(() => {
    dispatch(fetchContent())
  },[])
  useEffect(() => {
    // Retrieve success message from sessionStorage
    const message = sessionStorage.getItem('successMessage');

    // Clear success message from sessionStorage
    sessionStorage.removeItem('successMessage');

    if (message) {
      setSuccessMessage(message);
      console.log(message);
    }
  }, []);

  console.log("Content Data", ContentDetails.contentDetails);

  return (
    <>
      <div
        className="list-events-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
        }}
      >
        <NavBar />
        <EventsHeader
          title={"See your listed contents here "}
          logo={listevents}
        />
        {/* <ContentCard /> */}
        {successMessage && (
            <div class="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
        <MyContentCard cardData={ContentDetails.contentDetails} />
      </div>
    </>
  );
};

export default LiveContent;
