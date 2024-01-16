import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import bgimage from "../../../assets/img/circle-bg.png";
import Footer from "../../../components/Footer/Footer";
import { NavBar } from "../../../components";
import ContentProfileInfo from "./ContentProfileInfo";
import ContentSecurity from "./ContentSecurity";
import ContentNotification from "./ContentNotification";
const ContentProfile = () => {
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
        <NavBar />
        <div className="container my-3">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="profile" title="Profile">
              <ContentProfileInfo />
            </Tab>
            <Tab eventKey="security" title="Security">
              <ContentSecurity />
            </Tab>
            <Tab eventKey="notification" title="Notification">
              <ContentNotification />
            </Tab>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContentProfile;
