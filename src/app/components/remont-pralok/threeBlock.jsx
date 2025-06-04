import css from "./main.module.css";
import remboiler from "../img/stiralnaya-mashina-remont-Raduzhnyj.png";
import Image from "next/image";
import prodagBoiler from "../img/prodagBoiler.png";
import priceForEnter from "../img/priceForEnter.png";
import ButtonFreeConsultationOr from "./ButtonFreeConsultationOr";
const ThreeBlock = ({ t, lng }) => {
  return (
    <div className={css.wrapThreBlock}>
      <p className={css.nameForBoiler}>BOYLER BOYLER BOYLER BOYLER</p>
      <div className={css.wrapOneBlocInVuizd}>
        <div className={css.blockForVuizd}>
          <p className={css.diagnostPn}>{t("vuizd")}</p>
          <ul className={css.newulForBlock}>
            <li className={css.orangeLi}>{t("vartist")} 200грн</li>
            <li className={css.orangeLi}>{t("forFree")}</li>
          </ul>
        </div>
        <Image
          src={remboiler}
          alt="Ремонт бойлерів Запоріжжя"
          className={css.iconremBouler}
        />
      </div>
      <div className={css.wrapOneBlocInVuizdTwo}>
        <div className={css.blockForVuizd}>
          <p className={css.diagnostPn}>{t("forPralka.priceForBoler")}</p>
          <ul className={css.newulForBlock}>
            <li className={css.orangeLi}>
              {t("forPralka.priceForBoler")} 3950 - 95000грн
            </li>
            <li className={css.orangeLi}>{t("inStock")}</li>
          </ul>
        </div>
        <Image
          src={prodagBoiler}
          alt="Ремонт бойлерів Запоріжжя"
          className={css.iconremBouler}
        />
      </div>
      <div className={css.wrapOneBlocInVuizdThre}>
        <div className={css.blockForVuizdTwo}>
          <p className={css.diagnostPn}>{t("vartistMontag")}</p>
          <p className={css.priceHaveFOr}>{t("priceRegFor")}</p>
          <ul className={css.newulForBlock}>
            <li className={css.orangeLi}>{t("chousePlase")}</li>
            <li className={css.orangeLi}>{t("forPralka.boilerModel")}</li>
          </ul>
          <p className={css.priceHaveFOrD}>{t("forThrj")}: 700грн</p>
        </div>
        <Image
          src={priceForEnter}
          alt="Ремонт бойлерів Запоріжжя"
          className={css.iconremBouler}
        />
      </div>
      <ButtonFreeConsultationOr t={t.lng} />
    </div>
  );
};
export default ThreeBlock;
