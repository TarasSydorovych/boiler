import { mongooseConnect } from "../../lib/mongoose"; // <- або "@/lib/mongoose" якщо є alias
import PriceItem from "../../models/PriceItem";

export default async function handler(req, res) {
  await mongooseConnect();
  const { method, query } = req;
  const id = query.id || null;

  try {
    if (method === "GET") {
      // GET /api/prices          → список активних
      // GET /api/prices?id=...   → конкретний
      if (id) {
        const item = await PriceItem.findById(id);
        return res.status(200).json(item);
      }
      const items = await PriceItem.find({ active: true }).sort({
        order: 1,
        _id: 1,
      });
      return res.status(200).json(items);
    }

    if (method === "POST") {
      // приймаємо або 1 об'єкт, або масив для імпорту
      const body = req.body;
      if (Array.isArray(body)) {
        const r = await PriceItem.insertMany(body);
        return res.status(201).json({ ok: true, inserted: r.length });
      }
      const created = await PriceItem.create(body);
      return res.status(201).json(created);
    }

    if (method === "PUT") {
      if (!id) return res.status(400).json({ error: "id required" });
      const updated = await PriceItem.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).json(updated);
    }

    if (method === "DELETE") {
      if (!id) return res.status(400).json({ error: "id required" });
      await PriceItem.findByIdAndDelete(id);
      return res.status(200).json({ ok: true });
    }

    res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
    return res.status(405).end(`Method ${method} Not Allowed`);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
