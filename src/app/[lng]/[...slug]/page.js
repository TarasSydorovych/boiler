import Link from "next/link";
import NotFoundF from "../../components/404/notFoundF";
export default function DynamicPage({ params }) {
  const knownRoutes = [
    "blog",
    "contact",
    "chystka-boileriv",
    "kupyty-bojlery",
    "remont-pralok",
    "remont-vodonahrivachiv",
    "service",
    "servis-boyleriv",
    "sitemap",
    "ustanovka-bojlera",
    "ustanovka-santekhniki",
  ];

  const slug = params.slug?.[0];
  const lng = params.lng;

  const isValid = slug && knownRoutes.includes(slug);

  if (!isValid) {
    return <NotFoundF />;
  }

  return <NotFoundF />;
}
