import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Recomendación de uso del vehículo e-Shang en zonas inundadas",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">
                      <h1>Uso del vehículo e-Shang en zonas inundadas</h1>
                      <h2>Recomendaciones a tener en cuenta</h2>
                  </div>
              </section>
        

        
              <section id="blog" className="blog" style={{paddingTop: "0px"}}>
                  <div className="container" data-aos="fade-up">

                      <div className="row">

                          <div className="col-lg-8 entries">

                              <article className="entry entry-single">
                                  <div className="video-responsive">
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/lMGqVd9PyBo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                  </div>
                                  <div className="entry-content">
                                      <p>
                                      En caso de circular por una zona inundada, debemos tener en cuenta ciertas limitaciones a la hora de utilizar el vehículo, ya que los principales componentes de alto voltaje se encuentran 
                                      ubicados a una altura determinada.
                                      </p>
                                      <p>
                                      Esta altura es la indicada con la línea azul y es la máxima que el agua puede cubrir las ruedas del vehículo. Debemos tener la precaución de no circular bajo estas condiciones por un período 
                                      de tiempo mayor a 10 minutos y a una velocidad que no supere los 5 km/h.
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
                                          <img src="/img/menu_diagnostico_e-shang.jpg" alt="e-Shang" />
                                          <h4><a href="/menu_e_shang">Uso del menú de diagnóstico</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/img/tablero_e-shang.jpg" alt="e-Shang" />
                                          <h4><a href="/tablero_e_shang">Uso del tablero de instrumentos</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/img/remolcar_e-shang.jpg" alt="e-Shang" />
                                          <h4><a href="/remolcar_e_shang">Procedimiento previo a remolcar nuestro vehículo e-Shang</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/img/recarga_e-shang.jpg" alt="e-Shang" />
                                          <h4><a href="/recarga_e_shang">Recarga de nuestro vehículo e-Shang</a></h4>
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
