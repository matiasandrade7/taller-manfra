import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Imprevisto con el vehículo, accidente o mal funcionamiento",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">
                      <h1>Caso de emergencia</h1>
                      <h2>Imprevisto con el vehículo, accidente o mal funcionamiento</h2>
                  </div>
              </section>
        

        
              <section id="blog" className="blog" style={{paddingTop: "0px"}}>
                  <div className="container" data-aos="fade-up">

                      <div className="row">

                          <div className="col-lg-8 entries">

                              <article className="entry entry-single">
                                  <div className="video-responsive">
                                      <iframe src="https://www.youtube.com/embed/vSWZChm4R7s?start=1" frameBorder="0" allowFullScreen></iframe>
                                  </div>
                                  <div className="entry-content">
                                      <p>
                                          En caso de tener un imprevisto con el vehículo, accidente o mal funcionamiento
                                          debemos realizar el siguiente procedimiento.
                                      </p>
                                      <p>
                                          Primero, se debe desconectar el conector de 12 volts ubicado en el lado derecho
                                          del vehículo, detrás de la toma del cargador y posteriormente se debe
                                          desconectar el fusible de alta tensión ubicado debajo del asiento del
                                          acompañante.
                                      </p>
                                      <p>
                                          Este fusible corta el suministro de corriente desde la batería de litio hacia
                                          los sistemas de alimentación de los motores auxiliares.
                                      </p>
                                      <p>
                                          Recordemos que una vez que desconecta la llave de contacto, el pasaje de
                                          corriente es eliminado. La desconexión del fusible es solamente por prevención.
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
                                          <h4><a href="/recarga">Procedimiento de carga del vehículo</a></h4>
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
