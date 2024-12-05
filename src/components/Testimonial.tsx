"use client";

import { Cover } from "./ui/cover";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonial() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      id="testimonial"
    >
      <h2 className="mx-auto text-2xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight mb-1">
        <Cover>What Our Client Says</Cover>
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "You are able to solve complex problems quickly and effectively. In your C# .NET projects, you ensure that applications run smoothly and meet client requirements.",
    name: "Hoc Nguyen",
    title: "",
  },
  {
    quote:
      "Although your technical skills are great, sometimes you don’t pay enough attention to documenting the code or providing guidance for colleagues. This can make it difficult to maintain or update the code in the future.",
    name: "Hau Dang",
    title: "",
  },
  {
    quote:
      "You are proactive in your work, have great teamwork skills, and can receive constructive feedback well. You always complete tasks on time and are able to work independently, especially when developing backend features.",
    name: "Thang Luong",
    title: "",
  },
  {
    quote:
      "At times, you may focus too much on technical solutions and overlook user experience in frontend projects. This can impact the overall effectiveness of the product.",
    name: "Cong Nam",
    title: "",
  },
  {
    quote:
      "You demonstrate professionalism and initiative in improving workflows. You pay great attention to code optimization, ensuring that the final product is of high quality and performs well.",
    name: "Bin An",
    title: "",
  },
];
