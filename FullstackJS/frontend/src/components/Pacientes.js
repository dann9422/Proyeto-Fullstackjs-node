import React from "react";
import {Link } from 'react-router-dom';

const  Pacientes = ({citas}) => {
    console.log(citas);

if(citas.length ===0 ) return null
    return ( <>
    <h1 className="my-5">Administrador de pacientes</h1>

    <div className="container mt-5 py-5">
        <div className="row">
            <div className="col-12 mb-5 d-flex justify-content-center">
                <Link to={'/nueva'} className=" btn btn-success text-uppercase py-2 px-5 font-weight-bold" >Crear Cita</Link>

            </div>
            <div className="col-md-8 mx-auto">
                <div className="list-group">
                    {citas.map(Cita=>(
                        <Link to={`/Info/${Cita._id}`} key= {Cita._id} className="p-5 list-group-item 
                        list-group-item-action flex-column align-items-start"> 
                        <div className="d-flex w100 justify-content-between mb-4">
                        <h3  className="MB-3">{Cita.nombre}</h3>
                        <small className="fecha-alta">
                            {Cita.fecha} 
                        </small>
                        </div>
                        <p className="mb-0">
                            {Cita.sintomas}
                        </p>
                        <div className="contacto py-3"></div>
                        <p>Dueño: {Cita.propietario}</p>
                        <p>Telefono: {Cita.telefono}</p>

                        </Link>
                     
                    ))}
                </div>
            </div>
        </div>


    </div>

    
    
    
    </> );
}
 
export default Pacientes;