import React, { useEffect, useState } from "react";
import bgimage from "../../assets/img/circle-bg.png";
import cardImg from "../../assets/img/my_events_img.png";
import listevents from "../../assets/img/list_events.png";
import { EventsHeader } from "../../components";
import { Button, Modal } from "react-bootstrap";
import { PaymentWithdraw } from "../../redux/actions/paymentWithdraw";
import { useDispatch, useSelector } from "react-redux";

const ContentPaymentDetails = (paymentData) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  const paymentWithdraw = useSelector((state) => state.paymentWithdraw);
  const { paymentWithdrawDetails, paymentWithdrawDetailsError } = paymentWithdraw;

  console.log("Withdraw message ", paymentWithdrawDetails);

  console.log("User id", userDetails?.user_id);
  const userId = userDetails?.user_id;
  const [expanded, setExpanded] = useState(false);
  const [amount, setAmount] = useState(null);
  const amount_available = paymentData?.paymentData?.current_balance;
  const [withdrawErrorMsg, setWithdrawErrorMsg] = useState('');
  const [withdrawError, setWithdrawError] = useState('');
  const [show, setShow] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedRows, setExpandedRows] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCheckWithdraw = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue) && (inputValue === '' || parseFloat(inputValue) <= amount_available)) {
      setAmount(inputValue);
      setWithdrawErrorMsg('');
    } else {
      setWithdrawErrorMsg("Withdrawal amount exceeds available balance");
    }
  };

  const handleWithdraw = () => {
    dispatch(PaymentWithdraw(userId, amount));
    console.log("getting success message ", paymentWithdrawDetails);
  };

  useEffect(() => {
    if (paymentWithdrawDetails) {
      if (paymentWithdrawDetails.msg == "withdra created") {
        window.location.reload();
        window.scrollTo(0, 0)
        sessionStorage.setItem("withdrawSuccess", "Your witdraw request has been placed!!");
        // handleClose()
      } else {
        setWithdrawError("Getting some error while placing your request!")
      }
    }
  }, [paymentWithdrawDetails]);

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
            <span className="bagde-pill text-white text-xl">₹{amount_available}</span>
          </div>
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
          {withdrawError &&
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>{withdrawError}</strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          }
          <Modal.Body>
            <div className="form-group">
              <label>Enter Amount</label>
              <input
                type="number"
                value={amount}
                onChange={handleCheckWithdraw}
                className="form-control"
                placeholder="Enter Amount to withdraw"
              />
              {withdrawErrorMsg && <div style={{ color: 'red' }}>{withdrawErrorMsg}</div>}
            </div>
            <label>Total Amount Available: ₹{amount_available}</label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleWithdraw}>Withdraw Amount</Button>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <h2 className="sponsor-pay-text">Payment History</h2>
        <h2 className="sponsor-pay-mobile-text">My Payment History</h2>
        <div className="desktop-view">
          <table className="table bg-light overflow-hidden" style={{ borderRadius: "10px" }}>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Content</th>
                <th scope="col">Date</th>
                {/* <th scope="col">Time of Payment</th> */}
                <th scope="col">Payment Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                {/* <th scope="col">Info</th> */}
              </tr>
            </thead>
            <tbody>
              {paymentData?.paymentData?.transactions.slice().reverse().map((transaction, index) => (
                <React.Fragment key={index}>
                  <tr onClick={() => handleRowClick(index)}>
                    <td>
                      <i className="bi bi-info-circle-fill"></i>
                    </td>
                    <td>{transaction?.content_sponsor_id?.content_id?.title}</td>
                    <td>{formatDate(transaction.transaction_date)}{" "}{formatTime(transaction.user_id.created_at)}</td>
                    <td>{transaction.transaction_type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.amount}</td>
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
                              <td>{transaction.sponsor_event_id?.sponsoring_items.flatMap(items => items?.sponsoring_items).join(', ')}</td>
                              <td>{transaction.additionalDetail3}</td>
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
          {paymentData?.paymentData?.transactions.slice().reverse().map((transaction, index) => (
            <div key={index} className="mobile-view-row" onClick={() => handleRowClick(index)}>
              <div><strong>Event:</strong> {transaction.event}</div>
              <div><strong>Date:</strong> {formatDate(transaction.transaction_date)}{" "}{formatTime(transaction.user_id.created_at)}</div>
              <div><strong>Amount:</strong> {transaction.amount}</div>
              <div><strong>Type:</strong> {transaction.transaction_type}</div>
              <div><strong>Status:</strong> {transaction.amount}</div>
              {expandedRows[index] && (
                <div className="expanded-row">
                  <div><strong>Payment Type:</strong> {transaction.transaction_type}</div>
                  <div><strong>Payment Date:</strong> {formatDate(transaction.transaction_date)}</div>
                </div>
              )}
              <div className="expand-icon">
                <i className={`bi bi-info-circle-fill ${expandedRows[index] ? 'expanded' : ''}`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ContentPaymentDetails;