import About from "../components/About";
import Features from "../components/Features";

const Nosotros = () => {
  return (
    <>
     <div className="container-fluid bg-primary py-5 bg-headernosotros" style={{ marginBottom: 90 }}>
        <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-4 text-white animated zoomIn">Nosotros</h1>
            </div>
        </div>
    </div>

     <About /> 
     <Features /> 
    </>
  );
};

export default Nosotros;
