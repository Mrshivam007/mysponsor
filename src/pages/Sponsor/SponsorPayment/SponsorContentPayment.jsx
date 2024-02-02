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
import { createSponsor } from "../../../redux/actions/sponsorAction";
import apiurl from "../../../constant/config";

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
  const tax_amount = (sponsoring_price * 19) / 100;
  const auth = useSelector((state) => state.auth);
  const { userDetails } = auth;
  console.log("Sponsor_user_id ", userDetails.user_id);
  const total_amount = (Number(sponsoring_price) + Number(tax_amount)).toFixed(
    2
  );

  const navigate = useNavigate(); // Initialize useNavigate hook
  const formattedSponsoringItems = sponsoring_items.map((item) => ({
    sponsoring_content_items: item,
  }));

  // complete order
  const complete_order = async (paymentID, orderID, signature) => {
    axios({
      method: "post",
      // url: "http://127.0.0.1:8000/api/razorpay/content/order/complete/",
      url: `${apiurl}/api/razorpay/content/order/complete/`,
      data: {
        payment_id: paymentID,
        order_id: orderID,
        signature: signature,
        amount: total_amount,
        content_user_id: cardData.user_id,
        content_id: cardData.content_id,
        sponsor_user_id: userDetails.user_id,
        sponsoring_content_items: formattedSponsoringItems,
      },
    })
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message === "transaction created") {
          // dispatch(createSponsor());
          sessionStorage.setItem(
            "successMessage",
            "Class created successfully!"
          );
          navigate("/sponsored_content"); // Replace '/' with the desired route for the home page
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

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
      <SponsorNavbar />
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
        <Footer />
      </div>
    </>
  );
};

export default SponsorContentPayment;
