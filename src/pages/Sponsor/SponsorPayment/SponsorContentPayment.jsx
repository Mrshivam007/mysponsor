import React, { useEffect, useState } from "react";
import "./payment.css";
import bgimage from "../../../assets/img/circle-bg.png";
import { Footer } from "../../../components";
import SponsorpayCard from "./SponsorpayCard";
import { useLocation, useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { completeEventPayment, createSponsor, updateContentSponsoringItem } from "../../../redux/actions/sponsorAction";
import apiurl from "../../../constant/config";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ContentPaymentCheckout } from "./ContentPaymentCheckout";

const SponsorContentPayment = () => {
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
  const [sponsored_by, setSponsored_by] = useState("");
  const [sponsored_byFileName, setSponsored_byFileName] = useState("");
  const [tag_ads, setTag_ads] = useState("");
  const [tag_adsFileName, setTag_adsFileName] = useState("");
  const [reel_sponsored, setReel_sponsored] = useState("");
  const [reel_sponsoredFileName, setReel_sponsoredFileName] = useState("");
  const [pre_reel_sponsored, setPre_Reel_sponsored] = useState(cardData?.reel_sponsored);
  const [pre_tag_ads, setPre_Tag_ads] = useState(cardData?.tag_ads);
  const [pre_sponsored_by, setPre_Sponsored_by] = useState(cardData?.sponsored_by);
  const [orderCreateError, setOrderCreateError] = useState("");
  const [stripeSponsorId, setStripeSponsorId] = useState("");
  const [stripePublishKey, setStripePublishKey] = useState("");
  const [stripeClientSecret, setStripeClientSecret] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate hook
  const formattedSponsoringItems = sponsoring_items.map((item) => ({
    sponsoring_items: item,
  }));
  const [showPayment, setShowPayment] = useState(true);
  console.log("formatting sponsoring item ", formattedSponsoringItems);
  const { SponsoringItemDetails, SponsoringItemError, loading } = sponsor;



  const toggleForm = () => {
    setShowPayment((prev) => !prev);
  };

  const [error, setError] = useState('');

  const checkSponsoringItems = () => {
    // Loop through sponsoring items and check if each item has necessary content
    for (const item of formattedSponsoringItems) {
      if (
        (item.sponsoring_items === 'sponsored_by' && !(sponsored_by || cardData?.sponsored_by)) ||
        (item.sponsoring_items === 'tag_ads' && !(tag_ads || cardData?.tag_ads)) ||
        (item.sponsoring_items === 'reel_sponsored' && !(reel_sponsored || cardData?.reel_sponsored))
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

  const handleSponsored_byChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setSponsored_by(file);
    setSponsored_byFileName(uniqueFilename); // Save the unique filename in state
  };

  const handletag_adsChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setTag_ads(file);
    setTag_adsFileName(uniqueFilename); // Save the unique filename in state
  };

  const handleReel_SponsoredChange = (e) => {
    const file = e.target.files[0];
    const uniqueFilename = generateUniqueFilename(file.name, 0);
    setReel_sponsored(file);
    setReel_sponsoredFileName(uniqueFilename); // Save the unique filename in state
  };

  // complete order
  const complete_order = async (paymentID, orderID, signature) => {
    axios({
      method: "post",
      url: `${apiurl}/api/razorpay/content/order/complete/`,
      data: {
        payment_id: paymentID,
        order_id: orderID,
        signature: signature,
        tax_amount: total_amount,
        amount: sponsoring_price,
        content_user_id: cardData.user_id,
        content_id: cardData.content_id,
        sponsor_user_id: userDetails.user_id,
        sponsoring_content_items: formattedSponsoringItems,
      },
    })
      .then((response) => {
        console.log("All data ", response);
        if (response.data.message === "transaction created") {
          console.log("handle submit click functon call here", response);
          console.log("All data after crating the payment ", response);
          const formData = new FormData();
          // formData.append("sponsor_id", cardData.sponsor_id);
          formData.append("sponsor_id", response.data?.sponsord_event?.content_sponsor_id);
          formattedSponsoringItems.forEach((item) => {
            switch (item.sponsoring_items) {
              case "sponsored_by":
                formData.append("sponsored_by", sponsored_by, sponsored_byFileName || "");
                break;
              case "tag_ads":
                formData.append("tag_ads", tag_ads, tag_adsFileName || "");
                break;
              case "reel_sponsored":
                formData.append("reel_sponsored", reel_sponsored, reel_sponsoredFileName || "");
                break;
              // Add more cases for other sponsoring item types if needed
              default:
                break;
            }
          });
          // try {
          //   dispatch(updateSponsoringItem(formData));
          //   // sessionStorage.setItem("successMessage", "Class created successfully!");
          //   // navigate("/sponsored_event"); // Replace '/' with the desired route for the home page
          // } catch (error) {
          //   console.log("An error occurred during API calls:", error);
          // }
          dispatch(updateContentSponsoringItem(formData));
          sessionStorage.setItem(
            "successMessage",
            "Content Sponsored Successfully!"
          );
          navigate("/sponsored_content"); // Replace '/' with the desired route for the home page
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
  //       setOrderCreateError("");


  //       // handle payment
  //       const options = {
  //         key: "rzp_test_kLJsk74wAsyTQm", // Enter the Key ID generated from the Dashboard
  //         name: "MySponsor",
  //         description: "Test Transaction",
  //         image: "https://example.com/your_logo",
  //         order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
  //         handler: function (response) {
  //           console.log("Complete Order", response);
  //           //complete order
  //           complete_order(
  //             response.razorpay_payment_id,
  //             response.razorpay_order_id,
  //             response.razorpay_signature
  //           );
  //         },
  //         // prefill: {
  //         // name: "Piyush Garg",
  //         // email: "youremail@example.com",
  //         // contact: "9999999999",
  //         // },
  //         // notes: {
  //         // address: "Razorpay Corporate Office",
  //         // },
  //         theme: {
  //           color: "#3399cc",
  //         },
  //       };

  //       const rzp1 = new window.Razorpay(options);
  //       rzp1.on("payment.failed", function (response) {
  //         alert(response.error.code);
  //         alert(response.error.description);
  //         alert(response.error.source);
  //         alert(response.error.step);
  //         alert(response.error.reason);
  //         alert(response.error.metadata.order_id);
  //         alert(response.error.metadata.payment_id);
  //       });
  //       rzp1.open();
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
    formData.append("content_user_id", cardData.user_id);
    formData.append("content_id", cardData.content_id);
    formData.append("sponsor_user_id", userDetails.user_id);
    // formattedSponsoringItems.forEach((item) => {
    //   formData.append("sponsoring_items", item.sponsoring_items);
    // });
    formData.append("sponsoring_content_items", JSON.stringify(formattedSponsoringItems));

    // Append images for each sponsoring item
    formattedSponsoringItems.forEach((item) => {
      switch (item.sponsoring_items) {
        case "sponsored_by":
          formData.append("sponsored_by", sponsored_by, sponsored_byFileName || "");
          break;
        case "tag_ads":
          formData.append("tag_ads", tag_ads, tag_adsFileName || "");
          break;
        case "reel_sponsored":
          formData.append("reel_sponsored", reel_sponsored, reel_sponsoredFileName || "");
          break;
        // Add more cases for other sponsoring item types if needed
        default:
          break;
      }
    });

    axios({
      method: "post",
      url: `${apiurl}/api/razorpay/content/order/create/`,
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
        setStripeSponsorId(response.data.response.sponsord_content.content_sponsor_id)
        // Open the modal after receiving the response
        document.getElementById("paymentModalButton").click();
      })
      .catch((error) => {
        console.log(error);
        setOrderCreateError("Please Try Again");
      });
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
                {item.sponsoring_items === "sponsored_by" && (
                  <div
                    className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                    style={{ width: "50%" }}
                  >
                    <div className="box text-center">
                      <h5 className="font-weight-bold">Add Sponsored_by Image</h5>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleSponsored_byChange}
                        style={{ width: "74%", borderRadius: "0" }}
                      />
                      {cardData?.sponsored_by && sponsored_by === null ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={apiurl + cardData?.sponsored_by}
                            alt="Preview"
                            width="200"
                          />
                        </div>
                      ) : null}
                      {sponsored_by ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={URL.createObjectURL(sponsored_by)}
                            alt=""
                            width="200"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}

                {item.sponsoring_items === "reel_sponsored" && (
                  <div
                    className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                    style={{ width: "50%" }}
                  >
                    <div className="box text-center">
                      <h5 className="font-weight-bold">Add Reel Sponsored Image</h5>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleReel_SponsoredChange}
                        style={{ width: "74%", borderRadius: "0" }}
                      />
                      {cardData?.reel_sponsored && reel_sponsored === null ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={apiurl + cardData?.reel_sponsored}
                            alt="Preview"
                            width="200"
                          />
                        </div>
                      ) : null}
                      {reel_sponsored ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={URL.createObjectURL(reel_sponsored)}
                            alt=""
                            width="200"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}

                {item.sponsoring_items === "tag_ads" && (
                  <div
                    className="box photo-box bg-white d-flex justify-content-center align-items-start p-3"
                    style={{ width: "50%" }}
                  >
                    <div className="box text-center">
                      <h5 className="font-weight-bold">Add Tag Ads Image</h5>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handletag_adsChange}
                        style={{ width: "74%", borderRadius: "0" }}
                      />
                      {cardData?.tag_ads && tag_ads === null ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={apiurl + cardData?.tag_ads}
                            alt="Preview"
                            width="200"
                          />
                        </div>
                      ) : null}
                      {tag_ads ? (
                        <div>
                          <h2>Preview:</h2>
                          <img
                            className="mx-auto"
                            src={URL.createObjectURL(tag_ads)}
                            alt=""
                            width="200"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {formattedSponsoringItems.map((item, index) => (
              <>
                {item.sponsoring_items === "sponsored_by" &&
                  !(sponsored_by || cardData?.sponsored_by) ? (
                  <div className="alert alert-danger">
                    Upload an image to be displayed on the Sponsored By
                  </div>
                ) : null}
                {item.sponsoring_items === "tag_ads" &&
                  !(tag_ads || cardData?.tag_ads) ? (
                  <div className="alert alert-danger">
                    Upload an image to be displayed on the Tag Ads
                  </div>
                ) : null}
                {item.sponsoring_items === "reel_sponsored" &&
                  !(reel_sponsored || cardData?.reel_sponsored) ? (
                  <div className="alert alert-danger">
                    Upload a video to be displayed on the Reel's
                  </div>
                ) : null}
              </>
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
                        <ContentPaymentCheckout sponsorId={stripeSponsorId} />
                      </Elements>
                    </div>
                  </div>
                </div>
              </div>

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
            </div>

          </div>
        )}
      </div>

    </>
  );
};

export default SponsorContentPayment;
