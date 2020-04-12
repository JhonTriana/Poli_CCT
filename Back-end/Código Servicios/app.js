const express = require ('express');
const appServer = express();
const consultaSeguridadFisica = require ('./consultaSeguridadFisica');

appServer.listen (8080, ()=>{     console.log('EL SERVIDOR ESTÁ CORRIENDO EN EL PUERTO 8080');    });
appServer.use(express.json());                                  //Middleware, este debe estar antes de todas las rutas
appServer.get ('/', (req, res) => {    res.send ('SERVICIO CONECTADO!!!');    });   //Consultar Conexión exitosa

appServer.get ('/getconsultaSeguridadFisica', (req, res)=>{                   //Consultar número de documento
    res.json (consultaSeguridadFisica);
});
appServer.post ('/consultaSeguridadFisica' , (req, res)=>{                 //Ingresar número de documento
    const usuario = req.body;
    consultaSeguridadFisica.push(usuario);
});
appServer.get('/readconsultaSeguridadFisicaById/:id', (req, res)=>{           //consultar estado por documento
    var index = consultaSeguridadFisica.findIndex(function(numeroDocumento){
        return numeroDocumento.numeroDocumento === req.params.id;
    });
   res.json (consultaSeguridadFisica[index]);
});
