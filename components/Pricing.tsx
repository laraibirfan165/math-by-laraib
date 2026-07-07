export default function Pricing() {
    const plans = [
      {
        name: "Free",
        price: "Rs. 0",
        description: "Perfect for getting started.",
        features: [
          "100 Practice MCQs",
          "1 Mock Test",
          "Basic Analytics",
          "Community Support",
        ],
        button: "Start Free",
        popular: false,
      },
      {
        name: "Premium",
        price: "Rs. 1,999",
        description: "Best for serious students.",
        features: [
          "Unlimited MCQs",
          "Unlimited Mock Tests",
          "Performance Analytics",
          "Chapter-wise Practice",
          "Priority Support",
        ],
        button: "Get Premium",
        popular: true,
      },
      {
        name: "Pro",
        price: "Rs. 3,999",
        description: "Everything included.",
        features: [
          "Everything in Premium",
          "Live Classes",
          "Personal Mentorship",
          "Exam Strategy Sessions",
          "Priority Access",
        ],
        button: "Go Pro",
        popular: false,
      },
    ];
  
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Pricing
            </p>
  
            <h2 className="text-4xl font-bold mt-2">
              Choose Your Plan
            </h2>
  
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Start free and upgrade anytime to unlock unlimited practice,
              mock tests and advanced analytics.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl border p-8 shadow-lg hover:shadow-2xl transition duration-300 relative ${
                  plan.popular
                    ? "border-blue-600 scale-105"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
  
                <h3 className="text-2xl font-bold">{plan.name}</h3>
  
                <p className="text-4xl font-extrabold text-blue-600 mt-4">
                  {plan.price}
                </p>
  
                <p className="text-gray-500 mt-2">{plan.description}</p>
  
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-blue-600">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
  
                <button
                  className={`mt-10 w-full py-3 rounded-xl font-semibold transition ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }