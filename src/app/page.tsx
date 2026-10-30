import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Taller Manfra - Especialistas en vehículos comerciales",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell active="inicio" topbar="alt" footer="map-alt">
      <section id="hero">
              <div className="hero-container">
                  <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                      <ol className="carousel-indicators" id="hero-carousel-indicators">
                          {[0, 1, 2].map((i) => (
                              <li key={i} data-bs-target="#heroCarousel" data-bs-slide-to={i} className={i === 0 ? "active" : undefined}></li>
                          ))}
                      </ol>

                      <div className="carousel-inner" role="listbox">

                    
                          <div className="carousel-item active" style={{background: "url(/assets/img/slide/taller3.jpg)", backgroundSize: "cover", backgroundPosition: "right"}}>
                              <div className="carousel-container">
                                  <div className="carousel-content">
                                      <h2 className="animate__animated animate__fadeInDown">Taller <span>Manfra</span></h2>
                                      <h3>Especialistas en vehículos comerciales</h3>
                                  </div>
                              </div>
                          </div>

                    
                          <div className="carousel-item" style={{background: "url(/assets/img/slide/camio_hor.jpg)", backgroundSize: "cover", backgroundPosition: "right"}}>
                              <div className="carousel-container">
                                  <div className="carousel-content">
                                      <h2 className="animate__animated fanimate__adeInDown">Soluciones
                                          <span>Electromecánicas</span>
                                      </h2>
                                      <h3>Contamos con conocimiento técnico y equipamiento adecuado para solucionar sus problemas
                                      </h3>
                                      <a href="/services" className="btn-get-started animate__animated animate__fadeInUp">Ver
                                          más</a>
                                  </div>
                              </div>
                          </div>

                    
                          <div className="carousel-item" style={{background: "url(/assets/img/slide/diagnostico3.jpg)", backgroundSize: "cover", backgroundPosition: "right"}}>
                              <div className="carousel-container">
                                  <div className="carousel-content">
                                      <h2 className="animate__animated animate__fadeInDown">Especializados en
                                          <span>Diagnóstico</span>
                                      </h2>
                                      <h3>Realizamos diagnósticos tanto generales como específicos a su vehículo</h3>
                                      <a href="/services" className="btn-get-started animate__animated animate__fadeInUp">Ver
                                          más</a>
                                  </div>
                              </div>
                          </div>

                      </div>

                      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                      </a>

                      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                      </a>

                  </div>
              </div>
          </section>
      <main id="main">

        
              <section id="featured" className="featured">
                  <div className="container">

                      <div className="row">
                          <div className="col-lg-4 mt-lg-0">
                              <div className="icon-box  shadow-lg">
                                  <i className="bi bi-tools"></i>
                                  <h3><a href="/services">Soluciones electromecánicas</a></h3>
                                  <p>Brindamos soluciones a sus problemas electromecánicos. Contamos con conocimiento técnico y equipamiento adecuado para solucionar sus problemas en esta área. Además es importante mantener al día las revisiones periódicas del
                                      vehículo, para así poder detectar posibles averías y adelantarnos a importantes gastos de reparación. En nuestro taller</p>
                              </div>
                          </div>
                          <div className="col-lg-4 mt-4 mt-lg-0">
                              <div className="icon-box  shadow-lg">
                                  <i className="bi bi-card-checklist"></i>
                                  <h3><a href="/services">Diagnóstico</a></h3>
                                  <p>Realizamos diagnósticos tanto generales como específicos a su vehículo, consiguiendo alargar su vida útil, chequeando los principales puntos de seguridad y funcionamiento del mismo. Evaluamos todos los fallos basados en estrategias
                                      de diagnóstico, utilizando herramientas de escaneo fiables que nos permitan visualizar el verdadero estado del vehículo.</p>
                              </div>
                          </div>
                          <div className="col-lg-4 mt-4 mt-lg-0">
                              <div className="icon-box  shadow-lg">
                                  <i className="bi bi-truck-flatbed"></i>
                                  <h3><a href="/services">Auxilio mecánico</a></h3>
                                  <p>Acudimos a la ubicación de la unidad de transporte fallada y le proveemos operaciones de reparación para que puedas continuar transitando a destino con una solución garantizada.
                                  </p>
                              </div>
                          </div>
                          <div className="col-md-12 col-md-12" style={{textAlign: "center"}}>
                              <a href="/services" className=" btn-get-started animate__animated animate__fadeInUp">Ver
                                  más</a>
                          </div>
                      </div>

                  </div>
              </section>
        

        
              <section id="about" className="about">
                  <div className="container">

                      <div className="row">
                          <div className="section-title">
                              <h2>Sobre nuestro taller</h2>
                          </div>
                          <div className="col-md-6 imgNosotros">
                          </div>
                          <div className="col-md-6">
                              <div className="descripcion">
                                  <p className="fst-italic">
                                      Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales. Contamos con un equipo de gran experiencia y formación
                                      en el área, que trabaja codo a codo para ofrecer un trato cercano y profesional a nuestros clientes, brindando soluciones efectivas y eficaces. Queremos que nuestros clientes gocen de sus vehículos en las mejores condiciones,
                                      tanto en seguridad como en calidad y prestaciones.
                                  </p>
                                  <ul>
                                      <li><i className="bi bi-check-circle"></i> Contamos con la experiencia necesaria para solucionar problemas complejos y aconsejar a nuestros clientes, logrando que su vehículo se mantenga en las mejores condiciones.</li>
                                      <li><i className="bi bi-check-circle"></i> Nuestra experiencia y conocimiento nos respalda a la hora de garantizar nuestro trabajo.</li>
                                      <li><i className="bi bi-check-circle"></i> Brindamos seguridad en cada trabajo y diagnóstico realizado.
                                      </li>
                                      <li><i className="bi bi-check-circle"></i> Su vehículo al salir de nuestro taller tiene la seguridad y garantía de circular sin problemas mecánicos ni eléctricos.</li>
                                  </ul>

                                  <div className="col-md-12 col-md-12" style={{textAlign: "center"}}>
                                      <a href="/about" className=" btn-get-started animate__animated animate__fadeInUp mb-2">Ver
                                          más</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
        


        


        
              <section id="cta" className="cta">
                  <div className="ctaImg"></div>
                  <div className="container">

                      <div className="text-center">
                          <h3>Contáctese con nosotros</h3>
                          <p> Contamos con todas las herramientas y personal calificado para solucionar sus problemas vehiculares y prevenir futuros.</p>
                          <a className="cta-btn" href="/contact">Contacto</a>
                      </div>

                  </div>
              </section>
        

        
              <section id="portfolio" className="portfolio">
                  <div className="container">
                      <div className="section-title">
                          <h2>Algunos de nuestros trabajos</h2>
                          <p>Conocé nuestras última publicaciones.</p>
                      </div>

                      <div className="row portfolio-container">

                          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                              <div className="portfolio-wrap">
                                  <img src="/assets/img/portfolio/bus_alineacion.jpg" className="img-fluid" alt="Alineación ómnibus" />
                                  <div className="portfolio-info">
                                      <h4>Alineación Ómnibus</h4>
                                      <p>Alineación de Ómnibus</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/bus_alineacion.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Alineación de Ómnibus"><i
                                                  className="bx bx-plus"></i></a>
                                    
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
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
                                  <img src="/assets/img/portfolio/diagnosticoActros.jpg" className="img-fluid" alt="diagnostico Actros" />
                                  <div className="portfolio-info">
                                      <h4>Diagnóstico de camión Actros</h4>
                                      <p>Diagnóstico de camión Actros</p>
                                      <div className="portfolio-links">
                                          <a href="/assets/img/portfolio/diagnosticoActros.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Diagnóstico de camión Actros"><i
                                                  className="bx bx-plus"></i></a>
                                    
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
                      <div className="col-md-12 col-md-12" style={{textAlign: "center"}}>
                          <a href="/portfolio" className=" btn-get-started animate__animated animate__fadeInUp">Ver
                              más</a>
                      </div>
                  </div>
                  </div>
              </section>
        

          </main>
      <JsonLd />
    </Shell>
  );
}
