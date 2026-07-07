"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function PaymentDetailsPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("JazzCash");
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = async () => {
    if (
      !fullName ||
      !email ||
      !phone ||
      !paymentMethod ||
      !transactionId
    ) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase.from("payments").insert([
      {
        full_name: fullName,
        email: email,
        phone: phone,
        payment_method: paymentMethod,
        transaction_id: transactionId,
        course: "ECAT Premium",
        amount: "299",
        status: "pending",
      },
    ]);

    if (error) {
      if (error) {
        alert(error.message);
        console.error(error);
        return;
      }
      alert("Error saving payment.");
    } else {
      alert("Payment submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center">
      <div className="bg-[#111827] p-10 rounded-2xl border border-blue-500 w-[550px]">
        <h1 className="text-3xl font-bold text-white mb-6">
          Complete Your Payment
        </h1>

        <div className="bg-gray-800 p-5 rounded-xl mb-6 text-white">
          <p><strong>Course:</strong> ECAT Premium</p>
          <p><strong>Amount:</strong> Rs. 299</p>
        </div>

        <div className="bg-yellow-500 text-black p-4 rounded-xl mb-6">
          <p><strong>JazzCash:</strong> 03XXXXXXXXX</p>
          <p><strong>EasyPaisa:</strong> 03XXXXXXXXX</p>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4"
        />

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white mb-4"
        >
          <option>JazzCash</option>
          <option>EasyPaisa</option>
          <option>Bank Transfer</option>
        </select>

        <input
          type="text"
          placeholder="Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white mb-6"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 py-3 rounded-lg text-white font-bold"
        >
          Submit Payment
        </button>
      </div>
    </div>
  );
}