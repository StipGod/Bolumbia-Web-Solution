import NavBarHome from "../components/NavBarHome"
import Footer from "../components/Footer"
import { Form, Button } from "react-bootstrap";


export default function Soporte() {
  return (
    <>
      <NavBarHome/>
        <main className="page service-page" style={{background: 'var(--bs-body-bg)', }}>
            <section className="clean-block clean-services dark" style={{background: '#f9f9f9', padding: '0 0 100px'}}>           
                <div className="container">
                  <div className="block-heading" style={{paddingTop: '50px'}}>
                    <h2 className="text-info" style={{textAlign: 'center'}}>Soporte</h2>
                  </div>
                  <h2>Preguntas frecuentes (FAQs)</h2>
                  <p>Aquí encontrarás respuestas a algunas de las preguntas más comunes sobre el Sistema de Censo Electrónico (ECS):</p>
                  <ul>
                    <li><strong>¿Cómo me registro en el ECS (Sistema de Senso Electrónico)?</strong> Para registrarte en el ECS, rellena tus datos abajo de "¿Desea llenar el formulario?" y luego haz clic en el botón "Empezar" en la página de inicio</li>
                    <br></br>
                    <li><strong>¿Qué hago si olvidé mis datos de CFN o ECN?</strong> Si olvidaste tus datos, ponte en contacto con el Soporte a través de esta página, para eso puedes seguir leyendo el número de abajo llamado "Información de contacto de soporte"</li>
                  </ul>
                  <br></br>
                  <h2>Información de contacto de Soporte</h2>
                  <p>Si necesitas ayuda adicional, no dudes en ponerte en contacto con nuestro equipo de soporte:</p>
                  <ul>
                    <li><strong>Correo electrónico:</strong> soporte@ecs.bolumbia.co</li>
                    <br></br>
                    <li><strong>Teléfono:</strong> +## ### ### ####</li>
                    <br></br>
                    <li><strong>Dirección física:</strong> Bolumbia, Bolumbia City - calle 45 #4 23B 21</li>
                    <br></br>
                    <li><strong>Horario de atención</strong> De lunes a viernes, de 8:00 a.m. a 5:00 p.m. (hora local)</li>
                  </ul>
                  <br></br>
                  <h2>Política de privacidad y seguridad</h2>
                  <p>Nos tomamos muy en serio la privacidad y la seguridad de tus datos. Aquí te explicamos cómo recopilamos, utilizamos y protegemos tu información:</p>
                  <ul>
                    <li><strong>Recopilación de datos:</strong> Recopilamos tu información personal cuando te registras en el ECS y cuando completas el censo electrónico. Esta información puede incluir tu nombre, dirección, fecha de nacimiento, entre otros</li>
                    <br></br>
                    <li><strong>Uso de datos:</strong> Utilizamos tu información para llevar a cabo el censo y para mejorar nuestros servicios. No compartimos tu información con terceros sin tu consentimiento</li>
                    <br></br>
                    <li><strong>Protección de datos:</strong> Protegemos tu información utilizando medidas de seguridad técnicas y organizativas. Esto incluye el cifrado de tus datos y el uso de contraseñas seguras</li>
                  </ul>
                  <br></br>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}