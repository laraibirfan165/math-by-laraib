import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  ClipboardCheck,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const courses = [
  {
    icon: GraduationCap,
    title: "ECAT Preparation",
    description:
      "Master engineering entry test Mathematics with chapter-wise MCQs and full mock exams.",
  },
  {
    icon: ClipboardCheck,
    title: "NTS Preparation",
    description:
      "Target NTS-style questions with timed practice and detailed solution explanations.",
  },
  {
    icon: Building2,
    title: "AKUEB Mathematics",
    description:
      "Complete AKUEB syllabus coverage with topic-wise drills and progress tracking.",
  },
  {
    icon: MapPin,
    title: "Karachi Board Mathematics",
    description:
      "Board-aligned practice for Karachi students with past-paper style questions.",
  },
  {
    icon: BookOpen,
    title: "O-Level Mathematics",
    description:
      "Structured O-Level prep with concept revision and exam-focused mock tests.",
  },
  {
    icon: Award,
    title: "A-Level Mathematics",
    description:
      "Advanced A-Level practice with challenging problems and performance analytics.",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="border-t border-blue-100 bg-blue-50/40 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 sm:text-sm">
            Featured Courses
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-slate-900 sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-4 text-base leading-[1.7] tracking-[-0.01em] text-slate-600 sm:text-lg">
            Choose your exam path and start practicing with curated Mathematics
            courses built for real results.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <Card
                key={course.title}
                className="flex flex-col border-blue-100/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <CardHeader className="flex-1">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover/card:bg-blue-100">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-[-0.02em] text-slate-900">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 min-h-[3rem] text-[0.9375rem] leading-[1.65] tracking-[-0.008em] text-slate-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="border-0 bg-transparent pt-0">
                  <Button className="w-full rounded-xl bg-blue-600 text-[0.9375rem] font-semibold tracking-[-0.01em] text-white shadow-sm hover:bg-blue-700">
                    Start Learning
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
