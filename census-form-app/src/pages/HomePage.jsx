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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
