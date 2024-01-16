import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import bgimage from "../../../assets/img/circle-bg.png";
import Footer from "../../../components/Footer/Footer";
import EventProfileInfo from "./EventProfileInfo";
import EventSecurity from "./EventSecurity";
import EventNotification from "./EventNotification";
import { NavBar } from "../../../components";
const EventProfile = () => {
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
              <EventProfileInfo />
            </Tab>
            <Tab eventKey="security" title="Security">
              <EventSecurity />
            </Tab>
            <Tab eventKey="notification" title="Notification">
              <EventNotification />
            </Tab>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EventProfile;
