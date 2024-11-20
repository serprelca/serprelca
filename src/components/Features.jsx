import React from 'react'

const Features = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp bg-light" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                    <h2 className="fw-bold text-primary text-uppercase">Nuestra Esencia</h2>
                    <h4 className="mb-0">Fomentar la cultura de prevención de riesgos en el trabajo y ambiente</h4>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-cubes text-white" />
                                </div>
                                <h3>Mision</h3>
                                <h5 className="mb-0">Brindar apoyo a la gestión de seguridad y salud en el trabajo para crear un entorno de trabajo seguro y saludable</h5>
                            </div>
                            <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-award text-white" />
                                </div>
                                <h3>Valores</h3>
                                <h5 className="mb-0">Solidaridad, trabajo en equipo, profesionalismo, puntualidad, responsabilidad, respeto, para ofrecer mejores servicios</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: 350 }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="img/feature.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row g-5">
                            <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-users-cog text-white" />
                                </div>
                                <h3>Vision</h3>
                                <h5 className="mb-0">Ser lider en seguridad, higiene, ergonomía, salud ocupacional y medio ambiente, mediante el fortalecimiento y posicionamiento de nuestra marca, evidenciando liderazgo en el cumplimiento de las normas y estándares establecidos</h5>
                            </div>
                            <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                                    <i className="fa fa-phone-alt text-white" />
                                </div>
                                <h3>Politica de la Calidad</h3>
                                <h5 className="mb-0">En SERPREL, C.A., estamos comprometidos con la excelencia en la prestación de servicios en materia de Seguridad y Salud en el Trabajo. Nuestro objetivo es garantizar que nuestros servicios sean seguros, confiables y cumplan con las leyes, reglamentos y normas nacionales e internacionales vigentes</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Features