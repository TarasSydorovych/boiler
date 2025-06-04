import styles from "./page.module.css";

import { useTranslation } from "../../i18n";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../../components/standartComponents/header";
import "../../components/font/FuturaPT/stylesheet.css";
import "../../components/font/monrope/stylesheet.css";
import SeoBlockRu from "../../components/ustanovka-bojlera/seoBlockRu";
import SeoBlockUa from "../../components/ustanovka-bojlera/seoBlockUa";
import Footer from "../../components/standartComponents/footer";
import FirstBlock from "../../components/ustanovka-bojlera/firstBlock";
import SecondBlock from "../../components/ustanovka-bojlera/secondBlock";
import ThreeBlock from "../../components/ustanovka-bojlera/threeBlock";
import FourBlockUa from "../../components/ustanovka-bojlera/fourBlockUa";
import FourBlockRu from "../../components/ustanovka-bojlera/fourBlockRu";
import AboutUs from "../../components/ustanovka-bojlera/aboutUs";
const metadataByLanguage = {
  ua: {
    title: "Встановлення бойлерів у Запоріжжі — ZP-Boyler",
    description:
      "Виконуємо якісне встановлення бойлерів у Запоріжжі. Надаємо 100% гарантію на всі види виконаних робіт. Доступна ціна послуг. Телефонуйте прямо зараз: +380962960328.",
  },
  ru: {
    title: "Установка бойлеров в Запорожье — ZP-Boyler",
    description:
      "Выполняем качественную установку бойлеров в Запорожье. Предоставляем 100% гарантию на все виды выполненных работ. Доступная цена услуг. Звоните прямо сейчас: +380962960328.",
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
