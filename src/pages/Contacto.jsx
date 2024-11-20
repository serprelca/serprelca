

import Features from '../components/Features';
import Quote from '../components/Quote';




const Contacto = () => {
  return (
    <>
     <div className="container-fluid bg-primary py-5 bg-headercontacto" style={{ marginBottom: 90 }}>
        <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-4 text-white animated zoomIn">Contacto</h1>
            </div>
        </div>
    </div>
    
    <div className="container py-5"></div>
    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
      <p className=""></p>
      <h3 className="mb-4 text-center py-2">Estamos aquí para atender oportunamente tus consultas sobre nuestros servicios, sugerencias, reclamos y responder preguntas sobre Seguridad y Salud en el Trabajo.</h3>
      <h3 className="mb-4 text-center py-2">Contáctenos, a través de nuestro departamento de ventas.</h3>
      <h3 className="mb-4 text-center py-2">Para más información, ¡síguenos en nuestras redes sociales!</h3>
    </div>


    

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <form action='mailto:ventas@serprelca.com' >
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control border-0 bg-light px-4" placeholder="Nombres y Apellidos" style={{ height: 55 }}/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control border-0 bg-light px-4" placeholder="Correo de Contacto" style={{ height: 55 }}/>
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control border-0 bg-light px-4" placeholder="Telefono de Contacto" style={{ height: 55 }}/>
                  </div>
                  <div className="col-12">
                    <textarea className="form-control border-0 bg-light px-4" placeholder="Organizacion / Empresa" defaultValue={""}/>
                  </div>
                  <div className="col-12">
                    <textarea className="form-control border-0 bg-light px-4" placeholder="Asunto" defaultValue={""}/>
                  </div>
                  <div className="col-12">
                                        <select className="form-select bg-light border-0" style={{ height: 55 }}>
                                            <option selected>Servicios</option>
                                            <option value={1}>Consultoria y Asesoria</option>
                                            <option value={2}>Inspeccion, Evaluacion y Auditorias</option>
                                            <option value={3}>Higiene Ocupacional</option>
                                            <option value={4}>Ergonomia y Psicosocial</option>
                                            <option value={5}>Formacion y Capacitacion</option>
                                            <option value={6}>Salud Ocupacional</option>
                                        </select>
                                    </div>
                  <div className="col-12">
                    <textarea className="form-control border-0 bg-light px-4" placeholder="Deje su mensaje" defaultValue={""}/>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8631.851153699436!2d-67.9698475858374!3d10.207423571022234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1729867328411!5m2!1ses!2sve"
                frameBorder={0}
                style={{ minHeight: 350, border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />



            </div>
          </div>
        </div>
      </div>
    
      
     
    

    </>
  );
};

export default Contacto