import css from "./main.module.css";

const AboutUs = () => {
  return (
    <section className={css.aboutUsWrapQw}>
      <div className={css.videoContainer}>
        <video className={css.video} controls playsInline>
          <source src="/videos/newVideoa.mp4" type="video/mp4" />
          Ваш браузер не підтримує відео.
        </video>
      </div>
      <div className={css.textContainer}>
        <h2 className={css.heading}>Про нас</h2>
        <p className={css.paragraph}>
          Наша компанія спеціалізується на{" "}
          <strong>
            ремонті, встановленні та обслуговуванні бойлерів у Запоріжжі
          </strong>
          . З понад 10-річним досвідом ми гарантуємо якість, швидкість та
          доступні ціни. Обслуговуємо як приватних клієнтів, так і підприємства.
        </p>
        <p className={css.paragraph}>
          У нас ви також можете <strong>придбати надійний бойлер</strong> від
          перевірених брендів з професійною установкою. Ми надаємо гарантію на
          всі роботи та безкоштовну консультацію.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
