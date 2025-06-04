import Image from "next/image";
import styles from "./page.module.css";

import Header from "../../components/standartComponents/header";
import { useTranslation } from "../../i18n";

import Footer from "../../components/standartComponents/footer";

import FirstBlockService from "../../components/services/firsBlockService";
import { GoogleAnalytics } from "@next/third-parties/google";

const metadataByLanguage = {
  en: {
    title: "WebUi-Studio website Development Services | Custom Web Solutions",
    description:
      "Our company offers website development services for various industries, including landing pages, corporate websites, and e-commerce solutions. We will create a unique website for your business.",
  },
  ua: {
    title: "Послуги з розробки сайтів у Києві — WebUi-Studio",
    description:
      "Пропонуємо послуги з розробки сайтів для різних сфер — лендінги, корпоративні сайти та інтернет-магазини. Унікальний дизайн. Найкраща ціна.",
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
const Services = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  return (
    <main className={styles.main}>
      <GoogleAnalytics gaId="G-YWFWM7SVSP" />
      <Header t={t} lng={lng} />
      <FirstBlockService t={t} lng={lng} />
      <Footer t={t} lng={lng} />
    </main>
  );
};
export default Services;
