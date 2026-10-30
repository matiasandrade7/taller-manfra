import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Procedimiento previo a remolcar nuestro vehículo e-Don",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">
                      <h1>Procedimiento previo a remolcar nuestro vehículo e-Don</h1>
                      <h2>Pasos a tener en cuenta</h2>
                  </div>
              </section>
        

        
              <section id="blog" className="blog" style={{paddingTop: "0px"}}>
                  <div className="container" data-aos="fade-up">

                      <div className="row">

                          <div className="col-lg-8 entries">

                              <article className="entry entry-single">
                                  <div className="video-responsive">
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/pifKvZpH_Fs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                  </div>
                                  <div className="entry-content">
                                      <p>
                                      En caso de necesitar remolcar nuestro vehículo, es necesario tener en cuenta ciertas precauciones y realizar el siguiente procedimiento.
                                      </p>
                                      <p>
                                      En primer lugar, volcaremos la cabina del vehículo. Esto nos permitirá visualizar el módulo 4 en 1.
                                      </p>
                                      <p>
                                      El segundo paso consiste en desmontar el fusible que cumple la función de desacoplar el circuito de alta tensión de los componentes principales.
                                      </p>
                                      <p>
                                      Realizados estos pasos podremos iniciar el procedimiento normal para remolcar nuestro vehículo.
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
                                          <img src="/img/menu_diagnostico_e-don.jpg" alt="e-Don" />
                                          <h4><a href="/menu_e_don">Uso del menú de diagnóstico</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/img/tablero_e-don.jpg" alt="e-Don" />
                                          <h4><a href="/tablero_e_don">Uso del tablero de instrumentos</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/img/recarga_e-don.jpg" alt="e-Don" />
                                          <h4><a href="/recarga_e_don">Recarga de nuestro vehículo e-Don</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/img/zona_inundada_e-don.jpg" alt="e-Don" />
                                          <h4><a href="/zona_inundada_e_don">Uso del vehículo en zonas inundadas</a></h4>
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
