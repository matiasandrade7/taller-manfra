import { CONTACTS } from "./contact";

export type FooterVariant = "plain" | "map" | "map-alt";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13116.335172160765!2d-56.2126689!3d-34.7282822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf5c59b9914b7fa!2sTaller%20Manfra%20-%20Especialistas%20en%20veh%C3%ADculos%20comerciales!5e0!3m2!1ses-419!2suy!4v1621495795771!5m2!1ses-419!2suy";

export function Footer({ variant }: { variant: FooterVariant }) {
  const contact = variant === "map-alt" ? CONTACTS.alt : CONTACTS.main;
  return (
    <footer id="footer">
      {variant !== "plain" && (
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ">
                <iframe
                  className="mb-4 mb-lg-0"
                  src={MAP_SRC}
                  frameBorder="0"
                  style={{ border: 0, width: "100%", height: 300 }}
                  allowFullScreen
                />
              </div>
              <div className="col-lg-4 col-md-6 footer-contact">
                <h4>Contáctate con nosotros</h4>
                <p>
                  José Pedro Varela 643 y Dr. Francisco Soca <br /> Las Piedras - Canelones <br />
                  <br />
                  <strong>Teléfonos:</strong> {contact.footerPhones}
                  <br />
                  <strong>Email:</strong>
                  {contact.email}
                  <br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-info">
                <img src="/assets/img/apple-touch-icon.png" className="img-fluid" alt="Logo Taller Manfra" />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Taller Manfra</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
