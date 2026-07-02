import styles from "./page.module.css";
import { notFound } from "next/navigation";

import { useTranslation } from "../../i18n";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../../components/standartComponents/header";
import "../../components/font/FuturaPT/stylesheet.css";
import "../../components/font/monrope/stylesheet.css";
import SeoBlockRu from "../../components/ustanovka-santekhniki/seoBlockRu";
import SeoBlockUa from "../../components/ustanovka-santekhniki/seoBlockUa";
import Footer from "../../components/standartComponents/footer";
import FirstBlock from "../../components/ustanovka-santekhniki/firstBlock";
import SecondBlock from "../../components/ustanovka-santekhniki/secondBlock";
import ThreeBlock from "../../components/ustanovka-santekhniki/threeBlock";
import FourBlockUa from "../../components/ustanovka-santekhniki/fourBlockUa";
import FourBlockRu from "../../components/ustanovka-santekhniki/fourBlockRu";
import AboutUs from "../../components/mainPage/aboutUs";
import Chat from "../../components/chat/chat";
import GoogleReviews from "../../components/google/GoogleReviews";
const metadataByLanguage = {
  ua: {
    title: "Ремонт пральних машин у Запоріжжі — ZP-Boyler",
    description:
      "Професійний ремонт пральних машин у Запоріжжі. Виїзд майстра на дом. Гарантія якості та доступна ціна послуг. Телефонуйте просто зараз: +380962960328",
  },
  ru: {
    title: "Ремонт стиральных машин в Запорожье — ZP-Boyler",
    description:
      "Профессиональный ремонт стиральных машин в Запорожье. Выезд мастера на дом. Гарантия качества и доступная цена услуг. Звоните прямо сейчас: +380962960328",
  },
};

export async function generateMetadata({ params }) {
  const { lng } = params;
  const metadata = metadataByLanguage[lng] || metadataByLanguage.ua;
  const baseUrl = "https://zp-boyler.zp.ua";
  const currentPath = "ustanovka-santekhniki"; // головна сторінка → "" (без шляху)
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
