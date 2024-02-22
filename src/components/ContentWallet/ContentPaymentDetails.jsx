import React, { useEffect, useState } from "react";
import bgimage from "../../assets/img/circle-bg.png";
import cardImg from "../../assets/img/my_events_img.png";
import listevents from "../../assets/img/list_events.png";
import { EventsHeader } from "..";
import { Button, Modal } from "react-bootstrap";
import { getTransactionDetails } from "../../redux/actions/paymentAction";
import { useDispatch, useSelector } from "react-redux";

const EventsPaymentDetails = (paymentData) => {

  const [expanded, setExpanded] = useState(false);
  const [amount, setAmount] = useState(null);
  // const handleRowClick = () => {
  //   setExpanded(!expanded);
  // };
  const [show, setShow] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowClick = (index) => {
    const newExpandedRows = [...expandedRows];
    newExpandedRows[index] = !newExpandedRows[index];
    setExpandedRows(newExpandedRows);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const localTime = new Date(date.getTime() + date.getTimezoneOffset() * 60000); // Adjust for local time zone
    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const seconds = localTime.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(paymentData);
  return (
    <>
      <div className="container">
        <h2 className="sponsor-pay-text">My Total Balance</h2>
        <h2 className="sponsor-pay-mobile-text">My Total Balance</h2>
        <div className="box grand-total">
          <h5 className="text-center">
            My Wallet Balance&nbsp;{" "}
            <i class="bi text-secondary bi-wallet-fill"></i>
          </h5>
          <div className="d-flex justify-content-center">
            <span className="bagde-pill text-white text-xl">₹{paymentData?.paymentData[0]?.user_id.current_balance}</span>
          </div>
        </div>
        <h2 className="sponsor-pay-text">Payment History</h2>
        <h2 className="sponsor-pay-mobile-text">My Payment History</h2>
        <div className="desktop-view">
          <table className="table bg-light overflow-hidden" style={{ borderRadius: "10px" }}>
            <thead>
              <tr>
                <th scope="col">Events</th>
                <th scope="col">Date of Payment</th>
                <th scope="col">Time of Payment</th>
                <th scope="col">Amount Paid</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {paymentData?.paymentData.map((transaction, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{transaction.event}</td>
                    <td>{formatDate(transaction.transaction_date)}</td>
                    <td>{formatTime(transaction.sponsor_event_id.created_at)}</td>
                    <td>{transaction.amount}</td>
                    <td>
                      <h4>
                        <i onClick={() => handleRowClick(index)} className="bi bi-info-circle-fill"></i>
                      </h4>
                    </td>
                  </tr>
                  {expandedRows[index] && (
                    <tr key={`expanded_${index}`}>
                      <td colSpan={5}>
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Payment Type</th>
                              <th>Sponsoring Items</th>
                              <th>Prices</th>
                              <th>Sponsor Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{transaction.transaction_type}</td>
                              <td>{transaction.sponsor_event_id.sponsoring_items.flatMap(items => items.sponsoring_items).join(', ')}</td>
                              <td>{transaction.additionalDetail3}</td>
                              {/* Add additional cells for extra details */}
                              {/* Add as many cells as needed for the additional details */}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>

        </div>
        <div className="mobile-view">
          <table
            className="table bg-light overflow-hidden"
            style={{ borderRadius: "10px" }}
          >
            <thead>
              <tr>
                <th scope="col">Events</th>
                <th scope="col">Amount Payed</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {paymentData?.paymentData.map((transaction, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>{transaction.event}</td>
                    <td>{transaction.amount}</td>
                    {/* <td>{formatDate(transaction.transaction_date)}</td>
                  <td>{formatTime(transaction.sponsor_event_id.created_at)}</td> */}
                    <td>
                      <h4>
                        <i onClick={() => handleRowClick(index)} className="bi bi-info-circle-fill"></i>
                      </h4>
                    </td>
                  </tr>
                  {expandedRows[index] && (
                    <tr key={`expanded_${index}`}>
                      <td colSpan={5}>
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th>Payment Type</th>
                              <th>Payment Date</th>
                              {/* <th>Sponsoring Items</th>
                            <th>Prices</th>
                            <th>Sponsor Name</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{transaction.transaction_type}</td>
                              <td>{formatDate(transaction.transaction_date)}</td>

                            {/* <td>{transaction.sponsor_event_id.sponsoring_items.flatMap(items => items.sponsoring_items).join(', ')}</td>
                            <td>{transaction.additionalDetail3}</td> */}
                              {/* Add additional cells for extra details */}
                              {/* Add as many cells as needed for the additional details */}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => setShow(true)}
          className="category-btn btn mb-3"
          style={{ width: "100%" }}
        >
          <p className="category-btn-text">Withdraw</p>
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Amount Withdraw</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label>Enter Amount</label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control"
                placeholder="Enter Withdraw Amount"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">Withdraw Amount</Button>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default EventsPaymentDetails;