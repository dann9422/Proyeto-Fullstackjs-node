import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ClienteAxios from '../config/axios';




const NuevaCita = (props) => {

    const [cita, guardartCita] = useState({
        nombre:'',
        propietario:'',
        fecha:'',
        hora:'',
        telefono:'',
        sintomas:''
        });
        
        
        //leer los datos del formulario
        
        const actualizarState =e=>{
        // console.log(e.target.name);
        // console.log(e.target.value);
        guardartCita({
            ...cita,
            [e.target.name]: e.target.value

        })
        }
        const navigate = useNavigate();
        const crearNuevaCita =e=>{
          e.preventDefault();
          
          //enviar por axios
          ClienteAxios.post('/pacientes',cita)
          .then(respuesta =>{
              console.log(respuesta);

              props.guardarConsultar(true);
    
              navigate('/');            
                      })
        }
        
    return ( <>
    <h1 className='my-5'>Crear Nueva Cita</h1>
    <div className="container mt-5 py-5">
        <div className="row">
            <div className="col-12 mb-5 d-flex justify-content-center">
                <Link to={'/'} className=" btn btn-success text-uppercase py-2 px-5 font-weight-bold" >Volver</Link>

            </div>
            </div>
            </div>
            <div className='col-md-8 mx-auto'>
            <form onSubmit={crearNuevaCita}

            className="bg-white p-5 bordered">
        <div className="form-group">
            <label htmlFor="nombre">Nombre Mascota</label>
            <input 
                type="text" 
                className="form-control form-control-lg" 
                id="nombre" 
                name="nombre" 
                placeholder="Nombre Mascota" 
                onChange={actualizarState}
            />
        </div>

        <div className="form-group">
            <label htmlFor="propietario">Nombre Propietario</label>
            <input 
                type="text" 
                className="form-control form-control-lg" 
                id="propietario" 
                name="propietario" 
                placeholder="Nombre Propietario" 
                onChange={actualizarState}
            />
        </div>

        <div className="form-group">
            <label htmlFor="telefono">Tel??fono</label>
            <input 
                type="tel" 
                className="form-control form-control-lg" 
                id="telefono" 
                name="telefono" 
                placeholder="Tel??fono" 
                onChange={actualizarState}
            />
        </div>

        <div className="form-group">
            <label htmlFor="fecha">Fecha Alta</label>
            <input 
                type="date" 
                className="form-control form-control-lg" 
                id="fecha" 
                name="fecha"  
                onChange={actualizarState}
            />
        </div>

        <div className="form-group">
            <label htmlFor="hora">Hora Alta</label>
            <input 
                type="time" 
                className="form-control form-control-lg" 
                id="hora" 
                name="hora"  
                onChange={actualizarState}
            />
        </div>

        <div className="form-group">
            <label htmlFor="sintomas">S??ntomas</label>
            <textarea 
                className="form-control" 
                name="sintomas" 
                rows="6"
                onChange={actualizarState}
            ></textarea>
        </div>


        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita"  />
</form>
            </div>
    
    </> );
}
 
export default NuevaCita ;
