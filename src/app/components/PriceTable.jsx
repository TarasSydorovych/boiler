// components/price/PriceTable.jsx
"use client";
import { useEffect, useState } from "react";
import s from "../components/mainPage/main.module.css";

export default function PriceTable({ lng = "ua", title }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/api/prices")
      .then((r) => r.json())
      .then(setItems);
  }, []);
  const t = (it) => it.title?.[lng] || it.title?.ru || it.title?.ua || "";

  return (
    <section className={s.wrapPriceTable}>
      <p className={s.pPriceInFdsd}>{lng === "ua" ? "Ціни" : "Цены"}</p>
      <div className={s.section}>
        {title && <h2 className={s.h2}>{title}</h2>}
        <div className={s.container}>
          <table className={s.table} role="table">
            <thead className={s.thead}>
              <tr className={s.headerRow}>
                <th className={s.thName}>
                  {lng === "ua" ? "Послуга" : "Услуга"}
                </th>
                <th className={s.thPrice}>{lng === "ua" ? "Ціна" : "Цена"}</th>
              </tr>
            </thead>
            <tbody className={s.tbody}>
              {items.map((it) => (
                <tr key={it._id} className={s.tr}>
                  <td className={`${s.td} ${s.titleCell}`} data-label="Послуга">
                    <span className={s.name}>{t(it)}</span>
                    {it.note && <span className={s.note}>{it.note}</span>}
                  </td>
                  <td className={`${s.td} ${s.priceCell}`} data-label="Ціна">
                    <span className={s.from}>
                      {it.priceType === "from"
                        ? lng === "ua"
                          ? "від "
                          : "от "
                        : ""}
                    </span>
                    <span className={s.amount}>
                      {it.price.toLocaleString("uk-UA")}
                    </span>
                    <span className={s.currency}> грн</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
