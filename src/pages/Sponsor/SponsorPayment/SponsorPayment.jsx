import React, { useEffect, useState } from "react";
import "./payment.css";
import bgimage from "../../../assets/img/circle-bg.png";
import { Footer } from "../../../components";
import SponsorpayCard from "./SponsorpayCard";
import { useLocation, useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { completeEventPayment, createSponsor, updateSponsoringItem } from "../../../redux/actions/sponsorAction";
import apiurl from "../../../constant/config";
import { PaymentCheckout } from "./PaymentCheckout";

const SponsorPayment = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  const dispatch = useDispatch();
  const Razorpay = useRazorpay();
  const locationState = useLocation();
  const { cardData, sponsoring_items, sponsoring_price } = locationState.state;
  console.log("Card Data", cardData);
  console.log("Price", sponsoring_price);
  console.log("Item", sponsoring_items);
  const tax_amount = Math.ceil((sponsoring_price * 19) / 100);
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  console.log("Sponsor_user_id ", userDetails.user_id);
  const total_amount = (Number(sponsoring_price) + Number(tax_amount)).toFixed(
    2
  );
  const sponsor = useSelector((state) => state.sponsor);

  // const sponsoring_items = cardData?.sponsoring_items || [];
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerImageFileName, setBannerImageFileName] = useState(null);
  const [billImage, setBillImage] = useState(null);
  const [billImageFileName, setBillImageFileName] = useState(null);
  const [ledImage, setLedImage] = useState(null);
  const [ledImageFileName, setLedImageFileName] = useState(null);
  const [ledVideo, setLedVideo] = useState(null);
  const [ledVideoFileName, setLedVideoFileName] = useState(null);
  const [billText, setBillText] = useState(null);
  const [preBillText, setPreBillText] = useState(cardData?.bill_text);
  const [orderCreateError, setOrderCreateError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook
  const formattedSponsoringItems = sponsoring_items.map((item) => ({
    sponsoring_items: item,
  }));
  const [showPayment, setShowPayment] = useState(true);
  console.log("formatting sponsoring item ", formattedSponsoringItems);
  const { SponsoringItemDetails, SponsoringItemError, loading } = sponsor;

  const [stripeSponsorId, setStripeSponsorId] = useState("");
  const [stripePublishKey, setStripePublishKey] = useState("");
  const [stripeClientSecret, setStripeClientSecret] = useState("");

  const toggleForm = () => {
    setShowPayment((prev) => !prev);
  };

  const [error, setError] = useState('');

  const checkSponsoringItems = () => {
    // Loop through sponsoring items and check if each item has necessary content
    for (const item of formattedSponsoringItems) {
      if (
        (item.sponsoring_items === 'banner' && !(bannerImage || cardData?.banner_image)) ||
        (item.sponsoring_items === 'bill_board' && !(billImage || cardData?.bill_board)) ||
        (item.sponsoring_items === 'led_screen' && !(ledImage || cardData?.led_image))
        // (item.sponsoring_items === 'led_screen' && !(ledVideo || cardData?.led_video))
      ) {
        return false; // Sponsoring item is not filled
      }
    }
    return true; // All sponsoring items are filled
  };

  const handleListPromotion = () => {
    const allFilled = checkSponsoringItems();
    if (!allFilled) {
      setError("One or more sponsoring items isn't filled.");
      window.scroll(0, 0)
    } else {
      setError(''); // Clear any previous error
      toggleForm();
      window.scroll(0, 0)
    }
  };


  const generateUniqueFilename = (originalFilename, index) => {
    const extension = originalFilename.split('.').pop();
    const uniqueFilename = `thumbnail${index + 1}_${Date.now()}.${extension}`;
    return uniqueFilename;
  };

  const handleBannerImgChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setBannerImage(file);
    setBannerImageFileName(uniqueFilename); // Save the unique filename in state
  };

  const handleBillImgChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setBillImage(file);
    setBillImageFileName(uniqueFilename); // Save the unique filename in state
  };

  const handleLedImgChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setLedImage(file);
    setLedImageFileName(uniqueFilename); // Save the unique filename in state
  };

  const handleLedVidChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setLedVideo(file);
    setLedVideoFileName(uniqueFilename); // Save the unique filename in state
  };

  // complete order
  // const complete_order = async (paymentID, orderID, signature) => {
  //   axios({
  //     method: "post",
  //     // url: "http://127.0.0.1:8000/api/razorpay/order/complete/",
  //     url: `${apiurl}/api/razorpay/order/complete/`,
  //     data: {
  //       payment_id: paymentID,
  //       order_id: orderID,
  //       signature: signature,
  //       tax_amount: total_amount,
  //       amount: sponsoring_price,
  //       event_user_id: cardData.user_id,
  //       event_id: cardData.event_id,
  //       sponsor_user_id: userDetails.user_id,
  //       sponsoring_items: formattedSponsoringItems,
  //     },
  //   })
  //     .then((response) => {
  //       console.log("All data ", response);
  //       if (response.data.message === "transaction created") {
  //         console.log("handle submit click functon call here", response);
  //         console.log("All data after crating the payment ", response);
  //         const formData = new FormData();
  //         // formData.append("sponsor_id", cardData.sponsor_id);
  //         formData.append("sponsor_id", response.data?.sponsord_event?.sponsor_id);
  //         formattedSponsoringItems.forEach((item) => {
  //           switch (item.sponsoring_items) {
  //             case "banner":
  //               formData.append("banner_image", bannerImage, bannerImageFileName || "");
  //               // formData.append("banner_image", bannerImage || "");
  //               break;
  //             case "led_screen":
  //               formData.append("led_image", ledImage, ledImageFileName || "");
  //               formData.append("led_video", ledVideo || "");
  //               break;
  //             case "bill_board":
  //               formData.append("bill_board", billImage, billImageFileName || "");
  //               break;
  //             // Add more cases for other sponsoring item types if needed
  //             default:
  //               break;
  //           }
  //         });
  //         dispatch(updateSponsoringItem(formData));
  //         sessionStorage.setItem(
  //           "successMessage",
  //           "Event Sponsored successfully!"
  //         );
  //         navigate("/sponsored_event"); // Replace '/' with the desired route for the home page
  //         // window.location.reload(); // Reload the page
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  // };

  const complete_order = async () => {
    axios({
      method: "post",
      // url: "http://127.0.0.1:8000/api/razorpay/order/complete/",
      url: `${apiurl}/api/razorpay/order/complete/`,
      data: {
        tax_amount: total_amount,
        amount: sponsoring_price,
        event_user_id: cardData.user_id,
        event_id: cardData.event_id,
        sponsor_user_id: userDetails.user_id,
        sponsoring_items: formattedSponsoringItems,
      },
    })
      .then((response) => {
        console.log("All data ", response);
        if (response.data.message === "transaction created") {
          console.log("handle submit click functon call here", response);
          console.log("All data after crating the payment ", response);
          sessionStorage.setItem(
            "successMessage",
            "Event Sponsored successfully!"
          );
          navigate("/sponsored_event"); // Replace '/' with the desired route for the home page
          // window.location.reload(); // Reload the page
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };


  // const razorPay = () => {
  //   //create order
  //   axios({
  //     method: "post",
  //     // url: "http://127.0.0.1:8000/api/razorpay/order/create/",
  //     url: `${apiurl}/api/razorpay/order/create/`,
  //     data: {
  //       amount: total_amount,
  //       currency: "INR",
  //     },
  //   })
  //     .then((response) => {
  //       // get order id
  //       console.log("response", response);
  //       const order_id = response?.data?.data.id;

  //       // handle payment
  //       const options = {
  //         key: "rzp_test_kLJsk74wAsyTQm", // Enter the Key ID generated from the Dashboard
  //         name: "MySponsor",
  //         description: "Test Transaction",
  //         // image: "https://example.com/your_logo",
  //         order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
  //         handler: function (response) {
  //           console.log("Complete Order", response);
  //           // setOrderCreateError("");
  //           //complete order
  //           complete_order(
  //             response.razorpay_payment_id,
  //             response.razorpay_order_id,
  //             response.razorpay_signature
  //           );
  //         },
  //         theme: {
  //           color: "#3399cc",
  //         },
  //         modal: {
  //           escape: false,
  //           backdropClose: false
  //         }
  //       };

  //       const rzp1 = new window.Razorpay(options);
  //       rzp1.on("payment.failed", function (response) {
  //         alert(response.error.code);
  //         // alert(response.error.description);
  //         // alert(response.error.source);
  //         // alert(response.error.step);
  //         // alert(response.error.reason);
  //         // alert(response.error.metadata.order_id);
  //         // alert(response.error.metadata.payment_id);
  //       });
  //       rzp1.open();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setOrderCreateError("Please Try Again");
  //     });
  // };


  // const razorPay = () => {
  //   axios({
  //     method: "post",
  //     url: `${apiurl}/api/razorpay/order/create/`,
  //     data: {
  //       amount: total_amount,
  //       currency: "INR",
  //     },
  //   })
  //     .then((response) => {
  //       const order_id = response?.data?.data.id;

  //       // Assuming you have retrieved all the necessary data for the form
  //       const formData = {
  //         key_id: "rzp_test_kLJsk74wAsyTQm",
  //         amount: total_amount,
  //         order_id: order_id,
  //         name: "Acme Corp",
  //         description: "A Wild Sheep Chase",
  //         image: "https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.jpg",
  //         prefill: {
  //           name: "Gaurav Kumar",
  //           contact: "9123456780",
  //           email: "gaurav.kumar@example.com",
  //         },
  //         notes: {
  //           "shipping address": "L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001",
  //         },
  //         // callback_url: `${apiurl}/api/razorpay/order/complete/`,
  //         // callback_url: "http://localhost:3000",
  //         // callback_url: `${window.location.origin}/payment-complete`, // Navigate to frontend URL
  //         callback_url: `${apiurl}/api/razorpay/order/complete/`, // Use your actual callback URL here
  //         cancel_url: "https://example.com/payment-cancel",
  //         // ...additionalData, // Spread the additional data into the formData
  //       };

  //       // Create a form element
  //       const form = document.createElement("form");
  //       form.method = "POST";
  //       form.action = "https://api.razorpay.com/v1/checkout/embedded";

  //       // Append input fields to the form
  //       Object.entries(formData).forEach(([key, value]) => {
  //         const input = document.createElement("input");
  //         input.type = "hidden";
  //         input.name = key;
  //         input.value = value;
  //         form.appendChild(input);
  //       });

  //       // Append the form to the document body and submit
  //       document.body.appendChild(form);
  //       form.submit();
  //       // window.location.href = "http://localhost:3000";
  //     })
  //     .then(() => {
  //       // Redirect to http://localhost:3000 after successful callback URL API call
  //       window.location.href = "http://localhost:3000";
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setOrderCreateError("Please Try Again");
  //     });
  // };


  const razorPay = () => {
    const access = JSON.parse(localStorage.getItem("access"));
    const formData = new FormData();

    // Append other data to FormData
    formData.append("tax_amount", total_amount);
    formData.append("amount", sponsoring_price);
    formData.append("event_user_id", cardData.user_id);
    formData.append("event_id", cardData.event_id);
    formData.append("sponsor_user_id", userDetails.user_id);
    // formattedSponsoringItems.forEach((item) => {
    //   formData.append("sponsoring_items", item.sponsoring_items);
    // });
    formData.append("sponsoring_items", JSON.stringify(formattedSponsoringItems));

    // Append images for each sponsoring item
    formattedSponsoringItems.forEach((item) => {
      switch (item.sponsoring_items) {
        case "banner":
          formData.append("banner_image", bannerImage, bannerImageFileName || "");
          break;
        case "led_screen":
          formData.append("led_image", ledImage, ledImageFileName || "");
          formData.append("led_video", ledVideo || "");
          break;
        case "bill_board":
          formData.append("bill_board", billImage, billImageFileName || "");
          break;
        // Add more cases for other sponsoring item types if needed
        default:
          break;
      }
    });

    axios({
      method: "post",
      url: `${apiurl}/api/razorpay/order/create/`,
      data: formData,
      headers: {
        Authorization: `Bearer ${access}`,
        "Content-Type": "multipart/form-data", // Important for FormData
      },
    })
      .then((response) => {
        console.log("response", response);
        // Store necessary information from response in state
        setStripePublishKey(response.data.publish_key);
        setStripeClientSecret(response.data.client_secret);
        setStripeSponsorId(response.data.response.sponsord_event.sponsor_id)
        // Open the modal after receiving the response
        document.getElementById("paymentModalButton").click();
      })
      .catch((error) => {
        console.log(error);
        setOrderCreateError("Please Try Again");
      });
  };



  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'inr',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };


  console.log("Sponsorign item detatils ", SponsoringItemDetails);
  console.log("Sponsorign item error ", SponsoringItemError);

  return (
    <>
      <div>
        {showPayment ? (
          // <h1 onClick={toggleForm}>Continue to Payment</h1>
          <>
            <h1 className="font-weight-bold d-none d-lg-block">
              Add Photos & Videos
            </h1>
            <h2 className="sponsor-mobile-text">Add Photos</h2>
            <p>(atleast 1 photo & 1 video)</p>

            {error && <div className="alert alert-danger">{error}</div>}


            {formattedSponsoringItems.map((item, index) => (
              <div
                key={index}
                className="box1 mt-2 d-flex justify-content-center"
                style={{ gap: "2%" }}
              >
                {item.sponsoring_items === "bill_board" && (
                  <div
                    className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                    style={{ width: "50%" }}
                  >
                    <div className="box text-center">
                      <h5 className="font-weight-bold">Add Bill-Board Image</h5>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleBillImgChange}
                        style={{ width: "74%", borderRadius: "0" }}
                      />
                      {cardData?.bill_image && billImage === null ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={apiurl + cardData?.bill_image}
                            alt="Preview"
                            width="200"
                          />
                        </div>
                      ) : null}
                      {billImage ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={URL.createObjectURL(billImage)}
                            alt=""
                            width="200"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}

                {item.sponsoring_items === "banner" && (
                  <div
                    className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                    style={{ width: "50%" }}
                  >
                    <div className="box text-center">
                      <h5 className="font-weight-bold">Add Banner Image</h5>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleBannerImgChange}
                        style={{ width: "74%", borderRadius: "0" }}
                      />
                      {cardData?.banner_image && bannerImage === null ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={apiurl + cardData?.banner_image}
                            alt="Preview"
                            width="200"
                          />
                        </div>
                      ) : null}
                      {bannerImage ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={URL.createObjectURL(bannerImage)}
                            alt=""
                            width="200"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}

                {item.sponsoring_items === "led_screen" && (
                  <div
                    className="box photo-box bg-white d-flex justify-content-center align-items-start p-3 w-md-50"
                    style={{ width: "50%" }}
                  >
                    <div className="box text-center">
                      <h5 className="font-weight-bold">Add Led Image</h5>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLedImgChange}
                        style={{ width: "74%", borderRadius: "0" }}
                      />
                      {cardData?.led_image && ledImage === null ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={apiurl + cardData?.led_image}
                            alt=""
                            width="200"
                          />
                        </div>
                      ) : null}
                      {ledImage ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={URL.createObjectURL(ledImage)}
                            alt="Preview"
                            width="200"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}

                {item.sponsoring_items === "led_screen" && (
                  <div
                    className="box photo-box bg-white d-flex justify-content-center align-items-start p-3 w-md-50"
                    style={{ width: "50%" }}
                  >
                    <div className="box text-center">
                      <h5 className="font-weight-bold">Add Led Video</h5>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={handleLedVidChange}
                        style={{ width: "74%", borderRadius: "0" }}
                      />
                      {cardData?.led_video && ledVideo == null ? (
                        <div>
                          <h2>Preview:</h2>
                          <video width="200" controls className="mx-auto">
                            <source
                              src={apiurl + cardData?.led_video}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : null}
                      {ledVideo ? (
                        <div>
                          <h2>Preview:</h2>
                          <video width="200" controls className="mx-auto">
                            <source
                              src={URL.createObjectURL(ledVideo)}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="container" style={{ alignItems: 'center', padding: '2%' }}>
              <input
                type="submit"
                className="btn btn-primary submit py-1 px-3"
                value="Make Payment"
                onClick={handleListPromotion}
              />
            </div>
          </>
        ) : (
          <div
            className="sponsor-pay-bg"
            style={{
              width: "100%",
              height: "auto",
              paddingBottom: '1%',
              backgroundImage: `url(${bgimage})`,
            }}
          >
            <div className="container">
              <h2 className="sponsor-pay-text">Payment Gateway</h2>
              <h2 className="sponsor-pay-mobile-text">Payment Gateway</h2>
            </div>
            <SponsorpayCard data={cardData} />
            <div className="container">
              <div className="box amount-info">
                <div className="d-flex justify-content-between font-weight-bolder">
                  <h5>Sponsor Total</h5>
                  <h5>₹{sponsoring_price}</h5>
                </div>
                <div className="d-flex justify-content-between font-weight-bolder">
                  <h5>GST(19%)</h5>
                  <h5>+ ₹{tax_amount}</h5>
                </div>
                <div className="d-flex justify-content-between font-weight-bolder">
                  <h5>Platform Fee</h5>
                  <h5>+ ₹0</h5>
                </div>
              </div>
              <hr style={{ borderTop: "1px solid #535353" }} />
              <div className="box grand-total">
                <h5 className="text-center">Grand Total</h5>
                <div className="d-flex justify-content-center">
                  <span className="bagde-pill text-white text-xl">
                    ₹{total_amount}
                  </span>
                </div>
              </div>
              <button className="category-btn btn mb-3" onClick={razorPay} style={{ width: "100%" }}>
                <p className="category-btn-text">
                  Sponsor
                </p>
              </button>

              <button id="paymentModalButton" className="category-btn btn mb-3" style={{ width: "100%", display: "none" }} data-bs-toggle="modal" data-bs-target="#paymentModal">
                <p className="category-btn-text">Sponsor</p>
              </button>


              {/* {showPaymentModal && (
                <div className="modal fade show" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" aria-modal="true" role="dialog">
                  <div className="modal-dialog modal-dialog-centered" style={{ margin: 0, width: '100%', height: '100vh', maxWidth: '100%', maxHeight: '100%' }}>
                    <div className="modal-content" style={{ height: 'fit-content', minHeight: '100%' }}>
                      <div className="modal-body">
                      
                        <h2>Payment Gateway</h2>
                        
                        <Elements stripe={loadStripe(stripePublishKey)} options={{ clientSecret: stripeClientSecret }}>
                          <PaymentCheckout />
                        </Elements>
                      </div>
                      <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                    </div>
                  </div>
                </div>
              )} */}


              {/* <button className="category-btn btn mb-3" style={{ width: "100%" }} data-bs-toggle="modal" data-bs-target="#paymentModal">
                <p className="category-btn-text">
                  Sponsor
                </p>
              </button> */}
              {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#paymentModal">
                Launch demo modal
              </button> */}

              <div className="modal fade" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ margin: 0, width: '100%', height: '100vh', maxWidth: '100%', maxHeight: '100%' }}>

                  <div className="modal-content" style={{ height: 'fit-content', minHeight: '100%' }}>

                    <div className="modal-body">
                      <div className="container">
                        <h2 className="sponsor-pay-text">Payment Gateway</h2>
                        <h2 className="sponsor-pay-mobile-text">Payment Gateway</h2>
                      </div>
                      <div className="container">

                        <div className="box amount-info">
                          <div className="d-flex justify-content-between font-weight-bolder">
                            <h5>Sponsor Total</h5>
                            <h5>₹{sponsoring_price}</h5>
                          </div>
                          <div className="d-flex justify-content-between font-weight-bolder">
                            <h5>GST(19%)</h5>
                            <h5>+ ₹{tax_amount}</h5>
                          </div>
                          <div className="d-flex justify-content-between font-weight-bolder">
                            <h5>Platform Fee</h5>
                            <h5>+ ₹0</h5>
                          </div>
                        </div>
                        <hr style={{ borderTop: "1px solid #535353" }} />
                        <div className="box grand-total">
                          <h5 className="text-center">Grand Total</h5>
                          <div className="d-flex justify-content-center">
                            <span className="bagde-pill text-white text-xl">
                              ₹{total_amount}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Elements stripe={loadStripe(stripePublishKey)} options={{ clientSecret: stripeClientSecret }} >
                        <PaymentCheckout sponsorId={stripeSponsorId} />
                      </Elements>
                    </div>
                  </div>
                </div>
              </div>


              {/* <Elements stripe={loadStripe("pk_test_51NerRiSIZdF1sMC7CLPR7CidRlCfKvD8HfIF4mz56gY4UJmVx3DDaTZuHxqfsui72Z5MWN0CNNFy00MtzSP98w4f00PHg7BWV1")} options={options} >
                <PaymentCheckout />
              </Elements> */}

              {/* <PaymentCheckout /> */}

              {/* <form method="POST" action="https://api.razorpay.com/v1/checkout/embedded">
                <input type="hidden" name="key_id" value="YOUR_KEY_ID" />
                <input type="hidden" name="amount" value='1001'/>
                <input type="hidden" name="order_id" value="razorpay_order_id" />
                <input type="hidden" name="name" value="Acme Corp" />
                <input type="hidden" name="description" value="A Wild Sheep Chase" />
                <input type="hidden" name="image" value="https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.jpg" />
                <input type="hidden" name="prefill[name]" value="Gaurav Kumar" />
                <input type="hidden" name="prefill[contact]" value="9123456780" />
                <input type="hidden" name="prefill[email]" value="gaurav.kumar@example.com" />
                <input type="hidden" name="notes[shipping address]" value="L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001" />
                <input type="hidden" name="callback_url" value="https://example.com/payment-callback" />
                <input type="hidden" name="cancel_url" value="https://example.com/payment-cancel" />
                <button>Submit</button>
              </form> */}
              <p className="error-msg">{orderCreateError}</p>
              <div className="payment-description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                  adipisci voluptates esse ut impedit, assumenda quae nam
                  voluptatum, ad temporibus dolore nobis eveniet dolor! Consequatur
                  nulla saepe, nesciunt mollitia voluptates aut voluptatem id
                  repudiandae dignissimos, voluptatibus tenetur expedita autem culpa
                  nihil deleniti omnis? Iusto enim quae voluptate assumenda illo
                  harum!
                </p>
              </div>
            </div >

          </div >
        )}
      </div >

    </>
  );
};

export default SponsorPayment;
