import picture from "../assets/img/scenery/image5.jpg"
import cedula_digital_picture from "../assets/img/scenery/image8.jpg";


export default function TarjetasHome(){
    return(
        <div className="col-md-6 col-lg-4">
            <div className="card" style={{boxShadow: '0px 2px 6px'}}><img className="card-img-top w-100 d-block" src={cedula_digital_picture} />
                <div className="card-body">
                    <h4 className="card-title">Saca tu cédula digital aquí</h4>
                    <p className="card-text">¡Echa un vistazo a esta simple manera de...</p>
                </div>
                <div><button className="btn btn-outline-primary btn-sm" type="button">Conoce Más</button></div>
            </div>
        </div>
    )
}

    
