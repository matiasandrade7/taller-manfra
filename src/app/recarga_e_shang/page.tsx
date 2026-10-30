import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Recarga de nuestro vehículo e-Shang",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">
                      <h1>Recarga de nuestro vehículo e-Shang</h1>
                      <h2>Pasos a tener en cuenta</h2>
                  </div>
              </section>
        

        
              <section id="blog" className="blog" style={{paddingTop: "0px"}}>
                  <div className="container" data-aos="fade-up">

                      <div className="row">

                          <div className="col-lg-8 entries">

                              <article className="entry entry-single">
                                  <div className="video-responsive">
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/VXxm5ThZTSI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                  </div>
                                  <div className="entry-content">
                                      <p>
                                      A la hora de recargar las baterías de nuestra unidad. Debemos realizar un correcto procedimiento, que sea seguro y eficiente para nuestro vehículo.
                                      </p>
                                      <p>
                                      El primer paso será desconectar el encendido y colocar el freno de mano, para luego poder abrir el toma de carga y conectar la manguera de carga.
                                      </p>
                                      <p>
                                      Es importante tener en cuenta que una vez el SOC llega al 100% de la carga, se debe de retirar la manga de carga. De lo contrario, el sistema de 
                                      bajo voltaje quedará activo, produciendo un consumo innecesario en el circuito de 24 Volt.
                                      </p>
                                      <p>
                                      Aquí podemos ver lo que nos muestra la pantalla del vehículo al momento de la carga y el porcentaje de carga actual o SOC.
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
                                          <img src="/img/zona_inundada_e-shang.jpg" alt="e-Shang" />
                                          <h4><a href="/zona_inundada_e_shang">Uso del vehículo en zonas inundadas</a></h4>
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
