import styles from "./page.module.css";

import { useTranslation } from "../i18n";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../components/standartComponents/header";
import "../components/font/FuturaPT/stylesheet.css";
import "../components/font/monrope/stylesheet.css";
import SeoBlockRu from "../components/mainPage/seoBlockRu";
import SeoBlockUa from "../components/mainPage/seoBlockUa";
import Footer from "../components/standartComponents/footer";
import FirstBlock from "../components/mainPage/firstBlock";
import SecondBlock from "../components/mainPage/secondBlock";
import ThreeBlock from "../components/mainPage/threeBlock";
import FourBlockUa from "../components/mainPage/fourBlockUa";
import FourBlockRu from "../components/mainPage/fourBlockRu";
import AboutUs from "../components/mainPage/aboutUs";
const metadataByLanguage = {
  ua: {
    title: "Ремонт бойлерів у Запоріжжі — ZP-Boyler",
    description:
      "Професійний ремонт бойлерів у Запоріжжі. Виїзд майстра на дом. Гарантія якості та доступна ціна послуг. Телефонуйте просто зараз: +380962960328",
    canonical: "http://zp-boyler.zp.ua/ua", // Замінити на вашу реальну URL-адресу
  },
  ru: {
    title: "Ремонт бойлеров в Запорожье — ZP-Boyler",
    description:
      "Выполняем профессиональный ремонт бойлеров в Запорожье. Вызов мастера на дом. Гарантия качества и доступная цена услуг. Звоните прямо сейчас: +380962960328",
    canonical: "http://zp-boyler.zp.ua/ru", // Замінити на вашу реальну URL-адресу
  },
};

export async function generateMetadata({ params }) {
  const { lng } = params;
  const metadata = metadataByLanguage[lng] || metadataByLanguage.ua;
  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: metadata.canonical,
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
        <SecondBlock t={t} lng={lng} />
        <ThreeBlock t={t} lng={lng} />
        <AboutUs />
        {lng === "ru" ? <FourBlockRu /> : <FourBlockUa />}
        {lng === "ru" ? <SeoBlockRu /> : <SeoBlockUa />}
        <Footer t={t} lng={lng} />
      </main>
    </>
  );
};

export default Home;
