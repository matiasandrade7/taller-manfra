import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Taller Manfra - Servicios",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell active="servicios" topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">

                      <ol>
                          <li><a href="/">Inicio</a></li>
                          <li>Servicios</li>
                      </ol>
                      <h2>Servicios</h2>

                  </div>
              </section>
        

              <section id="services" className="services">
                  <div className="container">

                      <div className="section-title">
                          <h2>Servicios</h2>
                          <p>Contamos con una amplia gama de servicios para que su vehículo se mantenga de la mejor manera y responda a todas sus necesidades.</p>
                      </div>

                      <div className="row">
                          <div className="col-lg-4 col-md-6 mt-4">
                              <div className="card-img-top" style={{backgroundImage: "url(/assets/img/Imagenes/camion3.jpg)", backgroundSize: "cover", maxHeight: "25vh", height: "25vh", borderRadius: "10px 10px 0 0"}}>
                              </div>
                              <div className="icon-box">
                                  <div className="icon"><i className="bi bi-tools" style={{color: "#000000"}}></i></div>
                                  <h4 className="title"><a href="">Soluciones electromecánicas</a></h4>
                                  <p className="description">Brindamos soluciones a sus problemas electromecánicos. Contamos con conocimiento técnico y equipamiento adecuado para solucionar sus problemas en esta área. Además es importante mantener al día las revisiones periódicas del
                                      vehículo, para así poder detectar posibles averías y adelantarnos a importantes gastos de reparación. En nuestro taller te ayudamos a mantener tu vehículo siempre a punto.
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mt-4">
                              <div className="card-img-top" style={{backgroundImage: "url(/assets/img/Imagenes/diagnostico5.jpg)", backgroundSize: "cover", maxHeight: "25vh", height: "25vh", borderRadius: "10px 10px 0 0"}}>
                              </div>
                              <div className="icon-box">
                                  <div className="icon"><i className="bi bi-clipboard-check" style={{color: "#000000"}}></i></div>
                                  <h4 className="title"><a href="">Diagnóstico</a></h4>
                                  <p className="description">Realizamos diagnósticos tanto generales como específicos a su vehículo, consiguiendo alargar su vida útil, chequeando los principales puntos de seguridad y funcionamiento del mismo. Evaluamos todos los fallos basados en estrategias
                                      de diagnóstico, utilizando herramientas de escaneo fiables que nos permitan visualizar el verdadero estado del vehículo.
                                  </p>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 mt-4">
                              <div className="card-img-top" style={{backgroundImage: "url(/assets/img/Imagenes/taller5.jpg)", backgroundSize: "cover", maxHeight: "25vh", height: "25vh", borderRadius: "10px 10px 0 0"}}>
                              </div>
                              <div className="icon-box">
                                  <div className="icon"><i className="bi bi-truck-flatbed" style={{color: "#000000"}}></i></div>
                                  <h4 className="title"><a href="">Auxilio mecánico</a></h4>
                                  <p className="description">Acudimos a la ubicación de la unidad de transporte fallada y le proveemos operaciones de reparación para que puedas continuar transitando a destino con una solución garantizada.
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mt-4">
                              <div className="card-img-top" style={{backgroundImage: "url(/assets/img/diagnostico3.jpg)", backgroundSize: "cover", maxHeight: "25vh", height: "25vh", borderRadius: "10px 10px 0 0"}}>
                              </div>
                              <div className="icon-box">
                                  <div className="icon"><i className="bi bi-battery-charging" style={{color: "#000000"}}></i></div>
                                  <h4 className="title"><a href="">Reparación de vehículos eléctricos</a></h4>
                                  <p className="description">Somos especialistas en el diagnóstico y resolución de averías eléctricas. Nuestro equipo de diagnóstico nos permite identificar los problemas y rectificarlos de manera rápida y profesional. Nuestro test de diagnosis electrónica
                                      verifica que su vehículo se encuentre en perfectas condiciones de uso.</p>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 mt-4">
                              <div className="card-img-top" style={{backgroundImage: "url(/assets/img/Imagenes/taller4.jpg)", backgroundSize: "cover", maxHeight: "25vh", height: "25vh", borderRadius: "10px 10px 0 0"}}>
                              </div>
                              <div className="icon-box">
                                  <div className="icon"><i className="bi bi-disc" style={{color: "#000000"}}></i></div>
                                  <h4 className="title"><a href="">Gomería</a></h4>
                                  <p className="description">Contamos con tolas las herramientas y la experiencia para realizar trabajos de reparación y cambio de sus cubiertas de manera eficiente y eficáz.</p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6 mt-4">
                              <div className="card-img-top" style={{backgroundImage: "url(/assets/img/Imagenes/herramientas.jpg)", backgroundSize: "cover", maxHeight: "25vh", height: "25vh", borderRadius: "10px 10px 0 0", backgroundPosition: "bottom"}}>
                              </div>
                              <div className="icon-box">
                                  <div className="icon"><i className="bi bi-align-middle" style={{color: "#000000"}}></i></div>
                                  <h4 className="title"><a href="">Alineación</a></h4>
                                  <p className="description">Realizamos el mejor servicio de alineación para que todos los elementos de la suspensión y del sistema de dirección funcionen de manera correcta, logrando que su vehículo se desplace suavemente, mantenga el agarre, buena estabilidad
                                      en rectas o curvas, y las llantas tengas máxima duración.</p>
                              </div>
                          </div>
                      </div>

                  </div>
              </section>
        

          </main>
    </Shell>
  );
}
