import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Taller Manfra - Nosotros",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell active="nosotros" topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">

                      <ol>
                          <li><a href="/">Inicio</a></li>
                          <li>Nosotros</li>
                      </ol>
                      <h2>Nosotros</h2>

                  </div>
              </section>
        

        
              <section id="about" className="about">
                  <div className="container">

                      <div className="row">
                          <div className="col-lg-6">
                              <img src="/assets/img/Imagenes/taller5.jpg" className="img-fluid shadow-lg border-radius-5" alt="imagen taller" style={{borderRadius: "10px"}} />
                          </div>
                          <div className="col-lg-6 pt-4 pt-lg-0 content">
                              <p className="fst-italic tamañoGrande">
                                  Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales. Contamos con un equipo de gran experiencia y formación
                                  en el área.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              <section id="about" className="about">
                  <div className="container">

                      <div className="row">

                          <div className="col-lg-6 pt-4 pt-lg-0 content">
                              <p className="fst-italic tamañoGrande">
                                  Trabajamos codo a codo para ofrecer un trato cercano y profesional a nuestros clientes, brindando soluciones efectivas y eficaces. Queremos que nuestros clientes gocen de sus vehículos en las mejores condiciones, tanto en seguridad como en calidad y prestaciones.
                              </p>
                          </div>
                          <div className="col-lg-6">
                              <img src="/assets/img/Imagenes/camion4.jpg" className="img-fluid shadow-lg border-radius-5" alt="" style={{borderRadius: "10px"}} />
                          </div>
                      </div>
                  </div>
              </section>

              <section id="about" className="about">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-6">
                              <img src="/assets/img/Imagenes/diagnostico4.jpg" className="img-fluid shadow-lg border-radius-5" alt="imagen diagnóstico" style={{borderRadius: "10px"}} />
                          </div>
                          <div className="col-lg-6 pt-4 pt-lg-0 content">
                              <p className="fst-italic tamañoGrande">Contamos con la experiencia necesaria para solucionar problemas complejos y aconsejar a nuestros clientes, logrando que su vehículo se mantenga en las mejores condiciones.</p>
                              <p className="fst-italic tamañoGrande">Nuestra experiencia y conocimiento nos respalda a la hora de garantizar nuestro trabajo.</p>
                              <p className="fst-italic tamañoGrande">Brindamos seguridad en cada trabajo y diagnóstico realizado. </p>
                              <p className="fst-italic tamañoGrande">Su vehículo al salir de nuestro taller tiene la seguridad y garantía de circular sin problemas mecánicos ni eléctricos.</p>

                          </div>
                      </div>
                  </div>
              </section>
        



          </main>
    </Shell>
  );
}
