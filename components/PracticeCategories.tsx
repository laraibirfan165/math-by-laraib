import {
  ArrowRight,
  Brain,
  ChartPie,
  Infinity,
  Shapes,
  Triangle,
  Variable,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    icon: Variable,
    title: "Algebra",
    mcqs: "8,500+",
    description: "Equations, polynomials, sequences, and algebraic identities.",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    icon: Infinity,
    title: "Calculus",
    mcqs: "6,200+",
    description: "Limits, derivatives, integrals, and application problems.",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    icon: Triangle,
    title: "Trigonometry",
    mcqs: "5,400+",
    description: "Ratios, identities, equations, and graph-based questions.",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    icon: Shapes,
    title: "Geometry",
    mcqs: "7,100+",
    description: "Lines, circles, coordinate geometry, and mensuration.",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: ChartPie,
    title: "Probability & Statistics",
    mcqs: "4,800+",
    description: "Data analysis, probability rules, and distribution problems.",
    iconBg: "bg-rose-100 text-rose-600",
  },
  {
    icon: Brain,
    title: "Analytical Reasoning",
    mcqs: "3,900+",
    description: "Logic puzzles, patterns, and step-by-step problem solving.",
    iconBg: "bg-indigo-100 text-indigo-600",
  },
];

export default function PracticeCategories() {
  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 sm:text-sm">
            Practice Categories
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-slate-900 sm:text-4xl">
            Choose a Topic to Practice
          </h2>
          <p className="mt-4 text-base leading-[1.7] tracking-[-0.01em] text-slate-600 sm:text-lg">
            Practice chapter-wise questions and improve your speed and accuracy.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Card
                key={category.title}
                role="button"
                tabIndex={0}
                className="flex cursor-pointer flex-col border-blue-100/80 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <CardHeader className="flex-1">
                  <div
                    className={`mb-2 flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${category.iconBg}`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-base font-semibold tracking-[-0.02em] text-slate-900 sm:text-lg">
                    {category.title}
                  </CardTitle>
                  <p className="text-sm font-semibold tabular-nums tracking-[-0.01em] text-blue-600">
                    {category.mcqs} MCQs
                  </p>
                  <CardDescription className="line-clamp-2 text-sm leading-[1.65] tracking-[-0.008em] text-slate-600 sm:text-[0.9375rem]">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-0 bg-transparent pt-0">
                  <Button
                    variant="outline"
                    className="w-full rounded-xl border-blue-200 text-[0.9375rem] font-semibold tracking-[-0.01em] text-blue-700 hover:border-blue-300 hover:bg-blue-50"
                  >
                    Practice Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
