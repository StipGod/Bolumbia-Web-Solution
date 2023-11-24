import axios from 'axios';
import React from "react";
import Footer from "../components/Footer";
import NavBarHome from "../components/NavBarHome";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import { Form, Button } from "react-bootstrap";

export default function CensusFormPage() {
  const location = useLocation();
  const [numeroPersonas, setNumeroPersonas] = useState(0);
  const [adicionales, setAdicionales] = useState("");
  const [estadoCasa, setEstadoCasa] = useState("");
  const [telefono, setTelefono] = useState(0);

  const [personas, setPersonas] = useState([]);

  const [calificacionExperiencia, setCalificacionExperiencia] = useState("");
  const [comentarios, setComentarios] = useState("");

  const [ecn, setEcn] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const ecnFromUrl = searchParams.get("ECN");
    setEcn(ecnFromUrl || "");
  }, [location.search]);

  const handleEnviarFormulario = async () => {
    const formData = {
      npersonas: numeroPersonas,
      "General section": {
        "Ocupantes adicionales": adicionales,
        "Estado de la casa": estadoCasa,
        "numero de telefono": telefono
      },
      "Personal section": personas.map((persona, index) => ({
        [`Nombre_p${index + 1}`]: persona.nombre,
        [`Apellido_p${index + 1}`]: persona.apellido,
        [`sexo_p${index + 1}`]: persona.sexo,
        [`edad_p${index + 1}`]: persona.edad,
        [`origen_p${index + 1}`]: persona.origen,
        [`raza_p${index + 1}`]: persona.raza,
        [`fechaNacimiento_p${index + 1}`]: persona.fechaNacimiento
      })),
      "Feedback section": {
        calificacionExperiencia: calificacionExperiencia,
        Comentarios: comentarios
      }
    };

    try {
      const response = await axios.post(`/api/forms/save`, { ecn, ...formData });
      const stateChange = await axios.post('/api/forms/submit', { ecn });
      console.log(response.data.message);
    } catch (error) {
      console.error('Hubo un problema al guardar los datos del formulario:', error.response ? error.response.data : error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEnviarFormulario();
  };

  const handlePersonaChange = (index, field, value) => {
    setPersonas((prevPersonas) => {
      const updatedPersonas = [...prevPersonas];
      updatedPersonas[index][field] = value;
      return updatedPersonas;
    });
  };

  const handleNumeroPersonasChange = (e) => {
    const newNumeroPersonas = parseInt(e.target.value);
    setNumeroPersonas(newNumeroPersonas);

    setPersonas((prevPersonas) => {
      const updatedPersonas = [...prevPersonas];

      if (newNumeroPersonas < updatedPersonas.length) {
        updatedPersonas.length = newNumeroPersonas;
      } else {
        for (let i = prevPersonas.length; i < newNumeroPersonas; i++) {
          updatedPersonas.push({
            nombre: "",
            apellido: "",
            sexo: "",
            edad: "",
            fechaNacimiento: "",
            origen: "",
            raza: ""
          });
        }
      }

      return updatedPersonas;
    });
  };
  
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
                <Form.Control
                  type="number"
                  placeholder="Número de personas"
                  value={numeroPersonas}
                  onChange={handleNumeroPersonasChange}
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="personasAdicionales">
                <Form.Label>2. ¿Hubo personas adicionales que se quedaron aquí el 1 de abril de 2020 que no incluyó en la Pregunta 1? Marque todas las respuestas que considere</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Bebés recién nacidos, nietos o hijos adoptivos"
                  onChange={(e) => setAdicionales((prevState) => prevState + "Bebés recién nacidos, nietos o hijos adoptivos, ")}
                />
                <Form.Check
                  type="checkbox"
                  label="Parientes, como hijos adultos, primos o suegros"
                  onChange={(e) => setAdicionales((prevState) => prevState + "Parientes, como hijos adultos, primos o suegros, ")}
                />
                <Form.Check
                  type="checkbox"
                  label="No familiares, como compañeros de cuarto, niñeras residente"
                  onChange={(e) => setAdicionales((prevState) => prevState + "No familiares, como compañeros de cuarto, niñeras residente, ")}
                />
                <Form.Check
                  type="checkbox"
                  label="Personas que se quedan aquí temporalmente"
                  onChange={(e) => setAdicionales((prevState) => prevState + "Personas que se quedan aquí temporalmente, ")}
                />
                <Form.Check
                  type="checkbox"
                  label="No hay personas adicionales"
                  onChange={(e) => setAdicionales("No hay personas adicionales")}
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="numeroPersonasHabitando1">
                <Form.Label>3. Su casa es</Form.Label>
                <Form.Check
                  type="radio"
                  name="opciones"
                  label="Es propiedad de usted o de alguien de este hogar con una hipoteca o préstamo"
                  onChange={(e) => setEstadoCasa("Es propiedad de usted o de alguien de este hogar con una hipoteca o préstamo")}
                />
                <Form.Check
                  type="radio"
                  name="opciones"
                  label="Es totalmente de su propiedad o de alguien de este hogar, es decir que no le deben nada de la casa a nadie (sin hipoteca ni préstamo)"
                  onChange={(e) => setEstadoCasa("Es totalmente de su propiedad o de alguien de este hogar, es decir que no le deben nada de la casa a nadie (sin hipoteca ni préstamo)")}
                />
                <Form.Check
                  type="radio"
                  name="opciones"
                  label="Arrendada"
                  onChange={(e) => setEstadoCasa("Arrendada")}
                />
                <Form.Check
                  type="radio"
                  name="opciones"
                  label="Habitada, pero sin pagar arriendo (usted ni nadie que vive ahí es el propietario)"
                  onChange={(e) => setEstadoCasa("Habitada, pero sin pagar arriendo (usted ni nadie que vive ahí es el propietario)")}
                />
              </Form.Group>
              <br></br>
              <Form.Group controlId="celular">
                <Form.Label>4. Cuál es su celular?  (Solo lo contactaremos para temas relacionados con el Censo)</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Número celular"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}/>
              </Form.Group>
              <br></br>
              <Form.Label>5. Proporcione información de cada persona que vive aquí. Si hay alguien que vive aquí y que paga el alquiler o es propietario de esta residencia, comience por incluirlo como Persona 1. Si el propietario o la persona que paga el alquiler no vive aquí, comience por incluir a cualquier adulto que viva aquí como Persona 1</Form.Label>
              {Array.from({ length: numeroPersonas }, (_, index) => (
                <Form.Group key={index} controlId={`infoPersona${index + 1}`}>
                  <Form.Label>{`Datos de la Persona ${index + 1}`}</Form.Label>
                  <br></br>
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={`Nombre(s) de la Persona ${index + 1}`}
                    value={personas[index].nombre}
                    onChange={(e) => handlePersonaChange(index, 'nombre', e.target.value)}
                  />
                  <Form.Control
                    type="text"
                    placeholder={`Apellido(s) de la Persona ${index + 1}`}
                    value={personas[index].apellido}
                    onChange={(e) => handlePersonaChange(index, 'apellido', e.target.value)}
                  />
                  <br></br>
                  <Form.Group controlId="sexoPersona">
                    <Form.Label>{`¿Cuál es el sexo de la Persona ${index + 1}?`}</Form.Label>
                    <Form.Check
                      type="radio"
                      name={`sexoPersona${index + 1}`}
                      label="Femenino"
                      checked={personas[index].sexo === "Femenino"}
                      onChange={(e) => handlePersonaChange(index, 'sexo', "Femenino")}
                    />
                    <Form.Check
                      type="radio"
                      name={`sexoPersona${index + 1}`}
                      label="Masculino"
                      checked={personas[index].sexo === "Masculino"}
                      onChange={(e) => handlePersonaChange(index, 'sexo', "Masculino")}
                    />
                    <Form.Check
                      type="radio"
                      name={`sexoPersona${index + 1}`}
                      label="Otro"
                      checked={personas[index].sexo === "Otro"}
                      onChange={(e) => handlePersonaChange(index, 'sexo', "Otro")}
                    />
                  </Form.Group>
                  <br></br>
                  <Form.Group controlId="edadNacimiento">
                    <Form.Label>{`¿Cuál es la edad y la fecha de nacimiento de la Persona ${index + 1}? (Para bebés menores de 1 año, no escriba la edad en meses, escríbala en años como 0)`} </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder={`Edad de la Persona ${index + 1}`}
                      value={personas[index].edad}
                      onChange={(e) => handlePersonaChange(index, 'edad', e.target.value)}
                    />
                    <Form.Control
                      type="date"
                      placeholder={`Fecha de nacimiento de la Persona ${index + 1}`}
                      value={personas[index].fechaNacimiento}
                      onChange={(e) => handlePersonaChange(index, 'fechaNacimiento', e.target.value)}
                    />
                  </Form.Group>
                  <br></br>
                  <Form.Group controlId="origen">
                    <Form.Label>{`¿La Persona ${index + 1} es de origen hispano, latino o español?`}</Form.Label>
                    <Form.Check
                      type="radio"
                      name={`origenPersona${index + 1}`}
                      label="No, no es de origen hispano, latino o español"
                      checked={personas[index].origen === "No, no es de origen hispano, latino o español"}
                      onChange={(e) => handlePersonaChange(index, 'origen', "No, no es de origen hispano, latino o español")}
                    />
                    <Form.Check
                      type="radio"
                      name={`origenPersona${index + 1}`}
                      label="Sí, mexicano, mexicano americano, chicano"
                      checked={personas[index].origen === "Sí, mexicano, mexicano americano, chicano"}
                      onChange={(e) => handlePersonaChange(index, 'origen', "Sí, mexicano, mexicano americano, chicano")}
                    />
                    <Form.Check
                      type="radio"
                      name={`origenPersona${index + 1}`}
                      label="Sí, puertorriqueño"
                      checked={personas[index].origen === "Sí, puertorriqueño"}
                      onChange={(e) => handlePersonaChange(index, 'origen', "Sí, puertorriqueño")}
                    />
                    <Form.Check
                      type="radio"
                      name={`origenPersona${index + 1}`}
                      label="Sí, cubano"
                      checked={personas[index].origen === "Sí, cubano"}
                      onChange={(e) => handlePersonaChange(index, 'origen', "Sí, cubano")}
                    />
                    <Form.Check
                      type="radio"
                      name={`origenPersona${index + 1}`}
                      label="Sí, otro"
                      checked={personas[index].origen === "Sí, otro"}
                      onChange={(e) => handlePersonaChange(index, 'origen', "Sí, otro")}
                    />
                  </Form.Group>
                  <br></br>
                  <Form.Group controlId="razaPersona">
                    <Form.Label>{`¿Cuál es la raza de la Persona ${index + 1}?`}</Form.Label>
                    <Form.Check
                      type="radio"
                      name={`razaPersona${index + 1}`}
                      label="Blanca"
                      checked={personas[index].raza === "Blanca"}
                      onChange={(e) => handlePersonaChange(index, 'raza', "Blanca")}
                    />
                    <Form.Check
                      type="radio"
                      name={`razaPersona${index + 1}`}
                      label="Negra o afroamericana"
                      checked={personas[index].raza === "Negra o afroamericana"}
                      onChange={(e) => handlePersonaChange(index, 'raza', "Negra o afroamericana")}
                    />
                    <Form.Check
                      type="radio"
                      name={`razaPersona${index + 1}`}
                      label="Mongólica o amarilla"
                      checked={personas[index].raza === "Mongólica o amarilla"}
                      onChange={(e) => handlePersonaChange(index, 'raza', "Mongólica o amarilla")}
                    />
                    <Form.Check
                      type="radio"
                      name={`razaPersona${index + 1}`}
                      label="Otro"
                      checked={personas[index].raza === "Otro"}
                      onChange={(e) => handlePersonaChange(index, 'raza', "Otro")}
                    />
                  </Form.Group>
                  <br></br>
                </Form.Group>
              ))}
              <Form.Group controlId="calificacionExperiencia">
              <Form.Label>Calificación de la Experiencia:</Form.Label>
              <Form.Control
                as="select"
                value={calificacionExperiencia}
                onChange={(e) => setCalificacionExperiencia(e.target.value)}
              >
                <option value="">Seleccione...</option>
                <option value="excelente">Excelente</option>
                <option value="bueno">Bueno</option>
                <option value="regular">Regular</option>
                <option value="malo">Malo</option>
              </Form.Control>
              </Form.Group>
              <Form.Group controlId="comentarios">
                <Form.Label>Comentarios:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={comentarios}
                  onChange={(e) => setComentarios(e.target.value)}
                />
              </Form.Group>
              <Form onSubmit={handleSubmit}>
                <Button style={{ margin: "20px 0px 10px 0px" }} variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
