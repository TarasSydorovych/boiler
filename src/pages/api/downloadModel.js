import fs from "fs";
import path from "path";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

function sanitizeFileName(fileName) {
  return decodeURIComponent(fileName)
    .replace(/[^a-zA-Z0-9.\-_]/g, "_")
    .replace(/\s+/g, "_");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Метод не дозволений" });
  }

  try {
    const form = formidable({ multiples: false, keepExtensions: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Помилка під час розбору файлу:", err);
        return res
          .status(500)
          .json({ message: "Помилка під час розбору файлу" });
      }

      console.log("Отримані поля:", fields);
      console.log("Отримані файли:", files);

      const file = files.file[0];

      if (!file) {
        console.log("Файл не надіслано");
        return res.status(400).json({ message: "Файл не надіслано" });
      }

      const cleanFileName = sanitizeFileName(
        file.originalFilename || file.newFilename
      );
      const filePath = path.join(
        process.cwd(),
        "public",
        "static",
        "3dmodels",
        cleanFileName
      );

      try {
        fs.renameSync(file.filepath, filePath);

        res.status(200).json({
          message: "Файл успішно завантажено",
          path: `/static/3dmodels/${cleanFileName}`,
        });
      } catch (error) {
        console.error("Помилка при збереженні файлу:", error);
        res
          .status(500)
          .json({ message: "Помилка при збереженні файлу", error });
      }
    });
  } catch (error) {
    console.error("Помилка під час створення форми:", error);
    res.status(500).json({ message: "Помилка під час створення форми", error });
  }
}
