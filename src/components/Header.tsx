export type NavKey = "inicio" | "nosotros" | "servicios" | "trabajos" | "contacto";

const NAV: { key: NavKey; href: string; label: string }[] = [
  { key: "inicio", href: "/", label: "Inicio" },
  { key: "nosotros", href: "/about", label: "Nosotros" },
  { key: "servicios", href: "/services", label: "Servicios" },
  { key: "trabajos", href: "/portfolio", label: "Trabajos" },
  { key: "contacto", href: "/contact", label: "Contacto" },
];

// Plain <a> links on purpose: main.js binds to the DOM on load, as it did on the PHP site.
export function Header({ active }: { active?: NavKey }) {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <a href="/">
            <img src="/assets/img/logo_manfra.png" alt="logo manfra" className="img-fluid" />
          </a>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            {NAV.map((item) => (
              <li key={item.key}>
                <a className={item.key === active ? "active" : undefined} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
}
