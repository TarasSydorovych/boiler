import Link from "next/link";
import css from "./standart.module.css";
const UlNavigateUa = () => {
  return (
    <ul className={css.ulInFooterO}>
      {" "}
      <a href="tel:+380992465404" className={css.linkH}>
        (099) 246 54 04
      </a>
      <li>
        <Link href={`/ua`} className={css.linkH}>
          Головна
        </Link>
      </li>
      <li>
        <Link href={`/ua/service`} className={css.linkH}>
          Послуги
        </Link>
      </li>
      <li>
        <Link href={`/ua/blog`} className={css.linkH}>
          Блог
        </Link>
      </li>
      <li>
        <Link href={`/ua/contact`} className={css.linkH}>
          Контакти
        </Link>
      </li>
      <li>
        <Link href={`/ua/sitemap`} className={css.linkH}>
          Карта сайту
        </Link>
      </li>
    </ul>
  );
};
export default UlNavigateUa;
