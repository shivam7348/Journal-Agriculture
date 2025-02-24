import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { flashAction } from "../../store/client/flashSlice";

// Handle the payment process
const handlePayment = async (amount, userId, setPaymentStatus, buttonName) => {
  try {
    const { data } = await axios.post(
      `${process.env.VITE_BACKEND_URL}/api/press-release/payment/create-order`,
      {
        amount,
        userId,
        buttonName, // Include button name here
      }
    );

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: data.order.amount,
      currency: "INR",
      name: "press-release",
      description: "Test Transaction",
      order_id: data.order.id,
      handler: async (response) => {
        try {
          const verificationData = await axios.post(
            `${process.env.VITE_BACKEND_URL}/api/press-release/payment/verify-payment`,
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              userId,
            }
          );

          const { transaction_id, amount_paid } = verificationData.data;

          // Show success with transaction ID and amount
          setPaymentStatus({
            success: true,
            transactionId: transaction_id,
            amountPaid: amount_paid,
            error: null,
          });
        } catch (error) {
          console.error("Payment verification failed:", error);
          setPaymentStatus({
            success: false,
            transactionId: null,
            amountPaid: null,
            error:
              "Transaction failed and stored in database. Please try again.",
          });
        }
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    setPaymentStatus({
      success: false,
      transactionId: null,
      amountPaid: null,
      error: "Failed to initiate payment. Please try again.",
    });
  }
};

// PaymentButton Component
const PaymentButton = ({ amount, userId, buttonName }) => {
  const [paymentStatus, setPaymentStatus] = useState({
    success: null,
    transactionId: null,
    amountPaid: null,
    error: null,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSignin = useSelector((state) => state.auth.isSignin); // Check if the user is signed in

  const handleRetry = () => {
    setPaymentStatus({
      success: null,
      transactionId: null,
      amountPaid: null,
      error: null,
    });
  };

  const handlepayment = (e) => {
    if (!isSignin) {
      e.preventDefault();
      dispatch(
        flashAction.addFlash({
          message: "Please log in to access this page.",
          type: "Fail",
        })
      );
      navigate("/signin"); // Redirect to login page if not signed in
    } else {
      handlePayment(amount, userId, setPaymentStatus, buttonName); // Proceed with payment if signed in
    }
  };

  return (
    <button onClick={handlepayment}>
      {buttonName ? buttonName : `Pay ₹${amount}`}
    </button>
  );
};

export default PaymentButton;
