
import React from 'react'
import { Link } from 'react-router-dom'

const Service2 = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                    <h1 className="fw-bold text-primary text-uppercase">Servicios</h1>
                    <h3 className="mb-0">Promovemos una cultura de prevención; a través de las siguientes soluciones en seguridad y salud en el trabajo</h3>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 wow zoomIn" >
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fa fa-shield-alt text-white" />
                            </div>
                            <h2 className="mb-3">Consultoría y Asesoría</h2>
                            <h6 className="m-0">Las organizaciones cada vez son conscientes de garantizar que sus entornos y lugares de trabajo sean seguros y saludables y que cumplan con todos los requisitos legales.</h6>
                            <Link to={"/servicios#Consultoria"}  href="#" className=''>ver mas</Link>   
                        </div>
                         
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fa fa-chart-pie text-white" />
                            </div>
                            <h2 className="mb-3">Inspección, Evaluación y Auditorías</h2>
                            <h6 className="m-0">Nos adaptamos a los requerimientos específicos de la empresa, así como a las exigencias de la casa matriz y a los estándares nacionales e internacionales.</h6>
                            <Link to={"/servicios#Inspección"}  href="#" className=''>ver mas</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fa fa-code text-white" />
                            </div>
                            <h2 className="mb-3">Higiene Ocupacional</h2>
                            <h6 className="m-0">La higiene ocupacional es la disciplina preventiva encargada de identificar, evaluar y controlar los factores de riesgos que pueden surgir de la presencia de contaminantes físicos, químicos o biológicos.</h6>
                            <Link to={"/servicios#Higiene"}  href="#" className=''>ver mas</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fab fa-android text-white" />
                            </div>
                            <h2 className="mb-3">Ergonomia y Psicosociologia</h2>
                            <h6 className="m-0">Con nuestros servicios de ergonomía nos centramos en disminuir la carga física y mental de los trabajadores.</h6>
                            <Link to={"/servicios#Ergonomia"}  href="#" className=''>ver mas</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fa fa-search text-white" />
                            </div>
                            <h2 className="mb-3">Formación y Capacitación</h2>
                            <h6 className="m-0">Nuestros programas de capacitación a su medida, permiten que sus trabajadores se adapten a nuevos entornos de trabajo y últimas tecnologías.</h6>
                            <Link to={"/servicios#Formación"}  href="#" className=''>ver mas</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="service-icon">
                                <i className="fa fa-search text-white" />
                            </div>
                            <h2 className="mb-3">Salud Ocupacional</h2>
                            <h6 className="m-0">Ofrecemos apoyo para promover la salud de tus trabajadores, incluso sin un servicio médico propio.</h6>
                            <Link to={"/servicios#Salud"}  href="#" className=''>ver mas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Service2