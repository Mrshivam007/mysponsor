import React, { useEffect, useState } from "react";
import listevents from "../../../assets/img/list_events.png";
import bgimage from "../../../assets/img/circle-bg.png";
import { EventsHeader, Footer, NavBar } from "../../../components";
import { fetchContent } from "../../../redux/actions/contentAction";
import { useDispatch, useSelector } from "react-redux";
import MyContentCard from "../MyContentCard/MyContentCard";
const UpcomingContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const ContentDetails = useSelector((state) => state.content);
  const [successMessage, setSuccessMessage] = useState("");
  const [deletionMessage, setDeletionMessage] = useState("");
  useEffect(() => {
    dispatch(fetchContent());
  }, []);
  useEffect(() => {
    // Retrieve success message from sessionStorage
    const message1 = sessionStorage.getItem("successMessage");
    const message2 = sessionStorage.getItem("deletionMessage");
    // Clear success message from sessionStorage
    sessionStorage.removeItem("successMessage");
    sessionStorage.removeItem("deletionMessage");

    if (message1) {
      setSuccessMessage(message1);
    } else if (message2) {
      setDeletionMessage(message2);
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
          <div className="container">
            <div
              class="alert alert-success"
              role="alert"
              style={{ borderRadius: "10px" }}
            >
              {successMessage}
            </div>
          </div>
        )}
        {deletionMessage && (
          <div className="container">
            <div
              class="alert alert-danger"
              role="alert"
              style={{ borderRadius: "10px" }}
            >
              {deletionMessage}
            </div>
          </div>
        )}
        <MyContentCard cardData={ContentDetails.contentDetails?.upcoming_content} />
        <Footer />
      </div>
    </>
  );
};

export default UpcomingContent;
