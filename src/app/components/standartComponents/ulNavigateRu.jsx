import Link from "next/link";
import css from "./standart.module.css";

const UlNavigateRu = () => {
  return (
    <ul className={css.ulInFooterO}>
      <a href="tel:+380992465404" className={css.linkH}>
        (099) 246 54 04
      </a>
      <li>
        <Link href={`/ru`} className={css.linkH}>
          Главная
        </Link>
      </li>
      <li>
        <Link href={`/ru/service`} className={css.linkH}>
          Услуги
        </Link>
      </li>
      <li>
        <Link href={`/ru/blog`} className={css.linkH}>
          Блог
        </Link>
      </li>
      <li>
        <Link href={`/ru/contact`} className={css.linkH}>
          Контакты
        </Link>
      </li>
      <li>
        <Link href={`/ru/sitemap`} className={css.linkH}>
          Карта сайта
        </Link>
      </li>
    </ul>
  );
};

export default UlNavigateRu;
