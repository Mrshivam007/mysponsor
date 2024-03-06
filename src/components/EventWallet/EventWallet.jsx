import React, { useEffect, useState } from "react";
import bgimage from "../../assets/img/circle-bg.png";
import cardImg from "../../assets/img/my_events_img.png";
import listevents from "../../assets/img/list_events.png";
import { EventsHeader } from "../../components";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import EventsPaymentDetails from "./EventsPaymentDetails";
import "./paymentTable.css"
import SuccessToast from "../Toast/Success";

const EventWallet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [withdrawSuccess, setWithdrawSuccess] = useState(null);

  useEffect(() => {
    const message1 = sessionStorage.getItem("withdrawSuccess");
    sessionStorage.removeItem("withdrawSuccess");

    if (message1) {
      setWithdrawSuccess(message1);
    }
  }, []);

  console.log("getting withdraw message ", withdrawSuccess);

  return (
    <>
      <div
        className="list-events-bg"
        style={{
          width: "100%",
          height: "auto",
          backgroundImage: `url(${bgimage})`,
          paddingBottom: '1%',
        }}
      >
        <EventsHeader title={"My Wallet"} logo={listevents} />
          {withdrawSuccess && <SuccessToast message={withdrawSuccess} />}
        <EventsPaymentDetails />
      </div>
    </>
  );
};

export default EventWallet;
