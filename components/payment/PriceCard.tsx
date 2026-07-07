import Link from "next/link";
export default function PriceCard() {
    return (
      <div className="bg-[#111827] border border-blue-600 rounded-2xl p-8 text-center shadow-lg">
  
        <p className="text-gray-400 line-through text-2xl">
          PKR 500
        </p>
  
        <h2 className="text-6xl font-bold text-white mt-2">
          PKR 299
        </h2>
  
        <p className="text-blue-400 mt-4 text-xl">
          One-time • Lifetime Access
        </p>
  
        <p className="text-gray-300 mt-2">
          ECAT Premium Course
        </p>
  
        <Link href="/checkout/ecat">
  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition">
    Pay Rs. 299
  </button>
</Link>
  
      </div>
    );
  }