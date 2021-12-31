const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// crear el servidor pruba
const app = express();

//habilitar cors
app.use(cors());



// conectar a mongo db

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false

});

//habilitar bodyparse
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));


//habilitar routes 

app.use('/',routes())




// creando el puerto de arranque del servidor para subir
app.listen(4000, () => {
  console.log("servidor funcionando");
});
