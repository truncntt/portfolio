"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconHome } from "@tabler/icons-react";
import { Code2Icon, MailIcon, Settings2Icon, StarIcon } from "lucide-react";
import { GoProjectRoadmap } from "react-icons/go";
import { useTranslation } from "react-i18next";

export function NavBar() {
  const { t } = useTranslation();

  const links = [
    {
      title: t("navbar.home"),
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: t("navbar.services"),
      icon: (
        <Code2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: t("navbar.projects"),
      icon: (
        <Settings2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: t("navbar.resume"),
      icon: (
        <GoProjectRoadmap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#resume",
    },
    {
      title: t("navbar.testimonial"),
      icon: (
        <StarIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#testimonial",
    },
    {
      title: t("navbar.contact"),
      icon: (
        <MailIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: t("navbar.github"),
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/truncntt",
    },
  ];
  return (
    <div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
      <FloatingDock items={links} />
    </div>
  );
}
