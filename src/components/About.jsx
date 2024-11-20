import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" id='about'>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h1 className=""></h1>
                            <h3 className="mb-4">Desde el año 2006, apoyamos en gestiones integrales en seguridad y salud en el trabajo a organizaciones de diversos sectores productivos del país</h3>
                        </div>
                        <h5 className="mb-4">Estamos aquí para ofrecerte nuestra experiencia con consultoría y asesoría, inspección – evaluación y auditoria, higiene ocupacional, ergonomía y psicosocial, formación y capacitación, salud ocupacional; para lograr soluciones integrales en seguridad y salud en el trabajo y hacer espacios de trabajo seguros y saludables</h5>
                        <div className="row g-0 mb-3">
                        </div>
                        <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                            <div className="bg-primary d-flex align-items-center justify-content-center rounded">
                        </div>
                        </div>
                        <Link to={"/nosotros"} href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Ver mas</Link>
                    </div>
                    <div className="col-lg-5" style={{ minHeight: 500 }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>






    )
}

export default About