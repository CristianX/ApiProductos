const express = require('express');
const morgan = require('morgan');
const app = express();
var cors = require("cors");
const database = require("./modulos/dbconect");

// settings
app.set('port', process.env.PORT || 3004);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// ADMINISTRADOR
app.use('/apiproductos', require('./src/ApiProductos/Crudproductos'));
app.use('/apilistpedidos', require('./src/ApiProductos/Listproductos')); //ApiListPedidos hace referencia a productos
app.use('/apilistadminproductos', require('./src/ApiProductos/ListAdminProductos'));
app.use('/apiunproducto', require('./src/ApiProductos/Unproducto'));
app.use('/capuchino', require('./src/ApiProductos/Adminimagen'));

// starting the serve
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
