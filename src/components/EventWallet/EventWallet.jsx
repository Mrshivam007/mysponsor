import React, { useEffect, useState } from "react";
import bgimage from "../../assets/img/circle-bg.png";
import cardImg from "../../assets/img/my_events_img.png";
import listevents from "../../assets/img/list_events.png";
import { EventsHeader } from "../../components";
import { Button, Modal } from "react-bootstrap";
import { getTransactionDetails } from "../../redux/actions/paymentAction";
import { useDispatch, useSelector } from "react-redux";
import EventsPaymentDetails from "./EventsPaymentDetails";
import "./paymentTable.css"
import SuccessToast from "../Toast/Success";

const EventWallet = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Dispatch getTransactionDetails only when the component mounts
  useEffect(() => {
    dispatch(getTransactionDetails());
  }, []);

  const paymentDetails = useSelector((state) => state.payment);
  const [expanded, setExpanded] = useState(false);
  const [withdrawSuccess, setWithdrawSuccess] = useState(null);
  const [amount, setAmount] = useState(null);
  const handleRowClick = () => {
    setExpanded(!expanded);
  };
  console.log("payment details ", paymentDetails);
  const paymentData = paymentDetails?.paymentTransactionDetails; // Ensure paymentData is available
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        {paymentData && <EventsPaymentDetails paymentData={paymentData} />}
      </div>
    </>
  );
};

export default EventWallet;
