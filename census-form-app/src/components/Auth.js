import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [cfn, setCFN] = useState("");
    const [ecn, setECN] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/auth/login', { cfn: cfn, ecn : ecn });
            console.log(response.data);

            if (response.status === 200) {
                const stateChange = await axios.post('/api/form/start', { ecn: ecn });
                console.log(stateChange.data);
                navigate(`/census-form?ECN=${encodeURIComponent(ecn)}`);
            }
        } catch (error) {
            console.error("Error al enviar datos al backend:", error.response ? error.response.data : error.message);
        }
    };


    return(
        <div className="col-md-6 col-lg-4">
            <div className="card" style={{boxShadow: '0px 2px 8px'}}>
                <div className="card-body">
                    <h3 className="card-title">¿Desea llenar el formulario?</h3>
                    <p className="card-text">Para iniciar sesión en el sistema, debe ingresar su CFN y ECN</p>
                    <form
                        style={{ borderTopColor: "var(--bs-emphasis-color)" }}
                        onSubmit={handleSubmit}
                    >
                    <div className="mb-3">
                        <label className="form-label" htmlFor="CFN">
                            CFN
                        </label>
                        <input
                            className="form-control item"
                            type="text"
                            id="CFN"
                            name="CFN"
                            value={cfn}
                            onChange={(e) => setCFN(e.target.value)}
                            data-bs-theme="light"
                        />
                    </div>
                    <div className="mb-3">
                            <label className="form-label" htmlFor="ECN">
                                ECN
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="ECN"
                                name="ECN"
                                value={ecn}
                                onChange={(e) => setECN(e.target.value)}
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
                        <Link className="txt2" to="/soporte">
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
    