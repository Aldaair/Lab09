var Controlador = require("./controlador");
var mainDir= "";

module.exports= {
    principal:function(app) {
        app.get("/api/areas",Controlador.getAreas);
        app.post("/api/area",Controlador.setArea);
        app.put('/api/area/:area_id', Controlador.updateArea);
        app.delete('/api/area/:area_id', Controlador.removeArea);
        app.get('*',function(req,res) {
            res.sendFile(mainDir +'/angular/index.html');
        })

    },
    iniciar:function(main) {
        mainDir = main
    }
};