import css from "./main.module.css";
import galochka from "../img/galochka.png";
import Image from "next/image";
const SecondBlock = ({ t, lng }) => {
  return (
    <div className={css.wrapSecondBlock}>
      <p className={css.relativeP}>BOYLER</p>
      <div className={css.wrapPerevagu}>
        <p className={css.mainPinperev}>{t("ourPerevagu")}</p>
        <p className={css.prevInd}>{t("ourPerJ")}</p>
        <div className={css.wrapTwoUl}>
          <ul className={css.perevaguUl}>
            <li className={css.liInPerevagu}>
              <Image
                src={galochka}
                alt="Ремонт, профілактика та встановлення бойлерів ЗАПОРІЖЖЯ"
                className={css.galoshkaStyle}
              />
              {t("firstInPrev")}
            </li>
            <li className={css.liInPerevagu}>
              <Image
                src={galochka}
                alt="Ремонт, профілактика та встановлення бойлерів ЗАПОРІЖЖЯ"
                className={css.galoshkaStyle}
              />
              {t("secondInPrev")}
            </li>
            <li className={css.liInPerevagu}>
              <Image
                src={galochka}
                alt="Ремонт, профілактика та встановлення бойлерів ЗАПОРІЖЖЯ"
                className={css.galoshkaStyle}
              />
              {t("threeInPrev")}
            </li>
            <li className={css.liInPerevagu}>
              <Image
                src={galochka}
                alt="Ремонт, профілактика та встановлення бойлерів ЗАПОРІЖЖЯ"
                className={css.galoshkaStyle}
              />
              {t("fourInPrev")}
            </li>
          </ul>
          <ul className={css.perevaguUl}>
            <li className={css.liInPerevagu}>
              <Image
                src={galochka}
                alt="Ремонт, профілактика та встановлення бойлерів ЗАПОРІЖЖЯ"
                className={css.galoshkaStyle}
              />
              {t("fiveInPrev")}
            </li>
            <li className={css.liInPerevagu}>
              <Image
                src={galochka}
                alt="Ремонт, профілактика та встановлення бойлерів ЗАПОРІЖЖЯ"
                className={css.galoshkaStyle}
              />
              {t("sixInPrev")}
            </li>
            <li className={css.liInPerevagu}>
              <Image
                src={galochka}
                alt="Ремонт, профілактика та встановлення бойлерів ЗАПОРІЖЖЯ"
                className={css.galoshkaStyle}
              />
              {t("sevenInPrev")}
            </li>
            <li className={css.liInPerevagu}>
              <Image
                src={galochka}
                alt="Ремонт, профілактика та встановлення бойлерів ЗАПОРІЖЖЯ"
                className={css.galoshkaStyle}
              />
              {t("eightInPrev")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SecondBlock;
