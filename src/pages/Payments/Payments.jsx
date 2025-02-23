import { RanderRazorpayPopup } from "@/components/molecules/RenderRazorpayPopup/RanderRazorpayPopup";
import { useCreateOrder } from "@/hooks/apis/payments/useCreateOrder";
import React, { useState } from "react";

export const Payments = () => {
  const [amount, setAmount] = useState();

  const [orderResponse, setOrderResponse] = useState(null);

  const { createOrderMutation, isPendeing, isSuccess, error } =
    useCreateOrder();

  async function handleFormSubmit(event) {
    event.preventDefault();
    const response = await createOrderMutation(amount);
    console.log("form submit", response);
    
    setOrderResponse(response);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Make a Payment</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Amount:
            </label>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Pay
            </button>
            {isSuccess && (
              <RanderRazorpayPopup
                amount={amount * 100}
                orderId={orderResponse.id}
                keyId={import.meta.env.VITE_RAZORPAY_KEY_ID}
                currency={"INR"}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
