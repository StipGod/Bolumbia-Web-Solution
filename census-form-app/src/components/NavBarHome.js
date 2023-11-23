import React from "react";
import { Link } from "react-router-dom";

export default function NavBarHome() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-info bg-gradient clean-navbar navbar-light shadow" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand logo" to="/" style={{ marginRight: "80px", fontSize: "40px" }}>
          Bolumbia
        </Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/soporte">
              Soporte
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">
              Contáctenos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/acerca-de-nosotros">
              Acerca de Nosotros
            </Link>
          </li>
        </ul>

        <div className="nav-item" style={{ marginLeft: "auto" }}>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn bg-ligth btn-outline-dark" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
