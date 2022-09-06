import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <>
      <div className="navbar bg-light fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Modelos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <div className='modelos'>
                  <li className="nav-item">
                   <a className="nav-link active " aria-current="page" href="#">Modelos</a>
                  </li>
                  <li className="nav-item">
                   <a className="nav-link active" href="#">Servicios y Accesorios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Financiacion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Review y Comunidad</a>
                </li>
                </div >
                <div className='modelos'>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Toyota Mobility Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Toyota Gazoo Racing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Toyota Hibrido</a>
                </li>
                </div>
                <div className='modelos'>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Concesionarios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Test Drive</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Contacto</a>
                </li>
                <hr className="dropdown-divider"/>
                </div>
                <div className='oscuro'>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Actividades</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Servicios al Cliente</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Ventas Especiales</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Innovacion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Prensa</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Acerca de...</a>
                </li>
                </div>
                
               
              </ul>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Nav