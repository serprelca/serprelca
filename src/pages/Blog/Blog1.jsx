import Features from "../../components/Features";

const Blog1 = () => {
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

      <div className="container py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h1 className="fw-bold text-primary text-uppercase">La consultoría y asesoría en seguridad y salud en el trabajo</h1>
          </div>
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

       

          <div className="row">
              <div className="col-md-7">
                <div className="section-title position-relative pb-3 mb-5"></div>
                <h5 className="mb-4">La consultoría y asesoría en seguridad y salud en el trabajo es un servicio proporcionado por profesionales con experiencia en la identificación, evaluación y control de los riesgos laborales y ambientales, presentes en las organizaciones. Estos profesionales implementan sistemas de gestión en seguridad y salud en el trabajo, alineados con la LOPCyMAT y estándares internacionales, ajustados a las necesidades específicas de cada industria.</h5>

                <h5 className="mb-4">Además, su trabajo contribuye a garantizar el cumplimiento de normativas legales, mejorar el bienestar de los trabajadores, reducir accidentes de trabajo y promover una cultura de seguridad dentro de la organización. Su importancia radica en asegurar el bienestar y la salud de los trabajadores, evita los accidentes de trabajo y enfermedades ocupacionales, reduce el ausentismo laboral, y por ende aumenta los niveles de producción, mediante:</h5>

                <div className="row g-0 mb-3">
             <div className="wow zoomIn" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'zoomIn'}}>
              
              <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Cumplimiento legal: La legislación en el trabajo establece una serie de requisitos en materia de seguridad y salud en el trabajo. Una consultoría y asesoría garantiza que la empresa cumpla con todas las normas y regulaciones aplicables, evitando sanciones y multas.</h5>

              <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Prevención de accidentes y enfermedades laborales: La principal función de una consultoría y asesoría es identificar peligros y evaluar los riesgos presentes en el lugar de trabajo, para así implementar medidas preventivas que reduzcan la probabilidad de ocurrencia de accidentes y enfermedades laborales.</h5>

              <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Mejora de la calidad de vida de los trabajadores: Un ambiente de trabajo seguro y saludable contribuye a aumentar la satisfacción laboral, reducir el ausentismo y mejorar el rendimiento de los empleados.</h5>

              <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Reducción de costos: Los accidentes de trabajo y las enfermedades ocupacionales generan costos elevados para las empresas, tanto directos (pagos de indemnizaciones, gastos médicos) como indirectos (pérdida de producción, daños a la imagen de la empresa). Una consultoría y asesoría en seguridad y salud ocupacional ayuda a reducir estos costos.</h5>

              <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Mejora de la imagen corporativa: Una empresa comprometida con la seguridad y salud de sus trabajadores proyecta una imagen positiva ante clientes, proveedores y la sociedad en general.</h5>
              
              <h5 className="mb-4">Independientemente de su tamaño o sector, todas las empresas están expuestas a riesgos en el trabajo, es por ello, que una consultoría y asesoría, aporta una visión objetiva y especializada, lo que permite identificar aquellos aspectos que requieren oportunidad de mejoras para el logro de una cultura preventiva en la organización, mediante la consideración de la seguridad y salud en el trabajo como parte de sus procesos de trabajo.</h5>

              <h5 className="mb-4">La consultoría y asesoría proporciona una visión objetiva que permite identificar áreas que requieren mejoras para fomentar una cultura preventiva e integrar la seguridad y salud en el trabajo como parte fundamental de los procesos organizacionales, factores claves para alcanzar un entorno de trabajo seguro, saludable y productivo. En SERPREL, C.A., si deseas puedes contactarnos fácilmente a través de nuestros medios de contacto, simplemente envíanos un correo a ventas@serprelca.com., para obtener información o agendar una consultoría y asesoría en el trabajo.</h5>
            </div>

          </div>
          
              </div>
              <div className="col-md-5 mt-5" >
            
                  <img className="img-fluid my-2" src="img/b11.png"  />
                  <img className="img-fluid my-2" src="img/b12.png"  />
                  <img className="img-fluid my-2" src="img/b13.png"  />
                  <img className="img-fluid my-2" src="img/b14.png"  />
                
              </div>
            </div>
        </div>
      </div>

   
      
    </>
  );
};

export default Blog1;