"use client";
import { useEffect, useMemo, useState } from "react";
import s from "../../components/admin/admin.module.css";
import BackMenu from "../../components/admin/backMenu";

const empty = {
  key: "",
  title: { ua: "", ru: "" },
  note: "",
  price: 0,
  priceType: "fixed",
  order: 0,
  active: true,
};

export default function AdminPrices() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const sorted = useMemo(
    () => [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
    [items]
  );

  useEffect(() => {
    fetch("/api/prices")
      .then((r) => r.json())
      .then((d) => {
        setItems(d);
        setLoading(false);
      });
  }, []);

  const setRow = (idx, patch) => {
    setItems((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], ...patch };
      return copy;
    });
  };

  const addNew = () =>
    setItems((prev) => [
      { ...empty, order: (prev[0]?.order ?? 0) - 1 },
      ...prev,
    ]);

  const move = (idx, dir) => {
    const arr = [...sorted];
    const from = idx,
      to = idx + dir;
    if (to < 0 || to >= arr.length) return;
    [arr[from], arr[to]] = [arr[to], arr[from]];
    // перенумеруємо order
    arr.forEach((it, i) => (it.order = i + 1));
    setItems(arr);
  };

  const saveRow = async (row) => {
    const method = row._id ? "PUT" : "POST";
    const url = row._id ? `/api/prices?id=${row._id}` : `/api/prices`;
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
    });
    const saved = await res.json();
    setItems((prev) =>
      row._id
        ? prev.map((i) => (i._id === saved._id ? saved : i))
        : [saved, ...prev]
    );
  };

  const saveOrder = async () => {
    await Promise.all(
      sorted.map((r) =>
        fetch(`/api/prices?id=${r._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order: r.order }),
        })
      )
    );
    alert("Порядок збережено");
  };

  const removeRow = async (row) => {
    if (!row._id) return setItems(items.filter((i) => i !== row));
    await fetch(`/api/prices?id=${row._id}`, { method: "DELETE" });
    setItems(items.filter((i) => i._id !== row._id));
  };

  if (loading) return <div className={s.wrap}>Loading…</div>;

  return (
    <div className={s.wrapAllAdmin}>
      <BackMenu />
      <main className={s.wrap}>
        <div className={s.topbar}>
          <h1 className={s.h1}>Прайс (адмін)</h1>
          <div className={s.actionsTop}>
            <button className={s.btn} onClick={addNew}>
              + Додати рядок
            </button>
            <button className={s.btn} onClick={saveOrder}>
              Зберегти порядок
            </button>
          </div>
        </div>

        <div className={s.table}>
          <div className={`${s.row} ${s.head}`}>
            <div>Key</div>
            <div>UA</div>
            <div>RU</div>
            <div>Примітка</div>
            <div>Ціна</div>
            <div>Тип</div>
            <div>Порядок</div>
            <div></div>
          </div>

          {sorted.map((row, i) => (
            <div key={row._id || `new-${i}`} className={s.row}>
              <div>
                <input
                  className={s.input}
                  value={row.key || ""}
                  onChange={(e) => setRow(i, { key: e.target.value })}
                />
              </div>
              <div>
                <input
                  className={s.input}
                  value={row.title?.ua || ""}
                  onChange={(e) =>
                    setRow(i, { title: { ...row.title, ua: e.target.value } })
                  }
                />
              </div>
              <div>
                <input
                  className={s.input}
                  value={row.title?.ru || ""}
                  onChange={(e) =>
                    setRow(i, { title: { ...row.title, ru: e.target.value } })
                  }
                />
              </div>
              <div>
                <input
                  className={s.input}
                  value={row.note || ""}
                  onChange={(e) => setRow(i, { note: e.target.value })}
                />
              </div>
              <div>
                <input
                  className={s.inputNum}
                  type="number"
                  value={row.price ?? 0}
                  onChange={(e) => setRow(i, { price: Number(e.target.value) })}
                />
              </div>
              <div>
                <select
                  className={s.select}
                  value={row.priceType}
                  onChange={(e) => setRow(i, { priceType: e.target.value })}
                >
                  <option value="fixed">fixed</option>
                  <option value="from">from</option>
                </select>
              </div>
              <div>
                <input
                  className={s.inputNum}
                  type="number"
                  value={row.order ?? 0}
                  onChange={(e) => setRow(i, { order: Number(e.target.value) })}
                />
              </div>
              <div className={s.actions}>
                <button className={s.iconBtn} onClick={() => move(i, -1)}>
                  ↑
                </button>
                <button className={s.iconBtn} onClick={() => move(i, 1)}>
                  ↓
                </button>
                <button className={s.btn} onClick={() => saveRow(row)}>
                  Зберегти
                </button>
                <button className={s.btnDanger} onClick={() => removeRow(row)}>
                  Видалити
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
