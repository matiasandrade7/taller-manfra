import type { MetadataRoute } from "next";

const SITE_URL = "https://tallermanfra.uy";
const paths = ["", "about", "services", "portfolio", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${SITE_URL}/${path}` }));
}
