"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { Skills } from "@/components/blocks/skills";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Cover } from "@/components/ui/cover";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Hoc Nguyen",
    designation: "PM",
    image: "/images/avatar-hocnguyen.jpg",
  },
  {
    id: 2,
    name: "Thang Luong",
    designation: "Leader Web",
    image: "/images/avatar-thang.png",
  },
  {
    id: 3,
    name: "Hau Dang",
    designation: "Leader Mobile",
    image: "/images/avatar-haudang.png",
  },
  {
    id: 4,
    name: "Van Huy",
    designation: "UX Designer",
    image: "/images/avatar-1.png",
  },
  {
    id: 5,
    name: "Cong Nam",
    designation: "App Developer",
    image: "/images/avatar-nam.jpg",
  },
  {
    id: 6,
    name: "Bin An",
    designation: "Web Developer",
    image: "/images/avatar-ken.jpg",
  },
];

const MainSection = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  // Hàm đổi ngôn ngữ
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", newLang); // Chỉ truy cập localStorage trên client
    }
    setIsEnglish(!isEnglish);
    router.refresh(); // Làm mới trang để cập nhật ngôn ngữ
  };

  return (
    <div>
      <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
        <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
          <a href="/">
            <Image
              src="/images/logo.png"
              width={120}
              height={80}
              className="max-h-[80px] h-full object-contain object-center"
              alt="logo"
            />
          </a>
          <div className="flex flex-col justify-center h-[80%]">
            <span className="text-[#4e69e0] font-[600]">{t("its_me")}</span>
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              {t("trun_coder")},
              <br /> <Cover>{t("web_developer")}</Cover>
            </h2>
            <a
              href="#"
              className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]"
            >
              {t("hire_me")} &rarr;
            </a>

            <div className="flex flex-row mt-[60px]">
              <AnimatedTooltip items={people} />
            </div>
            <p className="max-w-xl text-[1rem] md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[10px]">
              {t("our_team_members")}
            </p>
          </div>
        </div>

        <div className="w-full h-full flex items-center">
          <Image
            src="/images/avata_2.jpg"
            width={800}
            height={1200}
            className="w-full max-h-[90vh] object-contain object-bottom rounded-2xl"
            alt="model"
          />
        </div>

        <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">
          <div className="w-full flex items-center justify-center">
            <a
              className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-1 border-[#333333] text-white font-[600] rounded-[30px] mx-auto pb-[2px] bg-blue-700"
              href="/template/CV_DEV_NET_NGUYENDUCTHAO.pdf"
              download="CV_DEV_NET_NGUYENDUCTHAO.pdf"
            >
              {t("download_cv")}
            </a>

            {/* Chuyển đổi ngôn ngữ */}
            <div className="btn-container btn-component">
              <label className="switch btn-color-mode-switch">
                <input
                  type="checkbox"
                  onChange={toggleLanguage}
                  checked={isEnglish}
                />
                <label
                  className="btn-color-mode-switch-inner"
                  data-off="Vi"
                  data-on="En"
                  htmlFor="color_mode"
                ></label>
              </label>
            </div>
          </div>

          <h2 className="bg-clip-text mt-[100px] mr-auto text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
            {t("about_me")}
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
            {t("about_me_description")}
          </p>

          <Skills />
        </div>

        <ShootingStars className="z-[-1]" />
        <StarsBackground className="z-[-1]" />
      </div>
    </div>
  );
};

export default MainSection;
