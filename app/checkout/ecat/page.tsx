import Link from "next/link";
export default function CheckoutPage() {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="bg-[#111827] p-10 rounded-2xl w-[500px] border border-blue-500">
          <h1 className="text-3xl font-bold text-white mb-6">
            ECAT Checkout
          </h1>
  
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg mb-4 bg-gray-800 text-white"
          />
  
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg mb-4 bg-gray-800 text-white"
          />
  
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg mb-6 bg-gray-800 text-white"
          />
  <div className="mb-6">
  <label className="block text-white mb-3 font-semibold">
    Select Payment Method
  </label>

  <select className="w-full p-3 rounded-lg bg-gray-800 text-white">
    <option>EasyPaisa</option>
    <option>Bank Transfer</option>
  </select>
</div>
<Link href="/payment-details/ecat">
  <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg text-white font-bold">
    Continue Payment
  </button>
</Link>
        </div>
      </div>
    );
  }