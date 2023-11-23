import NavBarHome from "../components/NavBarHome"
import Footer from "../components/Footer"

export default function Contactenos() {
  return (
    <>
      <NavBarHome/>
        <main className="page service-page" style={{background: 'var(--bs-body-bg)', }}>
            <section className="clean-block clean-services dark" style={{background: '#f9f9f9', padding: '0 0 100px'}}>           
                <div className="container">
                  <div className="block-heading" style={{paddingTop: '50px'}}>
                    <h2 className="text-info" style={{textAlign: 'center'}}>Contáctenos</h2>
                  </div>
                  <p>Nos encantaría escuchar de usted. Si tiene alguna pregunta, comentario o sugerencia, no dude en ponerse en contacto 
                    con nosotros. Aquí están nuestras formas de contacto:</p>
                    <br></br>
                  <ul>
                    <li><strong>Correo electrónico:</strong> Puede enviarnos un correo electrónico a nuestra dirección oficial (info@.bolumbia.gov)</li>
                    <br></br>
                    <li><strong>Teléfono:</strong>  Si prefiere hablar directamente con uno de nuestros representantes, puede llamarnos al número (+## ### ### ####)</li>
                    <br></br>
                    <li><strong>Dirección física: </strong> Si desea visitarnos en persona, nuestra oficina se encuentra en (########)</li>
                  </ul>
                  

                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}
