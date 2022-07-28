import React from 'react'
import { CardWidget } from './CardWidget/CardWidget'

export const Navbar = ( props ) => {
  return (
    <>
        <nav className=" navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <CardWidget />
    <a className="navbar-brand" href="#"> { props?.brand  } </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Zapatos</a></li>
            <li><a className="dropdown-item" href="#">Carteras</a></li>
            <li><a className="dropdown-item" href="#">Correas</a></li>
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
