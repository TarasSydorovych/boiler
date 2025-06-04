import css from "../app/about.module.css";
import Sitca from "../../svg/bigSitcaddd.svg";
import ChartBarHorizontal from "../../svg/ChartBarHorizontal.svg";
import Layout from "../../svg/Layout.svg";
import Crop from "../../svg/Crop.svg";
import CodeBlock from "../../svg/CodeBlock.svg";
import ChartScatter from "../../svg/ChartScatter.svg";
import GearSix from "../../svg/GearSix.svg";

const ThreBlockLanding = ({ t, lng }) => {
  return (
    <section className={css.sectionThreBlock}>
      <h3 className={css.advantPh3}>{t("fourTitle")}</h3>
      <p className={css.advantPDescH3}>{t("fourDesc")}</p>
      <div className={css.blockWrapServise}>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <ChartBarHorizontal className={css.iconInfd} />
            </div>

            <p className={css.servDesc}>{t("fourFirst")}</p>
          </div>
        </div>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <Layout className={css.iconInfd} />
            </div>

            <p className={css.servDesc}>{t("fourSecond")}</p>
          </div>
        </div>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <Crop className={css.iconInfd} />
            </div>

            <p className={css.servDesc}>{t("fourThre")}</p>
          </div>
        </div>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <CodeBlock className={css.iconInfd} />
            </div>

            <p className={css.servDesc}>{t("fourFour")}</p>
          </div>
        </div>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <ChartScatter className={css.iconInfd} />
            </div>

            <p className={css.servDesc}>{t("fourFive")}</p>
          </div>
        </div>
        <div className={css.blockCssServ}>
          <Sitca className={css.sitcaSt} />
          <div className={css.wrapSmallKL}>
            <div className={css.wrapAnalisIcon}>
              <GearSix className={css.iconInfd} />
            </div>

            <p className={css.servDesc}>{t("fourSix")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ThreBlockLanding;
