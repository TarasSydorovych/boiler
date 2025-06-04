import css from "../sitemap/about.module.css";

import Link from "next/link";
const FirstBlock = ({ t, lng }) => {
  return (
    <section className={css.firtBlockAbout}>
      <div className={css.listLandignd}>
        <Link href={`/${lng}`} className={css.notActivLink}>
          {t("forSitemap.one")}
        </Link>
        <Link href={`/${lng}/service`} className={css.notActivLink}>
          {t("forSitemap.ten")}
        </Link>
        <Link href={`/${lng}/remont-pralok`} className={css.notActivLink}>
          {t("forSitemap.two")}
        </Link>

        <Link
          href={`/${lng}/ustanovka-santekhniki`}
          className={css.notActivLink}
        >
          {t("forSitemap.three")}
        </Link>

        <Link
          href={`/${lng}/remont-vodonahrivachiv`}
          className={css.notActivLink}
        >
          {t("forSitemap.five")}
        </Link>

        <Link href={`/${lng}/servis-boyleriv`} className={css.notActivLink}>
          {t("forSitemap.six")}
        </Link>

        <Link href={`/${lng}/chystka-boileriv`} className={css.notActivLink}>
          {t("forSitemap.seven")}
        </Link>

        <Link href={`/${lng}/kupyty-bojlery`} className={css.notActivLink}>
          {t("forSitemap.eight")}
        </Link>

        <Link href={`/${lng}/ustanovka-bojlera`} className={css.notActivLink}>
          {t("forSitemap.nine")}
        </Link>
      </div>
    </section>
  );
};
export default FirstBlock;
