import React from 'react'

const Carrusel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="img/c1.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                    <h2 className="display-2 text-white mb-md-2 animated zoomIn">Consultoría y Asesoría </h2>
                    <h5 className="text-white md-4">Nuestra asistencia técnica te ayuda a incorporar la prevención de riesgos en la gestión de tus actividades de trabajo.</h5>

                </div>
            </div>
        </div>
        <div className="carousel-item">
            <img src="img/c2.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                    <h2 className="display-2 text-white mb-md-2 animated zoomIn">Inspección, Evaluación y Auditorías</h2>
                    <h5 className="text-white md-4">Asegura la seguridad y salud en el trabajo, así como el cumplimiento de las normativas en tus instalaciones y productos.</h5>

                </div>
            </div>
        </div>
        <div className="carousel-item">
            <img src="img/c3.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                    <h2 className="display-2 text-white mb-md-2 animated zoomIn">Higiene Ocupacional</h2>
                    <h5 className="text-white md-4">Identifica, evalúa y gestiona los factores de riesgos físicos, químicos y biológicos en tus instalaciones, cumpliendo con los límites permisibles y aplicando medidas de control para prevenir enfermedades ocupacionales.</h5>
                </div>
            </div>
        </div>

        <div className="carousel-item">
            <img src="img/c4.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                    <h1 className="display-2 text-white mb-md-2 animated zoomIn">Ergonomía y Psicosociologia</h1>
                    <h5 className="text-white md-4">Identifica, evalúa y gestiona los factores de riesgo ergonómico y psicosocial en tus instalaciones.</h5>
                </div>
            </div>
        </div>

        <div className="carousel-item">
            <img src="img/c5.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                    <h1 className="display-2 text-white mb-md-2 animated zoomIn">Formación y Capacitación</h1>
                    <h5 className="text-white md-4">Nuestra formación y capacitación te ayudan a fomentar una cultura de prevención de riesgos, creando así entornos de trabajo seguros y saludables.</h5>
                </div>
            </div>
        </div>

        <div className="carousel-item">
            <img src="img/c6.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                    <h1 className="display-2 text-white mb-md-2 animated zoomIn">Salud Ocupacional</h1>
                    <h5 className="text-white md-4">Nuestra asistencia técnica te ayuda a incorporar una cultura de prevención de riesgos en la salud, promoviendo entornos de trabajo seguros y saludables.</h5>
                </div>
            </div>
        </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
    </button>
</div>

  )
}

export default Carrusel