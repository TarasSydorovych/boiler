import css from "./main.module.css";
import rectangle from "../img/Rectangle.webp";
import Image from "next/image";
import ButtonFreeConsultation from "./ButtonFreeConsultation";
const FirstBlock = ({ t, lng }) => {
  return (
    <div className={css.wrapFirst}>
      <div className={css.h1Wrap}>
        <p className={css.firsth1}>{t("forSanteh.firstH")}</p>
      </div>
      <div className={css.wrapdownBlock}>
        <div className={css.wrapTwoPwithButton}>
          <p className={css.firstP}>{t("forSanteh.firstP")}</p>
          <ButtonFreeConsultation t={t.lng} />
        </div>
        <Image
          src={rectangle}
          className={css.imageForFirst}
          alt="Ремонт, профилактика и установка бойлеров ЗАПОРОЖЬЕ"
        />
      </div>
    </div>
  );
};
export default FirstBlock;
