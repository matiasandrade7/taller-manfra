import type { NextConfig } from "next";

// URLs of the old PHP site that must keep working (search engines, shared links).
const legacyPages = [
  "about", "services", "portfolio", "contact",
  "accidente_mal_funcionamiento", "menu_e_don", "menu_e_shang",
  "recarga", "recarga_e_don", "recarga_e_shang",
  "remolcado", "remolcar_e_don", "remolcar_e_shang",
  "tablero", "tablero_e_don", "tablero_e_shang",
  "zona_inundada", "zona_inundada_e_don", "zona_inundada_e_shang",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      // The blog was removed in the migration.
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog.php", destination: "/", permanent: true },
      { source: "/publicacion", destination: "/", permanent: true },
      { source: "/publicacion.php", destination: "/", permanent: true },
      ...legacyPages.map((page) => ({
        source: `/${page}.php`,
        destination: `/${page}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
