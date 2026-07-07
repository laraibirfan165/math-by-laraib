"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<any[]>([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  async function fetchPayments() {
    const { data, error } = await supabase
      .from("payments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setPayments(data || []);
    }
  }

  async function approvePayment(id: string) {
    const { error } = await supabase
      .from("payments")
      .update({ status: "approved" })
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Error approving payment");
    } else {
      alert("Payment Approved Successfully!");
      fetchPayments(); // Refresh table
    }
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Admin Payments</h1>

      <table className="w-full border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-3">Name</th>
            <th className="p-3">Course</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="border-t border-gray-700">
              <td className="p-3">{payment.full_name}</td>
              <td className="p-3">{payment.course}</td>
              <td className="p-3">Rs. {payment.amount}</td>
              <td className="p-3">{payment.status}</td>

              <td className="p-3">
                <button
                  onClick={() => approvePayment(payment.id)}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}