import mongoose from "mongoose";

const localizedContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
    trim: true,
  },
  seotitle: {
    type: String,
    required: false,
    trim: true,
  },
  seodescription: {
    type: String,
    required: false,
    trim: true,
  },
  shortDescription: {
    type: String,
    required: false,
    trim: true,
  },
  longDescription: {
    type: String,
    required: false,
    trim: true,
  },
});

const blogSchema = new mongoose.Schema(
  {
    translations: {
      en: localizedContentSchema, // Англійська
      pl: localizedContentSchema, // Польська
      ru: localizedContentSchema, // Російська
      ua: localizedContentSchema, // Українська
    },
    videoId: {
      type: String,
      required: false,
      trim: true,
    },
    photos: [
      {
        type: String, // URL або шлях до фото
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
