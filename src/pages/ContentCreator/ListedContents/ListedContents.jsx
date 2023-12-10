import React, { useEffect } from "react";
import listevents from "../../../assets/img/list_events.png";
import bgimage from "../../../assets/img/circle-bg.png";
import { EventsHeader, Footer, NavBar } from "../../../components";
import ContentCard from "../ContentCard/ContentCard";
const ListedContents = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);

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
        <ContentCard />
        <Footer />
      </div>
    </>
  );
};

export default ListedContents;
