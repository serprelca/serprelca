
import Service from "../components/Service";

const Servicios = () => {
  return (
    <>
      <div
        className="container-fluid bg-primary py-5 bg-headerservicios"
        style={{ marginBottom: 90 }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Servicios</h1>
          </div>
        </div>
      </div>

      <Service />
     
    </>
  );
};

export default Servicios;
