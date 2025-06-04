import css from "./standart.module.css";
import logog from "../../components/img/logog.png";
import Image from "next/image";
import UlNavigateUa from "./ulNavigateUa";
import UlNavigateRu from "./ulNavigateRu";
import Link from "next/link";
const Footer = ({ t, lng }) => {
  return (
    <footer className={css.wrapFooter}>
      <p className={css.pForFuterLogo}>
        ZP.BOYLER
        <br /> <span className={css.logoSpanF}>COMPANY</span>
      </p>
      <nav className={css.navInFooter}>
        {lng === "ru" ? <UlNavigateRu /> : <UlNavigateUa />}
      </nav>
    </footer>
  );
};
export default Footer;
