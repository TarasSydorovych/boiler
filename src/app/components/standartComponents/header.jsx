import css from "./standart.module.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import logog from "../../components/img/logog.png";
import Link from "next/link";
import LanguageSelectorRu from "./lenguageSelector/languageSelectorRu";
import LanguageSelectorEn from "./lenguageSelector/languageSelectorEn";
import LanguageSelectorPl from "./lenguageSelector/languageSelectorPl";
import LanguageSelectorUa from "./lenguageSelector/languageSelectorUa";
import Navigations from "./navigations";
import NavigationsRu from "./navigationsRu";
import NavigationsEn from "./navigationsEn";
import NavigationsPl from "./navigationsPl";
const Header = ({ t, lng }) => {
  return (
    <header className={css.allHeaderWrap}>
      <div className={css.secondInHeader}>
        {" "}
        {/* <div className={css.wrapLogoW}>
          <Image src={logoInsortex} alt="Insortex Logo" className={css.logo} />
          <strong className={css.textStrongLogo}>INSORTEX</strong>
        </div> */}
        <Link href={"/"}>
          <Image src={logog} alt="Insortex Logo" className={css.logo} />
        </Link>
        {/* <nav className={css.navWrap}>
          <ul className={css.ulNavigation}>
            <li className={css.liNavigation}>{t("mainLink")}</li>
            <li className={css.liNavigation}>{t("productions")}</li>
            <li className={css.liNavigation}>{t("ourWorks")}</li>
            <li className={css.liNavigation}>{t("ourNews")}</li>
            <li className={css.liNavigation}>{t("aboutUs")}</li>
            <li className={css.liNavigation}>{t("contackLink")}</li>
          </ul>
        </nav> */}
        <nav className={css.navWrap}>
          {lng === "ua" && <Navigations />}
          {lng === "ru" && <NavigationsRu />}
        </nav>
        <div className={css.lanSelectorWrapAll}>
          {" "}
          {lng === "ua" && <LanguageSelectorUa />}
          {lng === "ru" && <LanguageSelectorRu />}
        </div>
      </div>
    </header>
  );
};
export default Header;
