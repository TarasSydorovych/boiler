import fs from "fs";
import path from "path";
import { transliterate } from "../../utils/transliterate";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { productName } = req.body;

    const sitemapPath = path.resolve(process.cwd(), "public", "sitemap.xml");

    let sitemapContent = fs.readFileSync(sitemapPath, "utf8");

    const languages = ["ua", "en", "ru", "pl"];
    const urls = languages
      .map((lng) => {
        const transliteratedName = transliterate(productName[lng]);
        return `
        <url>
          <loc>https://zp-boyler.zp.ua/${lng}/product/${transliteratedName}</loc>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`;
      })
      .join("");

    sitemapContent = sitemapContent.replace("</urlset>", `${urls}</urlset>`);

    fs.writeFileSync(sitemapPath, sitemapContent, "utf8");

    res.status(200).json({ message: "Sitemap updated successfully" });
  } else {
    res.status(405).json({ message: "Only POST requests are allowed" });
  }
}
