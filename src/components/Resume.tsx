"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function Resume() {
  const { t } = useTranslation();

  const data = [
    {
      title: t("resume.education"),
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>{t("resume.university")}</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">8/2018 - 8/2023</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              GPA: 3.10/4.0
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {t("resume.software_engineering")}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: t("resume.experiences"),
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>{t("resume.fullstack_csharp")}</Cover>
            </h4>
            <span className="text-blue-700 my-[15px]">8/2023 - 10/2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {t("resume.fastdo")}
            </p>
            <span className="text-blue-400 my-[15px]">
              {t("resume.task_description")}
            </span>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc pl-5">
              <li>{t("resume.task_list.task_1")}</li>
              <li>{t("resume.task_list.task_2")}</li>
              <li>{t("resume.task_list.task_3")}</li>
              <li>{t("resume.task_list.task_4")}</li>
            </ul>
            <span className="text-blue-400 my-[15px]">
              {t("resume.technologies_used")}
            </span>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc pl-5">
              <li>{t("resume.fastdo_tech_stack.frontend")}</li>
              <li>{t("resume.fastdo_tech_stack.backend")}</li>
              <li>{t("resume.fastdo_tech_stack.tools")}</li>
            </ul>
            <span className="text-blue-400 my-[15px]">
              {t("resume.results")}
            </span>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc pl-5">
              <li>{t("resume.fastdo_results.result_1")}</li>
              <li>{t("resume.fastdo_results.result_2")}</li>
              <li>{t("resume.fastdo_results.result_3")}</li>
            </ul>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/fastdo_1.PNG"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/fastdo_2.PNG"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/fastdo_3.PNG"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/fastdo_4.PNG"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>{t("resume.fullstack_web")}</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">2023 - 2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {t("resume.cinema")}
            </p>
            <span className="text-blue-400 my-[15px]">
              {t("resume.task_description")}
            </span>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc pl-5">
              <li>{t("resume.cinema_task_list.task_1")}</li>
              <li>{t("resume.cinema_task_list.task_2")}</li>
              <li>{t("resume.cinema_task_list.task_3")}</li>
            </ul>
            <span className="text-blue-400 my-[15px]">
              {t("resume.technologies_used")}
            </span>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc pl-5">
              <li>{t("resume.cinema_tech_stack.frontend")}</li>
              <li>{t("resume.cinema_tech_stack.backend")}</li>
              <li>{t("resume.cinema_tech_stack.methodology")}</li>
              <li>{t("resume.cinema_tech_stack.database")}</li>
              <li>{t("resume.cinema_tech_stack.tools")}</li>
            </ul>
            <span className="text-blue-400 my-[15px]">
              {t("resume.results")}
            </span>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc pl-5">
              <li>{t("resume.cinema_results.result_1")}</li>
              <li>{t("resume.cinema_results.result_2")}</li>
              <li>{t("resume.cinema_results.result_3")}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>{t("resume.web_developer")}</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">2023 - 2024</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {t("resume.farm_app")}
            </p>
            <span className="text-blue-400 my-[15px]">
              {t("resume.task_description")}
            </span>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc pl-5">
              <li>{t("resume.farm_task_list.task_1")}</li>
              <li>{t("resume.farm_task_list.task_2")}</li>
              <li>{t("resume.farm_task_list.task_3")}</li>
              <li>{t("resume.farm_task_list.task_4")}</li>
            </ul>
            <span className="text-blue-400 my-[15px]">
              {t("resume.technologies_used")}
            </span>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc pl-5">
              <li>{t("resume.farm_tech_stack.frontend")}</li>
              <li>{t("resume.farm_tech_stack.backend")}</li>
              <li>{t("resume.farm_tech_stack.database")}</li>
              <li>{t("resume.farm_tech_stack.tools")}</li>
            </ul>
            <span className="text-blue-400 my-[15px]">
              {t("resume.results")}
            </span>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc pl-5">
              <li>{t("resume.farm_results.result_1")}</li>
              <li>{t("resume.farm_results.result_2")}</li>
              <li>{t("resume.farm_results.result_3")}</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: t("resume.certificates"),
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>{t("resume.devops_freshers")}</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">12/2024</span>
            <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 list-disc pl-5">
              <li>{t("resume.devops_content.point_1")}</li>
              <li>{t("resume.devops_content.point_2")}</li>
              <li>{t("resume.devops_content.point_3")}</li>
              <li>{t("resume.devops_content.point_4")}</li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/certificate-devops.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>{t("resume.gcp_cert")}</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">
              {t("resume.gcp_status")}
            </span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {t("resume.gcp_description")}
            </p>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              <Cover>{t("resume.aws_cert")}</Cover>
            </h4>
            <span className="text-blue-400 my-[15px]">
              {t("resume.aws_status")}
            </span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              {t("resume.aws_description")}
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="resume">
      <Timeline data={data} />
    </div>
  );
}
