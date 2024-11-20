import React from 'react'

const Quote = () => {
    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h1 className="fw-bold text-primary text-uppercase">Contactanos</h1>
                            <h3 className="mb-0">Siempre dispuesto a atenderte...</h3>
                        </div>
                        <h5 className="mb-4">Estamos aquí para atender oportunamente tus consultas sobre nuestros servicios sobre Seguridad y Salud en el Trabajo. Para más información, ¡síguenos en nuestras redes sociales!</h5>
                        <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                        <div className="row g-0 mb-3">
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-xl-12">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Nombre y Apellido" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-xl-12">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Telefono de Contacto" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control bg-light border-0" placeholder="Correo de Contacto" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Organizacion / Empresa" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control bg-light border-0" placeholder="Asunto" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <select className="form-select bg-light border-0" style={{ height: 55 }}>
                                            <option selected>Servicios</option>
                                            <option value={1}>Consultoría y Asesoría</option>
                                            <option value={2}>Inspección, Evaluación y Auditorias</option>
                                            <option value={3}>Higiene Ocupacional</option>
                                            <option value={4}>Ergonomia y Psicosocial</option>
                                            <option value={5}>Formación y Capacitación</option>
                                            <option value={6}>Salud Ocupacional</option>

                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control bg-light border-0" rows={3} placeholder="Deje su mensaje" defaultValue={""} />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-dark w-100 py-3" type="submit">Enviar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Quote