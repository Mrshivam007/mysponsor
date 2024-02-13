import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import bgimage from "../../../assets/img/circle-bg.png";
import Footer from "../../../components/Footer/Footer";
import SponsorProfileInfo from "./SponsorProfileInfo";
import SponsorSecurity from "./SponsorSecurity";
import SponsorNotification from "./SponsorNotification";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions/authActions";
const SponsorProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
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
        <div className="container px-3 pt-0 pb-3 d-sm-none">
          <button className="btn btn-danger w-100" onClick={handleLogout}>
            Logout
          </button>
        </div>
        
      </div>
    </>
  );
};

export default SponsorProfile;
