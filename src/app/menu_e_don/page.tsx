import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Uso del Menú de diagnóstico de nuestro vehículo e-Don",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">
                      <h1>Uso del Menú de diagnóstico de nuestro vehículo e-Don</h1>
                      <h2></h2>
                  </div>
              </section>
        

        
              <section id="blog" className="blog" style={{paddingTop: "0px"}}>
                  <div className="container" data-aos="fade-up">

                      <div className="row">

                          <div className="col-lg-8 entries">

                              <article className="entry entry-single">
                                  <div className="video-responsive">
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/0u6WuAh63LE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                  </div>
                                  <div className="entry-content">
                                      <p>
                                          Para tener un mayor conocimiento del estado actual del vehículo, debemos ingresar al Menú de diagnóstico ubicado en la pantalla del tablero de instrumentos.
                                      </p>
                                      <p>
                                          Para acceder a este, debemos presionar el interruptor que encontramos en la esquina inferior derecha.
                                      </p>
                                      <p>
                                          Aquí veremos la información del sistema del vehículo. En la columna de la izquierda se muestran todos los valores reales del vehículo, como ser la temperatura del motor, 
                                          temperatura módulo motor, voltaje batería de Ion Litio y voltaje de la batería de ciclo corto. La tensión de esta última batería no puede ser menor a 21 Volts, ni mayor a 30 Volts.
                                      </p>
                                      <p>
                                          En la columna de la derecha veremos la representación de todos los códigos de fallo de todos los módulos principales.
                                      </p>
                                      <p>
                                          Para visualizar los siguientes menús podemos presionar nuevamente el interruptor. De esta manera veremos el menú del Sistema de monitoreo de baterías de Ion Litio, la Información de versión 
                                          de programas y por último la Información del sistema de módulo motor.
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
                                          <img src="/img/tablero_e-don.jpg" alt="e-Don" />
                                          <h4><a href="/tablero_e_don">Uso del tablero de instrumentos</a></h4>
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
