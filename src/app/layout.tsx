import type { Metadata } from "next";

const SITE_URL = "https://tallermanfra.uy";
const DESCRIPTION =
  "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Taller Manfra - Especialistas en vehículos comerciales",
  description: DESCRIPTION,
  icons: { icon: "/assets/img/favicon.png", apple: "/assets/img/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Taller Manfra - Especialistas en vehículos comerciales",
    title: "Taller Manfra - Especialistas en vehículos comerciales",
    description: DESCRIPTION,
    images: ["/assets/img/banner.png"],
  },
  twitter: {
    title: "Taller Manfra - Especialistas en vehículos comerciales",
    description: DESCRIPTION,
    images: ["/assets/img/banner.png"],
  },
};

// Same CSS stack as the original site, in the same order.
const stylesheets = [
  "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i",
  "/assets/vendor/animate.css/animate.min.css",
  "/assets/vendor/bootstrap/css/bootstrap.min.css",
  "/assets/vendor/bootstrap-icons/bootstrap-icons.css",
  "/assets/vendor/boxicons/css/boxicons.min.css",
  "/assets/vendor/glightbox/css/glightbox.min.css",
  "/assets/vendor/swiper/swiper-bundle.min.css",
];

// Same script order as the original: main.js expects Swiper, Isotope, GLightbox and Waypoint globals.
const scripts = [
  "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
  "/assets/vendor/glightbox/js/glightbox.min.js",
  "/assets/vendor/isotope-layout/isotope.pkgd.min.js",
  "/assets/vendor/php-email-form/validate.js",
  "/assets/vendor/purecounter/purecounter.js",
  "/assets/vendor/swiper/swiper-bundle.min.js",
  "/assets/vendor/waypoints/noframework.waypoints.js",
  "/assets/js/main.js",
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {stylesheets.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        {children}
        {scripts.map((src) => (
          <script key={src} src={src} />
        ))}
      </body>
    </html>
  );
}
