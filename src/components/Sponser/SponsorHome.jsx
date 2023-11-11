import React from "react";
import SponserE from "./SponserE";
import SponserCC from "./SponsorCC";
import backgroundimg from "../../assets/img/circle-bg.png";

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
        <SponserE line={"Sponsor Events Near You"} />
        <SponserCC />
      </div>
    </>
  );
};

export default SponsorHome;
