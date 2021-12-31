const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')


module.exports= function(){

router.post('/pacientes',
pacienteController.nuevoCliente
);

// traer todos los registros de la base de datos 
router.get('/pacientes',
pacienteController.obtenetPacientes
);
// obtiene un paciente id

router.get('/pacientes/:id',

pacienteController.obtenerPaciente

);

//actualizar un registro

router.put('/pacientes/:id',

pacienteController.actualizarRegistro
);

//elimina un paciente 
router.delete('/pacientes/:id',

pacienteController.eliminarPaciente)

    return router;
}