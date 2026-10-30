import type { Metadata } from "next";
import { Shell } from "@/components/Shell";

export const metadata: Metadata = {
  title: "Taller Manfra - Contacto",
  description: "Somos una taller mecánico ubicado en el centro de la ciudad de las piedras, especializados en brindar soluciones a los problemas de operación, mantenimiento y reparación de vehículos comerciales.",
  keywords: "taller mecánico, elctromecánica, vehículos, respuestos, service, autos, camiones, mercedez benz, vehículos eléctricos",
};

export default function Page() {
  return (
    <Shell active="contacto" topbar="alt">
      <main id="main">

        
              <section id="breadcrumbs" className="breadcrumbs">
                  <div className="container">

                      <ol>
                          <li><a href="/">Inicio</a></li>
                          <li>Contacto</li>
                      </ol>
                      <h2>Contacto</h2>

                  </div>
              </section>
        

        
              <section id="contact" className="contact">
                  <div className="container">

                      <div className="row">
                          <div className="col-lg-6">
                              <div className="info-box mb-4">
                                  <i className="bx bx-map"></i>
                                  <h3>Dirección</h3>
                                  <p>José Pedro Varela 643 y Dr. Francisco Soca / Las Piedras - Canelones</p>
                              </div>
                          </div>

                          <div className="col-lg-3 col-md-6">
                              <div className="info-box  mb-4">
                                  <i className="bx bx-envelope"></i>
                                  <h3>Email</h3>
                                  <p>r.gonzalez@codeleste.uy</p>
                              </div>
                          </div>

                          <div className="col-lg-3 col-md-6">
                              <div className="info-box  mb-4">
                                  <i className="bx bx-phone-call"></i>
                                  <h3>Teléfonos</h3>
                                  <p>095 736 076 / 095 736 069 / 2364 60 34</p>
                              </div>
                          </div>

                      </div>

                      <div className="row">

                          <div className="col-lg-6 ">
                              <iframe className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13116.335172160765!2d-56.2126689!3d-34.7282822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf5c59b9914b7fa!2sTaller%20Manfra%20-%20Especialistas%20en%20veh%C3%ADculos%20comerciales!5e0!3m2!1ses-419!2suy!4v1621495795771!5m2!1ses-419!2suy"
                                  frameBorder="0" style={{border: "0", width: "100%", height: "384px"}} allowFullScreen></iframe>
                          </div>

                          <div className="col-lg-6">
                              <form action="/api/contact" method="post" role="form" >
                                  <div className="row">
                                      <div className="col-md-6 form-group">
                                          <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" required />
                                      </div>
                                      <div className="col-md-6 form-group mt-3 mt-md-0">
                                          <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                                      </div>
                                  </div>
                                  <div className="form-group mt-3">
                                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required />
                                  </div>
                                  <div className="form-group mt-3">
                                      <textarea className="form-control" name="message" rows={5} placeholder="Mensaje y contacto telefónico" required></textarea>
                                  </div>
                                  <div className="form-group mt-3">
                                      <label><input type="checkbox"  id="cbox1" required value="first_checkbox" /> Acepto los términos y condiciones del formulario de contacto</label><br />
                                  </div>
                            
                           
                           
                                  <div className="text-center"><button type="submit" className="form-control">Enviar</button></div>
                              </form>
                          </div>

                      </div>

                  </div>
              </section>
        

          </main>
    </Shell>
  );
}
