"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Cover } from "./ui/cover";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="mt-[150px] flex flex-col" id="projects">
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-2xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>Resent Projects</Cover>
        </h2>
        <p className="max-w-xl text-[1rem] text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          We Provide You Quality Of Services
        </p>
      </div>
      (
      <Carousel items={cards} />)
    </div>
  );
}

const FastdoContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <samp>
            Fastdo Work is a user-friendly task and team management software
            designed to help businesses streamline workflows and enhance
            collaboration. The platform allows users to create, assign, and
            track tasks in real-time, with features like priority setting,
            deadline reminders, and seamless team communication. Document
            sharing and integrated updates ensure teams work efficiently without
            needing multiple tools.
          </samp>
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
          <samp>
            With built-in performance reporting and analysis, Fastdo Work helps
            managers monitor progress and optimize processes effectively. Its
            integration with tools like Google Calendar and compatibility across
            devices make it a convenient choice for businesses looking to boost
            productivity and embrace digital transformation.
          </samp>
        </p>
        <div className="flex gap-[30px] justify-center">
          <Image
            src="/images/fastdo_1.PNG"
            alt="FASTDO Work Management System"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain my-2"
          />
          <Image
            src="/images/fastdo_2.PNG"
            alt="FASTDO Work Management System"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain my-2"
          />
        </div>
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
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Technology Shopping Website:
              </span>
              Explore the world of technology with our leading tech shopping
              website. From electronic devices and smart accessories to the
              latest tech products, we offer a wide variety of high-quality
              items from trusted brands. With a user-friendly interface, fast
              search features, and attractive promotions, you can easily find
              and own your favorite products. Our fast delivery service and
              professional after-sales support ensure your satisfaction with
              every purchase.
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
                Link Github website
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

const FoodStoresContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Food Delivery Website:
              </span>{" "}
              Satisfy your hunger anytime, anywhere with our smart food delivery
              website. From delicious street food to premium dining experiences,
              we connect you to hundreds of reputable restaurants and eateries.
              With an easy-to-use interface and advanced location system, you
              can quickly find your favorite dishes, place orders conveniently,
              and have them delivered to your door in just a few minutes.
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
        );
      })}
    </>
  );
};

const TravelWebsiteContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Travel Ticket Booking Website:
              </span>
              Our travel ticket booking website is the perfect platform for
              planning your dream trips. With a user-friendly interface and
              thousands of options for flight tickets, train tickets, and hotel
              bookings worldwide, we bring convenience and speed at your
              fingertips. Plus, exciting deals and discounts are always
              available to help you save costs while enjoying the best travel
              experiences.
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
        );
      })}
    </>
  );
};

const FoodWebsiteContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Produce Shopping Website:
              </span>
              We provide a high-quality online fresh produce shopping platform,
              ensuring safety and freshness for your family meals. Sourced
              directly from clean farms, you can easily choose seasonal,
              nutrient-rich vegetables and fruits. The website supports quick
              ordering, flexible payment, and doorstep delivery, saving you time
              while ensuring top-quality food products.
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
        );
      })}
    </>
  );
};

const SEOContent = () => {
  return (
    <>
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <Image
          src="/images/seo_1.PNG"
          alt=""
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
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
    category: "SEO",
    title: "Hiring for a Staff Software Engineer",
    src: "/images/seo_1.PNG",
    content: <SEOContent />,
  },
  {
    category: "Food Website",
    title: "Shop instantly, worry-free about prices, with home delivery.",
    src: "/images/food_0.PNG",
    content: <FoodWebsiteContent />,
  },
];
