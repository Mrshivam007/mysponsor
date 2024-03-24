import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import apiurl from "../../../constant/config";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";

export const ContentConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [apiCalled, setApiCalled] = useState(false); // Track if API has been called
  const [isSuccess, setIsSuccess] = useState(false); // Track success/failure
  const [countdown, setCountdown] = useState(5); // Countdown state

  useEffect(() => {
    const sponsorId = new URLSearchParams(location.search).get('sponsorId');
    const access = JSON.parse(localStorage.getItem("access"));


    const complete_order = async () => {
      if (!apiCalled) { // Check if API has already been called
        try {
          const response = await axios.post(`${apiurl}/api/razorpay/content/order/complete/`, {
            content_sponsor_id: parseInt(sponsorId),
          }, {
            headers: { // Pass headers separately
              Authorization: `Bearer ${access}`,
            },
          });

          console.log("All data ", response);
          setApiCalled(true); // Set API call state
          if (response && response.data.client_secret) { // Check for successful response
            setIsSuccess(true); // Set success state
            sessionStorage.setItem("successMessage", "Content Sponsored successfully!");
            startRedirectCountdown();
          } else {
            setIsSuccess(false); // Set failure state
            startRedirectCountdown();
          }
        } catch (error) {
          console.log(error.response.data);
          setApiCalled(true); // Set API call state
          setIsSuccess(false); // Set failure state
          startRedirectCountdown();
        }
      }
    };


    complete_order();
  }, [navigate, location.search, apiCalled]);

  const startRedirectCountdown = () => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(countdownInterval);
          // navigate(isSuccess ? "/sponsored_event" : "/"); // Redirect based on success
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  return (
    <>
      <div className="jumbotron text-center" style={{ backgroundColor: '#f8f9fa', padding: '2rem 1rem', borderRadius: '0.3rem', boxShadow: '0 0.125rem 0.25rem rgba(0,0,0,0.075)' }}>
        {apiCalled ? (
          // Content when API call has been made
          isSuccess ? (
            // Success Screen
            <>
              <h2 className="display-3" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#28a745', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                Payment Success! <FaCheckCircle style={{ marginLeft: '10px', fontSize: '2.5rem' }} />
              </h2>
              <p className="lead" style={{ fontSize: '1.25rem', fontWeight: '300' }}>
                <strong>We've successfully received your payment and confirmed your sponsorship.</strong> A confirmation email has been sent to you with further details on your event sponsorship. We sincerely appreciate your support and look forward to a successful partnership.
              </p>
              <hr style={{ borderTop: '1px solid #e9ecef' }} />
              <p style={{ marginTop: '2rem' }}>
                Having trouble? <Link to={"/contact"} style={{ textDecoration: 'none', color: '#007bff' }}>Contact us</Link>
              </p>
              <p className="lead">
                <Link to={"/sponsored_event"} className="btn btn-primary btn-sm" role="button" style={{ backgroundColor: '#007bff', borderColor: '#007bff', padding: '0.5rem 1rem', fontSize: '1.25rem', borderRadius: '0.3rem' }}>Continue to Sponsored Event</Link>
              </p>
              {/* Countdown Timer Display */}
              <p className="text-muted">
                {countdown > 0 ? `Redirecting in ${countdown} seconds...` : navigate("/sponsored_content")}
              </p>
            </>
          ) : (
            // Error Screen
            <>
              <h2 className="display-3" style={{ fontSize: '2.5rem', fontWeight: '600', color: '#dc3545', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                Payment Error! <FaExclamationCircle style={{ marginLeft: '10px', fontSize: '2.5rem' }} />
              </h2>
              <p className="lead" style={{ fontSize: '1.25rem', fontWeight: '300' }}>
                <strong>Sorry, we encountered an error while processing your payment.</strong> Please try again later or contact support for assistance.
              </p>
              <hr style={{ borderTop: '1px solid #e9ecef' }} />
              <p style={{ marginTop: '2rem' }}>
                Having trouble? <Link to={"/contact"} style={{ textDecoration: 'none', color: '#007bff' }}>Contact us</Link>
              </p>
              {/* Countdown Timer Display */}
              <p className="text-muted">
                {countdown > 0 ? `Redirecting in ${countdown} seconds...` : navigate("/")}
              </p>
            </>
          )
        ) : (
          // Loading Screen
          <div><Loading /></div>
        )}
      </div>
    </>
  );
};
