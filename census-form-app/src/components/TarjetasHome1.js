import picture from "../assets/img/scenery/image5.jpg"
import passport_picture from "../assets/img/scenery/image7.jpg";


export default function TarjetasHome(){
    return(
        <div className="col-md-6 col-lg-4">
            <div className="card" style={{boxShadow: '0px 2px 6px'}}><img className="card-img-top w-100 d-block" src={passport_picture} />
                <div className="card-body">
                    <h4 className="card-title">¿Conoces el nuevo trámite del pasaporte?</h4>
                    <p className="card-text">¡Descubre cómo obtenerlo en menos tiempo!</p>
                </div>
                <div><button className="btn btn-outline-primary btn-sm" type="button">Conoce Más</button></div>
            </div>
        </div>
    )
}

    
