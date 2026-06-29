import Navbar from "@/components/Navbar";
import WhyChoose from "@/components/WhyChoose";

const stats = [
  { value: "10K+", label: "Students" },
  { value: "50K+", label: "MCQs" },
  { value: "100+", label: "Mock Tests" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-[calc(100vh-4.5rem)] overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.18),transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_40%,transparent_100%)]"
        />

        <section className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-16 sm:py-20 lg:flex-row lg:items-center lg:gap-12 lg:py-24 xl:px-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-blue-600" />
              Mathematics by Laraib Punjwani
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Crack Your{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                ECAT, NTS & Board Exams
              </span>{" "}
              with Confidence
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl lg:mx-0">
              Practice thousands of high-quality Mathematics MCQs, attempt mock
              tests, track your progress and improve your score.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="group relative w-full overflow-hidden rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-blue-600/35 sm:w-auto">
                <span className="relative z-10">Start Free Practice</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition group-hover:translate-x-full duration-700" />
              </button>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 sm:w-auto">
                <svg
                  aria-hidden
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 0 0 4 4.11V15.89a1.5 1.5 0 0 0 2.3 1.269l9.344-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84Z" />
                </svg>
                Watch Demo
              </button>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-blue-100/80 bg-white/70 px-6 py-5 shadow-sm backdrop-blur-sm transition hover:border-blue-200 hover:shadow-md"
                >
                  <p className="text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden flex-1 lg:block">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl shadow-blue-600/30" />
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />

              <div className="relative flex h-full flex-col justify-between p-8 text-white">
                <div>
                  <p className="text-sm font-medium text-blue-100">
                    Live Progress
                  </p>
                  <p className="mt-1 text-2xl font-bold">Your Score: 87%</p>
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                    <p className="text-blue-100">∫ x² dx = ?</p>
                    <p className="mt-1 font-semibold text-white">
                      x³/3 + C ✓
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                    <p className="text-blue-100">lim (sin x / x) as x→0</p>
                    <p className="mt-1 font-semibold text-white">= 1 ✓</p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                    <p className="text-blue-100">det | 2  1 |</p>
                    <p className="mt-1 pl-6 font-semibold text-white">
                      | 3  4 | = 5 ✓
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[87%] rounded-full bg-white" />
                  </div>
                  <span className="text-sm font-semibold">87%</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-lg">
                <p className="text-xs font-medium text-slate-500">Accuracy</p>
                <p className="text-lg font-bold text-blue-600">94%</p>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-lg">
                <p className="text-xs font-medium text-slate-500">Streak</p>
                <p className="text-lg font-bold text-blue-600">12 days</p>
              </div>
            </div>
          </div>
        </section>

        <div className="relative border-t border-blue-100 bg-blue-50/50">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-6 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <svg
                aria-hidden
                className="h-4 w-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              ECAT & NTS Ready
            </span>
            <span className="inline-flex items-center gap-2">
              <svg
                aria-hidden
                className="h-4 w-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Board Exam Syllabus
            </span>
            <span className="inline-flex items-center gap-2">
              <svg
                aria-hidden
                className="h-4 w-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Detailed Analytics
            </span>
            <span className="inline-flex items-center gap-2">
              <svg
                aria-hidden
                className="h-4 w-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Free to Start
            </span>
          </div>
        </div>

        <WhyChoose />
      </main>
    </>
  );
}
