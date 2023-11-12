import React from "react";
import SponserE from "./SponserE";
import SponserCC from "./SponsorCC";
import backgroundimg from "../../assets/img/circle-bg.png";
import { ContentCreators4, EventsCards } from "../../data/data";

const SponsorHome = () => {
  return (
    <>
      <div
        className="bg-sponsor"
        style={{
          height: "auto",
          marginBottom: "-4vh",
          backgroundImage: `url(${backgroundimg})`,
        }}
      >
        <SponserE line={"Sponsor Events Near You"} cardData={EventsCards} />
        <SponserCC cardData={ContentCreators4} />
      </div>
    </>
  );
};

export default SponsorHome;
