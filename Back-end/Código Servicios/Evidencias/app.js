const express = require ('express');
const appServer = express();
const actividad = require ('./actividad');
const criterio = require ('./criterio');
const video = require ('./video');
//---------------------------------------------------------------------------------------------------------
appServer.listen (3000, ()=>{     console.log('SERVER IS RUNNING ON PORT 3000');    });
appServer.use(express.json());                                  //Middleware, este debe estar antes de todas las rutas
appServer.get ('/', (req, res) => {    res.send ('HELLO WORLD WITH EXPRESS!!!');    });   //Consultar Conexión exitosa
//---------------------------------------------------------------------------------------------------------
appServer.get ('/allActividad', (req, res)=>{                   //Consultar todas las actividades
    res.json (actividad);
});
appServer.post ('/addActividad' , (req, res)=>{                 //Ingresar actividad
    const usuario = req.body;
    actividad.push(usuario);
});
appServer.get('/readActividadById/:id', (req, res)=>{           //Consultar actividad por Id
    var index = actividad.findIndex(function(idActividad){
        return idActividad.idActividad === req.params.id;
    });
    res.json (actividad[index]);
});
appServer.post ('/removeActividadById/:id' , (req, res)=>{       //Eliminar actividad por Id
    var index = actividad.findIndex(function(idActividad){
        return idActividad.idActividad === req.params.id;
    });
    actividad.splice(index,1);
});
appServer.post ('/updateActividadById/:id' , (req, res)=>{       //Editar actividad por Id
    const usuario = req.body;
    var index = actividad.findIndex(function(idActividad){
        return idActividad.idActividad === req.params.id;
    });
    actividad.splice(index,1);
    actividad.push(usuario);
});
//---------------------------------------------------------------------------------------------------------
appServer.get ('/allCriterio', (req, res)=>{                   //Consultar todas las criterio
    res.json (criterio);
});
appServer.post ('/addCriterio' , (req, res)=>{                 //Ingresar criterio
    const usuario = req.body;
    criterio.push(usuario);
});
appServer.get('/readCriterioById/:id', (req, res)=>{           //Consultar criterio por Id
    var index = criterio.findIndex(function(idCriterio){
        return idCriterio.idCriterio === req.params.id;
    });
    res.json (criterio[index]);
});
appServer.post ('/removeCriterioById/:id' , (req, res)=>{       //Eliminar criterio por Id
    var index = criterio.findIndex(function(idCriterio){
        return idCriterio.idCriterio === req.params.id;
    });
    criterio.splice(index,1);
});
appServer.post ('/updateCriterioById/:id' , (req, res)=>{       //Editar criterio por Id
    const usuario = req.body;
    var index = criterio.findIndex(function(idCriterio){
        return idCriterio.idCriterio === req.params.id;
    });
    criterio.splice(index,1);
    criterio.push(usuario);
});
//---------------------------------------------------------------------------------------------------------
appServer.get ('/allVideo', (req, res)=>{                   //Consultar todas las video
    res.json (video);
});
appServer.post ('/addVideo' , (req, res)=>{                 //Ingresar Video
    const usuario = req.body;
    video.push(usuario);
});
