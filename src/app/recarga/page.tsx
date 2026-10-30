import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Recarga de nuestro vehículo e-Tuyi",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">
                      <h1>Recarga de nuestro vehículo e-Tuyi</h1>
                      <h2>Pasos a tener en cuenta</h2>
                  </div>
              </section>
        

        
              <section id="blog" className="blog" style={{paddingTop: "0px"}}>
                  <div className="container" data-aos="fade-up">

                      <div className="row">

                          <div className="col-lg-8 entries">

                              <article className="entry entry-single">
                                  <div className="video-responsive">
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/uEDz2Xdx-Zg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                  </div>
                                  <div className="entry-content">
                                      <p>
                                      A la hora de recargar las baterías de nuestra unidad. Debemos realizar un correcto procedimiento, que sea seguro y eficiente para nuestro vehículo.
                                      </p>
                                      <p>
                                      El primer paso será desconectar el encendido y colocar el freno de mano, para luego poder abrir el toma de carga y conectar la manguera de carga.
                                      </p>
                                      <p>
                                      Cuando el SOC (Estado de carga) de la betería alcanza el 100%, debemos retirar la conexión del cargador al vehículo, de lo contrario el sistema de bajo 
                                      voltaje quedará activo y la intensidad de la batería descenderá abruptamente, provocando una sobre exigencia del módulo DCDC al tratar de igualar la 
                                      diferencia de potencial.
                                      </p>
                                  </div>
                              </article>

                        

                              <div className="blog-author d-flex align-items-center">
                                  <img src="/assets/img/Imagenes/andres.jpg" className="rounded-circle float-left" alt="andres taller" />
                                  <div>
                                      <h4>Andrés Lerena</h4>
                                      <p>
                                          Técnico Electromecanico de más de 20 años de oficio. Con una formación
                                          profesional en Global Trainig Mercedes-Benz, DTNA para el producto Freightliner
                                          y en cajas automáticas Allison y Voith Diwa. Representante en Uruguay como
                                          Asistente Técnico e instructor
                                          de capacitación para los servicios oficiales y usuarios de Mercedes-Benz /
                                          Freightliner
                                      </p>
                                  </div>
                              </div>
                        
                          </div>
                    

                          <div className="col-lg-4">

                              <div className="sidebar">


                                  <h3 className="sidebar-title">Otros videos</h3>
                                  <div className="sidebar-item recent-posts">
                                      <div className="post-item clearfix">
                                          <img src="/assets/img/e-Tuyi.jpg" alt="e-tuyi" />
                                          <h4><a href="/accidente_mal_funcionamiento">Procedimiento a
                                                  realizar en caso de tener un accidente o mal funcionamiento </a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/assets/img/e-Tuyi.jpg" alt="e-tuyi" />
                                          <h4><a href="/tablero">Uso del tablero de instrumentos</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/assets/img/e-Tuyi.jpg" alt="e-tuyi" />
                                          <h4><a href="/remolcado">Procedimiento previo a remolcar el vehículo</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/assets/img/e-Tuyi.jpg" alt="e-tuyi" />
                                          <h4><a href="/zona_inundada">Zona inundada</a></h4>
                                      </div>

                                  </div>
                            
                              </div>
                        

                          </div>
                    

                      </div>

                  </div>
              </section>
        

          </main>
    </Shell>
  );
}
