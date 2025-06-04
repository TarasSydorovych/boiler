// // /app/api/upload/route.js
// import { writeFile } from "fs/promises";
// import path from "path";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export async function POST(req) {
//   const data = await req.formData();
//   const file = data.get("file");

//   if (!file) {
//     return new Response("No file uploaded", { status: 400 });
//   }

//   const buffer = Buffer.from(await file.arrayBuffer());
//   const uploadDir = path.join(process.cwd(), "public/uploads");
//   const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
//   const filePath = path.join(uploadDir, filename);

//   await writeFile(filePath, buffer);
//   return Response.json({ url: `/uploads/${filename}` });
// }
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }

  const form = formidable({
    uploadDir: path.join(process.cwd(), "/public/uploads"),
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Formidable error:", err);
      return res.status(500).json({ error: "File upload failed" });
    }

    const file = files.file;
    const filePath = file[0].filepath;
    const fileName = path.basename(filePath);
    const fileUrl = `/uploads/${fileName}`;

    return res.status(200).json({ url: fileUrl });
  });
}
