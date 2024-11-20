import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center bg-fondo p-4">
                            <a href="index.html" className="navbar-brand">
                                <h1 className="mb-0"><img src="img/logo.png" alt="" width={90} height={135}/> SERPREL, C.A.</h1>
                                <h5 className="mb-0 text-white">Rif: J - 31603340 - 6</h5>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="row gx-5">
                            <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="text-light mb-0">Redes Sociales</h3>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-geo-alt text-primary me-2" />
                                    <p className="mb-0">Avenida Principal entre Calle 2 y 3, Urb. Los Jarales, San Diego, Venezuela</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-envelope-open text-primary me-2" />
                                    <p className="mb-0">ventas@serprelca.com</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-telephone text-primary me-2" />
                                    <p className="mb-0">+58 0424 4072819</p>
                                </div>
                                <div className="d-flex mt-4">
                                    <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal" /></a>
                                    <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal" /></a>
                                    <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal" /></a>
                                    <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal" /></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="text-light mb-0">Nuestra Empresa</h3>
                                </div>
                                <div className="link-animated d-flex flex-column justify-content-start">
                                   <Link to={"/nosotros"} className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Nosotros</Link>
                                    <Link to={"/servicios"} className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Servicios</Link>
                                    <Link to={"/blog"} className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Blog</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="text-light mb-0">Nuestra Estrategia</h3>
                                </div>
                                <div className="link-animated d-flex flex-column justify-content-start">
                                    <Link to={"/contacto"} className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Contactanos</Link>
                                    <Link to={"/polticadeprivacidad"} className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Poltica de Privacidad</Link>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer