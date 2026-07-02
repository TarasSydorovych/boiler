import mongoose, { Schema } from "mongoose";

const PriceItemSchema = new Schema(
  {
    key: { type: String, required: true, unique: true }, // "diagnostics", ...
    title: {
      ua: { type: String, default: "" },
      ru: { type: String, default: "" },
    },
    note: { type: String, default: "" }, // коментар
    price: { type: Number, required: true }, // 350, 800 ...
    priceType: { type: String, enum: ["fixed", "from"], default: "fixed" }, // fixed | від/от
    order: { type: Number, default: 0 }, // сортування
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.PriceItem ||
  mongoose.model("PriceItem", PriceItemSchema);
