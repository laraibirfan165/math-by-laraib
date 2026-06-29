import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
  
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6">
  <div className="max-w-5xl text-center">

    <p className="text-blue-600 font-semibold text-lg">
      🚀 Pakistan's Premium Mathematics Learning Platform
    </p>

    <h1 className="mt-6 text-6xl font-extrabold leading-tight text-gray-900">
      Crack Your
      <span className="text-blue-600"> ECAT, NTS & Board Exams </span>
      with Confidence
    </h1>

    <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
      Practice thousands of high-quality MCQs, take full-length mock tests,
      track your performance, and improve your score with detailed analytics.
    </p>

    <div className="mt-10 flex justify-center gap-5">
      <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
        Start Free Practice
      </button>

      <button className="border border-gray-400 px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition">
        Watch Demo
      </button>
    </div>

    <div className="mt-12 flex justify-center gap-12 text-center">
      <div>
        <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
        <p className="text-gray-600">Students</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-blue-600">50K+</h2>
        <p className="text-gray-600">MCQs</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-blue-600">100+</h2>
        <p className="text-gray-600">Mock Tests</p>
      </div>

    </div>

  </div>
</main>
    </>
  );
}