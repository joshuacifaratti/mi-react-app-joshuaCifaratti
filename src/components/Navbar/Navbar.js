import React from 'react'
import { NavLink } from 'react-router-dom'

function navbar() {
    return (
        <nav className="navbar navbar-dark bg-black fixed-top">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" href="#">Golden Cars</NavLink>
                <NavLink to="/cart"><i class="bi bi-cart-fill"></i></NavLink>
                < div className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle m-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Vehiculos
                                </a>
                                <ul className="dropdown-menu dropdown-menu-">
                                    <li><a className="dropdown-item" href="#">Ford</a></li>
                                    <li><a className="dropdown-item" href="#">Chevrolet</a></li>
                                    <li><a className="dropdown-item" href="#">Peugeot</a></li>
                                    <li><a className="dropdown-item" href="#">Fiat</a></li>
                                    <li><a className="dropdown-item" href="#">Volkswagen</a></li>
                                </ul>
                        </div>
            </div>
        </nav>
    )
}

export default navbar