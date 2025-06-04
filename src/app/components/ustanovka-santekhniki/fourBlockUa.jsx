"use client";
import css from "./main.module.css";
import leftSdas from "../img/LeftSdas.png";
import rigArrovLf from "../img/rigArrovLf.png";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    title: "Ремонт",
    desc: "Заміна ТЕНу, усунення підтікання, відновлення працездатності",
    price: "від 700 грн",
  },
  {
    title: "Встановлення",
    desc: "Надійний монтаж вашого водонагрівача з урахуванням усіх технічних норм",
    price: "від 700 грн",
  },
  {
    title: "Чищення та профілактика",
    desc: "Комплексне обслуговування бойлера для безпечної та довговічної роботи",
    price: "від 700 грн",
  },
];

const FourBlockUa = () => {
  const [index, setIndex] = useState(0);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev + 1) % cards.length);

  const current = cards[index];

  return (
    <div className={css.wrapFuorBlock}>
      <div className={css.remontBilder}>
        <Image
          src={leftSdas}
          className={css.leftSdas}
          alt="arrow"
          onClick={prev}
        />
        <div className={css.blockForRemDsa}>
          <p className={css.remInSlider}>{current.title}</p>
          <p className={css.smalRemInds}>{current.desc}</p>
          <div className={css.priceVidInSlider}>{current.price}</div>
        </div>
        <Image
          src={rigArrovLf}
          className={css.rigArrovLf}
          alt="arrow"
          onClick={next}
        />
      </div>
      <div className={css.wrapWiners}>
        <div className={css.oneBLockInWiner}>
          <p className={css.numberFor}>11</p>
          <p className={css.nameNumberf}>років роботи у цій сфері</p>
        </div>
        <div className={css.oneBLockInWiner}>
          {" "}
          <p className={css.numberFor}>3505</p>
          <p className={css.nameNumberf}>виконаних замовлень</p>
        </div>
        <div className={css.oneBLockInWiner}>
          {" "}
          <p className={css.numberFor}>93%</p>
          <p className={css.nameNumberf}>клієнтів готові рекомендувати нас</p>
        </div>
      </div>
      <p className={css.nameForBoilerTwo}>BOYLER BOYLER BOYLER BOYLER</p>
    </div>
  );
};

export default FourBlockUa;
