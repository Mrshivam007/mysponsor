import React, { useEffect, useState } from "react";
import bgimage from "../../assets/img/circle-bg.png";
import cardImg from "../../assets/img/my_events_img.png";
import listevents from "../../assets/img/list_events.png";
import { EventsHeader } from "..";
import { Button, Modal } from "react-bootstrap";
import { getTransactionDetails } from "../../redux/actions/paymentAction";
import { useDispatch, useSelector } from "react-redux";
import EventsPaymentDetails from "./EventsPaymentDetails";

const EventWallet = () => {
  const dispatch = useDispatch();
  
  // Dispatch getTransactionDetails only when the component mounts
  useEffect(() => {
    dispatch(getTransactionDetails());
  }, []);

  const paymentDetails = useSelector((state) => state.payment);
  const [expanded, setExpanded] = useState(false);
  const [amount, setAmount] = useState(null);
  const handleRowClick = () => {
    setExpanded(!expanded);
  };
  console.log("payment details ", paymentDetails);
  const paymentData = paymentDetails?.paymentTransactionDetails; // Ensure paymentData is available
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Render EventsPaymentDetails only if paymentData is available
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
        {paymentData && <EventsPaymentDetails paymentData={paymentData} />}
      </div>
    </>
  );
};

export default EventWallet;
