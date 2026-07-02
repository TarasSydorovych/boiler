import styles from "./page.module.css";

import { useTranslation } from "../../i18n";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../../components/standartComponents/header";
import "../../components/font/FuturaPT/stylesheet.css";
import "../../components/font/monrope/stylesheet.css";
import SeoBlockRu from "../../components/chystka-boileriv/seoBlockRu";
import SeoBlockUa from "../../components/chystka-boileriv/seoBlockUa";
import Footer from "../../components/standartComponents/footer";
import FirstBlock from "../../components/chystka-boileriv/firstBlock";
import SecondBlock from "../../components/chystka-boileriv/secondBlock";
import ThreeBlock from "../../components/chystka-boileriv/threeBlock";
import FourBlockUa from "../../components/chystka-boileriv/fourBlockUa";
import FourBlockRu from "../../components/chystka-boileriv/fourBlockRu";
import AboutUs from "../../components/mainPage/aboutUs";
import Chat from "../../components/chat/chat";
import GoogleReviews from "../../components/google/GoogleReviews";

const metadataByLanguage = {
  ua: {
    title: "Чистка бойлерів у Запоріжжі — ZP-Boyler",
    description:
      "Якісна чистка бойлерів у Запоріжжі. Видалення накипу з ТЕНів і стінок бака водонагрівача. Виклик майстра додому. Гарантія результату та доступна ціна.",
  },
  ru: {
    title: "Чистка бойлеров в Запорожье — ZP-Boyler",
    description:
      "Качественная чистка бойлеров в Запорожье. Удаление накипи с ТЭНов и стенок бака водонагревателя. Вызов мастера на дом. Гарантия результата и доступная цена.",
  },
};

export async function generateMetadata({ params }) {
  const { lng } = params;
  const metadata = metadataByLanguage[lng] || metadataByLanguage.ua;
  const baseUrl = "https://zp-boyler.zp.ua";
  const currentPath = "chystka-boileriv"; // головна сторінка → "" (без шляху)
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
