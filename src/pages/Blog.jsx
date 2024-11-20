import { Link } from "react-router-dom";
import Features from "../components/Features";

const Blog = () => {
  return (
    <>
    <div
      className="container-fluid bg-primary py-5 bg-headerblog"
      style={{ marginBottom: 90 }}
    >
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white animated zoomIn">Blog</h1>
          <a href className="h5 text-white">
            Inicio
          </a>
          <i className="far fa-circle text-white px-2" />
          <a href className="h5 text-white">
            Blog
          </a>
        </div>
      </div>
    </div>

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: 600 }}
        >
          <h1 className="fw-bold text-primary text-uppercase">Nuestro Blog</h1>
          <h3 className="mb-0">
          Te invitamos a explorar estas publicaciones. ¡No te las pierdas!
          </h3>
        </div>

        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/c1.png" alt />
                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>
                Consultoria y Asesoria
                </a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3">
                    <i className="far fa-user text-primary me-2" />
                    Juan Rodriguez
                  </small>
                  <small>
                    <i className="far fa-calendar-alt text-primary me-2" />
                    10/10/2024
                  </small>
                </div>
                <h4 className="mb-3">La consultoría y asesoría en seguridad y salud en el trabajo</h4>
                <p>
                La consultoría y asesoría en seguridad y salud en el trabajo es un servicio proporcionado por profesionales con experiencia en la identificación, evaluación y control de los riesgos laborales y ambientales, presentes en las organizaciones. 
                </p>
                <Link to={"/blog1"}  className="text-uppercase" href>
                  Leer mas <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/c2.png" alt />         
                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>
                Inspeccion, Evaluacion y Auditorias
                </a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3">
                    <i className="far fa-user text-primary me-2" />
                    SERPREL, C.A.
                  </small>
                  <small>
                    <i className="far fa-calendar-alt text-primary me-2" />
                    10/10/2024
                  </small>
                </div>
                <h4 className="mb-3">Inspección, evaluación y auditoría en seguridad y salud en el trabajo</h4>
                <p>
                La inspección, evaluación y auditoría son esenciales para asegurar que las organizaciones cumplan con las normativas vigentes, fomenten una cultura de prevención y mejora continua. 
                </p>
                <Link to={"/blog2"}  className="text-uppercase" href>
                  Leer mas <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/c3.png" alt />
                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>
                Higiene Ocupacional
                </a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3">
                    <i className="far fa-user text-primary me-2" />
                    SERPREL, C.A.
                  </small>
                  <small>
                    <i className="far fa-calendar-alt text-primary me-2" />
                    10/10/2024
                  </small>
                </div>
                <h4 className="mb-3">Importancia de la Higiene Ocupacional</h4>
                <p>
                La higiene ocupacional es un conjunto de medidas diseñadas para prevenir enfermedades ocupacionales, asegurando así la salud de los trabajadores, su relevancia se manifiesta en múltiples aspectos que impactan a los trabajadores y organizaciones. 
                </p>
                <Link to={"/blog3"}  className="text-uppercase" href>
                  Leer mas <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/c4.png" alt />     
                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>
                Ergonomia y Factores Psicosociales 
                </a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3">
                    <i className="far fa-user text-primary me-2" />
                    SERPREL, C.A.
                  </small>
                  <small>
                    <i className="far fa-calendar-alt text-primary me-2" />
                    10/10/2024
                  </small>
                </div>
                <h4 className="mb-3">La Ergonomia y su influencia en la Calidad de Trabajo</h4>
                <p>
                La Ergonomía es una disciplina que se centra en adaptar el entorno de trabajo a las características físicas y psicológicas de los trabajadores, su objetivo es promover el bienestar, la calidad y la eficiencia en el trabajo, impactando positivamente tanto en la salud de los empleados como en la productividad de la organización. 
                </p>
                <Link to={"/blog4"}  className="text-uppercase" href>
                  Leer mas <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
     

          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/c5.png" alt />     
                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>
                Formación en Seguridad y Salud en el Trabajo
                </a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3">
                    <i className="far fa-user text-primary me-2" />
                    SERPREL, C.A.
                  </small>
                  <small>
                    <i className="far fa-calendar-alt text-primary me-2" />
                    10/10/2024
                  </small>
                </div>
                <h4 className="mb-3">Importancia de la Formación en Seguridad y Salud en el Trabajo</h4>
                <p>
                Se presentan las razones clave por las que estos elementos son cruciales: facilita la identificación de los peligros y riesgos, ayuda a cumplir con normativas y regulaciones, asegura que usen correctamente los EPP e individual, promueve cultura preventiva, aplican lecciones aprendidas. 
                </p>
                <Link to={"/blog5"}  className="text-uppercase" href>
                  Leer mas <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>


          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div className="blog-item bg-light rounded overflow-hidden">
              <div className="blog-img position-relative overflow-hidden">
                <img className="img-fluid" src="img/c6.png" alt />     
                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>
                Salud Ocupacional
                </a>
              </div>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <small className="me-3">
                    <i className="far fa-user text-primary me-2" />
                    SERPREL, C.A.
                  </small>
                  <small>
                    <i className="far fa-calendar-alt text-primary me-2" />
                    10/10/2024
                  </small>
                </div>
                <h4 className="mb-3">Monitoreo y Vigilancia Epidemiologica a la Salud de los Trabajadores</h4>
                <p>
                La vigilancia epidemiológica es una herramienta esencial para garantizar la salud y seguridad en el trabajo, permitiendo conocer el estado de salud de los trabajadores y los riesgos asociados a su entorno laboral, lo que contribuye a la promoción de un ambiente saludable. 
                </p>
                <Link to={"/blog6"}  className="text-uppercase" href>
                  Leer mas <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

              </div>
            </div>
          </div>
        
     
   
  </>
  );
};

export default Blog;
