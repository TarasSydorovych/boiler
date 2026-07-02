import styles from "./page.module.css";

import { useTranslation } from "../../i18n";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../../components/standartComponents/header";
import "../../components/font/FuturaPT/stylesheet.css";
import "../../components/font/monrope/stylesheet.css";
import SeoBlockRu from "../../components/servis-boyleriv/seoBlockRu";
import SeoBlockUa from "../../components/servis-boyleriv/seoBlockUa";
import Footer from "../../components/standartComponents/footer";
import FirstBlock from "../../components/servis-boyleriv/firstBlock";
import SecondBlock from "../../components/servis-boyleriv/secondBlock";
import ThreeBlock from "../../components/servis-boyleriv/threeBlock";
import FourBlockUa from "../../components/servis-boyleriv/fourBlockUa";
import FourBlockRu from "../../components/servis-boyleriv/fourBlockRu";
import AboutUs from "../../components/servis-boyleriv/aboutUs";
import Chat from "../../components/chat/chat";
import GoogleReviews from "../../components/google/GoogleReviews";

const metadataByLanguage = {
  ua: {
    title: "Обслуговування бойлерів у Запоріжжі — ZP-Boyler",
    description:
      "Виконуємо якісне обслуговування та профілактику бойлерів у Запоріжжі. Виклик майстра додому. Оригінальні комплектуючі та гарантія на всі види робіт. Доступна ціна послуг. Телефонуйте прямо зараз: +380962960328",
  },
  ru: {
    title: "Обслуживание бойлеров в Запорожье — ZP-Boyler",
    description:
      "Выполняем качественное обслуживание и профилактику бойлеров в Запорожье. Вызов мастера на дом. Оригинальные комплектующие и гарантия на все виды работ. Доступная цена услуг. Звоните прямо сейчас: +380962960328",
  },
};

export async function generateMetadata({ params }) {
  const { lng } = params;
  const metadata = metadataByLanguage[lng] || metadataByLanguage.ua;
  const baseUrl = "https://zp-boyler.zp.ua";
  const currentPath = "servis-boyleriv"; // головна сторінка → "" (без шляху)
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

const Home = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  const metadata = metadataByLanguage[lng] || metadataByLanguage.en;

  return (
    <>
      <main className={styles.main}>
        <GoogleAnalytics gaId="G-YWFWM7SVSP" />
        <Header t={t} lng={lng} />
        <FirstBlock t={t} lng={lng} />
        <GoogleReviews />
        <SecondBlock t={t} lng={lng} />
        <ThreeBlock t={t} lng={lng} />
        <AboutUs t={t} lng={lng} />

        {lng === "ru" ? <FourBlockRu /> : <FourBlockUa />}
        {lng === "ru" ? <SeoBlockRu /> : <SeoBlockUa />}
        <Chat />
        <Footer t={t} lng={lng} />
      </main>
    </>
  );
};

export default Home;
