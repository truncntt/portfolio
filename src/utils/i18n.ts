import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "en"; // Chỉ truy cập localStorage trên client
  }
  return "en"; // Nếu đang chạy trên server-side, trả về ngôn ngữ mặc định
};

i18n
  .use(HttpApi) // Sử dụng backend để load JSON
  .use(initReactI18next)
  .init({
    lng: getInitialLanguage(), // Lấy ngôn ngữ từ localStorage chỉ khi chạy trên client
    fallbackLng: "en",
    backend: {
      loadPath: "/locales/{{lng}}/common.json" // Load file JSON từ thư mục public/locales
    }
  });

export default i18n;
