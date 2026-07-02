import Image from "next/image";
import styles from "./page.module.css";

import Header from "../../components/standartComponents/header";
import { useTranslation } from "../../i18n";

import Footer from "../../components/standartComponents/footer";
import Chat from "../../components/chat/chat";

import FirstBlockService from "../../components/services/firsBlockService";
import { GoogleAnalytics } from "@next/third-parties/google";

const metadataByLanguage = {
  ua: {
    title: "Послуги по ремонту бойлерів у Запоріжжі — ZP-Boyler",
    description:
      "Виконуємо якісне обслуговування та профілактику бойлерів у Запоріжжі. Виклик майстра додому. Оригінальні комплектуючі та гарантія на всі види робіт. Доступна ціна послуг. Телефонуйте прямо зараз: +380962960328",
  },
  ru: {
    title: "Услуги по ремонту бойлеров в Запорожье",
    description:
      "Выполняем качественное обслуживание и профилактику бойлеров в Запорожье. Вызов мастера на дом. Оригинальные комплектующие и гарантия на все виды работ. Доступная цена услуг. Звоните прямо сейчас: +380962960328",
  },
};
export async function generateMetadata({ params }) {
  const { lng } = params;
  const metadata = metadataByLanguage[lng] || metadataByLanguage.en;
  const baseUrl = "https://zp-boyler.zp.ua";
  const currentPath = "service"; // головна сторінка → "" (без шляху)
  const urlUa = `${baseUrl}/ua/${currentPath}`;
  const urlRu = `${baseUrl}/ru/${currentPath}`;
  const isRu = lng === "ru";
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: isRu ? urlRu : urlUa,
      languages: {
        uk: urlUa,
        ru: urlRu,
        "x-default": urlUa,
      },
    },
  };
}
const Services = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  return (
    <main className={styles.main}>
      <GoogleAnalytics gaId="G-YWFWM7SVSP" />
      <Header t={t} lng={lng} />
      <FirstBlockService t={t} lng={lng} />
      <Chat />
      <Footer t={t} lng={lng} />
    </main>
  );
};
export default Services;
