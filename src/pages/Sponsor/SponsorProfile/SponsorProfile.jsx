import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import bgimage from "../../../assets/img/circle-bg.png";
import Footer from "../../../components/Footer/Footer";
import SponsorNavbar from "../SponsorNavbar/SponsorNavbar";
import SponsorProfileInfo from "./SponsorProfileInfo";
import SponsorSecurity from "./SponsorSecurity";
import SponsorNotification from "./SponsorNotification";
const SponsorProfile = () => {
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
        <SponsorNavbar />
        <div className="container my-3">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="profile" title="Profile">
              <SponsorProfileInfo />
            </Tab>
            <Tab eventKey="security" title="Security">
              <SponsorSecurity />
            </Tab>
            <Tab eventKey="notification" title="Notification">
              <SponsorNotification />
            </Tab>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SponsorProfile;
