import styles from "./page.module.css";

import { useTranslation } from "../../i18n";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../../components/standartComponents/header";
import "../../components/font/FuturaPT/stylesheet.css";
import "../../components/font/monrope/stylesheet.css";
import SeoBlockRu from "../../components/kupyty-bojlery/seoBlockRu";
import SeoBlockUa from "../../components/kupyty-bojlery/seoBlockUa";
import Footer from "../../components/standartComponents/footer";
import FirstBlock from "../../components/kupyty-bojlery/firstBlock";
import SecondBlock from "../../components/kupyty-bojlery/secondBlock";
import ThreeBlock from "../../components/kupyty-bojlery/threeBlock";
import FourBlockUa from "../../components/kupyty-bojlery/fourBlockUa";
import FourBlockRu from "../../components/kupyty-bojlery/fourBlockRu";
import AboutUs from "../../components/kupyty-bojlery/aboutUs";
const metadataByLanguage = {
  ua: {
    title: "Купити бойлери в Запоріжжі на ZP-Boyler",
    description:
      "У нас ви зможете купити бойлери в Запоріжжі від найкращих світових виробників. Водонагрівачі Ariston, Gorenje, Atlantic, Thermex та інші. Гарантія якості. Найкраща ціна. Дзвоніть прямо зараз: +380962960328.",
  },
  ru: {
    title: "Купить бойлеры в Запорожье на ZP-Boyler",
    description:
      "У нас вы сможете купить бойлеры в Запорожье от лучших мировых производителей. Водонагреватели Ariston, Gorenje, Atlantic, Thermex и другие. Гарантия качества. Лучшая цена. Звоните прямо сейчас: +380962960328.",
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
