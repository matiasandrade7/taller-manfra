import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Taller Manfra - Trabajos",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedes benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell active="trabajos" topbar="alt" footer="map-alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">

                      <ol>
                          <li><a href="/">Home</a></li>
                          <li>Trabajos</li>
                      </ol>
                      <h2>Trabajos</h2>

                  </div>
              </section>
        

        
              <section id="portfolio" className="portfolio">
                  <div className="container">
                      <div className="section-title">
                          <h2>Nuestros trabajos</h2>
                          <p>Conocé nuestros últimos trabajos.</p>
                      </div>
                

                      <div className="row portfolio-container">

                          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                              <div className="portfolio-wrap">
                                  <img src="/assets/img/portfolio/bus_alineacion.jpg" className="img-fluid" alt="bus alineacion" />
                                  <div className="portfolio-info">
                                      <h4>Alineación Ómnibus</h4>
                                      <p>Alineación de Ómnibus</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/bus_alineacion.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Alineación de Ómnibus"><i className="bx bx-plus"></i></a>
                                    
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                              <div className="portfolio-wrap">
                                  <img src="/assets/img/portfolio/camionActros.jpg" className="img-fluid" alt="camion Actros" />
                                  <div className="portfolio-info">
                                      <h4>Puesta a punto</h4>
                                      <p>Puesta a punto</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/camionActros.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Puesta a punto"><i className="bx bx-plus"></i></a>
                                    
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                              <div className="portfolio-wrap">
                                  <img src="/assets/img/portfolio/diagnosticoActros.jpg" className="img-fluid" alt="" />
                                  <div className="portfolio-info">
                                      <h4>Diagnóstico de camión Actros</h4>
                                      <p>Diagnóstico de camión Actros</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/diagnosticoActros.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Diagnóstico de camión Actros"><i className="bx bx-plus"></i></a>
                                    
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                              <div className="portfolio-wrap">
                                  <img src="/assets/img/portfolio/AMBULANCIA_manfra.jpg" className="img-fluid" alt="" />
                                  <div className="portfolio-info">
                                      <h4>Diagnóstico de SPRINTER, modelo 907 (415)</h4>
                                      <p>Se realizó el diagnóstico del vehículo, asegurándonos que el mismo se encuentre en óptimas condiciones.</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/AMBULANCIA_manfra.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Diagnóstico de SPRINTER, modelo 907 (415)"><i className="bx bx-plus"></i></a>
                                    
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                              <div className="portfolio-wrap">
                                  <img src="/assets/img/portfolio/ajuste_manfra.jpg" className="img-fluid" alt="" />
                                  <div className="portfolio-info">
                                      <h4>Trabajo de ajuste lineal de diferencial</h4>
                                      <p>Se realizó alineación del diferencial, esta es una operación de bastante responsabilidad, que aparte de los necesarios conocimientos requiere para su realización numerosas herramientas especiales.</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/ajuste_manfra.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Trabajo de ajuste lineal de diferencial"><i className="bx bx-plus"></i></a>
                                    
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                              <div className="portfolio-wrap">
                                  <img src="/assets/img/portfolio/Skiwell_manfra.jpg" className="img-fluid" alt="" />
                                  <div className="portfolio-info">
                                      <h4>Servicio para Skiwell ET5, vehículo SUV 100% eléctrico</h4>
                                      <p>Se le realizó un diagnóstico y posterior service del vehículo Skiwell ET5.</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/Skiwell_manfra.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Servicio para Skiwell ET5"><i className="bx bx-plus"></i></a>
                                    
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                              <div className="portfolio-wrap">
                                  <img src="/assets/img/portfolio/pintura_manfra.jpg" className="img-fluid" alt="" />
                                  <div className="portfolio-info">
                                      <h4>Trabajo de chapa y pintura en camión JMC</h4>
                                      <p>Se realizaron trabajos de restauración de chapa y pintura de este utilitario JMC.</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/pintura_manfra.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Trabajo de chapa y pintura en camión JMC"><i className="bx bx-plus"></i></a>
                                    
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                              <div className="portfolio-wrap">
                              <div className="portfolio-links" >
                              <img src="/assets/img/portfolio/modulosElectricos.jpg" className="img-fluid" alt="" />
                                  <div className="portfolio-info">
                                      <h4>Programación de módulos de vehículo eléctrico</h4>
                                      <p>Se realizó el diagnóstico de los módulos de este vehículo eléctrico con herramientas específicas, que nos permitieron detectar y solucionar el inconveniente.</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/modulosElectricos.mp4" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Programación de módulos de vehículo eléctrico"><i className="bx bx-plus"></i></a>
                                    
                                      </div>
                                  </div>
                              </div>
                          </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                              <div className="portfolio-wrap">
                                  <img src="/assets/img/portfolio/transporte_polka.jpg" className="img-fluid" alt="" />
                                  <div className="portfolio-info">
                                      <h4>Control de sistema eléctrico de inyección</h4>
                                      <p>Se realizó Control de sistema eléctrico de inyección.</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/transporte_polka.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Control de sistema eléctrico de inyección"><i className="bx bx-plus"></i></a>
                                    
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                              <div className="portfolio-wrap">
                                  <img src="/assets/img/portfolio/Actros-ExpresoTodo.jpg" className="img-fluid" alt="" />
                                  <div className="portfolio-info">
                                      <h4>Servicio Mercedes Benz Atego</h4>
                                      <p>Se realizó ajuste de motor S900 MB de este Mercedes Benz Atego.</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/Actros-ExpresoTodo.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Control de sistema eléctrico de inyección"><i className="bx bx-plus"></i></a>
                                    
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
