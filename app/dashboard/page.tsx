"use client";
import { useRouter } from "next/navigation";
export default function Dashboard() {
    const router = useRouter();
    return (
      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-4xl font-bold mb-8">
          Select Your Preparation
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  
        <div
  onClick={() => router.push("/payment/ecat")}
  className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-lg">
            <h2 className="text-2xl font-bold">ECAT</h2>
            <p>Engineering Entry Test Preparation</p>
          </div>
  
          <div className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-lg">
            <h2 className="text-2xl font-bold">NTS</h2>
            <p>NTS Preparation</p>
          </div>
  
          <div className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-lg">
            <h2 className="text-2xl font-bold">AKU-EB</h2>
            <p>AKU Board Preparation</p>
          </div>
  
          <div className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-lg">
            <h2 className="text-2xl font-bold">Karachi Board</h2>
            <p>Board Preparation</p>
          </div>
  
          <div className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-lg">
            <h2 className="text-2xl font-bold">O-Level</h2>
            <p>Cambridge O-Level</p>
          </div>
  
          <div className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-lg">
            <h2 className="text-2xl font-bold">A-Level</h2>
            <p>Cambridge A-Level</p>
          </div>
  
        </div>
      </div>
    );
  }