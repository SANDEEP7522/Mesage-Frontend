import { useCaptureOrder } from "@/hooks/apis/payments/useCaptureOrder";
import { useEffect, useState } from "react";

const loadRazorpayScript = (src) => {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.log("Razorpay script loaded");
      res(true);
    };
    script.onerror = () => {
      console.log("Error in loading Razorpay script");
      res(false);
    };
    document.body.appendChild(script);
  });
};

export const RanderRazorpayPopup = ({ orderId, keyId, currency, amount }) => {
  console.debug("Render Razorpay Popup", { orderId, keyId, currency, amount });

  const { captureOrderMutation } = useCaptureOrder();

  const display = async (options) => {
    const scriptResponse = await loadRazorpayScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!scriptResponse) {
      console.log("Error in loading script");
      return;
    }

    const razorpay = new window.Razorpay(options);

    razorpay.on("payment.failed", async function (response) {
      console.log("Payment failed", response.error.code);
      await captureOrderMutation({
        orderId: options.order_id,
        status: "failed",
        paymentId: "",
      });
    });

    razorpay.open();
  };

  useEffect(() => {
    display({
      key: keyId,
      amount,
      currency,
      name: "Sahuji", // name of the company
      description: "Test Transaction",
      order_id: orderId,
      // callback_url:'http://localhost:7070/api/v1/payments/capture',
      handler: async (response) => {
        console.log("Payment success successfully", response);
        console.log('signature', response.razorpay_signature);
        
        await captureOrderMutation({
          orderId,
          status: "success",
          paymentId: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        });
         // redirect to success page

      },
    });
  }, [orderId]);

  return null;
};


