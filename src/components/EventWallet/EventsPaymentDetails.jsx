import React, { useEffect, useState } from "react";
import bgimage from "../../assets/img/circle-bg.png";
import cardImg from "../../assets/img/my_events_img.png";
import listevents from "../../assets/img/list_events.png";
import { EventsHeader } from "../../components";
import { Button, Modal } from "react-bootstrap";
import { PaymentWithdraw } from "../../redux/actions/paymentWithdraw";
import { getTransactionDetails } from "../../redux/actions/paymentAction";
import { useDispatch, useSelector } from "react-redux";
import { getBankDetails } from "../../redux/actions/profileAction";
import { useNavigate } from "react-router-dom";
import SuccessToast from "../Toast/Success";


const EventPaymentDetails = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { userDetails } = auth;
  const paymentWithdraw = useSelector((state) => state.paymentWithdraw);
  const paymentDetails = useSelector((state) => state.payment);
  const profile = useSelector((state) => state.sponsorProfile);

  useEffect(() => {
    dispatch(getBankDetails());
    dispatch(getTransactionDetails());
  }, []);

  console.log("payment details in page ", paymentDetails);
  const paymentData = paymentDetails?.paymentTransactionDetails; // Ensure paymentData is available
  console.log("getting payment data ", paymentData);


  console.log("Account Details ", profile.bankDetails?.account_no);

  const acc_holder_name = profile?.bankDetails?.account_holder_name;
  const acc_no = profile?.bankDetails?.account_no;
  const ifsc = profile?.bankDetails?.ifsc_code;




  const { paymentWithdrawDetails, paymentWithdrawDetailsError } = paymentWithdraw;
  const [ withdrawLoading, setWithdrawLoading ] = useState(false);
  const [withdrawSuccess, setWithdrawSuccess] = useState(null);


  console.log("Withdraw message ", paymentWithdrawDetails);

  console.log("User id", userDetails?.user_id);
  const userId = userDetails?.user_id;
  const [expanded, setExpanded] = useState(false);
  const [amount, setAmount] = useState(null);
  const amount_available = paymentData?.current_balance;
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
    // Check if acc_no is available
    if (!acc_no) {
      // Redirect to "/profile"
      navigate("/profile");
      sessionStorage.setItem("withdrawError", "Add you bank details to place withdraw!!");
      return; // Stop further execution
    }
    else {
      setWithdrawLoading(true);

      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("amount", amount);
      formData.append("ifsc_code", ifsc);
      formData.append("account_no", acc_no);
      formData.append("account_holder_name", acc_holder_name);

      dispatch(PaymentWithdraw(formData));
      console.log("getting success message ", paymentWithdrawDetails);
    }
  };


  useEffect(() => {
    if (paymentWithdrawDetails) {
      if (paymentWithdrawDetails.msg == "withdra created") {
        setWithdrawLoading(false);
        // window.location.reload();
        // window.scrollTo(0, 0)
        // sessionStorage.setItem("withdrawSuccess", "Your witdraw request has been placed!!");
        setWithdrawSuccess("Your witdraw request has been placed!!");
        dispatch(getTransactionDetails());
        handleClose()
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
      {withdrawSuccess && <SuccessToast message={withdrawSuccess} />}
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
            <Button variant="success" onClick={handleWithdraw} disabled={withdrawLoading}>
              {withdrawLoading ? 'Processing...' : 'Withdraw Amount'}
            </Button>
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
                <th scope="col">Id</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Payment Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentData?.transactions.slice().reverse().map((transaction, index) => (
                <React.Fragment key={index}>
                  <tr onClick={() => handleRowClick(index)}>
                    <td>
                      <i className="bi bi-info-circle-fill"></i>
                    </td>
                    <td>{index + 1}</td>
                    <td>{formatDate(transaction.transaction_date)}</td>
                    <td>{transaction.time.slice(0, 8)}</td>
                    <td>{transaction.transaction_type === 'Debit' ? 'Withdrawal' : transaction.transaction_type}</td>
                    <td>{transaction.amount}</td>
                    {/* <td>{transaction.amount}</td> */}
                    <td>
                    {transaction.transaction_type === 'Debit' ? (
                        <div>
                          {transaction.is_approval ? (
                            <div>
                              <i className="bi bi-check-circle-fill" style={{ color: 'green' }}></i> Completed
                            </div>
                          ) : (
                            <div>
                              <i className="bi bi-clock-fill" style={{ color: 'blue' }}></i> Pending
                            </div>
                          )}
                        </div>
                      ) : (
                        <div>
                          <i className="bi bi-check-circle-fill" style={{ color: 'green' }}></i> Completed
                        </div>
                      )}
                    </td>
                  </tr>
                  {expandedRows[index] && (
                    <tr key={`expanded_${index}`}>
                      <td colSpan={7}>
                        {transaction.transaction_type === 'Credit' ? (
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th>Event Name</th>
                                <th>Event Category</th>
                                <th>Event Location</th>
                                <th>Sponsoring Items</th>
                                <th>Event Start Date</th>
                                <th>Event End Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{transaction?.sponsor_event_id?.event_id.title}</td>
                                <td>{transaction?.sponsor_event_id?.event_id.event_category}</td>
                                <td>{transaction?.sponsor_event_id?.event_id.location}</td>
                                <td>{transaction.sponsor_event_id?.sponsoring_items.flatMap(items => items?.sponsoring_items).join(', ')}</td>
                                <td>{transaction?.sponsor_event_id?.event_id.event_start_date}</td>
                                <td>{transaction?.sponsor_event_id?.event_id.event_end_date}</td>
                              </tr>
                            </tbody>
                          </table>
                        ) : transaction.transaction_type === 'Debit' ? (
                          // Expanded table for debit transactions
                          // Add your debit transaction table here
                          <table className="table table-borderless">
                            <thead>
                              <tr>
                                <th>Amount</th>
                                <th>Account Number</th>
                                <th>Account Holder Name</th>
                                {/* <th>Account Number</th> */}
                                {/* Add more columns as needed */}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{transaction?.amount}</td>
                                <td>{acc_no}</td>
                                <td>{acc_holder_name}</td>

                                <td>{/* Debit detail value 1 */}</td>
                                <td>{/* Debit detail value 2 */}</td>
                                {/* Add more cells as needed */}
                              </tr>
                            </tbody>
                          </table>
                        ) : null}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}


            </tbody>
          </table>

        </div>
        <div className="mobile-view">
          {paymentData?.transactions.slice().reverse().map((transaction, index) => (
            <div key={index} className="mobile-view-row" onClick={() => handleRowClick(index)}>
              <div><strong>id: </strong> {index + 1}</div>
              <div><strong>Date: </strong> {formatDate(transaction.transaction_date)}</div>
              <div><strong>Time: </strong>{formatTime(transaction.user_id.created_at)}</div>
              <div><strong>Amount: </strong> {transaction.amount}</div>
              <div><strong>Type:</strong> {transaction.transaction_type === 'Debit' ? 'Withdrawal' : transaction.transaction_type}</div>
              <div>
                <strong>Status:</strong> {" "}
                {transaction.transaction_type === 'Debit' ? (
                  transaction.is_approval ? (
                    <span>
                      <i className="bi bi-check-circle-fill" style={{ color: 'green' }}></i> Completed
                    </span>
                  ) : (
                    <span>
                      <i className="bi bi-clock-fill" style={{ color: 'blue' }}></i> Pending
                    </span>
                  )
                ) : (
                  <span>
                    <i className="bi bi-check-circle-fill" style={{ color: 'green' }}></i> Completed
                  </span>
                )}
              </div>
              {expandedRows[index] && (
                <div className="expanded-row">
                  {expandedRows[index] && (
                    <div className="expanded-row">
                      {transaction.transaction_type === 'Credit' ? (
                        <>
                          <div><strong>Event Name: {" "}</strong>{transaction?.sponsor_event_id?.event_id.title}</div>
                          <div><strong>Event Category: {" "}</strong> {transaction?.sponsor_event_id?.event_id.event_category}</div>
                          <div><strong>Event Location: {" "}</strong> {transaction?.sponsor_event_id?.event_id.location}</div>
                          <div><strong>Sponsoring Item: {" "}</strong> {transaction.sponsor_event_id?.sponsoring_items.flatMap(items => items?.sponsoring_items).join(', ')}</div>
                          <div><strong>Event Start Date: {" "}</strong> {transaction?.sponsor_event_id?.event_id.event_start_date}</div>
                          <div><strong>Event End Date: {" "}</strong> {transaction?.sponsor_event_id?.event_id.event_end_date}</div>
                        </>
                      ) : transaction.transaction_type === 'Debit' ? (
                        <>
                          <div><strong>Amount: {" "}</strong> {transaction.amount}</div>
                          <div><strong>Account Number: {" "}</strong> {acc_no}</div>
                          <div><strong>Account Holder Name: {" "}</strong> {acc_holder_name}</div>
                        </>
                      ) : null}
                    </div>
                  )}

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

export default EventPaymentDetails;