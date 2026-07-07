export default function Testimonials() {
    const testimonials = [
      {
        name: "Ahmed Khan",
        exam: "ECAT Student",
        text: "The chapter-wise practice and mock tests helped me improve my ECAT score significantly. Highly recommended!",
      },
      {
        name: "Ayesha Ali",
        exam: "AKUEB Student",
        text: "The explanations are simple and the interface is very easy to use. It made Mathematics enjoyable.",
      },
      {
        name: "Muhammad Hamza",
        exam: "NTS Aspirant",
        text: "Timed practice sessions increased my speed and confidence before the exam.",
      },
    ];
  
    return (
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Testimonials
            </p>
  
            <h2 className="text-4xl font-bold mt-2">
              What Students Say
            </h2>
  
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Thousands of students trust Mathematics by Laraib for ECAT,
              NTS, AKUEB, Karachi Board, O-Level and A-Level preparation.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="text-5xl text-blue-600 mb-4">★★★★★</div>
  
                <p className="text-gray-600 mb-6 leading-7">
                  "{item.text}"
                </p>
  
                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>
  
                <p className="text-blue-600">
                  {item.exam}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }