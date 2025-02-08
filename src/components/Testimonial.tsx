"use client";

import { useTranslation } from "react-i18next";
import { Cover } from "./ui/cover";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonial() {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t("testimonials.testimonial_1"),
      name: "Hoc Nguyen",
      title: "",
    },
    {
      quote: t("testimonials.testimonial_2"),
      name: "Hau Dang",
      title: "",
    },
    {
      quote: t("testimonials.testimonial_3"),
      name: "Thang Luong",
      title: "",
    },
    {
      quote: t("testimonials.testimonial_4"),
      name: "Cong Nam",
      title: "",
    },
    {
      quote: t("testimonials.testimonial_5"),
      name: "Bin An",
      title: "",
    },
  ];

  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      id="testimonial"
    >
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-2xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>{t("testimonials.title")}</Cover>
        </h2>
        <p className="w-full text-[1rem] text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          {t("testimonials.description")}
        </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
