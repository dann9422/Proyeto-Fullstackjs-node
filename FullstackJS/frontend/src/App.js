import React ,{useEffect,useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ClienteAxios from "./config/axios";
// componentes 
import Pacientes from "./components/Pacientes";
import NuevaCita from "./components/NuevaCita";
import Cita from "./components/Cita";
import Citas from "./components/Citas";



function App() {


  //state de la aplicacion
  const [citas,guardarCitas] =useState([]);

  useEffect (()=>{
    const consultarApi =()=>{
ClienteAxios.get('/pacientes')
.then(respuesta =>{
  guardarCitas(respuesta.data);
})
.catch(error=>{
  console.log(error)
})
    }
    consultarApi();
  },[]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pacientes citas= {citas}/>} />
      </Routes>
      <Routes>
        <Route path="/nueva" element={<NuevaCita />} />
      </Routes>
      <Routes>
        <Route path="/cita/id" element={<Cita />} />
      </Routes>
      <Routes>
        <Route path="/citas/id" element={<Citas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
