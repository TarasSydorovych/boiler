import Header from "../../components/standartComponents/header";
import styles from "./page.module.css";

import { useTranslation } from "../../i18n";
import { GoogleAnalytics } from "@next/third-parties/google";

import Footer from "../../components/standartComponents/footer";

import FirstBlockContact from "../../components/contact/firstBlockContact";
const metadataByLanguage = {
  ua: {
    title:
      "Контакти | zp-boyler - Зв'яжіться з нами для отримання якісного обладнання",
    description:
      "Зв'яжіться з zp-boyler для запитань або підтримки. Ми завжди готові допомогти!",
  },
  ru: {
    title:
      "Контакты | zp-boyler - Свяжитесь с нами для получения качественного оборудования",
    description:
      "Свяжитесь с zp-boyler для получения информации. Мы всегда готовы помочь!",
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
const About = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);

  return (
    <main className={styles.main}>
      <GoogleAnalytics gaId="G-YWFWM7SVSP" />
      <Header t={t} lng={lng} />
      <FirstBlockContact t={t} lng={lng} />
      <Footer t={t} lng={lng} />
    </main>
  );
};
export default About;
