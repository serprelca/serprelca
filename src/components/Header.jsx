import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                <Link to="/" href="index.html" className="navbar-brand p-0">
                    <h1 className="m-0"><img src="img/logo.png" alt="" width={50} /> SERPREL, C.A.</h1>
                  
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <Link to={"/inicio"} href="index.html" className="nav-item nav-link ">Inicio</Link>
                        <Link to={"/nosotros"} href="#about" className="nav-item nav-link">Nosotros</Link>
                        <Link to={"/servicios"} href="service.html" className="nav-item nav-link">Servicios</Link>
                        <Link to={"/blog"} href="service.html" className="nav-item nav-link">Blog</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Documentos</a>
                            <div className="dropdown-menu m-0">
                                <Link to={"/manuales"} href="price.html" className="dropdown-item">Manuales</Link>
                                <Link to={"/leyesynormas"} href="price.html" className="dropdown-item">Leyes y Normas SST</Link>

                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Contacto</a>
                            <div className="dropdown-menu m-0">
                                <Link to={"/contacto"} href="price.html" className="dropdown-item">Contacto</Link>
                                <Link to={"/polticadeprivacidad"} href="price.html" className="dropdown-item">Poltica de Privacidad</Link>

                            </div>

                        </div>
                    </div>
                </div>
            </nav>

        </div>

    )
}

export default Header