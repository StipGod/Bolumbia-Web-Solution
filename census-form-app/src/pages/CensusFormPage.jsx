import React from "react";
import Footer from "../components/Footer";
import NavBarHome from "../components/NavBarHome";
import CensusForm from "../components/CensusForm";
import CensusForm1 from "../components/CensusForm1";

import { Form, Button } from "react-bootstrap";

export default function CensusFormPage() {
  return (
    
    <>
      <NavBarHome />
      <main className="page service-page" style={{ background: "var(--bs-body-bg)" }}>
        <section className="clean-block clean-services dark" style={{ background: "#f9f9f9", padding: "0 0 100px" }}>
          <div className="container">
            <div className="block-heading" style={{ paddingTop: "60px" }}> 
              <h2 className="text-dark"><strong>Formulario Censo 2023</strong></h2>
              <p>Este es el Formulario Oficial para realizar el Censo de Bolumbia. Es rápido y fácil responder, y sus respuestas están protegidas por la ley</p>
            </div>
            <br></br>

            <Form>
              <p><strong>Antes de responder la Pregunta #1, cuente las personas que viven en esta casa, apartamento o casa móvil con base en las siguientes reglas:</strong></p>
              <ul>
                <li>Cuente a todas las personas, incluidos los bebés, que viven y duermen aquí la mayor parte del tiempo</li>
                <li>Si nadie vive ni duerme en esta casa la mayor parte del tiempo, comuníquese con #####</li>
              </ul>
              <br></br> 
              <p><strong>El censo también debe incluir a las personas sin un lugar permanente donde vivir, así: </strong></p>
              <ul>
                <li>Si alguien que no tiene un lugar permanente para vivir se queda aquí el 20 de noviembre del 2023, cuente a esa persona</li>
              </ul>
              <br></br> 
              <p><strong>La Oficina del Censo también realiza recuentos en instituciones y otros lugares, por lo que:</strong></p>
              <ul>
                <li>No cuente a nadie que viva fuera de aquí, ya sea en la universidad o en las Fuerzas Armadas</li>
                <li>No cuente a nadie en un asilo de ancianos, cárcel, prisión, centro de detención, etc., el 20 de noviembre del 2023</li>
                <li>Deje a estas personas fuera de su cuestionario, incluso si regresarán a vivir aquí después de dejar la universidad, el hogar de ancianos, el ejército, la cárcel, etc. De lo contrario, pueden ser contados dos veces</li>
              </ul>
              <br></br> <br></br>
              <p><strong>Preguntas</strong></p>
              <br></br> 
              <Form.Group controlId="numeroPersonasHabitando">
                <Form.Label>1. ¿Cuántas personas viven o se quedan a dormir en esta casa el 20 de noviembre del 2023?</Form.Label>
                <Form.Control type="number" placeholder="Número de personas" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="personasAdicionales">
                <Form.Label>2. ¿Hubo personas adicionales que se quedaron aquí el 1 de abril de 2020 que no incluyó en la Pregunta 1? Marque todas las respuestas que considere</Form.Label>
                <Form.Check type="checkbox" label="Bebés recién nacidos, nietos o hijos adoptivos"  />
                <Form.Check type="checkbox" label="Parientes, como hijos adultos, primos o suegros" />
                <Form.Check type="checkbox" label="No familiares, como compañeros de cuarto, niñeras residente" />
                <Form.Check type="checkbox" label="Personas que se quedan aquí temporalmente" />
                <Form.Check type="checkbox" label="No hay personas adicionales" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="numeroPersonasHabitando1">
                <Form.Label>3.  Su casa es </Form.Label>
                <Form.Check type="radio" name="opciones" label="Es propiedad de usted o de alguien de este hogar con una hipoteca o préstamo"  />
                <Form.Check type="radio" name="opciones" label="Es totalmente de su propiedad o de alguien de este hogar, es decir que no le deben nada de la casa a nadie (sin hipoteca ni préstamo)" />
                <Form.Check type="radio" name="opciones" label="Arrendada" />
                <Form.Check type="radio" name="opciones" label="Habitada, pero sin pagar arriendo (usted ni nadie que vive ahí es el propietario)" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="celular">
                <Form.Label>4. Cuál es su celular?  (Solo lo contactaremos para temas relacionados con el Censo)</Form.Label>
                <Form.Control type="number" placeholder="Número celular" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="infoPersona">
                <Form.Label>5. Proporcione información de cada persona que vive aquí. Si hay alguien que vive aquí y que paga el alquiler o es propietario de esta residencia, comience por incluirlo como Persona 1. Si el propietario o la persona que paga el alquiler no vive aquí, comience por incluir a cualquier adulto que viva aquí como Persona 1</Form.Label>
                <Form.Control type="text" placeholder="Nombre(s) de la Persona 1" />
                <Form.Control type="text" placeholder="Apellido(s) de la Persona 1" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="sexoPersona">
                <Form.Label>6. ¿Cuál es el sexo de la Persona 1?</Form.Label>
                <Form.Check type="radio" name="opciones" label="Femenino"/>
                <Form.Check type="radio" name="opciones" label="Masculino" />
                <Form.Check type="radio" name="opciones" label="Otro" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="edadNacimiento">
                <Form.Label>7. ¿Cuál es la edad y la fecha de nacimiento de la Persona 1? (Para bebés menores de 1 año, no escriba la edad en meses, escríbala en años como 0)</Form.Label>
                <Form.Control type="number" placeholder="Edad en noviembre 20, 2023" />
                <Form.Control type="date" placeholder="Fecha de nacimiento" />
              </Form.Group>
              <br></br>
              <Form.Group controlId="origen">
                <Form.Label>8. ¿La Persona 1 es de origen hispano, latino o español?</Form.Label>
                <Form.Check type="radio" name="opciones" label="No, no es de origen hispano, latino o español"/>
                <Form.Check type="radio" name="opciones" label="Sí, mexicano, mexicano americano, chicano" />
                <Form.Check type="radio" name="opciones" label="Sí, puertorriqueño" />
                <Form.Check type="radio" name="opciones" label="Sí, cubano" />
                <Form.Check type="radio" name="opciones" label="Sí, otro" />
              </Form.Group>
              <br></br>

              
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
