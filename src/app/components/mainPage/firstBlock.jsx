import css from "./main.module.css";
import rectangle from "../img/Rectangle.webp";
import Image from "next/image";
import ButtonFreeConsultation from "./ButtonFreeConsultation";
const FirstBlock = ({ t, lng }) => {
  return (
    <div className={css.wrapFirst}>
      <p className={css.firsth1NewMa}>{t("serviceCenteZp")}</p>
      <div className={css.h1Wrap}>
        <p className={css.firsth1}>{t("firstH")}</p>
      </div>
      <div className={css.wrapdownBlock}>
        <div className={css.wrapTwoPwithButton}>
          <p className={css.firstP}>{t("firstP")}</p>
          {/* <button className={css.buttonSendForm}>
            {t("freeConsultation")}
          </button> */}
          <ButtonFreeConsultation t={t.lng} />
        </div>
        <Image
          src={rectangle}
          className={css.imageForFirst}
          alt="Ремонт, профилактика и установка бойлеров ЗАПОРОЖЬЕ"
          priority
          placeholder="blur"
        />
      </div>
    </div>
  );
};
export default FirstBlock;
