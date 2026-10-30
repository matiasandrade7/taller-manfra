import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Uso del tablero de instrumentos",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">
                      <h1>Uso del tablero de instrumentos</h1>
                      <h2>Menú del sistema de información del
                          vehículo e-Tuyi
                      </h2>
                  </div>
              </section>
        

        
              <section id="blog" className="blog" style={{paddingTop: "0px"}}>
                  <div className="container" data-aos="fade-up">

                      <div className="row">

                          <div className="col-lg-8 entries">

                              <article className="entry entry-single">
                                  <div className="video-responsive">
                                      <iframe src="https://www.youtube.com/embed/PD1E6qNoJCU?start=1" frameBorder="0" allowFullScreen></iframe>
                                  </div>
                                  <div className="entry-content">
                                      <p>
                                          Para poder realizar diagnósticos o controles del vehículo nos ayudaremos del
                                          menú del sistema de información.
                                      </p>
                                      <p>
                                          Al iniciar contacto se visualizará la pantalla principal y para ingresar al menú
                                          de diagnóstico, debemos girar el interruptor, que se encuentra a la derecha del
                                          tablero.
                                      </p>
                                      <p>
                                          Dentro, encontraremos 8 categorías y para movernos entre ellas, debemos girar el
                                          interruptor antes mencionado en sentido horario para bajar y antihorario para
                                          subir.
                                      </p>
                                      <p>
                                          Para ingresar en una opción de menú, debemos girar el interruptor hasta
                                          posicionarnos en la opción de menú deseada y presionar para acceder.
                                      </p>
                                      <p>
                                          Dentro de cada opción, se mostrará información del estado de los distintos
                                          sistemas.
                                      </p>
                                      <p>
                                          Para salir del menú debemos girar el interruptor hasta posicionarnos en exit y
                                          presionar para volver a la pantalla principal.
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
                                          <h4><a href="/zona_inundada">Recomendación en caso de circular en zona
                                                  inundada</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/assets/img/e-Tuyi.jpg" alt="e-tuyi" />
                                          <h4><a href="/remolcado">Procedimiento previo a remolcar el vehículo</a></h4>
                                      </div>

                                      <div className="post-item clearfix">
                                          <img src="/assets/img/e-Tuyi.jpg" alt="e-tuyi" />
                                          <h4><a href="/recarga">Procedimiento de carga del vehículo</a></h4>
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
