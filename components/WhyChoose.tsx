import {
  BarChart3,
  BookOpen,
  Flame,
  Smartphone,
  Timer,
  Trophy,
} from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "50,000+ Practice MCQs",
    description: "Practice chapter-wise and topic-wise questions.",
  },
  {
    icon: Timer,
    title: "Full-Length Mock Tests",
    description: "Real exam environment with timer.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track strengths and weak chapters.",
  },
  {
    icon: Flame,
    title: "Daily Practice Streak",
    description: "Stay consistent every day.",
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    description: "Compete with top students.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Practice from any device.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 sm:text-sm">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-slate-900 sm:text-4xl">
            Why Choose Mathematics by Laraib?
          </h2>
          <p className="mt-4 text-base leading-[1.7] tracking-[-0.01em] text-slate-600 sm:text-lg">
            Everything you need to master Mathematics and ace your exams — all
            in one place.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="border-blue-100/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover/card:bg-blue-100">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-[-0.02em] text-slate-900">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-[0.9375rem] leading-[1.65] tracking-[-0.008em] text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
