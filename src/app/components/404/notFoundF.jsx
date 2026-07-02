import Link from "next/link";
import css from "./notFound.module.css";
import Header from "../standartComponents/header";

const NotFoundF = () => {
  return (
    <>
      <div className={css.containerHeader}>
        <Header />
        <div className={css.wrapFour}>
          <h1 className={css.h1Fo}>404</h1>
          <p className={css.pFor}>Вибачте, але такої сторінки не існує.</p>
          <Link className={css.relocateTo} href="/">
            Повернутись на Головну
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundF;
