import React from "react";
import Footer from "../components/Footer";
import NavBarHome from "../components/NavBarHome";
import { Form, Button } from "react-bootstrap";

export default function CensusFormPage() {
  return (
    <>
      <NavBarHome />
      <main className="page service-page" style={{ background: "var(--bs-body-bg)" }}>
        <section className="clean-block clean-services dark" style={{ background: "#f9f9f9", padding: "0 0 100px" }}>
          <div className="container">
            <div className="block-heading" style={{ paddingTop: "60px" }}>
              <h2 className="text-dark">Formulario</h2>
            </div>

            <Form>
              <Form.Group controlId="codigo">
                <Form.Label>Código</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu código" />
              </Form.Group>

              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
              </Form.Group>

              <Form.Group controlId="edad">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" placeholder="Ingresa tu edad" />
              </Form.Group>
              
              <Button style={{margin: "20px 0px 10px 0px"}} variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
