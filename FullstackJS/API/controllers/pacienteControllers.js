const Paciente = require('../models/Paciente');


// cuando se crea un nuevo cliente

exports.nuevoCliente= async(req,res,next)=>{
// crear objeto de paciente

const paciente = new Paciente(req.body);


    // todo lo inserta aqui
    try {
        await paciente.save();
        res.json({mensaje:'el cliente se agrego correctamente'});

    } catch (error) {
        console.log(error);
        next();
    }

   

}

// obtiene todos los pacientes 

exports.obtenetPacientes = async(req,res,next)=>{
try {
    const pacientes =await Paciente.find({});
    res.json(pacientes);
} catch (error) {
    console.log(error);
    next();
};




}

exports.obtenerPaciente = async (req,res,next)=>{

    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.actualizarRegistro=async(req,res,next)=>{

try {
    
const paciente = await Paciente.findOneAndUpdate({_id : req.params.id},req.body,{
new :true
}  ) ;
res.json(paciente);


} catch (error) {
    console.log(error);
    next();
}

}

exports.eliminarPaciente=async(req,res,next)=>{

try {
await Paciente.findOneAndDelete({_id :req.params.id})
res.json({mensaje: 'El paciente fue eliminado'});

    
} catch (error) {
    console.log(error);
    next();
}

}