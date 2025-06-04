import css from "../app/about.module.css";
import firstImage from "../../img/aboutPicFirst.webp";
import Image from "next/image";
import Dot from "../../svg/dotSvg.svg";
import Sitca from "../../svg/bigWidthSitca.svg";
import On from "../../svg/01.svg";
import Tw from "../../svg/02.svg";
import Th from "../../svg/03.svg";
import appIconIfEw from "../../img/appIconIfEw.webp";
import Fo from "../../svg/04.svg";
import imortantImage from "../../img/imortantIcon.webp";
import GetItTouch from "../main/getItTouch";
import GridFourds from "../../svg/GridFourds.svg";
import StarFouras from "../../svg/StarFouras.svg";
import Java from "../../svg/java.svg";
import Kotlin from "../../svg/Kotlin_Icon.svg";
import ReactIcon from "../../svg/logo-react.svg";
import DeviceTabletasa from "../../svg/DeviceTabletasa.svg";

const SecondBlockPos = ({ t, lng }) => {
  return (
    <div className={css.secondWrap}>
      <Dot className={css.datFirst} />
      <Dot className={css.datSecond} />
      <div className={css.wrapBussinesL}>
        <div className={css.kvadratWhite}></div>
        <h3 className={css.advantPh3}>{t("threTitleApp")}</h3>
      </div>
      <div className={css.threBlockL}>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>01</p>
          <p className={css.nameOneDesc}>{t("threFirstApp")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>02</p>
          <p className={css.nameOneDesc}>{t("threSecondApp")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>03</p>
          <p className={css.nameOneDesc}>{t("threThreApp")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>04</p>
          <p className={css.nameOneDesc}>{t("threFourApp")}</p>
        </div>
        <div className={css.oneBlockNiFirst}>
          <p className={css.numberKter}>05</p>
          <p className={css.nameOneDesc}>{t("threFiveApp")}</p>
        </div>
      </div>

      <div className={css.importsntBlock}>
        <div className={css.textWrapIm}>
          <p className={css.imortantPTitle}>{t("important")}</p>
          <p className={css.descriptionsImortant}>{t("threDescApp")}</p>
        </div>
        {/* <Image src={imortantImage} className={css.imortantImage} alt="Photo" /> */}
        <div className={css.imortantImage}></div>
      </div>
      <GetItTouch t={t} lng={lng} />
      <div className={css.wrapLdse}>
        <div className={css.wrapBussinesLqw}>
          <div className={css.wrapFirstBapp}>
            <div className={css.kvadratWhite}></div>
            <h3 className={css.advantPh3}>{t("fourTitleBusines")}</h3>
          </div>{" "}
          <div className={css.wrapFirstBapp}>
            <div className={css.werticalLine}></div>
            <p className={css.advantPDescH3}>{t("fourDescApp")}</p>
          </div>
        </div>
        <Image src={appIconIfEw} className={css.appIconIfEw} alt="Photo" />
      </div>
      <div className={css.wrapSitkaBlocks}>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <Java className={css.iconInfd} />
              {/* <p className={css.pInKotlin}>Java</p> */}
            </div>

            <p className={css.servDesc}>{t("fourFirstApp")}</p>
          </div>
        </div>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <Kotlin className={css.iconInfd} />
              {/* <p className={css.pInKotlin}>Java</p> */}
            </div>

            <p className={css.servDesc}>{t("fourSecondApp")}</p>
          </div>
        </div>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <ReactIcon className={css.iconInfd} />
              {/* <p className={css.pInKotlin}>Java</p> */}
            </div>

            <p className={css.servDesc}>{t("fourSecondApp")}</p>
          </div>
        </div>
      </div>
      <p className={css.lastPInBis}>{t("descPoT")}</p>
    </div>
  );
};
export default SecondBlockPos;
