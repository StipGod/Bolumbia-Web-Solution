import NavBarHome from "../components/NavBarHome"
import Footer from "../components/Footer"

export default function AboutUs() {
  return (
    <>
        <NavBarHome/>
        <main className="page service-page" style={{background: 'var(--bs-body-bg)', }}>
            <section className="clean-block clean-services dark" style={{background: '#f9f9f9', padding: '0 0 100px'}}>           
                <div className="container">
                <div className="block-heading" style={{paddingTop: '50px'}}>
                  <h2 className="text-info" style={{textAlign: 'center'}}>Acerca de nosotros</h2>
                </div>
                <header>
                  <p></p>
                  <h1>Sistema de Censo Electrónico</h1>
                </header>
                <div className="about-us-content">
                  <div className="left-column">
                    <img src="team-image.jpg" alt="Equipo" />
                  </div>
                  <div className="right-column">
                    <p>
                      Equipo
                    </p>
                    <img src="/img/about_1.jpg" alt="personas" ></img>
                  </div>
                </div>
                <div className="detailed-description">
                  <h2>Nuestra Historia</h2>
                  <p>
                    Aquí se puede contar la historia detallada del proyecto.
                  </p>
                </div>
                <div className="team-section">
                  <h2>Nuestro Equipo</h2>
                  <div className="team-member">
                    <img src="team-member1.jpg" alt="Miembro del equipo 1" />
                    <h3>Brigith Lorena Giraldo Vargas</h3>
                  </div>
                </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
    
  )
}
