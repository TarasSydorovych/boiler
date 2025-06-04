import css from "./main.module.css";
import rectangle from "../img/dsadfasdf.jpg";
import Image from "next/image";
import ButtonFreeConsultation from "./ButtonFreeConsultation";
const FirstBlock = ({ t, lng }) => {
  return (
    <div className={css.wrapFirst}>
      <div className={css.h1Wrap}>
        <h1 className={css.firsth1}>{t("forPralka.firstH")}</h1>
      </div>
      <div className={css.wrapdownBlock}>
        <div className={css.wrapTwoPwithButton}>
          <p className={css.firstP}>{t("forPralka.firstP")}</p>
          {/* <button className={css.buttonSendForm}>
            {t("freeConsultation")}
          </button> */}
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
