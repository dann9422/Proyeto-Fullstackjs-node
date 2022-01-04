import React ,{useEffect,useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ClienteAxios from "./config/axios";
// componentes 
import Cita from "./components/Cita";
import Pacientes from "./components/Pacientes";
import Info from "./components/Info";
import NuevaCita from "./components/NuevaCita";

function App() {


  //state de la aplicacion
  const [citas,guardarCitas] =useState([]);
  const [consultar,guardarConsultar ] = useState(true);


  useEffect (()=>{
  if(consultar){

    const consultarApi =()=>{
      ClienteAxios.get('/pacientes')
      .then(respuesta =>{
        guardarCitas(respuesta.data);


        guardarConsultar(false);
      })
      .catch(error=>{
        console.log(error)
      })
          }
          consultarApi();
  }
  },[consultar]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pacientes citas= {citas} />} />
      </Routes>
      <Routes>
        <Route path="/nueva" element={<NuevaCita guardarConsultar={guardarConsultar} />} />
      </Routes>
      <Routes>
        <Route path="/Cita/:id" render={(props)=>{
            const cita = citas.filter(cita => cita._id === props.match.params.id)
            console.log(cita)
            return(
              <Cita 
              cita = {cita[0]}
              guardarConsultar={guardarConsultar}
              />
            )
   }}  />
      </Routes>
      <Routes>
        <Route path="/info/:id" element={(props)=>{
            const cita = citas.filter(cita => cita._id === props.match.params.id)
            console.log(cita)
            return(
              <Info
              cita = {cita[0]}
              guardarConsultar={guardarConsultar}
              />
            )
   }} />
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
