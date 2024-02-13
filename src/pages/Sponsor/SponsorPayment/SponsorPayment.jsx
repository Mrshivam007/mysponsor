import React, { useEffect, useState } from "react";
import "./payment.css";
import bgimage from "../../../assets/img/circle-bg.png";
import SponsorNavbar from "../SponsorNavbar/SponsorNavbar";
import { Footer } from "../../../components";
import SponsorpayCard from "./SponsorpayCard";
import { useLocation, useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { completeEventPayment, createSponsor, updateSponsoringItem } from "../../../redux/actions/sponsorAction";
import apiurl from "../../../constant/config";
import SponsorFooter from "../../../components/Footer/SponsorFooter";

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
  // const sponsoring_items = cardData?.sponsoring_items || [];
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerImageFileName, setBannerImageFileName] = useState(null);
  const [ledImage, setLedImage] = useState(null);
  const [ledImageFileName, setLedImageFileName] = useState(null);
  const [ledVideo, setLedVideo] = useState(null);
  const [ledVideoFileName, setLedVideoFileName] = useState(null);
  const [billText, setBillText] = useState(null);
  const [preBillText, setPreBillText] = useState(cardData?.bill_text);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const formattedSponsoringItems = sponsoring_items.map((item) => ({
    sponsoring_items: item,
  }));
  const [showPayment, setShowPayment] = useState(true);
  console.log("formatting sponsoring item ", formattedSponsoringItems);

  const toggleForm = () => {
    setShowPayment((prev) => !prev);
  };

  const [error, setError] = useState('');

  const checkSponsoringItems = () => {
    // Loop through sponsoring items and check if each item has necessary content
    for (const item of formattedSponsoringItems) {
      if (
        (item.sponsoring_items === 'banner' && !(bannerImage || cardData?.banner_image)) ||
        (item.sponsoring_items === 'led_screen' && !(ledImage || cardData?.led_image)) ||
        (item.sponsoring_items === 'led_screen' && !(ledVideo || cardData?.led_video))
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
      window.scroll(0,0)
    } else {
      setError(''); // Clear any previous error
      toggleForm();
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

  const handleSubmitClick = async (e) => {
    // e.preventDefault();
    // if (Object.keys(errors).length === 0) {
    const formData = new FormData();
    formData.append("sponsor_id", cardData.sponsor_id);

    // Iterate over formattedSponsoringItems
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
          formData.append("bill_text", billText || preBillText);
          break;
        // Add more cases for other sponsoring item types if needed
        default:
          break;
      }
    });

    try {
      // Make POST API call
      await dispatch(updateSponsoringItem(formData));
      // sessionStorage.setItem(
      //   "successMessage",
      //   "Promotion listed successfully!"
      // );
      // navigate("/sponsored_event"); // Replace '/' with the desired route for the home page
    } catch (error) {
      console.log("An error occurred during API calls:", error);
    }
  };



  // complete order
  const complete_order = async (paymentID, orderID, signature) => {
    // Prepare formData object
    const formData = new FormData();
    formData.append("payment_id", paymentID);
    formData.append("order_id", orderID);
    formData.append("signature", signature);
    formData.append("amount", total_amount);
    formData.append("event_user_id", cardData.user_id);
    formData.append("event_id", cardData.event_id);
    formData.append("sponsor_user_id", userDetails.user_id);
    formData.append("sponsoring_items", JSON.stringify(formattedSponsoringItems));

    // Add sponsoring items data based on formattedSponsoringItems
    formattedSponsoringItems.forEach((item) => {
      switch (item.sponsoring_items) {
        case "banner":
          formData.append("banner_image", bannerImage, bannerImageFileName || "");
          break;
        case "led_screen":
          formData.append("led_image", ledImage, ledImageFileName || "");
          formData.append("led_video", ledVideo, ledVideoFileName || "");
          break;
        case "bill_board":
          formData.append("bill_text", billText || preBillText);
          break;
        // Add more cases for other sponsoring item types if needed
        default:
          break;
      }
    });

    // Make POST API call
    axios.post(`${apiurl}/api/razorpay/order/complete/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message === "transaction created") {
          sessionStorage.setItem("successMessage", "Event created successfully!");
          navigate("/sponsored_event"); // Replace '/' with the desired route for the home page
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // const createBannerImageData = (bannerImage, bannerImageFileName = "") => {
  //   const banner_image = bannerImage || bannerImageFileName;
  //   return { banner_image };
  // };
  // const complete_order = async (paymentID, orderID, signature) => {
  //   axios({
  //     method: "post",
  //     // `${apiurl}/api/user/event/`
  //     // url: "http://127.0.0.1:8000/api/razorpay/order/complete/",
  //     url: `${apiurl}/api/razorpay/order/complete/`,
  //     data: {
  //       payment_id: paymentID,
  //       order_id: orderID,
  //       signature: signature,
  //       amount: total_amount,
  //       event_user_id: cardData.user_id,
  //       event_id: cardData.event_id,
  //       sponsor_user_id: userDetails.user_id,
  //       sponsoring_items: formattedSponsoringItems,
  //       banner_image: bannerImage,
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response.data.message);
  //       if (response.data.message === "transaction created") {
  //         // dispatch(createSponsor());
  //         // handleSubmitClick();
  //         sessionStorage.setItem(
  //           "successMessage",
  //           "Event created successfully!"
  //         );
  //         navigate("/sponsored_event"); // Replace '/' with the desired route for the home page
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //     });
  // };


  // complete order
  // const complete_order = async (paymentID, orderID, signature) => {
  //   // Prepare formData object
  //   const formData = new FormData();
  //   formData.append("payment_id", paymentID);
  //   formData.append("order_id", orderID);
  //   formData.append("signature", signature);
  //   formData.append("amount", total_amount);
  //   formData.append("event_user_id", cardData.user_id);
  //   formData.append("event_id", cardData.event_id);
  //   formData.append("sponsor_user_id", userDetails.user_id);
  //   formData.append("sponsoring_items", JSON.stringify(formattedSponsoringItems));

  //   // Add sponsoring items data based on formattedSponsoringItems
  //   formattedSponsoringItems.forEach((item) => {
  //     switch (item.sponsoring_items) {
  //       case "banner":
  //         formData.append("banner_image", bannerImage, bannerImageFileName || "");
  //         break;
  //       case "led_screen":
  //         formData.append("led_image", ledImage, ledImageFileName || "");
  //         formData.append("led_video", ledVideo, ledVideoFileName || "");
  //         break;
  //       case "bill_board":
  //         formData.append("bill_text", billText || preBillText);
  //         break;
  //       // Add more cases for other sponsoring item types if needed
  //       default:
  //         break;
  //     }
  //   });
  //   try {
  //     // Make POST API call
  //     await dispatch(completeEventPayment(formData));
  //     // sessionStorage.setItem(
  //     //   "successMessage",
  //     //   "Promotion listed successfully!"
  //     // );
  //     // navigate("/sponsored_event"); // Replace '/' with the desired route for the home page
  //   } catch (error) {
  //     console.log("An error occurred during API calls:", error);
  //   }
  // };








  const razorPay = () => {
    //create order
    axios({
      method: "post",
      // url: "http://127.0.0.1:8000/api/razorpay/order/create/",
      url: `${apiurl}/api/razorpay/order/create/`,
      data: {
        amount: total_amount,
        currency: "INR",
      },
    })
      .then((response) => {
        // get order id
        console.log("response", response);
        const order_id = response?.data?.data.id;

        // handle payment
        const options = {
          key: "rzp_test_YRuk8xeM74fPv0", // Enter the Key ID generated from the Dashboard
          name: "MySponsor",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
          handler: function (response) {
            console.log("Complete Order", response);
            //complete order
            complete_order(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature
            );
          },
          // prefill: {
          // name: "Piyush Garg",
          // email: "youremail@example.com",
          // contact: "9999999999",
          // },
          // notes: {
          // address: "Razorpay Corporate Office",
          // },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
        rzp1.open();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                    style={{ width: "40%" }}
                  >
                    <div className="box text-center">
                      <h5 className="font-weight-bold">Add BillBoard Text Info</h5>
                      <input
                        type="text"
                        id="BillText"
                        value={billText || preBillText}
                        onChange={(e) => setBillText(e.target.value)}
                        readOnly={preBillText ? true : false}
                        className="form-control"
                        placeholder="Enter BillBoard Text"
                      />
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

            {/* {formattedSponsoringItems.map((item, index) => (
              <>
                {item.sponsoring_items === "banner" &&
                  !(bannerImage || cardData?.banner_image) ? (
                  <div className="alert alert-danger">
                    Upload an image to be displayed on the Banner
                  </div>
                ) : null}
                {item.sponsoring_items === "led_screen" &&
                  !(ledImage || cardData?.led_image) ? (
                  <div className="alert alert-danger">
                    Upload an image to be displayed on the LED
                  </div>
                ) : null}
                {item.sponsoring_items === "led_screen" &&
                  !(ledVideo || cardData?.led_video) ? (
                  <div className="alert alert-danger">
                    Upload a video to be displayed on the LED
                  </div>
                ) : null}
              </>
            ))} */}
            <div className="container" style={{alignItems: 'center', padding: '2%'}}>
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
              <button className="category-btn btn mb-3" style={{ width: "100%" }}>
                <p className="category-btn-text" onClick={razorPay}>
                  Sponsor
                </p>
              </button>
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

export default SponsorPayment;
