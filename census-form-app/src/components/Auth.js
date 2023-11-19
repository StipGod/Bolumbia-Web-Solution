import React from "react";
import picture from "../assets/img/scenery/image5.jpg"
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <div className="col-md-6 col-lg-4">
            <div className="card" style={{boxShadow: '0px 2px 8px'}}>
                <div className="card-body">
                    <h3 className="card-title">¿Desea llenar el formulario?</h3>
                    <p className="card-text">Explicación... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in</p>
                    <form style={{ borderTopColor: "var(--bs-emphasis-color)" }}>
                    <div className="mb-3">
                        <label className="form-label" for="email">
                        Codigo
                        </label>
                        <input
                        className="form-control item"
                        type="codigo"
                        id="codigo"
                        name="codigo"
                        data-bs-theme="light"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="password">
                        Codigo
                        </label>
                        <input
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
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
    