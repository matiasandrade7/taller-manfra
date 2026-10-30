import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Uso del tablero de instrumentos de nuestro vehículo e-Don",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">
                      <h1>Uso del tablero de instrumentos de nuestro vehículo e-Don</h1>
                      <h2></h2>
                  </div>
              </section>
        

        
              <section id="blog" className="blog" style={{paddingTop: "0px"}}>
                  <div className="container" data-aos="fade-up">

                      <div className="row">

                          <div className="col-lg-8 entries">

                              <article className="entry entry-single">
                                  <div className="video-responsive">
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/qZYWnSJ-nVY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                  </div>
                                  <div className="entry-content">
                                      <p>
                                          Ahora conoceremos la información que nos muestra el tablero de instrumentos.
                                          En la esquina superior izquierda podemos observar el porcentaje de SOC o Estado de carga.
                                      </p>
                                      <p>
                                          A ambos lados del velocímetro tenemos la presión neumática. El circuito uno se encuentra en el lado izquierdo y el circuito dos en el lado derecho. 
                                          El vehículo puede circular a partir de una presión neumática por arriba de los 6 bares para su funcionamiento normal.
                                      </p>
                                      <p>
                                          En la esquina inferior izquierda se muestra el kilometraje parcial y los kilómetros totales del vehículo.
                                      </p>
                                      <p>
                                          En la columna de la derecha veremos la representación de todos los códigos de fallo de todos los módulos principales.
                                      </p>
                                      <p>
                                      En la esquina inferior derecha se muestra la autonomía actual del vehículo y debajo podemos encontrar la carga total en Volts
                                       de la batería Ion Litio y la carga en Amperes de lo que está consumiendo el vehículo al momento de la operación.
                                      </p>
                                      <p>
                                          La pantalla de instrumentos de este vehículo no muestra valores de temperatura. Es necesario ingresar al menú de diagnóstico para poder visualizarlos.
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
                                          <img src="/img/zona_inundada_e-don.jpg" alt="e-Don" />
                                          <h4><a href="/zona_inundada_e_don">Recomendación de uso del vehículo e-Don en zonas inundadas</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/img/menu_diagnostico_e-don.jpg" alt="e-Don" />
                                          <h4><a href="/menu_e_don">Uso del Menú de diagnóstico de nuestro vehículo e-Don</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/img/remolcar_e-don.jpg" alt="e-Don" />
                                          <h4><a href="/remolcar_e_don">Procedimiento previo a remolcar nuestro vehículo e-Don</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/img/recarga_e-don.jpg" alt="e-Don" />
                                          <h4><a href="/recarga_e_don">Recarga de nuestro vehículo e-Don</a></h4>
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
