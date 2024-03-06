import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import bgimage from "../../../assets/img/circle-bg.png";
import Footer from "../../../components/Footer/Footer";
import EventProfileInfo from "./EventProfileInfo";
import EventSecurity from "./EventSecurity";
import EventNotification from "./EventNotification";
import { NavBar } from "../../../components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions/authActions";
import BnakAccountDetails from "./BankAccountDetails";
import ErrorToast from "../../../components/Toast/Error";
const EventProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const [withdrawError, setWithdrawError] = useState(null);

  useEffect(() => {
    const message1 = sessionStorage.getItem("withdrawError");
    sessionStorage.removeItem("withdrawError");

    if (message1) {
      setWithdrawError(message1);
    }
  }, []);





  return (
    <>
      <div
        className="myevents-bg"
        style={{
          width: "100%",
          height: "auto",
          paddingBottom: '1%',
          backgroundImage: `url(${bgimage})`,
        }}
      >
        {withdrawError && <ErrorToast message={withdrawError} />}


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
            <Tab eventKey="bankDetails" title="Bank Details">
              <BnakAccountDetails />
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

export default EventProfile;
