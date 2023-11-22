import React from "react";
import picture from "../assets/img/scenery/image5.jpg"
import { Link } from "react-router-dom";


export default function Login() {
    return(
        <div className="col-md-6 col-lg-4">
            <div className="card" style={{boxShadow: '0px 2px 8px'}}>
                <div className="card-body">
                    <h3 className="card-title">¿Desea llenar el formulario?</h3>
                    <p className="card-text">Para iniciar sesión en el sistema, debe ingresar su CFN y ECN</p>
                    <form style={{ borderTopColor: "var(--bs-emphasis-color)" }}>
                    <div className="mb-3">
                        <label className="form-label" for="email">
                        CFN
                        </label>
                        <input
                        className="form-control item"
                        type="CFN"
                        id="CFN"
                        name="CFN"
                        data-bs-theme="light"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="password">
                        ECN
                        </label>
                        <input
                        className="form-control"
                        type="ECN"
                        id="ECN"
                        name="ECN"
                        data-bs-theme="light"
                        />
                    </div>
                    <div
                        className="justify-content-center align-items-center"
                        style={{
                        display: "flex",
                        marginBottom: "15px",
                        marginTop: "15px",
                        }}
                    >
                        <button
                        className="btn btn-primary"
                        type="submit"
                        style={{
                            background: "var(--bs-emphasis-color)",
                            borderColor: "var(--bs-emphasis-color)",
                            borderTopColor: "var(--bs-body-color)",
                        }}
                        >
                        Empezar
                        </button>
                    </div>
                    <div
                        className="justify-content-center align-items-center"
                        style={{ display: "flex", margin: "15px 0" }}
                    >
                        <Link className="txt2" to="/census-form">
                        No tienes un código? Ingresa aquí
                        </Link>
                    </div>
                    <div
                        className="justify-content-center align-items-center"
                        style={{ display: "flex" }}
                    >
                        <span
                        style={{ fontSize: "13px", backdropFilter: "opacity(1)" }}
                        >
                        Bolumbia @ 2023
                        </span>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
    };
    