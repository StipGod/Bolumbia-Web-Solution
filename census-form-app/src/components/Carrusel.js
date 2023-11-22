import React from "react";
import { Link } from "react-router-dom";
import picture from "../assets/img/scenery/image5.jpg";
import passport_picture from "../assets/img/scenery/image7.jpg";
import cedula_digital_picture from "../assets/img/scenery/image8.jpg";
import renta_picture from "../assets/img/scenery/image9.jpg";


export default function Carrusel() {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" style={{boxShadow: '0px 2px 8px'}}>
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img className="card-img-top w-100 d-block" src={passport_picture} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>¿Conoces el nuevo trámite del pasaporte?</h5>
                <p>¡Descubre cómo obtenerlo en menos tiempo!</p> {/*  tener tu pasaporte en menos de 5 días */}
            </div>
            </div>
            <div class="carousel-item">
            <img className="card-img-top w-100 d-block" src={cedula_digital_picture} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Saca tu cédula digital aquí</h5>
                <p>¡Echa un vistazo a esta simple manera de...</p>
            </div>
            </div>
            <div class="carousel-item">
            <img className="card-img-top w-100 d-block" src={renta_picture} alt="..."/>
            <div class="carousel-caption d-none d-md-block">
                <h5>Como declarar renta en 10 simples pasos</h5>
                <p>Aprende a declarar tu propia renta en menos de dos horas</p>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    );
}