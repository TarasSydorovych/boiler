import Image from "next/image";
import styles from "./page.module.css";

import Header from "../../components/standartComponents/header";
import { useTranslation } from "../../i18n";

import Footer from "../../components/standartComponents/footer";

import FirstBlock from "../../components/sitemap/firstBlock";
import { GoogleAnalytics } from "@next/third-parties/google";

const metadataByLanguage = {
  ru: {
    title: "Ремонт и чистка бойлеров Запорожье",
    description:
      "Профессиональный ремонт и чистка бойлеров в Запорожье. Гарантия качества, доступные цены, быстрый выезд мастера. Заказывайте онлайн!",
  },
  ua: {
    title: "Ремонт та чистка бойлерів Запоріжжя",
    description:
      "Професійний ремонт і чистка бойлерів у Запоріжжі. Гарантія якості, доступні ціни, швидкий виїзд майстра. Замовляйте онлайн!",
  },
};
export async function generateMetadata({ params }) {
  const { lng } = params;
  const metadata = metadataByLanguage[lng] || metadataByLanguage.en;
  return {
    title: metadata.title,
    description: metadata.description,
  };
}
const Sitemap = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  return (
    <main className={styles.main}>
      <GoogleAnalytics gaId="G-YWFWM7SVSP" />
      <Header t={t} lng={lng} />
      <FirstBlock t={t} lng={lng} />

      <Footer t={t} lng={lng} />
    </main>
  );
};
export default Sitemap;
