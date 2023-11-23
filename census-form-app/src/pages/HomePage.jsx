import React from "react";
import Footer from "../components/Footer";
import NavBarHome from "../components/NavBarHome";
import TarjetasHome from "../components/TarjetasHome";
import TarjetasHome1 from "../components/TarjetasHome1";
import Carrusel from "../components/Carrusel";
import Auth from "../components/Auth";
import { Tab } from "bootstrap";

export default function Home() {
  return (
    <>
      <NavBarHome />
      <main
        className="page service-page"
        style={{ background: "var(--bs-body-bg)" }}
      >
        <section
          className="clean-block clean-services dark"
          style={{ background: "#f9f9f9", padding: "0 0 100px" }}
        >
          <div className="container">
            <div className="block-heading" style={{ paddingTop: "50px" }}>
              <h2 className="text-dark">Sistema de Censo Electrónico</h2>
            </div>
            <div className="row">
              <Auth />
              <div className="col-md-8" style={{padding: "0px 0px 0px 50px"}}>
                <Carrusel />
              </div>
            </div>
            <div className="row">
              <h2>Noticias</h2>
              <TarjetasHome />              
              <div className="col-md-8" style={{padding: "0px 0px 0px 50px"}}>
                <h1>Información del censo</h1>
                <p>El Censo de Población y Vivienda de Bolumbia es la mayor recopilación estadística realizada por el DoS 
                  (Departamento de estadísticas) y una de las más importantes. Su objetivo es medir con precisión el número y las 
                  características clave de las personas que se encuentran en Bolumbia en la Noche del Censo (Census Night) y de las 
                  viviendas en las que viven. Esta información proporciona una base confiable para estimar la población de cada una 
                  de las provincias y áreas de gobierno local, la cual es utilizada principalmente con fines electorales y para 
                  planificar la distribución de fondos gubernamentales. Los datos del censo también son utilizados por personas y 
                  organizaciones de los sectores público y privado para tomar decisiones informadas sobre cuestiones de política y 
                  planificación que impactan las vidas de todos los habitantes de Bolumbia. Todos en Bolumbia están obligados legalmente 
                  a completar el formulario del censo, con el fin de garantizar que los datos recolectados brindan una imagen precisa y 
                  completa de la nación.</p>
              </div>
            </div>
            <div className="row">
              <TarjetasHome1 />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
