
import { useEffect } from "react";

const loadRazorpayScript = (src) => {
  return new Promise((res, rej) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
          console.log('Razorpay script loaded');
          res(true);
      };
      script.onerror = () => {
          console.log('Error in loading Razorpay script');
          res(false);
      };
      document.body.appendChild(script);
  })
}

export const RanderRazorpayPopup = ({ 
  orderId,
  keyId,
  currency,
  amount,
}) => {

//   console.log('Render Razorpay Popup orderId', orderId);
  console.log('Render Razorpay Popup  keyId',  keyId);
//   console.log('Render Razorpay Popup currency', currency);
//   console.log('Render Razorpay Popup  amount', amount);


  const display = async (options) => {
      const scriptResponse = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
      if(!scriptResponse) {
          console.log('Error in loading script');
          return;
      }

      const rzp = new window.Razorpay(options);


      rzp.open();
  }

  useEffect(() => {

     if (!keyId) {
          console.error("Razorpay key is missing");
          return null;
        }

      display({
          key: keyId,
          amount,
          currency,
          name: "Sahuji", // name of the company
          description: "Test Transaction",
          order_id: orderId,
          // callback_url:'http://localhost:7070/api/v1/payments/capture',
          handler: (response) => {
              console.log('Payment success', response);
           }
      })
      
  }, []); 

  return null;
}