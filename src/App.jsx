import React from 'react'
import Topbar from './components/Topbar'
import Header from './components/Header'



import Footer from './components/Footer'
import Pfooter from './components/Pfooter'
import Inicio from './pages/Inicio'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'

import Manuales from './pages/Manuales'
import Leyesynormas from './pages/Leyesynormas'
import Blog1 from './pages/Blog/Blog1'
import Blog2 from './pages/Blog/Blog2'
import Blog3 from './pages/Blog/Blog3'
import Blog4 from './pages/Blog/Blog4'
import Blog5 from './pages/Blog/Blog5'
import Blog6 from './pages/Blog/Blog6'
import PolticadePrivacidad from './pages/PolticadePrivacidad'





const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path='/inicio' element={ <Inicio />}/>
        <Route path='/nosotros' element={ <Nosotros />}/>
        <Route path='/servicios' element={ <Servicios />}/>
        
        <Route path='/blog' element={ <Blog />}/>
        
        <Route path='/manuales' element={ <Manuales />}/>
        <Route path='/leyesynormas' element={ <Leyesynormas />}/>
        
        <Route path='/blog1' element={ <Blog1 />}/>
        <Route path='/blog2' element={ <Blog2 />}/>
        <Route path='/blog3' element={ <Blog3/>}/>
        <Route path='/blog4' element={ <Blog4/>}/>
        <Route path='/blog5' element={ <Blog5/>}/>
        <Route path='/blog6' element={ <Blog6/>}/>
        
        
       



        <Route path='/contacto' element={ <Contacto />}/>
        <Route path='/polticadeprivacidad' element={ <PolticadePrivacidad />}/>

      </Routes>
      <Footer />
      <Pfooter />
    </BrowserRouter>
  )
}

export default App