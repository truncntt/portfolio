"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { I18nextProvider } from "react-i18next";
import i18n from "@/utils/i18n";

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const lang = pathname.split("/")[1] || "en"; // Lấy ngôn ngữ từ URL
    i18n.changeLanguage(lang);
    setIsLoaded(true);
  }, [pathname]);

  if (!isLoaded) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
