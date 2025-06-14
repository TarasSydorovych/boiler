import Link from "next/link";
import css from "../standart.module.css";

const LanguageSelectorRu = () => {
  return (
    <div className={css.languageSelector}>
      <span>RU</span>
      <div className={css.dropdownContent}>
        <Link href="/ua">UA</Link>
        <Link href="/ru">RU</Link>
      </div>
    </div>
  );
};

export default LanguageSelectorRu;
