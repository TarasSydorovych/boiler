import styles from "./page.module.css";

import { useTranslation } from "../../i18n";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../../components/standartComponents/header";
import "../../components/font/FuturaPT/stylesheet.css";
import "../../components/font/monrope/stylesheet.css";
import SeoBlockRu from "../../components/remont-vodonahrivachiv/seoBlockRu";
import SeoBlockUa from "../../components/remont-vodonahrivachiv/seoBlockUa";
import Footer from "../../components/standartComponents/footer";
import FirstBlock from "../../components/remont-vodonahrivachiv/firstBlock";
import SecondBlock from "../../components/remont-vodonahrivachiv/secondBlock";
import ThreeBlock from "../../components/remont-vodonahrivachiv/threeBlock";
import FourBlockUa from "../../components/remont-vodonahrivachiv/fourBlockUa";
import FourBlockRu from "../../components/remont-vodonahrivachiv/fourBlockRu";
import AboutUs from "../../components/remont-vodonahrivachiv/aboutUs";
const metadataByLanguage = {
  ua: {
    title: "Ремонт водонагрівачів у Запоріжжі — ZP-Boyler",
    description:
      "Виконуємо якісний та оперативний ремонт водонагрівачів у Запоріжжі. Виклик майстра додому. Гарантія на всі види робіт та комплектуючих. Доступна ціна послуг. Телефонуйте прямо зараз: +380962960328",
  },
  ru: {
    title: "Ремонт водонагревателей в Запорожье — ZP-Boyler",
    description:
      "Выполняем качественный и оперативный ремонт водонагревателей в Запорожье. Вызов мастера на дом. Гарантия на все виды работ и комплектующих. Доступная цена услуг. Звоните прямо сейчас: +380962960328",
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
