import React, { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PaymentCheckout = ({ sponsorId }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/confirmation?sponsorId=${sponsorId}`,
      },
    });

    if (error && (error.type === "card_error" || error.type === "validation_error")) {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
      // await completeOrder();
      // closeModal(); // Close the modal
    }
    
    setIsProcessing(false);
  };

  return (
    <>
      <div className="container">
        {/* <h1 className="text-center">Payment</h1> */}
        <form id="payment-form" onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-12">
              <div className="border rounded p-4 mb-4">
                <PaymentElement id="payment-element" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 col-md-4">
              <Button
                variant="danger"
                disabled={isProcessing || !stripe || !elements}
                type="button"
                className="w-100 mb-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </Button>
            </div>
            <div className="col-6 col-md-4">
              <Button
                variant="primary"
                disabled={isProcessing || !stripe || !elements}
                id="submit"
                type="submit"
                className="w-100"
              >
                {isProcessing ? "Processing..." : "Pay now"}
              </Button>
            </div>
          </div>
          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    </>
  );
};
