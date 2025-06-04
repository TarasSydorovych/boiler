"use client";

import css from "./main.module.css";
import leftSdas from "../img/LeftSdas.png";
import rigArrovLf from "../img/rigArrovLf.png";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    title: "Ремонт",
    desc: "Замена ТЭНа, устранение протечек, восстановление работоспособности",
    price: "от 700 грн",
  },
  {
    title: "Установка",
    desc: "Надёжный монтаж водонагревателя с учётом всех технических норм",
    price: "от 700 грн",
  },
  {
    title: "Чистка и профилактика",
    desc: "Комплексное обслуживание бойлера для безопасной и долгосрочной работы",
    price: "от 700 грн",
  },
];

const FourBlockRu = () => {
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
          <p className={css.nameNumberf}>лет работы в этой сфере</p>
        </div>
        <div className={css.oneBLockInWiner}>
          {" "}
          <p className={css.numberFor}>3505</p>
          <p className={css.nameNumberf}>выполненных заказов</p>
        </div>
        <div className={css.oneBLockInWiner}>
          {" "}
          <p className={css.numberFor}>93%</p>
          <p className={css.nameNumberf}>клиентов готовы нас рекомендовать</p>
        </div>
      </div>
      <p className={css.nameForBoilerTwo}>BOYLER BOYLER BOYLER BOYLER</p>
    </div>
  );
};

export default FourBlockRu;
