const data = {
  "@context": "http://www.schema.org",
  "@type": "carworkshop",
  name: "Taller Manfra",
  url: "https://tallermanfra.uy",
  logo: "https://tallermanfra.uy/assets/img/favicon.png",
  image: "https://tallermanfra.uy/assets/img/banner.png",
  description:
    "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "José Pedro Varela 643",
    addressLocality: "Canelones",
    addressRegion: "Las Piedras",
    postalCode: "15900",
    addressCountry: "Uruguay",
  },
  geo: { "@type": "GeoCoordinates", latitude: "-34.7282822", longitude: "-56.2126689" },
  hasMap: "https://goo.gl/maps/nF6CQcJX1krGGhRw8",
  openingHours: "Mo, Tu, We, Th, Fr, Sa, Su 08:00-21:00",
  contactPoint: { "@type": "ContactPoint", contactType: "Telephone", telephone: "+598 099 561 224" },
};

export function JsonLd() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
