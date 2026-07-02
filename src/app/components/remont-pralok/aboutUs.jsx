import css from "./main.module.css";

const AboutUs = ({ t, lng }) => {
  return (
    <section className={css.aboutUsWrapQw}>
      <div className={css.videoContainer}>
        <video
          className={css.video}
          controls
          playsInline
          poster="/videos/priceForEnter.webp" // шлях до зображення
        >
          <source src="/videos/newVideoa.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video>
      </div>
      <div className={css.textContainer}>
        <h2 className={css.heading}>{t("aboutForUs")}</h2>
        <p className={css.paragraph}>
          {t("adeed")}
          <strong>{t("spechFor")}</strong> {t("ponadP")}
        </p>
        <p className={css.paragraph}>{t("consilop")}</p>
      </div>
    </section>
  );
};

export default AboutUs;
