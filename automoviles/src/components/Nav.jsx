import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <>
      <div className="navbar bg-light fixed-top ">
        <div className="container-fluid">
          <Link to="/">
              <a className="navbar-brand">Modelos</a>
          </Link>
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
                   <Link to="/">
                      <a className="nav-link active " aria-current="page" >Modelos</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                   <a className="nav-link active" >Servicios y Accesorios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Financiacion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Review y Comunidad</a>
                </li>
                </div >
                <div className='modelos'>
                <li className="nav-item">
                  <a className="nav-link active" >Toyota Mobility Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Toyota Gazoo Racing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Toyota Hibrido</a>
                </li>
                </div>
                <div className='modelos'>
                <li className="nav-item">
                  <a className="nav-link active" >Concesionarios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Test Drive</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Contacto</a>
                </li>
                <hr className="dropdown-divider"/>
                </div>
                <div className='oscuro'>
                <li className="nav-item">
                  <a className="nav-link active" >Actividades</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Servicios al Cliente</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Ventas Especiales</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Innovacion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Prensa</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" >Acerca de...</a>
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