"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Cover } from "./ui/cover";
import { useTranslation } from "next-i18next";

export function Projects() {
  const { t } = useTranslation();

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="mt-[150px] flex flex-col" id="projects">
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-2xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>{t("projects.title")}</Cover>
        </h2>
        <p className="max-w-xl text-[1rem] text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          {t("projects.description")}
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const FastdoContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <samp>{t("fastdo.description1")}</samp>
        </p>
        <Image
          src="/images/fastdo.PNG"
          alt="FASTDO Work Management System"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain my-2"
        />
      </div>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <samp>{t("fastdo.description2")}</samp>
        </p>
        <div className="flex gap-[30px] justify-between">
          <a
            className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-1 border-[#333333] text-gray font-[600] rounded-[30px] mx-auto pb-[2px]"
            href="https://fastdo.vn"
          >
            FastDo
          </a>
          <a
            className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-1 border-[#333333] text-gray font-[600] rounded-[30px] mx-auto pb-[2px]"
            href="https://work.fastdo.vn"
          >
            FastDo Work
          </a>
        </div>
      </div>
    </>
  );
};

const ShoppingContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            {t("shopping.title")}
          </span>
          {t("shopping.description")}
        </p>
        <Image
          src="/images/shoping_1.PNG"
          alt="Technology Shopping Website"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
        <div className="flex justify-end">
          <a
            href="https://truncntt.github.io/shopping-web/"
            className="text-blue-600 font-[12px]"
          >
            {t("shopping.github_link")}
          </a>
        </div>
      </div>
    </>
  );
};

const FoodStoresContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            {t("food_stores.title")}
          </span>
          {t("food_stores.description")}
        </p>
        <Image
          src="/images/food_store_1.PNG"
          alt="Food Delivery Website"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
        <div className="flex justify-end">
          <a
            href="https://truncntt.github.io/food-store/"
            className="text-blue-600 font-[12px]"
          >
            Link Github website
          </a>
        </div>
      </div>
    </>
  );
};

const TravelWebsiteContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            {t("travel.title")}
          </span>
          {t("travel.description")}
        </p>
        <Image
          src="/images/travel_1.PNG"
          alt="Travel Ticket Booking Website"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
        <div className="flex justify-end">
          <a
            href="https://truncntt.github.io/travel-web/"
            className="text-blue-600 font-[12px]"
          >
            Link Github website
          </a>
        </div>
      </div>
    </>
  );
};

const FoodWebsiteContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">{t("food.title")}</span>
          {t("food.description")}
        </p>
        <Image
          src="/images/food_2.PNG"
          alt="Produce Shopping Website"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
        <div className="flex justify-end">
          <a
            href="https://truncntt.github.io/food-web/"
            className="text-blue-600 font-[12px]"
          >
            Link Github website
          </a>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    category: "FASTDO Work",
    title: "Work faster, earn more money.",
    src: "/images/fastdo.PNG",
    content: <FastdoContent />,
  },
  {
    category: "Food Stores",
    title: "Shop more conveniently.",
    src: "/images/food_store_1.PNG",
    content: <FoodStoresContent />,
  },
  {
    category: "Travel Website",
    title: "Book travel tickets, go everywhere.",
    src: "/images/travel_1.PNG",
    content: <TravelWebsiteContent />,
  },
  {
    category: "Shopping",
    title: "Shop instantly, worry-free about prices, with home delivery.",
    src: "/images/shoping_1.PNG",
    content: <ShoppingContent />,
  },
  {
    category: "Food Website",
    title: "Shop instantly, worry-free about prices, with home delivery.",
    src: "/images/food_0.PNG",
    content: <FoodWebsiteContent />,
  },
];
