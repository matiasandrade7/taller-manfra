import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Zona inundada",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">
                      <h1>Zona inundada</h1>
                      <h2>Recomendación en caso de circular en zona inundada</h2>
                  </div>
              </section>
        

        
              <section id="blog" className="blog" style={{paddingTop: "0px"}}>
                  <div className="container" data-aos="fade-up">

                      <div className="row">

                          <div className="col-lg-8 entries">

                              <article className="entry entry-single">
                                  <div className="video-responsive">
                                      <iframe src="https://www.youtube.com/embed/Qp6H4-HesiU?start=1" frameBorder="0" allowFullScreen></iframe>
                                  </div>
                                  <div className="entry-content">
                                      <p>
                                          Cuando nos encontramos con una calle inundada debemos tener en claro el nivel
                                          máximo para poder circular. En el video lo indicamos con una línea azul.
                                      </p>
                                      <p>
                                          No debemos superar la velocidad de 5 kilómetros por hora y el tiempo no podrá
                                          exceder los 10 minutos.
                                      </p>
                                      <p>
                                          De esta manera lograremos prevenir fallos internos de los sistemas de
                                          funcionamiento.
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
