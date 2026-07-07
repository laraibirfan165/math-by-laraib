import PriceCard from "@/components/payment/PriceCard";

export default function EcatPayment() {
  return (
    <div className="min-h-screen bg-[#030712] py-16 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-white">
          One Payment.
        </h1>

        <h2 className="text-5xl font-bold text-center text-blue-500 mb-12">
          Lifetime Access.
        </h2>

        <PriceCard />

      </div>

    </div>
  );
}