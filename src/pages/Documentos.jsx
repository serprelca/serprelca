import React from 'react'

import Features from '../components/Features';
import Documentos_SST from './Documentos_SST';
const API = 'http://localhost:3000/api/trabajadores';

const Documentos = () => {
  return (
    <>
      <div
        className="container-fluid bg-primary py-5 bg-header"
        style={{ marginBottom: 90 }}
      >
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">Documentos</h1>
          </div>
        </div>
      </div>

      <Documentos_SST /> 
      <Features /> 
     
      

     
    </>
  )
}

export default Documentos