import { CONTACTS } from "./contact";

export type TopbarVariant = keyof typeof CONTACTS;

export function Topbar({ variant }: { variant: TopbarVariant }) {
  const contact = CONTACTS[variant];
  return (
    <section id="topbar" className="d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <span>{contact.email}</span>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span>{contact.topPhone}</span>
          </i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <p>
            <i className="bi bi-truck-flatbed" />
            Auxilio mecánico de 8 a 21 hs!!
          </p>
        </div>
      </div>
    </section>
  );
}
