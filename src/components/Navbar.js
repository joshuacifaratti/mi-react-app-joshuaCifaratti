import React from 'react'

function navbar() {
  return (
<nav className="navbar navbar-dark bg-black fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">icono aqui</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Golden cars motors</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Sobre nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Financiacion</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Vehiculos
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Autos</a></li>
              <li><a className="dropdown-item" href="#">Camionetas</a></li>
              <li><a className="dropdown-item" href="#">Motos</a></li>
              <li><a className="dropdown-item" href="#">Otros</a></li>
            </ul>
          </li>
        </ul>
        </div>
    </div>
  </div>
</nav>
  )
}

export default navbar