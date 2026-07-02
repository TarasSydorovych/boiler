import { mongooseConnect } from "../../lib/mongoose";
import Blog from "../../models/Blog";

export default async function handler(req, res) {
  await mongooseConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "POST":
      await handlePostRequest(req, res);
      break;
    case "PUT":
      await handlePutRequest(req, res);
      break;
    case "DELETE":
      await handleDeleteRequest(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Метод ${method} не дозволений`);
      break;
  }
}

async function handleGetRequest(req, res) {
  try {
    const { id } = req.query;
    if (id) {
      const blog = await Blog.findById(id);
      if (!blog) {
        return res
          .status(404)
          .json({ success: false, error: "Блог не знайдено" });
      }
      res.status(200).json({ success: true, data: blog });
    } else {
      const blogs = await Blog.find();
      res.status(200).json({ success: true, data: blogs });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Помилка при отриманні блогів" });
  }
}

async function handlePostRequest(req, res) {
  try {
    console.log("🔹 Отримано POST-запит до /api/blogs");

    const { translations, videoId, photos } = req.body;

    console.log("📥 translations:", JSON.stringify(translations, null, 2));
    console.log("🎞 videoId:", videoId);
    console.log("🖼 photos:", photos);

    if (!translations || !videoId || !photos) {
      console.error("❌ Відсутні обов'язкові поля!");
      return res
        .status(400)
        .json({ success: false, error: "Не всі дані передано" });
    }

    const newBlog = new Blog({
      translations,
      videoId,
      photos,
    });

    await newBlog.save();

    console.log("✅ Блог збережено:", newBlog._id);

    res.status(201).json({ success: true, data: newBlog });
  } catch (error) {
    console.error("🔥 Помилка при створенні блогу:", error);
    res.status(500).json({
      success: false,
      error: "Помилка при створенні блогу",
      details: error.message,
    });
  }
}

async function handlePutRequest(req, res) {
  try {
    const { id } = req.query;
    const { translations, videoId, photos } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { translations, videoId, photos },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res
        .status(404)
        .json({ success: false, error: "Блог не знайдено" });
    }

    res.status(200).json({ success: true, data: updatedBlog });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Помилка при оновленні блогу" });
  }
}

async function handleDeleteRequest(req, res) {
  try {
    const { id } = req.query;
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res
        .status(404)
        .json({ success: false, error: "Блог не знайдено для видалення" });
    }

    res.status(200).json({ success: true, message: "Блог видалено успішно" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Помилка при видаленні блогу" });
  }
}
